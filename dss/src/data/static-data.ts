import { EqResult } from 'src/model/eq-result';
import { InputsT, MeasurementUnitT, StatesT } from './../model/utils';
import { Equation } from "src/model/equation";

function Log (num: number) {
  return Math.log(num);
}

// Importante manter os parametros da função que aplica a equação em ordem alfabética de acordo com os nomes na tela inicial!!!!
// exemplo formula recebe CS -> considerar coarseSand para ordem alfabética
export const EQUATIONS: Set<Equation> = new Set([

  new Equation(
      '',                                                                 // Textural Class
      [InputsT.bulkDensity],                                              // Inputs Accepted
      (bd: number): EqResult => {                                         // Equation
        const result = (0.46082 - 0.18014 * bd);
        return new EqResult(result, 'cm/cm')
      },
      '',                                                                 // Class
      [StatesT.BA],                                                       // States
      0,                                                                  //RMSE
      'fieldCapacity'
  ),

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
      return new EqResult(result, 'cm/cm')
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
      return new EqResult(result, 'cm/cm')
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
      return new EqResult(result, 'cm/cm')
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
      return new EqResult(result, 'cm/cm')
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
      return new EqResult(result, 'cm/cm')
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
      return new EqResult(result, 'cm/cm')
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
      return new EqResult(result, 'cm/cm')
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
      return new EqResult(result, 'cm/cm')
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
      return new EqResult(result, 'cm/cm')
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
      return new EqResult(result, 'g/kg')
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





// FC33,Ol2,FCth33_Ol2,0.000341 * (Silt/10) + 0.000374 * (Clay/10)',Francoargiloso. Francoargiloarenosoenoso,PE,"0,30558965855629500"
// FC33,Ol3,FCth33_Ol3,0.000079 * (Sand/10) +0.000444 *(Silt/10) + 0.000484*(Clay/10) ? 0.069234 * BD',Argiloso,PE,"0,43619809548267100"
// FC33,Ol4,FCth33_Ol4,0.000328S * (Sand/10) + 0.00571 * (Clay/10)',Muito Argiloso,PE,"0,27970322303167800"
// FC33,Ol5,FCth33_Ol5,-0.000050 * (Sand) + 0.000190 * (Silt) + 0.000326 * (Clay) + 0.0473371 * BD',,PE,"0,22787438349635600"
// FC33,Ol6,FCth33_Ol6,0.000088 * (Sand/10) + 0.000449 * (Silt/10) + 0.000448 * (Clay/10) ? 0.058166 * BD',,PE,"0,41449755553624200"
// FC33,Ol7,FCth33_Ol7,-0.000019 * (Sand/10) + 0.000106 * (Silt/10) + 0.000594 (Clay/10)',,PE,"0,30536282009533300"
// FC33,Ol8,FCth33_Ol8,-0.000073 * (Sand/10) + 0.000259 * (Silt/10) + 0.000280* (Clay/10) + 0.050707 * BD',,PE,"0,22307197707623500"
// FC33,Ol9,FCth33_Ol9,-0.000073 * (Sand/10) + 0.000259* (Silt/10) + 0.000280 * (Clay/10) + 0.050707 BD',,PE,"0,14829103197748000"
// FC33,Sou1,FCth33_Sou1,0.15839 + 0.00031 * Clay/10 ? 0.00240 * Microporosity',,MS. MT. GO. TO. MA. PI. BA. MG,"0,16001648308781300"
// FC33,Sou2,FCth33_Sou2,0.08595 + 0.006102 * Macroporosity',,MS. MT. GO. TO. MA. PI. BA. MG,"0,22417691572343400"
// FC33,Ros2,FCth33_Ros2,0.057 ? 0.001 * Sand + 0.743 * Microporosity',,MS. MT. GO. TO. MA. PI. BA. MG,"0,03476399489539880"
// FC33,Soar1,FCth33_Soar1,-1.6757 + 0.7199 * Dp',Arenoso Franco,RS,"0,20242428490763600"
// FC33,Soar3,FCth33_Soar3,- 0.1552 - 6.4217 * OM + 1.3011 * TP',Argilo Arenoso,RS,"24,65971038870640000"
// FC33,Soar4,FCth33_Soar4,0.0432 + 0.0019 * Clay + 0.0293 * Dp + 0.1952 * TP',Argilo Siltoso,RS,"0,07543561358164390"
// FC33,Soar5,FCth33_Soar5,0.0746 + 0.4946 * TP',Argiloso,RS,"0,07498959922134700"
// FC33,Soar7,FCth33_Soar7,- 0.1857 + 0.0024 * Sand - 5.7945 * OM + 0.7528 * TP',Francoargiloarenosoenoso,RS,"22,39257254059080000"
// FC33,Soar8,FCth33_Soar8,2.1696 - 1.4883 * BD + 0.6744 * Dp - 3.3203 * TP',Francoargiloso,RS,"0,23629719930661600"
// FC33,Soar9,FCth33_Soar9,-0.6191 + 0.1983 * Dp + 0.1799 * TP',Francosiltoso,RS,"0,32659557744714800"
// FC33,Soar10,FCth33_Soar10,0.0628 - 0.0005 * Sand - 0.00734 * OM + 0.0398 * Dp + 0.1515 * TP',,RS,"0,12859695600143700"
// FC33,Sil1,FCth33_Sil1,5.495 + 0.2152 Clay + 0.8054 * OM',Argissolo,BA. PE. CE. PB. AL. SE,"0,15586100039991400"
// FC33,Sil2,FCth33_Sil2,1.946+ 0.0037 * Clay + 0.2231 * Silt',Argissolo,BA. PE. CE. PB. AL. SE,"0,21986697647072900"
// FC33,Sil3,FCth33_Sil3,1.854 + 0.2156 * Clay + 0.8054 * OM',Latossolo,BA. PE. CE. PB. AL. SE,"0,18860268320084200"
// FC33,Sil4,FCth33_Sil4,0.3071 + 0.2751 * Clay+ 0.0938 * Silt',Latossolo,BA. PE. CE. PB. AL. SE,"0,15313373410059300"
// FC33,Sil5,FCth33_Sil5,9.3274 + 0.058 OM + 0.1014 * Clay',,BA. PE. CE. PB. AL. SE,"0,17956496683848300"
// FC33,Sil6,FCth33_Sil6,9.7953 - 2.6231 * OM + 0.0891 * Clay',,BA. PE. CE. PB. AL. SE,"0,26468687235278000"
// FC33,Silv1,FCth33_Silv1,0.073 + 0.000415 * Clay - 0.0060 * (Sand/Clay) - 0.00215 * TP + 0.00973 * Microporosity',,"BA, GO, MG, RS","223009562,00000000000000000"
// FC33,Silv2,FCth33_Silv2,0.412 - 0.00169 * Sand - 0.00885 * (Sand/Clay)',,"BA, GO, MG, RS","66699004,00000000000000000"
// FC33,Pe1,FCth33_Pe1,0.011429 - 0.000066799 * Sand + 0.28462 * Microporosity + 0.04162 * Macroporosity - 0.02548 * Dp',,PB,"0,25238744071032700"
// FC33,Pe2,FCth33_Pe2,0.01812 + 0.26123 * Microporosity',Latossolo,PB,"0,19591460145638300"
// FC33,Pe4,FCth33_Pe4,0.33983 - 0.00037477 * CS - 0.06527 * BD - 0.05612 * Dp',Argissolo,PB,"0,17917763760959300"
// FC33,Pe7,FCth33_Pe7,0.0152 + 0.0001 * Silt',Neossolo,PB,"0,29383058596395600"
// FC33,Soar15,FCth33_Soar15,0.6191 + 0.1983 * DP + 0.8079 * TP',,RS,"1,23224438711656000"
// FC33,Mi,FCth33_Mi,-0.0789 + 0.0362 * BD + 1.0011 * Microporosity - 0.0004 * FS',,RS,"0,04644844529287270"
// PWP,Al1,PWP_Al1,129.0 - 0.04 ** Sand',,PE,"0,11637003880250600"
// PWP,Al2,PWP_Al2,0.379 * Clay ** 0.905',,PE,"0,22494848210566200"
// PWP,Al3,PWP_Al3,1.384 * Silt ** 0.654',,PE,"0,13701281699032900"
// PWP,Al4,PWP_Al4,0.213 * (Silt+Clay) ** 0.990',,PE,"0,22199297602643200"
// PWP,Av5,PWP_Av5,- 0.124 * Sand + 0.156 * Clay + 0.060 * Silt + 10.811 * BD + 5.517 * TP',,MG,"0,06785996906414500"
// PWP,Av6,PWP_Av6,- 0.071 * Sand + 0.210 * Clay + 0.113 * Silt +8.803 * BD',,MG,"0,06888555014302960"
// PWP,Av7,PWP_Av7,0.054 * Sand + 0.300 * Clay + 0.196 * Silt',,MG,"0,07416476452891540"
// PWP,Av8,PWP_Av8,0.070 * Sand +0.358 * Clay',,MG,"0,09338326804637440"
// PWP,Ar,PWP_Ar,398.9 * (Silt+Clay) / (1308.1 + Silt+Clay)',,SP,"0,07518752872065800"
// PWP,ASS,PWP_ASS,26.16995195 - 0.04098682 * Sand * ln(Sand)',,BR,"0,06560423623355370"
// PWP,BAL,PWP_BAL,0.287 * Clay + 1.4',,Cerrado,"12,94898614182590000"
// PWP,DosS1,PWP_DosS1,7.70062 + 1.91701 * OM + 0.07225 * Clay - 0.07730 * CS ?0.09263 * FS',Argissolo,RS,"0,10015099279312600"
// PWP,DosS2,PWP_DosS2,0.8351 + 0.5599 * OM + 0.3506 * Clay',Cambissolo,RS,"0,07986884219724510"
// PWP,DosS3,PWP_DosS3,2.57914 + 1.85627 * OM + 0.1759 * Clay - 0.04588 * CS',Argissolo,RS,"0,08315019412825730"
// PWP,DosS4,PWP_DosS4,11.7889 + 0.9991 * OM + 0.1557 * Clay - 0.1419 * CS -0.1361 * FS',Argissolo,RS,"0,05606002808763050"
// PWP,DosS5,PWP_DosS5,17.31904 + 1.75679 * OM - 0.17837 * CS - 0.21368 * FS',Neossolo,RS,"0,08053772216881520"
// PWP,DosS6,PWP_DosS6,2.44219 + 5.17011 * OM - 0.13334* FS',Planossolo,RS,"0,15625269401995500"
// PWP,DosS7,PWP_DosS7,21.5649 - 0.1932 * CS - 0.2004 * FS',Neossolo,RS,"0,06786524823801500"
// PWP,DosS8,PWP_DosS8,8.11431 + 0.21634 * Clay - 0.13063 * CS - 0.09715 * FS',Argissolo,RS,"0,07139388003223330"
// PWP,DosS9,PWP_DosS9,27.08723 + 1.18014 * OM - 0.29777 * CS - 0.35548 * FS',Cambissolo,RS,"0,05349441799733570"
// PWP,DosS10,PWP_DosS10,7.20816 + 3.64925 * OM + 0.17031 * Clay - 0.15310 * CS - 0.10005 * FS',Argissolo,RS,"0,07090751621861750"
// PWP,DosS11,PWP_DosS11,39.45134-2.47572*OM-0.33157*CS-0.30641*FS',Neossolo,RS,"0,10709736385930700"
// PWP,DosS12,PWP_DosS12,0.82593+5.38527*OM+0.29199*Clay-0.16418*FS',Planossolo,RS,"0,11379225829824200"
// PWP,Doss13,PWP_DosS13,11.50346 + 1.55563 * MO + 0.14390 * Clay - 0.13118 * CS- 0.16458 * FS,,RS,"0,12068103913608600"
// PWP,Gai,PWP_Gai,0.088 * COS + 0.340 * Clay + 0.057 * Silt',,"CE, PI","0,10167103832788700"
// PWP,Gia2,PWP_Gia2,0.031 + 0.005 * Silt + 0.003 * Clay',,"SC, RS","0,07000417207162970"
// PWP,Gia3,PWP_Gia3,0.024 + 0.005 * Silt + 0.003 * Clay',,,"0,06741383374244930"
// PWP,Kl,PWP_Kl,0.0003 * Clay + 0.0118',,RS,"203031283,00000000000000000"
// PWP,Mar,PWP_Mar,0.08487488 + 0.00097697 * OM +  0.00042973 * Clay - 0.0002316 * Silt + 0.16789394 * BD',,RS,"0,15653992119759500"
// PWP,Mas1,PWP_Mas1,-1.0482 + 0.13003 * (Silt) + 0.33558 * (Clay)',,PE,"0,07385426288177500"
// PWP,Mas2,PWP_Mas2,0.2708 + 0.3468 * (Clay)',,PE,"0,09095578993078980"
// PWP,Men1,PWP_Men1,1878 + 0.0872 * BD + 0.00374 * Microporosity + 0.00101 * Silt + 0.00256 * Clay',,RS,"0,29435954023041900"
// PWP,Men2,PWP_Men2,-0.0178 + 0.00216 * Microporosity + 0.00212 * Silt + 0.00165 * Clay',,BA,"0,24363329047686800"
// PWP,Men3,PWP_Men3,0.0468 + 0.0848 * BD + 0.0030 * Microporosity - 0.0022 * CS - 0.0020 * FS',,MG,"0,12114421090117700"
// PWP,Men4,PWP_Men4,0.0048 + 0.0525 * DP - 0.0020 * Macroporosity + 0.0099 * Sand + 0.0016 * FS + 0.0016 * Silt + 0.0091 * Clay',,GO,"0,09138000397072890"
// PWP,Men5,PWP_Men5,- 0.0550 + 0.0014 * TP + 0.0025 * Silt + 0.0022 * Clay',,MT,"0,27507080519734000"
// PWP,NASC1,PWP_NASC1,0.0812 + 0.000279* (Clay/10) + 0.0000713 * (Silt/10) ? 0.0457 * BD',,BA. PE. CE. PB. AL. SE,"0,21495436572924400"
// PWP,NASC2,PWP_NASC2,0.360 ? 0.000279 * (Sand/10) ? 0.000208 * (Silt/10) ? 0.0457 * BD',,BA. PE. CE. PB. AL. SE,"0,22685698137901800"
// PWP,NASC3,PWP_NASC3,0.0221 + 0.000288 * (Clay/10)',,BA. PE. CE. PB. AL. SE,"0,20953986490430000"
// PWP,NASC4,PWP_NASC4,0.272 ? 0.000269 * (Sand/10)',,BA. PE. CE. PB. AL. SE,"0,20722583889829000"
// PWP,Ol1,PWP_Ol1,0.000038 * Sand/10 + 0.000153 * Silt/10 + 0.000341 * Clay/10 ? 0.030861 * BD',,PE,"0,29159356481187700"
// PWP,Ol2,PWP_Ol2,0.000032 * Sand/10 + 0.000223 * Silt/10 +0.00062 * Clay/10',Francoargiloso. Francoargiloarenosoenoso,PE,"0,23407555882196600"
// PWP,Ol4,PWP_Ol4,0.000282 * Silt/10 + 0.000487 * Clay/10 ? 0.101537 * BD',Muito Argiloso,PE,"0,42894955412434600"
// PWP,Ol5,PWP_Ol5,0.000087 Silt/10  + 0.000285 * Clay/10',,PE,"0,23626631863915300"
// PWP,Ol6,PWP_Ol6,0.000072 * Sand/10 + 0.000195 Silt/10 + 0.000363 * Clay/10  ? 0.052198 * BD',,PE,"0,33186961788978500"
// PWP,Ol7,PWP_Ol7,-0.000007 * Sand/10 + 0.000042 * Silt/10 + 0.000293 * Clay/10',,PE,"0,23638957291757300"
// PWP,Ol8,PWP_Ol8,0.000121 * Silt/10 + 0.000260 * Clay/10',,PE,"0,23629102800090400"
// PWP,Ol9,PWP_Ol9,0.000085 Sand + 0.000229 * Silt + 0.000381 * Clay ? 0.062662 * BD',,PE,"0,35195724197735800"
// PWP,Ram1,PWP_Ram1,0.074 + 0.00033*Clay/10 + 0.0382*COS ? 0.0001*CS/10',Latossolo,PI,"0,13395834509533900"
// PWP,Ram2,PWP_Ram2,0.0858 + 0.00021*Clay/10 ? 0.0002*Silt/10 + 00001*FS/10',Argissolo,PI,"0,14529581373792400"
// PWP,Ram3,PWP_Ram3,0.1174 ? 0.00034*Clay/10',Neossolo,PI,"0,13712070037058700"
// PWP,Ram4,PWP_Ram4,0.2682 ? 0.0002*TA',Plintossolo,PI,
// PWP,Ram5,PWP_Ram5,0.074 + 0.00033 * Sand/10 + 0.0382 * COS ? 0.0001 * CS/10',,PI,"0,13505468265175200"
// PWP,Rei1,PWP_Rei1,- 0.04 + 0.15 * (Clay*100) + 0.17 * (Clay+Silt*100) + 0.91 * (OM*100)+ 0.026 * BD',,RS,"0,02149274460892490"
// PWP,Rei2,PWP_Rei2,0.236 + 0.044 * Clay*100 - 0.21 * (Sand*100)',,RS,"0,14829103197748000"
// PWP,Sou1,PWP_Sou1,0.15839 + 0.00031 * (Clay/10) ? 0.00240 * Microporosity',,BA. PE. CE. PB. AL. SE,"0,10419879922245100"
// PWP,Sou2,PWP_Sou2,0.0591 + 0.00646 * Macroporosity',,BA. PE. CE. PB. AL. SE,"153893877,00000000000000000"
// PWP,Vb1,PWP_Vb1,6.35 + 0.284 * Clay*100',,BR,"0,08423994212727880"
// PWP,Vb2,PWP_Vb2,3.83 + 0.272 * Clay*100 + 0.212 * Silt*100',,BR,"0,06653987736019360"
// PWP,Ros1,PWP_Ros1,0.057 ? 0.001 * Sand + 0.743 * Microporosity',,Cerrado,"0,06307736835052400"
// PWP,Ros2,PWP_Ros2,0.568 ? 0.003 * Sand ? 0.001 * Clay ? 0.281 * TP ? 0.069 * BD + 0.005 * COS',,Cerrado,"69488481,00000000000000000"
// PWP,Soar1,PWP_Soar1,-2.8034 + 0.0127 * Sand . 0.7130 * Dp',Arenoso Franco,RS,"0,74645936290470300"
// PWP,Soar2,PWP_Soar2,- 0.2308 + 0.1554 * Dp',Argilo Arenoso,RS,"0,10617680984023600"
// PWP,Soar3,PWP_Soar3,-0.8519 - 0.0284 * Sand . 0.5231 * Dp',Argilo Siltoso,RS,"0,01056941179390310"
// PWP,Soar4,PWP_Soar4,0.1818 - 0.0022 * Silt - 0.0010 * Sand +  0.0279 * TP',Argiloso,RS,"0,14145882594930900"
// PWP,Soar6,PWP_Soar5,-0.1394 * 0.0042 * Clay -2.0328 * OM + 0.565 * TP',Francoarenoso,RS,"0,07648040368826540"
// PWP,Soar7,PWP_Soar6,0.1571 - 0.0048 * Silt - 3.8154 * OM - 0.0437 * Dp . 0.4512 * TP',Francoargiloarenosoenoso,RS,"0,14829103197748000"
// PWP,Soar8,PWP_Soar7,0.0996 + 0.2248 * TP',Francoargiloso,RS,"0,07640519513499500"
// PWP,Soar9,PWP_Soar8,0.0826 + 0.0041 * Sand',Francosiltoso,RS,"0,16992236214125400"
// PWP,Soar10,PWP_Soar9,0.1531 * Clay + 0.0072 * BD + 0.0240 *TP',,RS,"0,06162279221044020"
// PWP,Sil1,PWP_Sil1,1.946+ 0.0037 * Clay + 0.2231 * Silt',Argissolo,BA. PE. CE. PB. AL. SE,"201468265,00000000000000000"
// PWP,Sil2,PWP_Sil2,2.2397 + 1.581 * Clay',Argissolo,BA. PE. CE. PB. AL. SE,"0,46114533168109100"
// PWP,Sil3,PWP_Sil3,6.7168 + 0.2281 * Clay',Latossolo,BA. PE. CE. PB. AL. SE,"0,09678997374554590"
// PWP,Sil4,PWP_Sil4,8.034 + 1.581 * Clay',Latossolo,BA. PE. CE. PB. AL. SE,"0,50950497796098100"
// PWP,Sil5,PWP_Sil5,9.23 + 0.2511 * Silt - 0.074 * FS',,BA. PE. CE. PB. AL. SE,"0,11447569016611100"
// PWP,Sil6,PWP_Sil6,9.0821 + 0.3781 * Clay',,BA. PE. CE. PB. AL. SE,"0,06674562137746500"
// PWP,Silv1,PWP_Silv1,0.123 - 0.00108 * Sand - 0.0204 * (Silt/Clay) - 0.00171 * TP + 0.05710 * Microporosity',,"BA, GO, MG, RS","0,15865786267046900"
// PWP,Ur,PWP_Ur,29.8999 - 0.15600 * Sand + 0.18710 * Clay - 6.7591 * BD',,RS,"0,08300510937856810"
// PWP,Gue,PWP_Gue,- 0.005 + 0.422 * Microporosity + 0.025 * COS',,RS,"0,09553445763693650"
// PWP,Pe1,PWP_Pe1,0.09715 - 0.00048 * Sand + 0.22538 * Microporosity - 0.02314 * Dp',,PB,"0,12922550968862500"
// PWP,Pe2,PWP_Pe2,0.01321 + 0.20505 * Microporosity',Latossolo,PB,"0,15615025346334900"
// PWP,Pe3,PWP_Pe3,0.19817 - 0.00007741 * CS - 0.09215 * BD',Argissolo,PB,"0,14962043062798400"
// PWP,Pe4,PWP_Pe4,0.16288 - 0.07336 * BD',Argissolo,PB,"105120292,00000000000000000"
// PWP,Rei5,PWP_Rei5,140 + 12.7 * Log ((OM/10)) + 0.065 * Clay/10 - 0.28 * Sand/10',,"RS, SC","0,11586941698003000"
// PWP,Dicos1,PWP_Dicos1,0.5624 - 0.1561 * BD- 0.5720 * TP',,BA,"0,18780961124763600"
// PWP,Dicos2,PWP_Dicos2,0.24049 - 0.10555 * BD',,BA,"0,14946996198678500"
// PWP,Dicos3,PWP_Dicos3,0.17058 - 0.14580 * CS',,BA,"0,04135085265568060"
// PWP,Dicos4,PWP_Dicos4,1.24529 - 0.21743 * CS - 0.43746 * BD - 0.99032 * TP',,BA,"0,06170657493025280"
// PWP,Dicos5,PWP_Dicos5,1.30028 - 0.20449 * CS - 0.40620 * BD - 1.12476 * TP',,BA,"0,05765932833771280"
// PWP,Soar15,PWP_Soar15,0.0826 + 0.0041 * Sand',,RS,"0,16992236214125400"
// PWP,Mi,PWP_Mi,-0.1974 + 0.1093 * Dp - 0.3050 * Macroporosity + 0.0011 * Silt + 0.0024 * Clay',,RS,"0,08899373828710120"
// PWP,Fer,PWP_Fer,0.004705 + 0.00299 * Clay + 0.000642 * Silt - 0.000156 * FS',,"MG, BA, ES","0,08197860256477050"
// PWP,DosS14,PWP_DosS14,9.944674 + 1.01884 * OM + 0.14405 * Clay - 0.09538 * CS - 0.1052 * FS',,RS,"0,06579384942350250"


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