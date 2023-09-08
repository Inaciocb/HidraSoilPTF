import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clay: number | undefined;
  silt: number | undefined;
  sand: number | undefined;
  bulkDensity: number | undefined;
  organicMatter: number | undefined;
  totalPorosity: number | undefined;
  coarseSand: number | undefined;
  fineSand: number | undefined;
  microporosity: number | undefined;
  densityOfParticle!: number | undefined;
  soilOrganicCarbon: number | undefined;
  flexPointOfSwrc: number | undefined;
  macroporosity: number | undefined;
  claySilt: number | undefined;
  theta6: number | undefined;
  liquidLimits: number | undefined;
  sandClay: number | undefined;
  sIndex: number | undefined;
  phosphor: number | undefined;
  soilPorosity: number | undefined;
  plasticLimits: number | undefined;
  sumOfBases: number | undefined;
  cec: number | undefined;
  ss: number | undefined;
  mediumSand: number | undefined;
  veryFineSand: number | undefined;
  theta33: number | undefined;
  mesoporosity: number | undefined;
  ph: number | undefined;

  form = new FormGroup({
    siltForm : new FormControl(''),
    sandForm : new FormControl(''),
    clayForm : new FormControl(''),
    bulkDensityForm : new FormControl(''),
    organicMatterForm : new FormControl(''),
    totalPorosityForm : new FormControl(''),
    coarseSandForm : new FormControl(''),
    fineSandForm : new FormControl(''),
    microporosityForm : new FormControl(''),
    densityOfParticleForm : new FormControl(''),
    soilOrganicCarbonForm : new FormControl(''),
    flexPointOfSwrcForm : new FormControl(''),
    macroporosityForm : new FormControl(''),
    claySiltForm : new FormControl(''),
    theta6Form : new FormControl(''),
    liquidLimitsForm : new FormControl(''),
    sandClayForm : new FormControl(''),
    sIndexForm : new FormControl(''),
    phosphorForm : new FormControl(''),
    soilPorosityForm : new FormControl(''),
    plasticLimitsForm : new FormControl(''),
    sumOfBasesForm : new FormControl(''),
    cecForm : new FormControl(''),
    ssForm : new FormControl(''),
    mediumSandForm : new FormControl(''),
    veryFineSandForm : new FormControl(''),
    theta33Form : new FormControl(''),
    mesoporosityForm : new FormControl(''),
    phForm : new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
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