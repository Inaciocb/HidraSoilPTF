import { EqResult } from 'src/model/eq-result';
import { InputsT, MeasurementUnitT, StatesT } from './../model/utils';
import { Equation } from "src/model/equation";

function Log (num: number) {
  return Math.log(num);
}

// Importante manter os parametros da função que aplica a equação em ordem alfabética de acordo com os nomes na tela inicial!!!!
// exemplo formula recebe CS -> considerar coarseSand para ordem alfabética
export const EQUATIONS: Set<Equation> = new Set([

  // new Equation(
  //     '',                                                                 // Textural Class
  //     [InputsT.bulkDensity],                                              // Inputs Accepted
  //     (bd: number): EqResult => {                                         // Equation
  //       const result = (0.46082 - 0.18014 * bd);
  //       return new EqResult(result, 'cm³/cm³')
  //     },
  //     '',                                                                 // Class
  //     [StatesT.BA],                                                       // States
  //     0,                                                                  //RMSE
  //     'fieldCapacity'
  // ),

  new Equation(
    '',                                                                   // Textural Class
    //FIXME: VERIFICAR SE CS = claySilt ou coarseSand
    [InputsT.sand, InputsT.coarseSand, InputsT.liquidLimits],             // Inputs Accepted
    (CS: number, sand: number, LL: number): EqResult => {                 // Equation
      const result =
        (169 + 17.1 * Log((sand/10)) - 17.5 * Log((CS/10)) + 0.53 * LL);
      return new EqResult(result, 'g/kg')
    },
    '',                                                                   // Class
    [StatesT.RS, StatesT.SC],                                             // States
    0,                                                                    // RMSE
    'fieldCapacity',
    10                                                  // TYPE
  ),

  new Equation(
    '',                                                                   // Textural Class
    [InputsT.bulkDensity],
    (bd: number): EqResult => {
      const result = (0.46082 - 0.18014 * bd);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.BA],
    0.1353012597,
    'fieldCapacity',
    10,
  ),

  new Equation(
    '',
    [InputsT.coarseSand, InputsT.liquidLimits, InputsT.sand],
    (CS: number, LL: number, sand: number): EqResult => {
      const result = 169 + 17.1 * Log ((sand/10)) - 17.5 * Log ((CS/10)) + 0.53 * LL;
    return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS, StatesT.SC],
    0.0308855028,
    'fieldCapacity',
    10,
  ),

  new Equation(
  '',
  [InputsT.coarseSand, InputsT.liquidLimits, InputsT.organicMatter],
  (CS: number, LL: number, OM: number): EqResult => {
    const result = 179 + 13 * Log ((OM/10)) - 23.6 * Log ((CS/10)) + 0.53 * LL;
  return new EqResult(result, 'g/kg')
  }
  ,
  '',
  [StatesT.RS, StatesT.SC],
  0.0308855028,
  'fieldCapacity',
  10,
  ),

  new Equation(
    '',
    [InputsT.clay],
    (Clay: number): EqResult => {
      const result = 0.330 * (Clay/10) + 8.3;
    return new EqResult(result, 'm³/m³')
    },
    '',
    [StatesT.Cerrado],
    0.0187199540,
    'fieldCapacity',
    10,
  ),

  new Equation(
    '',
    [InputsT.clay],
    (Clay: number): EqResult => {
      const result = 13.96 + 0.387 * Clay*100;
    return new EqResult(result, 'm³/m³*100')
    },
    '',
    [StatesT.BR],
    0.0918964805,
    'fieldCapacity',
    10,
  ),

  new Equation(
    '',
    [InputsT.coarseSand, InputsT.silt],
    (CS: number, Silt: number): EqResult => {
      const result = 0.037 + 90.38 * (CS + Silt)* 100;
    return new EqResult(result, 'kg/kg')
    },
    '',
    [StatesT.RS],
    0.0308855028,
    'fieldCapacity',
    10,
  ),



  new Equation(
    '',
    [InputsT.sand],
    (Sand: number): EqResult => {
      const result = 39.07988535 - 0.04098682 * (Sand)**1.455456594;
    return new EqResult(result, '%')
    },
    '',
    [StatesT.BR],
    0.0719318870,
    'fieldCapacity',
    10,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.silt],
    (Clay: number, Silt: number): EqResult => {
      const result = 0.081 + 0.005 * Silt + 0.004 * Clay;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.SC, StatesT.RS],
    0.0729637517,
    'fieldCapacity',
    10,
  ),
  //atenção: é importante manter a ordem dos inputs em ordem alfabética!

  new Equation(
    '',
    [InputsT.clay, InputsT.silt],
    (Clay: number, Silt: number): EqResult => {
      const result = 11.27 + 0.367 * Clay*100 + 0.226 * Silt*100;
    return new EqResult(result, 'm³/m³*100')
    },
    '',
    [StatesT.BR],
    0.0726181449,
    'fieldCapacity',
    10,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.fineSand, InputsT.silt],
    (Clay: number, FS: number, Silt: number): EqResult => {
      const result = 0.00807 + 0.004291 * Clay + 0.003186 * Silt + 0.000506 * FS;
    return new EqResult(result, 'kg/kg')
    },
    '',
    [StatesT.MG, StatesT.BA, StatesT.ES],
    0.0821257265,
    'fieldCapacity',
    10,
  ),
  new Equation(
    '',
    [InputsT.coarseSand, InputsT.bulkDensity, InputsT.totalPorosity],
    (CS: number, BD: number, TP: number): EqResult => {
      const result = 1.42937 - 0.28125 * CS - 0.46640 * BD - 1.00496 * TP;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.BA],
    0.0794190818,
    'fieldCapacity',
    10,
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.coarseSand, InputsT.totalPorosity],
    (BD: number, CS: number, TP: number): EqResult => {
      const result = 2.84267 - 0.026601 * CS - 0.97267 * BD - 2.40257 * TP;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.BA],
    0.0745289056,
    'fieldCapacity',
    10,
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.coarseSand, InputsT.totalPorosity],
    (BD: number, CS: number, TP: number): EqResult => {
      const result = 0.86625 - 0.01727 * CS - 0.21859 * BD- 0.85690 * TP;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.BA],
    0.5655035815,
    'fieldCapacity',
    10,
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.coarseSand],
    (BD: number, CS: number ): EqResult => {
      const result = 0.59324 - 0.14310 * CS + 0.18177 * BD;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.BA],
    0.3573431011,
    'fieldCapacity',
    10,
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.clay, InputsT.sand],
    ( BD: number, Clay: number, Sand: number): EqResult => {
      const result = 49.6557 - 0.16882 * Sand + 0.21658 * Clay - 12.6897 * BD;
    return new EqResult(result, 'kg/kg')
    },
    '',
    [StatesT.RS],
    0.1474398930,
    'fieldCapacity',
    10,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.microporosity ],
    ( Clay: number, Micro: number): EqResult => {
      const result = 0.059 + 0.641 * Micro + 0.001  * Clay;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.RS],
    0.0379309461,
    'fieldCapacity',
    10,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.claySilt, InputsT.organicMatter, InputsT.bulkDensity],
    ( BD: number, Clay: number, CS: number, OM: number, ): EqResult => {
      const result = 0.268 + 0.05 * (Clay*100) + 0.24 * (Clay+CS*100) + 0.85*OM*BD;
    return new EqResult(result, 'kg/kg')
    },
    '',
    [StatesT.RS],
    0.0241693599,
    'fieldCapacity',
    10,
  ),

  new Equation(
    '',
    [InputsT.organicMatter, InputsT.bulkDensity, InputsT.clay, InputsT.sand],
    ( OM: number, BD: number, Clay: number, Sand: number): EqResult => {
      const result = 364 * 27.8 * Log ((OM/10)) + 0.012 * Clay/10 - 0.37 * Sand/10;
    return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS, StatesT.SC],
    0.2251334285,
    'fieldCapacity',
    10,
  ),

  new Equation(
    'Argiloso',
    [InputsT.clay, InputsT.sand],
    ( Clay: number, Sand: number, Silt: number): EqResult => {
      const result = 41.3580-16.6354*Clay+0.4106*Silt;
    return new EqResult(result, '%')
    },
    '',
    [StatesT.MG],
    0.1482910320,
    'fieldCapacity',
    33,
  ),

  new Equation(
    'Francoargiloso',
    [InputsT.bulkDensity, InputsT.densityOfParticle, InputsT.totalPorosity],
    ( BD: number, DP: number, TP: number): EqResult => {
      const result = 2.1696 - 1.4883 * BD + 0.6744 * DP - 3.3203 * TP;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.RS],
    0.2362971993,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.ph],
    ( Clay: number, pH: number): EqResult => {
      const result = 0.263 + (0.000621 * Clay) -(0.0372 * pH);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Agreste],
    0.2913354056,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.microporosity],
    ( Micro: number): EqResult => {
      const result = 0.01812 + 0.26123 * Micro;
    return new EqResult(result, 'cm³/cm³')
    },
    'latossolo amarelo',
    [StatesT.PB],
    0.1959146015,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand],
    ( Clay: number, Sand: number): EqResult => {
      const result = 0.6191 + 0.1983 * Clay + 0.8079 * Sand;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.RS],
    1.2322443871,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay],
    ( Clay: number): EqResult => {
      const result = 0.004 * Clay ** 2 - 0.312 * Clay + 3.289;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.PE],
    0.3100280947,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.sand],
    ( Sand: number): EqResult => {
      const result = 0.418 - 0.000377 * (Sand/10) - 0.000269 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.3419294228,
    'fieldCapacity',
    33,
  ),

  new Equation(
    'Muito Argiloso',
    [InputsT.sand, InputsT.clay],
    (  Clay: number, Sand: number): EqResult => {
      const result = 0.000328 * (Sand/10) + 0.00571 * (Clay/10);
    return new EqResult(result, 'kg/kg')
    },
    '',
    [StatesT.PE],
    0.2797032230,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.silt],
    ( Clay: number, Silt: number): EqResult => {
      const result = 0.3071 + 0.2751 * Clay+ 0.0938 * Silt;
    return new EqResult(result, '%')
    },
    'Latossolo',
    [StatesT.Tab_Costeiros],
    0.1531337341,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.silt],
    ( Clay: number, Silt: number): EqResult => {
      const result = 1.946+ 0.0037 * Clay + 0.2231 * Silt;
    return new EqResult(result, '%')
    },
    'Argissolo',
    [StatesT.Tab_Costeiros],
    0.2198669765,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.sand],
    ( Sand: number): EqResult => {
      const result = 0.003 * Sand ** 2 - 0.911 * Sand + 57.91;
    return new EqResult(result, '(g/g)*100')
    },
    '',
    [StatesT.PE],
    0.2720691156,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.sand],
    ( Sand: number): EqResult => {
      const result = 58.3402 - 0.5936 * (Sand);
    return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.PE],
    0.2084314787,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay],
    ( Clay: number): EqResult => {
      const result = 0.0525 + 0.000373 * (Clay/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2416854798,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.microporosity],
    ( Clay: number, Micro: number): EqResult => {
      const result = 0.073 + 0.000415 * Clay - 0.0060 * (Micro/Clay) - 0.00215 * Micro;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.BA, StatesT.GO, StatesT.MG, StatesT.RS],
    0.3038901405,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand],
    ( Clay: number, Sand: number): EqResult => {
      const result = 0.412 - 0.00169 * Sand - 0.00885 * (Sand/Clay);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.BA, StatesT.GO, StatesT.MG, StatesT.RS],
    0.3038901405,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [ InputsT.clay, InputsT.sand, InputsT.silt],
    ( Clay: number, Sand: number, Silt: number): EqResult => {
      const result = -0.000019 * (Sand/10) + 0.000106 * (Silt/10) + 0.000594 * (Clay/10);
    return new EqResult(result, 'kg/kg')
    },
    '',
    [StatesT.PE],
    0.3053628201,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.silt],
    ( Silt: number): EqResult => {
      const result = -0.030 * Silt ** 2 - 1.462 * Silt + 1.987;
    return new EqResult(result, '(g/g)*100')
    },
    '',
    [StatesT.PE],
    0.3552435941,
    'fieldCapacity',
    33,
  ),

  new Equation(
    'Argiloso',
    [InputsT.silt],
    ( Silt: number): EqResult => {
      const result = 42.6737 - 363.9401 / Silt;
    return new EqResult(result, '%')
    },
    '',
    [StatesT.MG],
    0.3552435941,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.silt],
    ( Silt: number): EqResult => {
      const result = 24.8766 + 2347.3300 / Silt;
    return new EqResult(result, '%')
    },
    'Francoargiloar',
    [StatesT.MG],
    0.3552435941,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.silt],
    ( Silt: number): EqResult => {
      const result = 0.0152 + 0.0001 * Silt;
    return new EqResult(result, 'cm³/cm³')
    },
    'Neossolo Quartzanico',
    [StatesT.PB],
    0.2938305860,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.silt],
    ( Silt: number): EqResult => {
      const result = -0.003 * (Silt) ** 2 - 0.180 * (Silt) +3.309;
    return new EqResult(result, '(g/g)*100')
    },
    '',
    [StatesT.PE],
    0.3552435941,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.silt],
    ( Silt: number): EqResult => {
      const result = 0.0525 + 0.000351 * (Silt/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2913354056,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand],
    ( Clay: number, Sand: number): EqResult => {
      const result = 0.0019 * Clay + 0.0024 * Sand + 0.2143;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.MT],
    0.2416854798,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand],
    ( Clay: number, Sand: number): EqResult => {
      const result = 3.1 - 0.629 * Clay - 0.0001 * Sand;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.MT],
    0.2416854798,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand],
    ( Clay: number, Sand: number): EqResult => {
      const result = 0.0409 + 0.000377 * (Clay/10) + 0.000108 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2552395420,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.silt],
    ( Silt: number): EqResult => {
      const result = 0.000333 * (Silt/10) + 0.000387 * (Silt/10);
    return new EqResult(result, 'kg/kg')
    },
    '',
    [StatesT.PE],
    0.3055523202,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.sand],
    ( Sand: number): EqResult => {
      const result = 0.378 - 0.000351 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2913354056,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand],
    ( Clay: number, Sand: number): EqResult => {
      const result = 0.0019 * Clay + 0.0024 * Sand + 0.2143;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.MT],
    0.2416854798,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand],
    ( Clay: number, Sand: number): EqResult => {
      const result = 3.1 - 0.629 * Clay - 0.0001 * Sand;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.MT],
    0.2416854798,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand],
    ( Clay: number, Sand: number): EqResult => {
      const result = 0.0409 + 0.000377 * (Clay/10) + 0.000108 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2552395420,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.silt],
    ( Silt: number): EqResult => {
      const result = 0.000333 * (Silt/10) + 0.000387 * (Silt/10);
    return new EqResult(result, 'kg/kg')
    },
    '',
    [StatesT.PE],
    0.3055523202,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.sand],
    ( Sand: number): EqResult => {
      const result = 0.378 - 0.000351 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2913354056,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand],
    ( Clay: number, Sand: number): EqResult => {
      const result = 0.0019 * Clay + 0.0024 * Sand + 0.2143;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.MT],
    0.2416854798,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand],
    ( Clay: number, Sand: number): EqResult => {
      const result = 3.1 - 0.629 * Clay - 0.0001 * Sand;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.MT],
    0.2416854798,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand],
    ( Clay: number, Sand: number): EqResult => {
      const result = 0.0409 + 0.000377 * (Clay/10) + 0.000108 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2552395420,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.silt],
    ( Silt: number): EqResult => {
      const result = 0.000333 * (Silt/10) + 0.000387 * (Silt/10);
    return new EqResult(result, 'kg/kg')
    },
    '',
    [StatesT.PE],
    0.3055523202,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.sand],
    ( Sand: number): EqResult => {
      const result = 0.378 - 0.000351 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2913354056,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand, InputsT.silt],
    ( Clay: number, Sand: number, Silt: number): EqResult => {
      const result = 0.000333 * (Silt/10) + 0.000387 * (Silt/10);
    return new EqResult(result, 'kg/kg')
    },
    '',
    [StatesT.PE],
    0.3055523202,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.sand],
    ( Sand: number): EqResult => {
      const result = 0.378 - 0.000351 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2913354056,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand, InputsT.silt],
    ( Clay: number, Sand: number, Silt: number): EqResult => {
      const result = 0.378 - 0.000351 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2913354056,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand, InputsT.silt],
    ( Clay: number, Sand: number, Silt: number): EqResult => {
      const result = 0.378 - 0.000351 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2913354056,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand, InputsT.silt],
    ( Clay: number, Sand: number, Silt: number): EqResult => {
      const result = 0.378 - 0.000351 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2913354056,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand, InputsT.silt],
    ( Clay: number, Sand: number, Silt: number): EqResult => {
      const result = 0.378 - 0.000351 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2913354056,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand, InputsT.silt],
    ( Clay: number, Sand: number, Silt: number): EqResult => {
      const result = 0.378 - 0.000351 * (Sand/10);
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.Tab_Costeiros],
    0.2913354056,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.sand, InputsT.silt],
    ( Clay: number, Sand: number, Silt: number): EqResult => {
      const result = 3.1 - 0.629 * Silt - 0.0034 * Silt ** 2;
    return new EqResult(result, '%')
    },
    'Argissolo',
    [StatesT.SP],
    24.0359567343,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.coarseSand, InputsT.fineSand],
    ( Clay: number, CS: number, FS: number): EqResult => {
      const result = 18.15868 + 0.21328 * Clay - 0.23668 * CS - 0.16258 * FS;
    return new EqResult(result, 'dag/kg')
    },
    'Argissolo',
    [StatesT.RS],
    0.0885133231,
    'fieldCapacity',
    33,
  ),

   new Equation(
    '',
    [InputsT.clay, InputsT.coarseSand, InputsT.fineSand],
    ( Clay: number, CS: number, FS: number): EqResult => {
      const result = 34.1352 - 0.3028 * CS - 0.34317 * FS;
    return new EqResult(result, 'dag/kg')
    },
    'Neossolo',
    [StatesT.RS],
    0.0806462380,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.coarseSand, InputsT.fineSand],
    ( Clay: number, CS: number, FS: number): EqResult => {
      const result = 0.06177 - 0.00041281 * CS - 0.00029075 * FS - 0.00038934 * CS;
    return new EqResult(result, 'cm³/cm³')
    },
    'Neossolo',
    [StatesT.PB],
    0.1959146015,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.bulkDensity],
    ( Clay: number, BD: number): EqResult => {
      const result = 0.24907 - 0.00007519 * Clay - 0.11508 * BD;
    return new EqResult(result, 'cm³/cm³')
    },
    'Argissolo',
    [StatesT.PB],
    0.1959146015,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.bulkDensity, InputsT.fineSand, InputsT.microporosity, InputsT.silt],
    ( Clay: number, BD: number, FS: number, Micro: number, Silt: number): EqResult => {
      const result = 0.1232 + 0.0408 * BD + 0.0086 * Micro + 0.0006 * FS/10 + 0.0011 * Silt/10;
    return new EqResult(result, 'cm³/cm³')
    },
    'Gleissolo',
    [StatesT.GO],
    0.1354213451,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.clay, InputsT.coarseSand, InputsT.densityOfParticle],
    ( BD: number, Clay: number, CS: number, DP: number): EqResult => {
      const result = 0.33983 - 0.00037477 * CS - 0.06527 * BD - 0.05612 * DP;
    return new EqResult(result, 'cm³/cm³')
    },
    'Argissolo',
    [StatesT.PB],
    0.1959146015,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [ InputsT.clay, InputsT.coarseSand, InputsT.fineSand, InputsT.organicMatter,],
    ( Clay: number, CS: number, FS: number, OM: number,): EqResult => {
      const result = 26.18555 + 1.84737 * OM + 0.07352 * Clay - 0.28332 * CS - 0.26753 * FS;
    return new EqResult(result, 'dag/kg')
    },
    '',
    [StatesT.RS],
    0.0693910198,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [ InputsT.coarseSand, InputsT.fineSand, InputsT.organicMatter,],
    (  CS: number, FS: number, OM: number): EqResult => {
      const result = 24.88952 + 1.46274 * OM - 0.24526 * CS - 0.23454 * FS;
    return new EqResult(result, 'dag/kg')
    },
    '',
    [StatesT.RS],
    0.0880179195,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.organicMatter, InputsT.clay, InputsT.coarseSand, InputsT.fineSand],
    ( OM: number, Clay: number, CS: number, FS: number): EqResult => {
      const result = 29.65022 + 1.06092 * OM - 0.27668 * CS - 0.31970 * FS;
    return new EqResult(result, 'dag/kg')
    },
    'Cambissolo',
    [StatesT.RS],
    0.0802912261,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.organicMatter, InputsT.clay, InputsT.coarseSand, InputsT.fineSand],
    ( OM: number, Clay: number, CS: number, FS: number): EqResult => {
      const result = 23.40215 + 1.94753 * OM + 0.10749 * Clay - 0.29745 * CS - 0.22021 * FS;
    return new EqResult(result, 'dag/kg')
    },
    'Argissolo',
    [StatesT.RS],
    0.0694280081,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.organicMatter, InputsT.clay, InputsT.coarseSand, InputsT.fineSand],
    ( OM: number, Clay: number, CS: number, FS: number): EqResult => {
      const result = 17.8200+5.5292*OM+0.2094*Clay-0.1698*CS-0.2433*FS;
    return new EqResult(result, 'dag/kg')
    },
    'Planossolo',
    [StatesT.RS],
    0.1341078678,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.organicMatter, InputsT.clay, InputsT.coarseSand, InputsT.fineSand],
    ( OM: number, Clay: number, CS: number, FS: number): EqResult => {
      const result = 17.1565 + 2.5169 * OM - 0.1554 * CS - 0.1621 * FS;
    return new EqResult(result, 'dag/kg')
    },
    'Argissolo',
    [StatesT.RS],
    0.1146542355,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.organicMatter, InputsT.clay, InputsT.coarseSand, InputsT.fineSand],
    ( OM: number, Clay: number, CS: number, FS: number): EqResult => {
      const result = 20.6977 + 1.7475 * OM - 0.2127 * CS - 0.1728 * FS;
    return new EqResult(result, 'dag/kg')
    },
    'Argissolo',
    [StatesT.RS],
    0.1033046586,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.organicMatter, InputsT.clay, InputsT.coarseSand, InputsT.fineSand],
    ( OM: number, Clay: number, CS: number, FS: number): EqResult => {
      const result = 30.1220 + 1.1781 * OM - 0.3264 * CS - 0.2956 * FS;
    return new EqResult(result, 'dag/kg')
    },
    'Argissolo',
    [StatesT.RS],
    0.0755677510,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.coarseSand, InputsT.clay, InputsT.fineSand, InputsT.organicMatter],
    ( CS: number, FS: number, OM: number): EqResult => {
      const result = 22.07036 + 2.37679 * OM - 0.21787 * CS - 0.20096 * FS;
    return new EqResult(result, 'dag/kg')
    },
    'Neossolo',
    [StatesT.RS],
    0.0903774641,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [ InputsT.clay, InputsT.fineSand, InputsT.organicMatter],
    ( CS: number, FS: number,  OM: number,): EqResult => {
      const result = 21.9359 + 3.35081 * OM - 0.22751 * CS - 0.19371 * FS;
    return new EqResult(result, 'dag/kg')
    },
    'Planossolo',
    [StatesT.RS],
    0.0880415052,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.coarseSand, InputsT.clay, InputsT.fineSand, InputsT.organicMatter],
    ( CS: number, FS: number, OM: number): EqResult => {
      const result = 36.46889 + 2.63862 * OM - 0.44002 * CS - 0.38987 * FS;
    return new EqResult(result, 'dag/kg')
    },
    'Cambissolo',
    [StatesT.RS],
    0.0755236654,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [ InputsT.clay, InputsT.fineSand, InputsT.organicMatter,],
    ( CS: number, FS: number, OM: number,): EqResult => {
      const result = 39.45134-2.47572*OM-0.33157*CS-0.30641*FS;
    return new EqResult(result, 'dag/kg')
    },
    'Neossolo',
    [StatesT.RS],
    0.1151884006,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.densityOfParticle],
    ( Clay: number, DP: number): EqResult => {
      const result = 0.19916 - 0.0004 * Clay - 0.0396 * DP;
    return new EqResult(result, 'cm³/cm³')
    },
    'Planossolo',
    [StatesT.PB],
    0.1959146015,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.clay],
    ( BD: number, Clay: number): EqResult => {
      const result = 0.47352559 + 0.00017979 * Clay - 0.12025765 * BD;
    return new EqResult(result, 'm³/m³')
    },
    '',
    [StatesT.RS],
    0.0836264034,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [ InputsT.fineSand, InputsT.microporosity, InputsT.totalPorosity,],
    ( FS: number, Micro: number, TP: number): EqResult => {
      const result = 0.04314 + 0.00762 * Micro - 0.00074 * TP - 0.00058 * FS/10;
    return new EqResult(result, 'cm³/cm³')
    },
    '',
    [StatesT.BA],
    0.2462552040,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.clay, InputsT.sand, InputsT.silt],
    ( BD: number, Clay: number, Sand: number, Silt: number): EqResult => {
      const result = 0.000079 * (Sand/10) +0.000444 *(Silt/10) + 0.000484*(Clay/10) - 0.069234 * BD;
    return new EqResult(result, 'kg/kg')
    },
    'Argiloso',
    [StatesT.PE],
    0.4361980955,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.clay, InputsT.sand, InputsT.silt],
    ( BD: number, Clay: number, Sand: number, Silt: number): EqResult => {
      const result = 0.000088 * (Sand/10) + 0.000449 * (Silt/10) + 0.000448 * (Clay/10) - 0.058166 * BD;
    return new EqResult(result, 'kg/kg')
    },
    '',
    [StatesT.PE],
    0.4144975555,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [ InputsT.clay, InputsT.sand, InputsT.silt],
    ( Clay: number, Sand: number, Silt: number): EqResult => {
      const result = 0.000341 * (Silt/10) + 0.000374 * (Clay/10);
    return new EqResult(result, 'kg/kg')
    },
    'Francoargiloarenoso',
    [StatesT.PE],
    0.3055896586,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [ InputsT.bulkDensity, InputsT.fineSand, InputsT.microporosity, InputsT.silt],
    ( BD: number, FS: number, Micro: number, Silt: number): EqResult => {
      const result = 0.11305 + 0.02978 * BD + 0.0086 * Micro + 0.0006 * FS/10 + 0.0011 * Silt/10;
    return new EqResult(result, 'cm³/cm³')
    },
    'Gleissolo',
    [StatesT.BA],
    0.2462552040,
    'fieldCapacity',
    33,
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.clay, InputsT.coarseSand, InputsT.densityOfParticle],
    ( BD: number, Clay: number, CS: number, DP: number): EqResult => {
      const result = 0.33983 - 0.00037477 * CS - 0.06527 * BD - 0.05612 * DP;
    return new EqResult(result, 'cm³/cm³')
    },
    'Argissolo',
    [StatesT.PB],
    0.1959146015,
    'fieldCapacity',
    33,
  ),

]);



//a ordem dos inputs deve ser em ordem alfabética

// PTF;varpredita;Equa??o;ƒClasse?;Unidade;Estado;Estado;Estado;Estado;
// ;;;;;;;;;



// DosS13;FCth33_DosS13;26.18555 + 1.84737 * OM  + 0.07352 * Clay - 0.28332 * CS - 0.26753 * FS;;dag/kg;RS;;;;0,0693910198
// DosS14;FCth33_DosS14;24.88952 + 1.46274 * OM - 0.24526 * CS - 0.23454 * FS;;dag/kg;RS;;;;0,0880179195
// DosS2;FCth33_DosS2;29.65022 + 1.06092 * OM ? 0.27668 * CS ? 0.31970 * FS;Cambissolo;dag/kg;RS;;;;0,0802912261
// DosS10;FCth33_DosS10;23.40215 + 1.94753 * OM + 0.10749 * Clay - 0.29745 * CS - 0.22021 * FS;Argissolo;dag/kg;RS;;;;0,0694280081
// DosS12;FCth33_DosS12;17.8200+5.5292*OM+0.2094*Clay-0.1698*CS-0.2433*FS;Planossolo;dag/kg;RS;;;;0,1341078678
// DosS1;FCth33_DosS1;17.1565 + 2.5169 * OM ? 0.1554 * CS ? 0.1621 * FS;Argissolo;dag/kg;RS;;;;0,1146542355
// DosS3;FCth33_DosS3;20.6977 + 1.7475 * OM - 0.2127 * CS - 0.1728 * FS;Argissolo;dag/kg;RS;;;;0,1033046586
// DosS4;FCth33_DosS4;30.1220 + 1.1781 * OM - 0.3264 * CS - 0.2956 * FS;Argissolo;dag/kg;RS;;;;0,0755677510
// DosS5;FCth33_DosS5;22.07036 + 2.37679 * OM - 0.21787 * CS - 0.20096 * FS;Neossolo;dag/kg;RS;;;;0,0903774641
// DosS6;FCth33_DosS6;21.9359 + 3.35081 * OM - 0.22751 * CS - 0.19371 * FS;Planossolo;dag/kg;RS;;;;0,0880415052
// DosS9;FCth33_DosS9;36.46889 + 2.63862 * OM - 0.44002 * CS - 0.38987 * FS;Cambissolo;dag/kg;RS;;;;0,0755236654
// DosS11;FCth33_DosS11;39.45134-2.47572*OM-0.33157*CS-0.30641*FS;Neossolo;dag/kg;RS;;;;0,1151884006
// Pe5;FCth33_Pe5;0.19916 - 0.0004 * CS - 0.0396 * DP;Planossolo;cm/cm;PB;;;;0,1959146015
// Men2;FCth33_Men2;0.04314 + 0.00762 * Micro - 0.00074 * TP - 0.00058 * FS/10;;cm/cm;BA;;;;0,2462552040
// Mar;FCth33_Mar;0.47352559 + 0.00017979 * Clay - 0.12025765 * BD;;m/mì;RS;;;;0,0836264034
// Ol3;FCth33_Ol3;0.000079 * (Sand/10) +0.000444 *(Silt/10) + 0.000484*(Clay/10) ? 0.069234 * BD;Argiloso;kg/kg;PE;;;;0,4361980955
// Ol6;FCth33_Ol6;0.000088 * (Sand/10) + 0.000449 * (Silt/10) + 0.000448 * (Clay/10) ? 0.058166 * BD;;kg/kg;PE;;;;0,4144975555
// Ol2;FCth33_Ol2;0.000341 * (Silt/10) + 0.000374 * (Clay/10);Francoargiloarenoso;kg/kg;PE;;;;0,3055896586
// Men1;FCth33_Men1;0.11305 + 0.02978 * BD + 0.01037 * Micro + 0.00049169 * Clay/10;;m/mì;RS;;;;0,1614988001
// Sou2;FCth33_Sou2;0.08595 + 0.006102 * Macro;;m/mì;Tab. Costeiros;;;;0,2241769157
// Ros1;FCth33_Ros1;0.241249 - 0.000117723 * Sand - 0.152483 * Meso - 0.046851 * BD;;cm/cm;Cerrado;;;;0,2251334285
// Sou1;FCth33_Sou1;0.15839 + 0.00031 * Clay/10 ? 0.00240 * Micro;;cm/cm;Tab. Costeiros;;;;0,1600164831
// Ros2;FCth33_Ros2;0.057 ? 0.001 * Sand + 0.743 * Micro;;cm/cm;Cerrado;;;;0,0347639949
// Sil5;FCth33_Sil5;9.3274 + 0.058 OM + 0.1014 * Clay;;%;Tab. Costeiros;;;;0,1795649668
// Sil1;FCth33_Sil1;5.495 + 0.2152 Clay + 0.8054 * OM;Argissolo;%;Tab. Costeiros;;;;0,1558610004
// Sil3;FCth33_Sil3;1.854 + 0.2156 * Clay + 0.8054 * OM;Latossolo;%;Tab. Costeiros;;;;0,1886026832
// Gai;FCth33_Gai;0.208 SOC + 0.600 * Clay + 0.166 * Silt;;m/mì;CE;PI;;;0,1012421926
// Sil6;FCth33_Sil6;9.7953 - 2.6231 * OM + 0.0891 * Clay;;%;Tab. Costeiros;;;;0,2646868724
// Pe1;FCth33_Pe1;0.011429 - 0.000066799 * Sand + 0.28462 * Micro + 0.04162 * Macro - 0.02548 * DP;;cm/cm;PB;;;;0,2523874407
// Soar4;FCth33_Soar4;0.0432 + 0.0019 * Clay + 0.0293 * DP + 0.1952 * TP;Argilo Siltoso;cm/cm;RS;;;;0,0754356136
// Soar10;FCth33_Soar10;0.0628 - 0.0005 * Sand - 0.00734 * OM + 0.0398 * DP + 0.1515 * TP;;cm/cm;RS;;;;0,1285969560
// Soar7;FCth33_Soar7;#NOME?;Francoargiloarenoso;cm/cm;RS;;;;22,3925725406
// Soar5;FCth33_Soar5;0.0746 + 0.4946 * TP;Argiloso;cm/cm;RS;;;;0,0749895992
// Soar3;FCth33_Soar3;#NOME?;Argilo Arenoso;cm/cm;RS;;;;24,6597103887
// And;FCth6_And;0.256931 -0.261746 * Meso/10 + 0.000104958 *  Clay/10 -0.0942794 *BD;;cm/cm;PE;;;;0,0000000000
// Ram1;FCth6_Ram1;0.122 + 0.0004*Clay/10 + 0.0138* P  + 0.0049*CEC;Latossolo;cm/cm;PI;;;;0,2938305860
// Ram5;FCth6_Ram5;0.645 - 0.00033 * Sand/10 ? 0.0002 * Clay/10 ? 0.0003 * Silt/10;;cm/cm;PI;;;;0,3063308784
// Ram4;FCth6_Ram4;0.4098 - 0.0002*Clay/10 - 0.0001*Silt/10 - 0.0397*SOC;Plintossolo;cm/cm;PI;;;;0,1227435233
// Ram2;FCth6_Ram2;0.1821 + 0.00034*FS/10 + 0.00022*Clay/10 ? 0.0347*SOC;Argissolo;cm/cm;PI;;;;0,2265138223
// Ram3;FCth6_Ram3;0.0507 + 0.0004*FS/10 + 0.1039*SOC ? 0.0007*Silt/10;Neossolo;cm/cm;PI;;;;0,2153711805
// Av8;FCth6_Av8;0.245*Sand+0.607*Clay;;cm/100cm;MG;;;;0,1033241477
// Av6;FCth6_Av6;0.119 * Sand + 0.410 * Clay + 0.396 * Silt + 6.242 * BD;;cm/100cm;MG;;;;0,0708615455
// Av7;FCth6_Av7;0.208*Sand+0.474*Clay+0.456*Silt;;cm/100cm;MG;;;;0,0594818885
// Av5;FCth6_Av5;#NOME?;;cm/100cm;MG;;;;0,0735840230
// Pe4;PWP_Pe4;0.16288 - 0.07336 * BD;Argissolo;cm/cm;PB;;;;0,1791776376
// Dicos2;PWP_Dicos2;0.24049 - 0.10555 * BD;;cm/cm;BA;;;;0,1494699620
// Dicos1;PWP_Dicos1;0.5624 - 0.1561 * BD- 0.5720 * TP;;cm/cm;BA;;;;0,1878096112
// Ram4;PWP_Ram4;0.2682 ? 0.0002*TA;Plintossolo;cm/cm;PI;;;;0,1371207004
// Pe5;PWP_Pe5;0.014722 - 0.0005 * CS * 0.02831 * Estabilidade de Agregado - 0.098 * DP;Planossolo;cm/cm;PB;;;;0,1791776376
// Pe6;PWP_Pe6;0.10070 + 0.00065694 * VCSand - 0.02232 * Estabilidade de Agregados - 0.03206 * DP;Neossolo;cm/cm;PB;;;;0,1791776376
// Rei3;PWP_Rei3;82 + 18.9 * Log ((Sand/10)) - 0.14 * Clay/10 + 0.30 * LL;;g/kg;RS;SC;;;0,0000000000
// Nob;PWP_Nob;#NOME?;;cm/cm;Agreste;;;;0,2072258389
// Pe7;PWP_Pe7;- 0.084 + 0.0001 * Silt . 0.0008 * OM + 0.0464 * BD - 0.026 * Estabilidade de Agregados;Neossolo;cm/cm;PB;;;;0,1791776376
// Sou2;PWP_Sou2;0.0591 + 0.00646 * Macro;;m3/m;Tab. Costeiros;;;;0,1842954066
// Pe2;PWP_Pe2;0.01321 + 0.20505 * Micro;Latossolo;cm/cm;PB;;;;0,1561502535
// Gue;PWP_Gue;#NOME?;;cm/cm;RS;;;;0,0955344576
// Soar2;PWP_Soar2;#NOME?;Argilo Arenoso;cm/cm;RS;;;;0,1061768098
// Kl;PWP_Kl;0.0003 * (Clay/10) + 0.0118;;g/g;RS;;;;0,2087250978
// NASC3;PWP_NASC3;0.0221 + 0.000288 * (Clay/10);;cm/cm;Tab. Costeiros;;;;0,2095398649
// Ram3;PWP_Ram3;0.1174 ? 0.00034*Clay/10;Neossolo;cm/cm;PI;;;;0,1371207004
// Sil2;PWP_Soar11;2.2397 + 1.581 * Clay;Argissolo;%;Tab. Costeiros;;;;0,4611453317
// Sil3;PWP_Soar12;6.7168 + 0.2281 * Clay;Latossolo;%;Tab. Costeiros;;;;0,0967899737
// Sil4;PWP_Soar13;8.034 + 1.581 * Clay;Latossolo;%;Tab. Costeiros;;;;0,5095049780
// Sil6;PWP_Soar15;9.0821 + 0.3781 * Clay;;%;Tab. Costeiros;;;;0,0667456214
// Al2;PWP_Al2;0.379 * Clay ** 0.905;;(g/g)*100;PE;;;;0,2249484821
// BAL;PWP_BAL;0.287 * (Clay/10) + 1.4;;m/mì;Cerrado;;;;12,9489861418
// Vb1;PWP_Vb1;6.35 + 0.284 * Clay*100;;m.m/10ì;BR;;;;0,0842399421
// Ol4;PWP_Ol4;0.000282 * Silt/10 + 0.000487 * Clay/10 ? 0.101537 * BD;Muito Argiloso;kg/kg;PE;;;;0,4289495541
// Rei2;PWP_Rei2;0.236 + 0.044 * Clay*100 - 0.21 * (Sand*100);;kg/kg;RS;;;;0,0000000000
// Mas1;PWP_Mas1;#NOME?;;g/kg;PE;;;;0,0738542629
// Vb2;PWP_Vb2;3.83 + 0.272 * Clay*100 + 0.212 * Silt*100;;m.m/10ì;BR;;;;0,0665398774
// Al1;PWP_Al1;129.0 - 0.04 ** Sand;;(g/g)*100;PE;;;;0,1163700388
// NASC4;PWP_NASC4;0.272 ? 0.000269 * (Sand/10);;cm/cm;Tab. Costeiros;;;;0,2072258389
// Soar9;PWP_Soar8;0.0826 + 0.0041 * Sand;Francosiltoso;cm/cm;RS;;;;0,1699223621
// Soar15;PWP_Soar15;0.0826 + 0.0041 * Sand;;cm/cm;RS;;;;0,1699223621
// ASS;PWP_ASS;26.16995195 - 0.04098682 * Sand * ln(Sand);;%;BR;;;;0,0656042362
// Mas2;PWP_Mas2;0.2708 + 0.3468 * (Clay);;g/kg;PE;;;;0,0909557899
// Av8;PWP_Av8;0.070 * Sand +0.358 * Clay;;cm/100cm;MG;;;;0,0933832680
// Av7;PWP_Av7;0.054 * Sand + 0.300 * Clay + 0.196 * Silt;;cm/100cm;MG;;;;0,0741647645
// Ol2;PWP_Ol2;0.000032 * Sand/10 + 0.000223 * Silt/10 +0.00062 * Clay/10;Francoargiloarenoso;kg/kg;PE;;;;0,2340755588
// Ol7;PWP_Ol7;#NOME?;;kg/kg;PE;;;;0,2363895729
// Al3;PWP_Al3;1.384 * Silt ** 0.654;;(g/g)*100;PE;;;;0,1370128170
// Gia2;PWP_Gia2;0.031 + 0.005 * Silt + 0.003 * Clay;;cm/cm;SC;RS;;;0,0700041721
// Gia3;PWP_Gia3;0.024 + 0.005 * Silt + 0.003 * Clay;;cm/cm;;;;;0,0674138337
// NASC1;PWP_NASC1;0.0812 + 0.000279* (Clay/10) + 0.0000713 * (Silt/10) ? 0.0457 * BD;;cm/cm;Tab. Costeiros;;;;0,2149543657
// NASC2;PWP_NASC2;0.360 ? 0.000279 * (Sand/10) ? 0.000208 * (Silt/10) ? 0.0457 * BD;;cm/cm;Tab. Costeiros;;;;0,2268569814
// Sil1;PWP_Soar10;1.946+ 0.0037 * Clay + 0.2231 * Silt;Argissolo;%;Tab. Costeiros;;;;0,1735768159
// Al4;PWP_Al4;0.213 * (Silt+Clay) ** 0.990;;(g/g)*100;PE;;;;0,2219929760
// Ar;PWP_Ar;398.9 * (Silt+Clay) / (1308.1 + Silt+Clay);;%;SP;;;;0,0751875287
// Ram2;PWP_Ram2;0.0858 + 0.00021*Clay/10 ? 0.0002*Silt/10 + 00001*FS/10;Argissolo;cm/cm;PI;;;;0,1452958137
// Fer;PWP_Fer;0.004705 + 0.00299 * Clay + 0.000642 * Silt - 0.000156 * FS;;cm/cm;MG;BA;ES;;0,0819786026
// Dicos3;PWP_Dicos3;0.17058 - 0.14580 * CS;;dag/kg;BA;;;;0,0413508527
// DosS7;PWP_DosS7;21.5649 - 0.1932 * CS - 0.2004 * FS;Neossolo;dag/kg;RS;;;;0,0678652482
// DosS8;PWP_DosS8;8.11431 + 0.21634 * Clay - 0.13063 * CS - 0.09715 * FS;Argissolo;dag/kg;RS;;;;0,0713938800
// DosS10;PWP_DosS10;7.20816 + 3.64925 * OM + 0.17031 * Clay - 0.15310 * CS - 0.10005 * FS;Argissolo;dag/kg;RS;;;;0,0709075162
// Sil5;PWP_Soar14;9.23 + 0.2511 * Silt - 0.074 * FS;;%;Tab. Costeiros;;;;0,1144756902
// Pe3;PWP_Pe3;0.19817 - 0.00007741 * CS - 0.09215 * BD;Argissolo;cm/cm;PB;;;;0,1496204306
// Dicos4;PWP_Dicos4;1.24529 - 0.21743 * CS - 0.43746 * BD - 0.99032 * TP;;cm/cm;BA;;;;0,0617065749
// Dicos5;PWP_Dicos5;1.30028 - 0.20449 * CS - 0.40620 * BD - 1.12476 * TP;;cm/cm;BA;;;;0,0576593283
// Men3;PWP_Men3;0.0468 + 0.0848 * BD + 0.0030 * Micro - 0.0022 * CS/10 - 0.0020 * FS/10;;cm/cm;MG;;;;0,1211442109
// Men4;PWP_Men4;0.0048 + 0.0525 * DP - 0.0020 * Macro + 0.0099 * Sand/10 + 0.0016 * FS + 0.0016 * Silt/10 + 0.0091 * Clay/10;;cm/cm;GO;;;;0,0913800040
// DosS12;PWP_DosS12;0.82593+5.38527*OM+0.29199*Clay-0.16418*FS;Planossolo;dag/kg;RS;;;;0,1137922583
// Doss13;PWP_DosS13;11.50346 + 1.55563 * OM + 0.14390 * Clay - 0.13118 * CS - 0.16458 * Clay;;dag/kg;RS;;;;0,1206810391
// DosS5;PWP_DosS5;17.31904 + 1.75679 * OM - 0.17837 * CS - 0.21368 * FS;Neossolo;dag/kg;RS;;;;0,0805377222
// DosS3;PWP_DosS3;2.57914 + 1.85627 * OM + 0.1759 * Clay - 0.04588 * CS;Argissolo;dag/kg;RS;;;;0,0831501941
// CO1;PWP_CO1;6.9214 - 3.4117 * BD / ln(BD);FrancoArgiloso;%;MG;;;;inf
// DosS1;PWP_DosS1;7.70062 + 1.91701 * OM + 0.07225 * Clay - 0.07730 * CS ?0.09263 * FS;Argissolo;dag/kg;RS;;;;0,1001509928
// DosS4;PWP_DosS4;11.7889 + 0.9991 * OM + 0.1557 * Clay - 0.1419 * CS -0.1361 * FS;Argissolo;dag/kg;RS;;;;0,0560600281
// DosS14;PWP_DosS14;9.944674 + 1.01884 * OM + 0.14405 * Clay - 0.09538 * CS - 0.1052 * FS;;dag/kg;RS;;;;0,0657938494
// DosS11;PWP_DosS11;39.45134-2.47572*OM-0.33157*CS-0.30641*FS;Neossolo;dag/kg;RS;;;;0,1070973639
// DosS9;PWP_DosS9;27.08723 + 1.18014 * OM - 0.29777 * CS - 0.35548 * FS;Cambissolo;dag/kg;RS;;;;0,0534944180
// DosS6;PWP_DosS6;2.44219 + 5.17011 * OM - 0.13334* FS;Planossolo;dag/kg;RS;;;;0,1562526940
// Ram5;PWP_Ram5;0.074 + 0.00033 * Sand/10 + 0.0382 * SOC ? 0.0001 * CS/10;;cm/cm;PI;;;;0,1350546827
// Men2;PWP_Men2;#NOME?;;cm/cm;BA;;;;0,2436332905
// Ol5;PWP_Ol5;0.000087 Silt/10  + 0.000285 * Clay/10;;kg/kg;PE;;;;0,2362663186
// Ol6;PWP_Ol6;0.000072 * Sand/10 + 0.000195 Silt/10 + 0.000363 * Clay/10  ? 0.052198 * BD;;kg/kg;PE;;;;0,3318696179
// Ol8;PWP_Ol8;0.000121 * Silt/10 + 0.000260 * Clay/10;;kg/kg;PE;;;;0,2362910280
// Ol9;PWP_Ol9;0.000085 Sand + 0.000229 * Silt + 0.000381 * Clay ? 0.062662 * BD;;kg/kg;PE;;;;0,3519572420
// Av6;PWP_Av6;#NOME?;;cm/100cm;MG;;;;0,0688855501
// Ur;PWP_Ur;29.8999 - 0.15600 * Sand + 0.18710 * Clay - 6.7591 * BD;;kg/kg;RS;;;;0,0830051094
// Ol1;PWP_Ol1;0.000038 * Sand/10 + 0.000153 * Silt/10 + 0.000341 * Clay/10 ? 0.030861 * BD;;kg/kg;PE;;;;0,2915935648
// Ol3;PWP_Ol3;0.000282 * Silt/10 + 0.000487 * Clay/10 ? 0.101537 * BD;Argiloso;kg/kg;PE;;;;0,4289495541
// And;PWP_And;0.241249 - 0.000117723 * Sand/10 - 0.152483 * Meso/10 - 0.046851 * BD;;cm/cm;PE;;;;0,2219929760
// Men1;PWP_Men1;1878 + 0.0872 * BD + 0.00374 * Micro + 0.00101 * Silt/10 + 0.00256 * Clay/10;;cm/cm;RS;;;;0,2943595402
// Mar;PWP_Mar;0.08487488 + 0.00097697 * OM +  0.00042973 * Clay - 0.0002316 * Silt + 0.16789394 * BD;;m/m;RS;;;;0,1565399212
// Soar10;PWP_Soar9;0.1531 * Clay + 0.0072 * BD + 0.0240 *TP;;cm/cm;RS;;;;0,0616227922
// Av5;PWP_Av5;#NOME?;;cm/100cm;MG;;;;0,0678599691
// Silv2;PWP_Silv2;0.246 - 0.00174 * Sand + 0.000069 * Silt - 0.0402 * (Silt/Clay) + 0.0190 * BD;;cm/cm;BA;GO;MG;RS;inf
// Ros2;PWP_Ros2;0.568 ? 0.003 * Sand ? 0.001 * Clay ? 0.281 * TP ? 0.069 * BD + 0.005 * SOC;;cm/cm;Cerrado;;;;0,0694884808
// Sou1;PWP_Sou1;0.15839 + 0.00031 * (Clay/10) ? 0.00240 * Micro;;m/m;Tab. Costeiros;;;;0,1041987992
// Ros1;PWP_Ros1;0.057 ? 0.001 * Sand + 0.743 * Micro;;cm/cm;Cerrado;;;;0,0630773684
// Ram1;PWP_Ram1;0.074 + 0.00033*Clay/10 + 0.0382*SOC ? 0.0001*CS/10;Latossolo;cm/cm;PI;;;;0,1339583451
// Gai;PWP_Gai;0.088 * SOC + 0.340 * Clay + 0.057 * Silt;;m/m;CE;PI;;;0,1016710383
// DosS2;PWP_DosS2;0.8351 + 0.5599 * OM + 0.3506 * Clay;Cambissolo;dag/kg;RS;;;;0,0798688422
// Rei5;PWP_Rei5;140 + 12.7 * Log ((OM/10)) + 0.065 * Clay/10 - 0.28 * Sand/10;;g/kg;RS;SC;;;0,1158694170
// Rei1;PWP_Rei1;#NOME?;;kg/kg;RS;;;;0,0214927446
// Soar6;PWP_Soar6;#NOME?;Francoarenoso;cm/cm;RS;;;;0,0764804037
// Soar1;PWP_Soar1;-2.8034 + 0.0127 * Sand . 0.7130 * DP;Arenoso Franco;cm/cm;RS;;;;0,7464593629
// Soar3;PWP_Soar3;-0.8519 - 0.0284 * Sand . 0.5231 * DP;Argilo Siltoso;cm/cm;RS;;;;0,0105694118
// Mi;PWP_Mi;#NOME?;;cm/cm;RS;;;;0,0889937383
// Pe1;PWP_Pe1;0.09715 - 0.00048 * Sand + 0.22538 * Micro - 0.02314 * DP;;cm/cm;PB;;;;0,1292255097
// Soar7;PWP_Soar7;0.1571 - 0.0048 * Silt - 3.8154 * OM - 0.0437 * DP . 0.4512 * TP;Francoargiloarenoso;cm/cm;RS;;;;0,0000000000
// Soar4;PWP_Soar4;0.1818 - 0.0022 * Silt - 0.0010 * Sand +  0.0279 * TP;Argiloso;cm/cm;RS;;;;0,1414588259
// Men5;PWP_Men5;#NOME?;;cm/cm;MT;;;;0,2750708052
// Silv1;PWP_Silv1;0.123 - 0.00108 * Sand - 0.0204 * (Silt/Clay) - 0.00171 * TP + 0.05710 * Micro;;cm/cm;BA;GO;MG;RS;0,1586578627
// Soar8;PWP_Soar8;0.0996 + 0.2248 * TP;Francoargiloso;cm/cm;RS;;;;0,0764051951


// Classes de Solo (input):

//Argissolos
// Cambissolos
// Chernossolos
// Espodossolos
// Gleissolos
// Latossolos
// Luvissolos
// Neossolos
// Nitossolos
// Organossolos
// Planossolos
// Plintossolos
// Vertissolos

//.
// Classe textural (input):
//Muito Argilosa
// Argiloso
// Argilo-arenosa
// Argilo-Siltosa
// Franco-Argilo Arenoso
// Franco-Argilo Siltosa
// Franco Arenosa
// Franca
// Franco Siltosa
// Silte
// Areia Fraca
// Areia

