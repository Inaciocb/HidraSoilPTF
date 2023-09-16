import { Injectable } from "@angular/core";
import { EQUATIONS } from "src/data/static-data";
import { Empty, InputsT, StatesT } from "src/model/utils";


@Injectable({providedIn: 'root'})
export class EquationService {

  //TODO: adicionar classes e outras variaveis que se aplicam no filtro
  findUsableEquations(inputs: InputsT[], states: StatesT[]) {
    return Array.from(EQUATIONS).filter(eq => {
      let inputsState = false;
      let statesState = false;
      let inputsMatchCounter = 0;
      let statesMatchCounter = 0;
      // Filter Inputs
      eq.inputsAccepted.forEach(inputsAccepted => {
        inputs.forEach(i => {
          if (inputsAccepted == i) {
            inputsMatchCounter++;
          }
        })
      });

      // Filter States
      eq.statesAppliesTo.forEach(statesAppliesTo => {
        states.forEach(state => {
          if (statesAppliesTo == state) {
            statesMatchCounter++;
          }
        })
      })
      //FIXME: revisar se a formula deve aplicar equações que usem menos variaveis do que as informadas!
      inputsState = eq.inputsAccepted.length <= inputsMatchCounter;
      //FIXME: revisar logica
      statesState = eq.statesAppliesTo.length >= statesMatchCounter;
      return inputsState;
    });
  }
}
