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
      '',                                                    // Textural Class
      [InputsT.bulkDensity],                                       // Inputs Accepted
      (bd: number): EqResult => {                            // Equation
        const result = (0.46082 - 0.18014 * bd);
        return new EqResult(result, 'cm/cm')
      },
      '',                                                    // Class
      [StatesT.BA],                                                // States
      0,
      'fieldCapacity'
  ),

  new Equation(
    '',                                                          // Textural Class
    //FIXME: VERIFICAR SE CS = claySilt ou coarseSand
    [InputsT.sand, InputsT.coarseSand, InputsT.liquidLimits],                        // Inputs Accepted
    (CS: number, sand: number, LL: number): EqResult => {        // Equation
      const result = (169 + 17.1 * Log((sand/10)) - 17.5 * Log((CS/10)) + 0.53 * LL);
      return new EqResult(result, 'g/kg')
    },
    '',                                                         // Class
    [StatesT.RS, StatesT.SC],                                               // States
    0,
    'fieldCapacity'
  ),

  new Equation(
    '',                                                          // Textural Class
    //FIXME: VERIFICAR SE CS = claySilt ou coarseSand
    [InputsT.organicMatter, InputsT.coarseSand, InputsT.liquidLimits],               // Inputs Accepted
    (CS: number, LL: number, OM: number): EqResult => {          // Equation
      console.log("OM: ", OM, "CS:", CS, "LL: ", LL)
      const result = (179 + 13 * Log((OM/10)) - 23.6 * Log((CS/10)) + 0.53 * LL);
      return new EqResult(result, 'g/kg')                       // Measurement Unit
    },
    '',                                                         // Class
    [StatesT.RS, StatesT.SC],                                               // States
    0,
    'fieldCapacity'
  ),

]);
