import { Empty, InputsT, StatesT } from "./utils";
import { EqFunction } from "./eq-result";

export type EqType = 'fieldCapacity' | 'permanentWiltingPoint';

export class Equation {
  eq: EqFunction;
  //FIXME: criar um type com todas estas classes
  soilClass: string | Empty;
  statesAppliesTo: StatesT[];
  //FIXME: criar um type com todas estas classes
  texturalClass: string | Empty;
  //FIXME: verificar se existem formulas que não recebem nenhum input
  inputsAccepted: InputsT[];
  rmse: number;
  type: EqType;
  numKpa!: number;

  constructor(
    _texturalClass: string | Empty,
    _inputsAccepted: InputsT[],
    _eq: EqFunction,
    _soilClass: string | Empty,
    _states: StatesT[],
    _rmse: number,
    _type: EqType,
    _numKpa: number,
  ) {

    this.soilClass = _soilClass;
    this.statesAppliesTo = _states;
    this.texturalClass = _texturalClass;
    this.eq = _eq;
    this.inputsAccepted = _inputsAccepted;
    this.rmse = _rmse;
    this.type = _type;
    this.numKpa = _numKpa;
  }
}
