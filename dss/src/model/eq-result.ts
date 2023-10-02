import { EqType } from "./equation";
import { MeasurementUnitT } from "./utils";

export type EqFunction = (...inputs: number[]) => EqResult;
export class EqResult {
  result: number;
  measurementUnit: MeasurementUnitT;
  eqType!: EqType;

  constructor(_result: number, _measurementUnit: MeasurementUnitT) {
    this.result = _result;
    this.measurementUnit = _measurementUnit;
  }

  toString(): string {
    console.log(this.eqType);
    let type = ""
    switch(this.eqType) {
      case 'fieldCapacity':
        type = 'Capacidade de Campo: '
        break;
      case 'permanentWiltingPoint':
        type = 'Ponto de Murcha Permanente: '
        break;
      default:
        type = '';
    }

    return type + this.result + ' ' + this.measurementUnit;
  }
}
