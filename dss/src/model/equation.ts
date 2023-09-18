import { Empty, InputsT, StatesT } from "./utils";
import { EqFunction } from "./eq-result";

export type EqType = 'fieldCapacity' | 'permanentWiltingPoint';

export class Equation {
  eq: EqFunction;
  //FIXME: criar um type com todas estas classes
  class: string | Empty;
  statesAppliesTo: StatesT[];
  //FIXME: criar um type com todas estas classes
  texturalClass: string | Empty;
  //FIXME: verificar se existem formulas que não recebem nenhum input
  inputsAccepted: InputsT[];
  rmse: number;
  type: EqType;

  constructor(
    _texturalClass: string | Empty,
    _inputsAccepted: InputsT[],
    _eq: EqFunction,
    _class: string | Empty,
    _states: StatesT[],
    _rmse: number,
    _type: EqType
  ) {

    this.class = _class;
    this.statesAppliesTo = _states;
    this.texturalClass = _texturalClass;
    this.eq = _eq;
    this.inputsAccepted = _inputsAccepted;
    this.rmse = _rmse;
    this.type = _type;
  }
}
