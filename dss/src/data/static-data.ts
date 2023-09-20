import { EqResult } from 'src/model/eq-result';
import { InputsT, MeasurementUnitT, StatesT } from './../model/utils';
import { Equation } from "src/model/equation";

function Log (num: number) {
  return Math.log(num);
}

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
    [InputsT.sand, InputsT.claySilt, InputsT.liquidLimits],                        // Inputs Accepted
    (sand: number, CS: number, LL: number): EqResult => {        // Equation
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
    [InputsT.organicMatter, InputsT.claySilt, InputsT.liquidLimits],               // Inputs Accepted
    (OM: number, CS: number, LL: number): EqResult => {          // Equation
      const result = (179 + 13 * Log((OM/10)) - 23.6 * Log((CS/10)) + 0.53 * LL);
      return new EqResult(result, 'g/kg')                       // Measurement Unit
    },
    '',                                                         // Class
    [StatesT.RS, StatesT.SC],                                               // States
    0,
    'fieldCapacity'
  ),

]);
