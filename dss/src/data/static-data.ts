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
  //       return new EqResult(result, 'cm²/cm²')
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
    'fieldCapacity'                                                       // TYPE
  ),

  new Equation(
    '',                                                                   // Textural Class
    //FIXME: VERIFICAR SE CS = claySilt ou coarseSand
    [InputsT.organicMatter, InputsT.coarseSand, InputsT.liquidLimits],    // Inputs Accepted
    (CS: number, LL: number, OM: number): EqResult => {                   // Equation
      console.log("OM: ", OM, "CS:", CS, "LL: ", LL)
      const result =
        (179 + 13 * Log((OM/10)) - 23.6 * Log((CS/10)) + 0.53 * LL);
      return new EqResult(result, 'g/kg')                                 // Measurement Unit
    },
    '',                                                                   // Class
    [StatesT.RS, StatesT.SC],                                             // States
    0,                                                                    // RMSE
    'fieldCapacity'                                                       // TYPE
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.clay, InputsT.silt, InputsT.bulkDensity, InputsT.totalPorosity],
    (sand: number, clay: number, silt: number, bd: number, tp: number): EqResult => {
      const result = (0.079 * sand + 0.212 * clay + 0.201 * silt + 13.684 * bd + 20.442 * tp);
      return new EqResult(result, 'cm²/cm²')
    },
    '',
    [StatesT.MG],
    0.07358402303,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.clay, InputsT.silt, InputsT.bulkDensity, InputsT.totalPorosity],
    (sand: number, clay: number, silt: number, bd: number, tp: number): EqResult => {
      const result = (0.079 * sand + 0.212 * clay + 0.201 * silt + 13.684 * bd + 20.442 * tp);
      return new EqResult(result, 'cm²/cm²')
    },
    '',
    [StatesT.MG],
    0.07358402303,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.clay, InputsT.silt, InputsT.bulkDensity],
    (sand: number, clay: number, silt: number, bd: number): EqResult => {
      const result = (0.119 * sand + 0.410 * clay + 0.396 * silt + 6.242 * bd);
      return new EqResult(result, 'cm²/cm²')
    },
    '',
    [StatesT.MG],
    0.07086154552,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.clay, InputsT.silt],
    (sand: number, clay: number, silt: number): EqResult => {
      const result = (0.208 * sand + 0.474 * clay + 0.456 * silt);
      return new EqResult(result, 'cm²/cm²')
    },
    '',
    [StatesT.MG],
    0.05948188852,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.clay],
    (sand: number, clay: number): EqResult => {
      const result = (0.245 * sand + 0.607 * clay);
      return new EqResult(result, 'cm²/cm²')
    },
    '',
    [StatesT.MG],
    0.10332414768,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.fineSand, InputsT.clay, InputsT.silt, InputsT.coarseSand],
    (FS: number, clay: number, silt: number, CS: number): EqResult => {
      const result = (0.1821 + 0.00034 * FS/10 + 0.00022 * clay/10 - 0.0347 * CS);
      return new EqResult(result, 'cm²/cm²')
    },
    'argissolo',
    [StatesT.PI],
    0.22651382231,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.fineSand, InputsT.clay, InputsT.silt, InputsT.coarseSand],
    (FS: number, clay: number, silt: number, CS: number): EqResult => {
      const result = (0.0507 + 0.0004 * FS/10 + 0.1039 * CS - 0.0007 * silt/10);
      return new EqResult(result, 'cm²/cm²')
    },
    'neossolo',
    [StatesT.PI],
    0.21537118048,
    'fieldCapacity'
  ),

  new Equation(
    'plintossolo',
    [InputsT.clay, InputsT.silt, InputsT.coarseSand],
    (clay: number, silt: number, CS: number): EqResult => {
      const result = (0.4098 - 0.0002 * clay/10 - 0.0001 * silt/10 - 0.0397 * CS);
      return new EqResult(result, 'cm²/cm²')
    },
    '',
    [StatesT.PI],
    0.12274352329,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.clay, InputsT.silt],
    (sand: number, clay: number, silt: number): EqResult => {
      const result = (0.645 - 0.00033 * sand/10 - 0.0002 * clay/10 - 0.0003 * silt/10);
      return new EqResult(result, 'cm²/cm²')
    },
    '',
    [StatesT.PI],
    0.30633087844,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand],
    (sand: number): EqResult => {
      const result = (39.07988535 - 0.04098682 * (sand)**1.455456594);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.BR],
    0.07193188702,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.clay],
    (clay: number): EqResult => {
      const result = (0.330 * (clay) + 8.3);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.MS, StatesT.MT, StatesT.GO, StatesT.TO, StatesT.MA, StatesT.PI, StatesT.BA, StatesT.MG],
    0.01871995396,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.silt, InputsT.fineSand],
    (clay: number, silt: number, FS: number): EqResult => {
      const result = (0.00807 + 0.004291 * clay + 0.003186 * silt + 0.000506 * FS);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.MG, StatesT.BA, StatesT.ES],
    0.08212572649,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.silt, InputsT.clay],
    (silt: number, clay: number): EqResult => {
      const result = (0.081 + 0.005 * silt + 0.004 * clay);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.SC, StatesT.RS],
    0.07296375170,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.silt],
    (clay: number, silt: number): EqResult => {
      const result = (0.268 + 0.05 * (clay*100) + 0.24 * (clay+silt*100));
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.02416935988,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.silt],
    (clay: number, silt: number): EqResult => {
      const result = (0.037 + 90.38 * (clay + silt * 100));
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.03088550282,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.clay],
    (clay: number): EqResult => {
      const result = (13.96 + 0.387 * clay*100);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.BR],
    0.09189648048,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.silt],
    (clay: number, silt: number): EqResult => {
      const result = (11.27 + 0.367 * clay*100 + 0.226 * silt*100);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.BR],
    0.07261814487,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.bulkDensity, InputsT.clay],
    (sand: number, bd: number, clay: number): EqResult => {
      const result = (49.6557 - 0.16882 * sand + 0.21658 * clay - 12.6897 * bd);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.14743989304,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.microporosity, InputsT.clay],
    (microporosity: number, clay: number): EqResult => {
      const result = (0.059 + 0.641 * microporosity + 0.001  * clay);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.03793094612,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.organicMatter, InputsT.clay, InputsT.silt, InputsT.sand],
    (OM: number, clay: number, silt: number, sand: number): EqResult => {
      const result = (364 * 27.8 * Log ((OM/10)) + 0.012 * clay/10 - 0.37 * sand/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS, StatesT.SC],
    0.22513342846,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.coarseSand, InputsT.bulkDensity, InputsT.microporosity, InputsT.totalPorosity],
    (CS: number, bd: number, microporosity: number, tp: number): EqResult => {
      const result = (0.86625 - 0.01727 * CS - 0.21859 * bd - 0.85690 * tp);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.BA],
    0.56550358152,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.bulkDensity],
    (bd: number): EqResult => {
      const result = (0.46082 - 0.18014 * bd);
      return new EqResult(result, 'cm²/cm²')
    },
    '',
    [StatesT.BA],
    0.13530125970,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.coarseSand, InputsT.bulkDensity, InputsT.microporosity, InputsT.totalPorosity],
    (CS: number, bd: number, microporosity: number, tp: number): EqResult => {
      const result = (0.59324 - 0.14310 * CS + 0.18177 * bd);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.BA],
    0.35734310105,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.coarseSand, InputsT.bulkDensity, InputsT.microporosity, InputsT.totalPorosity],
    (CS: number, bd: number, microporosity: number, tp: number): EqResult => {
      const result = (1.42937 - 0.28125 * CS - 0.46640 * bd - 1.00496 * tp);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.BA],
    0.07941908184,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.coarseSand, InputsT.bulkDensity, InputsT.microporosity, InputsT.totalPorosity],
    (CS: number, bd: number, microporosity: number, tp: number): EqResult => {
      const result = (2.84267 - 0.026601 * CS - 0.97267 * bd - 2.40257 * tp);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.BA],
    0.07452890562,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand],
    (sand: number): EqResult => {
      const result = (0.003 * sand ** 2 - 0.911 * sand + 57.91);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.PE],
    0.27206911560,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.clay],
    (clay: number): EqResult => {
      const result = (0.004 * clay ** 2 - 0.312 * clay + 3.289);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.PE],
    0.31002809472,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.silt],
    (silt: number): EqResult => {
      const result = (-0.030 * silt ** 2 - 1.462 * silt + 1.987);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.PE],
    0.35524359406,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.silt],
    (clay: number, silt: number): EqResult => {
      const result = (-0.003 * (silt+clay) ** 2 - 0.180 * (silt+clay) +3.309);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.PE],
    0.14829103197,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.silt],
    (clay: number, silt: number): EqResult => {
      const result = (0.0019 * clay + 0.0024 * silt + 0.2143);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.MS, StatesT.MT, StatesT.GO, StatesT.TO, StatesT.MA, StatesT.PI, StatesT.BA, StatesT.MG],
    0.14829103197,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.silt, InputsT.clay],
    (silt: number, clay: number): EqResult => {
      const result = (3.1 - 0.629 * silt+clay - 0.0034 * (silt+clay) ** 2);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.SP],
    24.03595673430,
    'fieldCapacity'
  ),

  new Equation(
    'argiloso',
    [InputsT.silt, InputsT.bulkDensity],
    (silt: number, bd: number): EqResult => {
      const result = (41.3580 - 16.6354 * bd + 0.4106 * silt);
      return new EqResult(result, 'g/kg')
    },
    'argiloso',
    [StatesT.MG],
    0.14829103197,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.silt],
    (silt: number): EqResult => {
      const result = (42.6737 - 363.9401 / silt);
      return new EqResult(result, 'g/kg')
    },
    'argiloso',
    [StatesT.MG],
    246786526,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.silt],
    (silt: number): EqResult => {
      const result = (24.8766 + 2347.3300 / silt);
      return new EqResult(result, 'g/kg')
    },
    'francoargiloarenoso',
    [StatesT.MG],
    861003174,
    'fieldCapacity'
  ),
  
  new Equation(
    'argissolo',
    [InputsT.organicMatter, InputsT.clay, InputsT.fineSand, InputsT.silt],
    (OM: number, clay: number, FS: number, silt: number): EqResult => {
      const result = (17.1565 + 2.5169 * OM - 0.1554 * clay/10 - 0.1621 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.11465423553,
    'fieldCapacity'
  ),

  new Equation(
    'cambissolo',
    [InputsT.organicMatter, InputsT.clay, InputsT.fineSand, InputsT.silt],
    (OM: number, clay: number, FS: number, silt: number): EqResult => {
      const result = (29.65022 + 1.06092 * OM - 0.27668 * clay/10 - 0.31970 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.08029122608,
    'fieldCapacity'
  ),

  new Equation(
    'argissolo',
    [InputsT.organicMatter, InputsT.clay, InputsT.fineSand, InputsT.silt],
    (OM: number, clay: number, FS: number, silt: number): EqResult => {
      const result = (20.6977 + 1.7475 * OM - 0.2127 * clay/10 - 0.1728 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.10330465862,
    'fieldCapacity'
  ),

  new Equation(
    'argissolo',
    [InputsT.organicMatter, InputsT.clay, InputsT.fineSand, InputsT.silt],
    (OM: number, clay: number, FS: number, silt: number): EqResult => {
      const result = (30.1220 + 1.1781 * OM - 0.3264 * clay/10 - 0.2956 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.07556775101,
    'fieldCapacity'
  ),

  new Equation(
    'neossolo',
    [InputsT.organicMatter, InputsT.clay, InputsT.fineSand, InputsT.silt],
    (OM: number, clay: number, FS: number, silt: number): EqResult => {
      const result = (22.07036 + 2.37679 * OM - 0.21787 * clay/10 - 0.20096 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.09037746412,
    'fieldCapacity'
  ),

  new Equation(
    'planossolo',
    [InputsT.organicMatter, InputsT.clay, InputsT.fineSand, InputsT.silt],
    (OM: number, clay: number, FS: number, silt: number): EqResult => {
      const result = (21.9359 + 3.35081 * OM - 0.22751 * clay/10 - 0.19371 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.08804150521,
    'fieldCapacity'
  ),

  new Equation(
    'nessolo',
    [InputsT.clay, InputsT.fineSand, InputsT.silt],
    (clay: number, FS: number, silt: number): EqResult => {
      const result = (34.1352 - 0.3028 * clay/10 - 0.34317 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.08064623795,
    'fieldCapacity'
  ),

  new Equation(
    'argissolo',
    [InputsT.clay, InputsT.fineSand, InputsT.silt],
    (clay: number, FS: number, silt: number): EqResult => {
      const result = (18.15868 + 0.21328 * clay/10 - 0.23668 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.08851332306,
    'fieldCapacity'
  ),

  new Equation(
    'cambissolo',
    [InputsT.organicMatter, InputsT.clay, InputsT.fineSand, InputsT.silt],
    (OM: number, clay: number, FS: number, silt: number): EqResult => {
      const result = (36.46889 + 2.63862 * OM - 0.44002 * clay/10 - 0.38987 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.07552366535,
    'fieldCapacity'
  ),

  new Equation(
    'argissolo',
    [InputsT.organicMatter, InputsT.clay, InputsT.fineSand, InputsT.silt, InputsT.clay],
    (OM: number, clay: number, FS: number, silt: number, Clay: number): EqResult => {
      const result = (23.40215 + 1.94753 * OM + 0.10749 * Clay/10 - 0.29745 * clay/10 - 0.22021 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.06942800808,
    'fieldCapacity'
  ),

  new Equation(
    'nessolo',
    [InputsT.organicMatter, InputsT.clay, InputsT.fineSand, InputsT.silt, InputsT.clay],
    (OM: number, clay: number, FS: number, silt: number, Clay: number): EqResult => {
      const result = (39.45134-2.47572*OM-0.33157*clay/10-0.30641*FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.11518840062,
    'fieldCapacity'
  ),

  new Equation(
    'planossolo',
    [InputsT.organicMatter, InputsT.clay, InputsT.fineSand, InputsT.silt, InputsT.clay],
    (OM: number, clay: number, FS: number, silt: number, Clay: number): EqResult => {
      const result = (17.8200+5.5292*OM+0.2094*Clay/10-0.1698*clay/10-0.2433*FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.13410786776,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.organicMatter, InputsT.clay, InputsT.fineSand, InputsT.silt, InputsT.clay],
    (OM: number, clay: number, FS: number, silt: number, Clay: number): EqResult => {
      const result = (26.18555 + 1.84737 * OM + 0.07352 * Clay/10 - 0.28332 * clay/10 - 0.26753 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.06939101976,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.organicMatter, InputsT.clay, InputsT.fineSand, InputsT.silt, InputsT.clay],
    (OM: number, clay: number, FS: number, silt: number, Clay: number): EqResult => {
      const result = (24.88952 + 1.46274 * OM - 0.24526 * clay/10 - 0.23454 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.08801791945,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.clay, InputsT.silt],
    (sand: number, clay: number, silt: number): EqResult => {
      const result = (0.208 * sand + 0.600 * clay + 0.166 * silt);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.CE, StatesT.PI],
    0.10124219261,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.bulkDensity],
    (clay: number, bd: number): EqResult => {
      const result = (0.47352559 + 0.00017979 * clay/10 - 0.12025765 * bd);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.08362640338,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.silt, InputsT.clay],
    (silt: number, clay: number): EqResult => {
      const result = (-1.5691 + 0.4289 * (silt + clay));
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.PE],
    0.10298282166,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.clay],
    (sand: number, clay: number): EqResult => {
      const result = (58.3402 - 0.5936 * sand);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.PE],
    0.20843147871,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.microporosity, InputsT.clay],
    (bd: number, microporosity: number, clay: number): EqResult => {
      const result = (0.11305 + 0.02978 * bd + 0.01037 * microporosity + 0.00049169 * clay/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.RS],
    0.16149880012,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.microporosity, InputsT.totalPorosity, InputsT.fineSand],
    (microporosity: number, tp: number, FS: number): EqResult => {
      const result = (0.04314 + 0.00762 * microporosity - 0.00074 * tp - 0.00058 * FS/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.BA],
    0.24625520400,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.clay],
    (bd: number, clay: number): EqResult => {
      const result = (-0.0386 + 0.0088 * bd + 0.00067 * clay/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.MG],
    0.33137894131,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.microporosity, InputsT.fineSand, InputsT.silt],
    (bd: number, microporosity: number, FS: number, silt: number): EqResult => {
      const result = (0.1232 + 0.0408 * bd + 0.0086 * microporosity + 0.0006 * FS/10 + 0.0011 * silt/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.GO],
    0.13542134510,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.bulkDensity, InputsT.clay],
    (bd: number, clay: number): EqResult => {
      const result = (-0.0556 + 0.0086 * bd + 0.0014 * clay/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.MT],
    0.31240550170,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.clay, InputsT.silt],
    (clay: number, silt: number): EqResult => {
      const result = (0.0409 + 0.000377 * clay/10 + 0.000108 * silt/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.BA, StatesT.PE, StatesT.CE, StatesT.PB, StatesT.AL, StatesT.SE],
    0.25523954200,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.clay],
    (sand: number, clay: number): EqResult => {
      const result = (0.418 - 0.000377 * sand/10 - 0.000269 * clay/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.BA, StatesT.PE, StatesT.CE, StatesT.PB, StatesT.AL, StatesT.SE],
    0.34192942281,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.clay],
    (clay: number): EqResult => {
      const result = (0.0525 + 0.000373 * clay/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.BA, StatesT.PE, StatesT.CE, StatesT.PB, StatesT.AL, StatesT.SE],
    0.24168547978,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand],
    (sand: number): EqResult => {
      const result = (0.378 - 0.000351 * sand/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.BA, StatesT.PE, StatesT.CE, StatesT.PB, StatesT.AL, StatesT.SE],
    0.29133540556,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.silt, InputsT.clay],
    (silt: number, clay: number): EqResult => {
      const result = (0.000333 * silt/10 + 0.000387 * clay/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.PE],
    0.30555232015,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.silt, InputsT.clay],
    (silt: number, clay: number): EqResult => {
      const result = (0.000341 * silt/10 + 0.000374 * clay/10);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.PE],
    0.30558965855,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.silt, InputsT.clay, InputsT.bulkDensity],
    (sand: number, silt: number, clay: number, bd: number): EqResult => {
      const result = (0.000079 * sand/10 + 0.000444 * silt/10 + 0.000484 * clay/10 - 0.069234 * bd);
      return new EqResult(result, 'g/kg')
    },
    'francoargiloso, francoargiloarenoso',
    [StatesT.PE],
    0.43619809548,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.clay],
    (sand: number, clay: number): EqResult => {
      const result = (0.000328 * sand/10 + 0.00571 * clay/10);
      return new EqResult(result, 'g/kg')
    },
    'muitoa argiloso',
    [StatesT.PE],
    0.27970322303,
    'fieldCapacity'
  ),

  new Equation(
    '',
    [InputsT.sand, InputsT.silt, InputsT.clay, InputsT.bulkDensity],
    (sand: number, silt: number, clay: number, bd: number): EqResult => {
      const result = (-0.000050 * sand + 0.000190 * silt + 0.000326 * clay + 0.0473371 * bd);
      return new EqResult(result, 'g/kg')
    },
    '',
    [StatesT.PE],
    0.22787438349,
    'fieldCapacity'
  ),


]);





// PTF;varpredita;Equa??o;ƒClasse?;Unidade;Estado;Estado;Estado;Estado;
// ;;;;;;;;;
// Dicos2;FCth10_Dicos2;0.46082 - 0.18014 * BD;;cm/cm;BA;;;;0,1353012597
// Rei3;FCth10_Rei3;169 + 17.1 * Log ((Sand/10)) - 17.5 * Log ((CS/10)) + 0.53 * LL;;g/kg;RS;SC;;;0,0308855028
// Rei4;FCth10_Rei4;179 + 13 * Log ((OM/10)) - 23.6 * Log ((CS/10)) + 0.53 * LL;;g/kg;RS;SC;;;0,0308855028
// BAL;FCth10_BAL;0.330 * (Clay/10) + 8.3;;m/m;Cerrado;;;;0,0187199540
// Vb1;FCth10_Vb1;13.96 + 0.387 * Clay*100;;m/m * 10ý;BR;;;;0,0918964805
// Rei2;FCth10_Rei2;0.037 + 90.38 * (Clay + Silt)* 100);;kg/kg;RS;;;;0,0308855028
// ASS;FCth10_ASS;39.07988535 - 0.04098682 * (Sand)**1.455456594;;%;BR;;;;0,0719318870
// Gia1;FCth10_Gia1;0.081 + 0.005 * Silt + 0.004 * Clay;;cm/cm;SC;RS;;;0,0729637517
// Vb2;FCth10_Vb2;11.27 + 0.367 * Clay*100 + 0.226 * Silt*100;;m/m.10ì;BR;;;;0,0726181449
// Fer;FCth10_Fer;0.00807 + 0.004291 * Clay + 0.003186 * Silt + 0.000506 * FS;;kg/kg;MG;BA;ES;;0,0821257265
// Dicos4;FCth10_Dicos4;1.42937 - 0.28125 * CS - 0.46640 * BD - 1.00496 * TP;;cm/cm;BA;;;;0,0794190818
// Dicos5;FCth10_Dicos5;2.84267 - 0.026601 * CS - 0.97267 * BD - 2.40257 * TP;;cm/cm;BA;;;;0,0745289056
// Dicos1;FCth10_Dicos1;0.86625 - 0.01727 * CS - 0.21859 * BD- 0.85690 * TP;;cm/cm;BA;;;;0,5655035815
// Dicos3;FCth10_Dicos3;0.59324 - 0.14310 * CS + 0.18177 * BD;;cm/cm;BA;;;;0,3573431011
// Ur;FCth10_Ur;49.6557 - 0.16882 * Sand + 0.21658 * Clay - 12.6897 * BD;;kg/kg;RS;;;;0,1474398930
// Gue;FCth10_Gue;0.059 + 0.641 * Micro + 0.001  * Clay;;cm/cm;RS;;;;0,0379309461
// Rei1;FCth10_Rei1;0.268 + 0.05 * (Clay*100) + 0.24 * (Clay+Silt*100) +?0.85?*?OM?*?BD;;kg/kg;RS;;;;0,0241693599
// Rei5;FCth10_Rei5;364 * 27.8 * Log ((OM/10)) + 0.012 * Clay/10 - 0.37 * Sand/10;;g/kg;RS;SC;;;0,2251334285
// CO1;FCth33_CO1;41.3580-16.6354*BD+0.4106*Silt;Argiloso;%;MG;;;;0,1482910320
// CO2;FCth33_CO2;13.2062 - 3.5344 * BD / ln(BD);Argiloso;%;MG;;;;inf
// CO5;FCth33_CO5;5.8966 - 4.4623 * BD / ln(BD);Francoargiloso;%;MG;;;;inf
// Soar8;FCth33_Soar8;2.1696 - 1.4883 * BD + 0.6744 * DP - 3.3203 * TP;Francoargiloso;cm/cm;RS;;;;0,2362971993
// Nob;FCth33_Nob;0.263 + (0.000621 * Clay) -(0.0372 * pH);;cm/cm;Agreste;;;;0,2913354056
// Pe2;FCth33_Pe2;0.01812 + 0.26123 * Micro;Latossolo Amarelo;cm/cm;PB;;;;0,1959146015
// Soar1;FCth33_Soar1;#NOME?;Franco Arenoso;cm/cm;RS;;;;0,2024242849
// Soar9;FCth33_Soar9;#NOME?;Francosiltoso;cm/cm;RS;;;;0,3265955774
// Soar15;FCth33_Soar15;0.6191 + 0.1983 * DP + 0.8079 * TP;;cm/cm;RS;;;;1,2322443871
// Al2;FCth33_Al2;0.004 * Clay ** 2 - 0.312 * Clay + 3.289;;cm/cm;PE;;;;0,3100280947
// NASC2;FCth33_NASC2;0.418 ? 0.000377 * (Sand/10) ? 0.000269 * (Silt/10);;cm/cm;Tab. Costeiros;;;;0,3419294228
// Ol4;FCth33_Ol4;0.000328S * (Sand/10) + 0.00571 * (Clay/10);Muito Argiloso;kg/kg;PE;;;;0,2797032230
// Sil4;FCth33_Sil4;0.3071 + 0.2751 * Clay+ 0.0938 * Silt;Latossolo;%;Tab. Costeiros;;;;0,1531337341
// Sil2;FCth33_Sil2;1.946+ 0.0037 * Clay + 0.2231 * Silt;Argissolo;%;Tab. Costeiros;;;;0,2198669765
// Al1;FCth33_Al1;0.003 * Sand ** 2 - 0.911 * Sand + 57.91;;(g/g)*100;PE;;;;0,2720691156
// Mas2;FCth33_Mas2;58.3402 - 0.5936 * (Sand);;g/kg;PE;;;;0,2084314787
// NASC3;FCth33_NASC3;0.0525 + 0.000373 * (Clay/10);;cm/cm;Tab. Costeiros;;;;0,2416854798
// Silv1;FCth33_Silv1;0.073 + 0.000415 * Clay - 0.0060 * (Sand/Clay) - 0.00215 * TP + 0.00973 * Micro;;cm/cm;BA;GO;MG;RS;0,3038901405
// Silv2;FCth33_Silv2;0.412 - 0.00169 * Sand - 0.00885 * (Sand/Clay);;cm/cm;BA;GO;MG;RS;inf
// Ol7;FCth33_Ol7;-0.000019 * (Sand/10) + 0.000106 * (Silt/10) + 0.000594 (Clay/10);;kg/kg;PE;;;;0,3053628201
// Al3;FCth33_Al3;-0.030 * Silt ** 2 - 1.462 * Silt + 1.987;;(g/g)*100;PE;;;;0,3552435941
// CO3;FCth33_CO3;42.6737 - 363.9401 / Silt;Argiloso;%;MG;;;;inf
// CO4;FCth33_CO4;24.8766 + 2347.3300 / Silt;Francoargiloar;%;MG;;;;inf
// Pe7;FCth33_Pe7;0.0152 + 0.0001 * Silt;Neossolo Quartzar?nico;cm/cm;PB;;;;0,2938305860
// Al3;FCth33_Al4;-0.003 * (Silt+Clay) ** 2 - 0.180 * (Silt+Clay) +3.309;;(g/g)*100;PE;;;;0,3552435941
// Men5;FCth33_Men5;#NOME?;;cm/cm;MT;;;;0,3124055017
// NASC1;FCth33_NASC1;0.0409 + 0.000377 * (Clay/10) + 0.000108 * (Silt/10);;cm/cm;Tab. Costeiros;;;;0,2552395420
// Ol1;FCth33_Ol1;0.000333 * (Silt/10) + 0.000387 * (Clay/10);;kg/kg;PE;;;;0,3055523202
// NASC4;FCth33_NASC4;0.378 ? 0.000351 * (Sand/10);;cm/cm;Tab. Costeiros;;;;0,2913354056
// AS2;FCth33_AS2;0.0019 * Clay + 0.0024 * Silt + 0.2143;;cm/cm;Cerrado;;;;0,0000000000
// Ar;FCth33_Ar;3.1 ? 0.629 * Silt+Clay ? 0.0034 * Silt+Clay ** 2;;%;SP;;;;24,0359567343
// Mas1;FCth33_Mas1;#NOME?;;g/kg;PE;;;;0,1029828217
// DosS8;FCth33_DosS8;18.15868 + 0.21328 * Clay - 0.23668 * CS - 0.16258 * FS;Argissolo;dag/kg;RS;;;;0,0885133231
// DosS7;FCth33_DosS7;34.1352 - 0.3028 * CS - 0.34317 * FS;Neossolo;dag/kg;RS;;;;0,0806462380
// Pe6;FCth33_Pe6;0.06177 - 0.00041281 * CS . 0.00029075 * MS - 0.00038934 * VFSand;Neossolo;cm/cm;PB;;;;0,1959146015
// Pe3;FCth33_Pe3;0.24907 - 0.00007519 * CS - 0.11508 * BD;Argissolo;cm/cm;PB;;;;0,1959146015
// Mi;FCth33_Mi;#NOME?;;cm/cm;RS;;;;0,0464484453
// Men4;FCth33_Men4;0.1232 + 0.0408 * BD + 0.0086 * Micro + 0.0006 * FS/10 + 0.0011 * Silt/10;;cm/cm;GO;;;;0,1354213451
// Pe4;FCth33_Pe4;0.33983 - 0.00037477 * CS - 0.06527 * BD - 0.05612 * DP;Argissolo;cm/cm;PB;;;;0,1959146015
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
// Men3;FCth33_Men3;#NOME?;;cm/cm;MG;;;;0,3313789413
// Mar;FCth33_Mar;0.47352559 + 0.00017979 * Clay - 0.12025765 * BD;;m/mì;RS;;;;0,0836264034
// Ol3;FCth33_Ol3;0.000079 * (Sand/10) +0.000444 *(Silt/10) + 0.000484*(Clay/10) ? 0.069234 * BD;Argiloso;kg/kg;PE;;;;0,4361980955
// Ol5;FCth33_Ol5;#NOME?;;kg/kg;PE;;;;0,2278743835
// Ol6;FCth33_Ol6;0.000088 * (Sand/10) + 0.000449 * (Silt/10) + 0.000448 * (Clay/10) ? 0.058166 * BD;;kg/kg;PE;;;;0,4144975555
// Ol8;FCth33_Ol8;#NOME?;;kg/kg;PE;;;;0,2230719771
// Ol9;FCth33_Ol9;#NOME?;;kg/kg;PE;;;;0,0000000000
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