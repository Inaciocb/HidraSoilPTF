export type Empty = '';

export type MeasurementUnitT = '%' | '(g/g)*100' | 'cm/100cm' | 'cm/cm' | 'g/g'
  | 'g/kg' | 'kg/kg' | 'm.m/10' | 'm/m' | 'm/m.10' | 'm3/m';

export enum StatesT {
  Agreste = 'Agreste' , BA = 'BA' , BR = 'BR', CE = 'CE' , Cerrado ='Cerrado' , ES = 'ES' ,
  GO = 'GO' , MG = 'MG' , MT = 'MT' , PB = 'PB' , PE = 'PE' , PI = 'PI' , RS = 'RS' , SC = 'SC' , SP = 'SP' , Tab_Costeiros = 'Tab. Costeiros'

};

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
