export type Empty = '';

export type MeasurementUnitT = '%' | '(g/g)*100' | 'cm/100cm' | 'cm/cm' | 'g/g'
  | 'g/kg' | 'kg/kg' | 'm.m/10' | 'm/m' | 'm/m.10' | 'm3/m';

export type StatesT = 'Agreste' | 'BA' | 'BR' | 'CE' | 'Cerrado' | 'ES' |
  'GO' | 'MG' | 'MT' | 'PB' | 'PE' | 'PI' | 'RS' | 'SC' | 'SP' | 'Tab. Costeiros';

export type InputsT = 'clay' |
  'silt' |
  'sand' |
  'bulkDensity' | // bd
  'organicMatter' |
  'totalPorosity' |
  'coarseSand' |
  'fineSand' |
  'microporosity' |
  'densityOfParticle' |
  'soilOrganicCarbon' |
  'flexPointOfSwrc' |
  'macroporosity' |
  'claySilt' |
  'theta6' |
  'liquidLimits' |
  'sandClay' |
  'sIndex' |
  'phosphor' |
  'soilPorosity' |
  'plasticLimits' |
  'sumOfBases' |
  'cec' |
  'ss' |
  'mediumSand' |
  'veryFineSand' |
  'theta33' |
  'mesoporosity' |
  'ph';

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
