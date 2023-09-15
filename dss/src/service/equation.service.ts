import { Injectable } from "@angular/core";
import { EQUATIONS } from "src/data/static-data";
import { Empty, InputsT, StatesT } from "src/model/utils";


@Injectable({providedIn: 'root'})
export class EquationService {

  //TODO: adicionar classes e outras variaveis que se aplicam no filtro
  findUsableEquations(inputs: InputsT[], states: StatesT[] | Empty) {
    return Array.from(EQUATIONS).filter(eq => {
      let inputsState = false;
      let inputsMatchCounter = 0;
      eq.inputsAccepted.forEach(v => {
        inputs.forEach(i => {
          if (v == i) {
            inputsMatchCounter++;
          }
        })
      })
      //FIXME: revisar se a formula deve aplicar equações que usem menos variaveis do que as informadas!
      inputsState = eq.inputsAccepted.length <= inputsMatchCounter;
      return inputsState;
    });
  }
}
