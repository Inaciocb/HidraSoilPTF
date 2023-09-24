import { InputsT, StatesT } from './../model/utils';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EqInputData } from 'src/model/eq-input-data';
import { EqResult } from 'src/model/eq-result';
import { Equation } from 'src/model/equation';
import { EquationService } from 'src/service/equation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  inputDataList: EqInputData[] = []; // Lista com os inputs para aplicar as equações
  inputTypes: InputsT[] = []; // Util para aplicar no filtro

  form = new FormGroup({
    state: new FormControl('RS'),
    clay: new FormControl(''),
    silt: new FormControl(''),
    sand: new FormControl(''),
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
    theta33: new FormControl(''),
    mesoporosity: new FormControl(''),
    ph: new FormControl(''),
  });

  constructor(private equationService: EquationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.validate()) {
      // reseta as listas
      this.inputDataList = [];
      this.inputTypes = [];

      this.setInputData();
      let state: StatesT = StatesT[this.form.get('state')?.value as keyof typeof StatesT];
      let filteredEquations =  this.equationService.findUsableEquations(this.inputTypes,  state); // aplica o filtro
      this.calcEquations(filteredEquations); // realiza o calculo
    }

  }

  // popula as variaveis inputDataList e usedInputTypes
  setInputData(): void {
    Object.entries(this.form.controls).forEach(k => {
      let inputData = new EqInputData();
      if (k[1].value != "" && k[0] !== 'state') {
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

  // Revisar como enviar os inputs na ordem correta
  calcEquations(equations: Equation[]) {
    let orderedInputs = this.inputDataList.filter(i => i.value != 0).sort((a: EqInputData, b: EqInputData) => a.inputType < b.inputType ? -1 : 1);
    let inputs = orderedInputs.map(i => i.value);
    console.log("ordererd inputs: ", orderedInputs);

    equations.forEach(e => {
      const result: EqResult = e.eq(...inputs);
      console.log("Result: ", result.result, result.measurementUnit);
    });

  }

  validate(): boolean {
    let valid = false;
    Object.entries(this.form.controls).forEach(e => {
      console.log(e[1].value);
    });

    return valid;
  }


}

class estado {
}


class Vars {

}

class S_T_class {


}

export class equacaoFC {
    rmse: number;
    estado: estado;
    vars: Vars;
    kpa: number;
    S_T_class: S_T_class;
    autor: string;

    constructor(
        rmse: number,
        estado: estado,
        vars: Vars,
        kpa: number,
        S_T_class: S_T_class,
        autor: string
    ) {
        this.rmse = rmse;
        this.estado = estado;
        this.vars = vars;
        this.kpa = kpa;
        this.S_T_class = S_T_class;
        this.autor = autor;
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
