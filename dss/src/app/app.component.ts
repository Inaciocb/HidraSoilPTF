import { InputsT, SoilClassT, StatesT, TexturalClassT, resultsToString } from './../model/utils';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EqInputData } from 'src/model/eq-input-data';
import { EqResult } from 'src/model/eq-result';
import { Equation } from 'src/model/equation';
import { EquationService } from 'src/service/equation.service';
import Swal from 'sweetalert2';

type NullableString = string | null | undefined;

type FinalResult = {
  capacidadeDeCampo: string;
  pontoDeMurcha: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  inputDataList: EqInputData[] = []; // Lista com os inputs para aplicar as equações
  inputTypes: InputsT[] = []; // Util para aplicar no filtro

  soilClasses = Object.values(SoilClassT);
  texturalClasses = Object.values(TexturalClassT);
  states = Object.values(StatesT);
  filteredEquations: Equation[] = [];
  warnings: string[] = [];

  finalResult = new FormControl({} as FinalResult);


  form = new FormGroup({
    state: new FormControl('RS'),
    selectSoilClass: new FormControl(''),
    selectTexturalClass: new FormControl(''),
    clay: new FormControl('' as number | 'clay'),
    silt: new FormControl('' as number | 'silt'),
    sand: new FormControl('' as number | 'sand'),
    bulkDensity: new FormControl(''),
    organicMatter: new FormControl(''),
    totalPorosity: new FormControl(''),
    coarseSand: new FormControl(''),
    fineSand: new FormControl(''),
    microporosity: new FormControl(''),
    densityOfParticle: new FormControl(''),
    soilOrganicCarbon: new FormControl(''),
    flexPointOfSwrc: new FormControl(''),
    macroporosity: new FormControl(''),
    claySilt: new FormControl(''),
    theta6: new FormControl(''),
    liquidLimits: new FormControl(''),
    sandClay: new FormControl(''),
    sIndex: new FormControl(''),
    phosphor: new FormControl(''),
    soilPorosity: new FormControl(''),
    plasticLimits: new FormControl(''),
    sumOfBases: new FormControl(''),
    cec: new FormControl(''),
    ss: new FormControl(''),
    mediumSand: new FormControl(''),
    veryFineSand: new FormControl(''),
    veryCoarseSand: new FormControl(''),
    theta33: new FormControl(''),
    mesoporosity: new FormControl(''),
    ph: new FormControl(''),
  });

  constructor(private equationService: EquationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // reseta as listas
    this.inputDataList = [];
    this.inputTypes = [];
    this.filteredEquations = [];
    this.warnings = [];
    if (this.validate()) {
      this.handleEquations();
    } else {
      Swal.fire('Atenção', 'Insira pelo menos 1 valor', 'warning')
    }

  }

  handleEquations(): void {
    this.setInputData();
    console.log(this.inputDataList);
      let state: StatesT = StatesT[this.form.get('state')?.value as keyof typeof StatesT];
      // aplica o filtro
      this.filteredEquations =  this.equationService.findUsableEquations(
        this.inputTypes,
        state,
        this.form.get('selectSoilClass')?.value,
        this.form.get('selectTexturalClass')?.value,
        false
      );

      if (!this.filteredEquations || this.filteredEquations.length <= 0) {
        this.warnings.push("Não foram encontradas equações para o estado " + this.form.get('state')?.value?.toString() )
        this.filteredEquations = this.equationService.findUsableEquations(
          this.inputTypes,
          state,
          this.form.get('selectSoilClass')?.value,
          this.form.get('selectTexturalClass')?.value,
          true
        );
      }
      this.calcEquations(this.filteredEquations);
  }

  // popula as variaveis inputDataList e usedInputTypes
  setInputData(): void {
    Object.entries(this.form.controls).forEach(k => {
      let inputData = new EqInputData();
      const isInputNumber = k[0] !== 'state' && k[0] !== 'selectTexturalClass' && k[0] !== 'selectSoilClass';
      if (k[1].value != "" && isInputNumber && Number(k[1].value) != 0) {
        let inputType: InputsT = (InputsT[k[0] as keyof typeof InputsT]);
        inputData.inputType = inputType;
        inputData.value = Number(k[1].value);
        this.inputTypes.push(inputType);
      }
      if (inputData.inputType != undefined) {
        this.inputDataList.push(inputData);
      }
    });

  }

  // Realiza o calculo e mostra resultados
  calcEquations(equations: Equation[]) {
    let orderedInputs = this.inputDataList.filter(i => i.value != 0).sort((a: EqInputData, b: EqInputData) => a.inputType < b.inputType ? -1 : 1);
    let inputs = orderedInputs.map(i => i.value);
    let results: EqResult[] = [];
    let finalEquations = this.findLowerRmseEquations(equations);

    finalEquations.forEach(e => {
      const result: EqResult = e.eq(...inputs);
      let r = new EqResult(result.result, result.measurementUnit);
      r.eqType = e.type;
      results.push(r);
      console.table({Nome: e.name, Tipo: e.type, KPA: e.numKpa, RMSE: e.rmse,
        Classe_Solo: e.soilClass, Classe_Textural: e.texturalClass,
        Estados: [...e.statesAppliesTo], Inputs: [...e.inputsAccepted]});
      console.log("Resultado: ", result.result + result.measurementUnit);
    });
    console.log("----------------------------------------------------")
    // results = results.filter(r => !isNaN(r.result)); // remove NaN

    if (results && results.length > 0) {
      let capacidade = results.filter(r => r.eqType === 'fieldCapacity').map(r => '' + r.result.toFixed(3) + r.measurementUnit)[0];
      let pontoDeMurcha = results.filter(r => r.eqType === 'permanentWiltingPoint').map(r => '' + r.result.toFixed(3) + r.measurementUnit)[0];
      this.finalResult.setValue({capacidadeDeCampo: capacidade, pontoDeMurcha: pontoDeMurcha});
      if (this.warnings && this.warnings.length > 0) Swal.fire({title:'Atenção', html: this.warnings, icon: 'warning' });
    } else {
      Swal.fire('Atenção', 'Nenhuma equação foi encontrada, tente modificar os filtros', 'warning');
    }

  }

  validate(): boolean {
    let valid = false;
    Object.entries(this.form.controls).forEach(e => {
      const isInputNumber = e[0] !== 'state' && e[0] !== 'selectTexturalClass' && e[0] !== 'selectSoilClass';
      const isValidValue = e[1].value && e[1].value != '0';
      (isInputNumber && isValidValue) ? valid = true : '';
    });
    return valid;
  }

  // Retorna a lista com menor rmse de FC e PWP
  findLowerRmseEquations(equations: Equation[]): Equation[] {
    if (!equations || equations.length <= 0) return [];
    let lowerRMSEEquations = [];
    let fcEquations = equations.filter(e => e.type === 'fieldCapacity')
    let pwpEquations = equations.filter(e => e.type === 'permanentWiltingPoint')

    if (fcEquations && fcEquations.length > 0)
      lowerRMSEEquations.push(fcEquations.reduce((prev, next) => prev.rmse < next.rmse ? prev : next));

    if(pwpEquations && pwpEquations.length > 0)
      lowerRMSEEquations.push(pwpEquations.reduce((prev, next) => prev.rmse < next.rmse ? prev : next));


    //console.log("Lower RMSE equations: ", lowerRMSEEquations);
    return lowerRMSEEquations;
  }

  hasResult(): boolean {
    return this.finalResult.value?.capacidadeDeCampo != null || this.finalResult.value?.pontoDeMurcha != null;
  }


}


// "Clay (%) *", "Silt (%)*", "Sand (%)*","Bulk density (g/cm³)*", "Organic matter (%)", "total porosity (cm³/cm³)",
//     "Coarse Sand", "Fine Sand (%)", "Microporosity (cm³/cm³)", "Density of particle (g/cm³)", "Soil organic carbon",
//     "Flex point of swrc", "Macroporosity (cm³/cm³)", "Clay + silt (%)", "Theta 6 (kPa)",
//     "Liquid Limits (g/kg)", "Sand/clay (%)", "S index", "Phosphor (cmolc/kg)", "Soil porosity cm³/cm³",
//     "Plastic limits (g/kg)", "Sum of bases (cmolc/kg)", "CEC (cmolc/kg)", "Ss (m³/g)", "Medium sand (%)",
//     "Very fine sand (%)", "Theta 33 (kPa)", "Mesoporosity (cm³/cm³)", "Ph"


/*





    Equaçoes: equacoes[]



    equacoes:
      RMSE: number;

      equacao()

















  RS:

    ATRIBUTOS:
      R1.RMSE : 0.0123
      R1 : X+Y
 */
