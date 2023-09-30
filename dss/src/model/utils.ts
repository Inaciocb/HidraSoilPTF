import { EqResult } from "./eq-result";

export type Empty = '';

export type MeasurementUnitT = '%' | '(g/g)*100' | 'cm³/100cm³' | 'cm³/cm³' | 'g/g'
  | 'g/kg' | 'kg/kg' | 'm³/m³*100' | 'm³/m³' | 'm²/m²*100' | 'm³/m³'| 'dag/kg';

export enum StatesT {
  Agreste = 'Agreste',
  BA = 'BA',
  BR = 'BR',
  CE = 'CE',
  Cerrado = 'Cerrado',
  ES = 'ES',
  GO = 'GO',
  MG = 'MG',
  MT = 'MT',
  PB = 'PB',
  PE = 'PE',
  PI = 'PI',
  RS = 'RS',
  SC = 'SC',
  SP = 'SP',
  Tab_Costeiros = 'Tab. Costeiros',
  MS = 'MS',
  PR = 'PR',
  RJ = 'RJ',
  RN = 'RN',
  AM = 'AM',
  AP = 'AP',
  AC = 'AC',
  RO = 'RO',
  RR = 'RR',
  TO = 'TO',
  AL = 'AL',
  MA = 'MA',
  SE = 'SE',

};

// FIXME: esta errado qual é textural e qual é de solo
export enum TexturalClassT {
  Argiloso = 'Argiloso',
  Muito_Argiloso = 'Muito Argiloso',
  Argilo_Siltoso = 'Argilo Siltoso',
  Argilo_Arenoso = 'Argilo Arenoso',
  Francoargiloso = 'Francoargiloso',
  Franco_Arenoso = 'Franco Arenoso',
  Francosiltoso = 'Francosiltoso',
  Francoargiloarenoso = 'Francoargiloarenoso',
  Francoarenoso = 'Francoarenoso',
  Arenoso_Franco = 'Arenoso Franco',
  Francoargiloar = 'Francoargiloar',

}

export enum SoilClassT {
  Argissolo = 'Argissolo',
  Cambissolo = 'Cambissolo',
  Planossolo = 'Planossolo',
  Plintossolo = 'Plintossolo',
  Latossolo = 'Latossolo',
  Latossolo_Amarelo = 'Latossolo Amarelo',
  Neossolo = 'Neossolo',
  Neossolo_Quartzarnico = 'Neossolo Quartzarnico',
}

export enum InputsT {
  clay = 'clay',
  silt = 'silt' ,
  sand = 'sand' ,
  bulkDensity = 'bulkDensity' , // bd
  organicMatter = 'organicMatter' ,
  totalPorosity = 'totalPorosity' ,
  coarseSand = 'coarseSand' ,
  fineSand = 'fineSand' ,
  microporosity = 'microporosity' ,
  densityOfParticle = 'densityOfParticle' ,
  soilOrganicCarbon = 'soilOrganicCarbon' ,
  flexPointOfSwrc = 'flexPointOfSwrc' ,
  macroporosity = 'macroporosity' ,
  claySilt = 'claySilt' ,
  theta6 = 'theta6' ,
  liquidLimits = 'liquidLimits' ,
  sandClay = 'sandClay' ,
  sIndex = 'sIndex' ,
  phosphor = 'phosphor' ,
  soilPorosity = 'soilPorosity' ,
  plasticLimits = 'plasticLimits' ,
  sumOfBases = 'sumOfBases' ,
  cec = 'cec' ,
  ss = 'ss' ,
  mediumSand = 'mediumSand' ,
  veryFineSand = 'veryFineSand' ,
  theta33 = 'theta33' ,
  mesoporosity = 'mesoporosity' ,
  ph = 'ph'
 }

export const MAX_VARIABLES = 7;

export const STATES: Set<string> = new Set(
  [
  'Agreste',
  'BA',
  'BR',
  'CE',
  'Cerrado',
  'ES',
  'GO',
  'MG',
  'MT',
  'PB',
  'PE',
  'PI',
  'RS',
  'SC',
  'SP',
  'Tab. Costeiros']);



  export function resultsToString(results: EqResult[], warnings: string[]): string {
    let str = "<p>"
    if (warnings && warnings.length > 0) {
      warnings.forEach(w => {
        str = str.concat(w, "</br>")
      })
      str = str.concat("</br> </br>")
    }

    results.forEach(r => {
      str = str.concat(r.toString(), "</br>")
    })
    return str + "<p>";
  }
