import { Empty, InputsT, MeasurementUnitT, StatesT } from "./utils";
import { EqResult } from "./eq-result";

export type EqFunction = (...inputs: number[]) => EqResult;
export class Equation {
  eq: EqFunction;
  //FIXME: criar um type com todas estas classes
  class: string | Empty;
  statesAppliesTo: StatesT[] | Empty;
  //FIXME: criar um type com todas estas classes
  texturalClass: string | Empty;
  //FIXME: verificar se existem formulas que não recebem nenhum input
  inputsAccepted: InputsT[] | Empty;

  constructor(
    _texturalClass: string | Empty,
    _inputsAccepted: InputsT[],
    _eq: EqFunction,
    _class: string | Empty,
    _states: StatesT[] | Empty,
  ) {

    this.class = _class;
    this.statesAppliesTo = _states;
    this.texturalClass = _texturalClass;
    this.eq = _eq;
    this.inputsAccepted = _inputsAccepted;
  }
}
