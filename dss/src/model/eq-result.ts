import { MeasurementUnitT } from "./utils";

export type EqFunction = (...inputs: number[]) => EqResult;
export class EqResult {
  result: number;
  measurementUnit: MeasurementUnitT;

  constructor(_result: number, _measurementUnit: MeasurementUnitT) {
    this.result = _result;
    this.measurementUnit = _measurementUnit;
  }
}
