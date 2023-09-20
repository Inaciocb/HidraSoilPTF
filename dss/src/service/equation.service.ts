import { Injectable } from "@angular/core";
import { EQUATIONS } from "src/data/static-data";
import { Equation } from "src/model/equation";
import { InputsT, StatesT } from "src/model/utils";


@Injectable({providedIn: 'root'})
export class EquationService {

  //TODO: adicionar classes e outras variaveis que se aplicam no filtro
  // Estados (sempre um) -> Classe textural e classe de solo é apenas uma
  findUsableEquations(inputs: InputsT[], state: StatesT): Equation[] {
    // console.log("Procurando Equações compativeis, inputs: ", inputs, " state: ", state);
    return Array.from(EQUATIONS).filter(eq => {
      let inputsIsAccepted = false;
      let stateIsAccepted = false;
      let inputsMatchCounter = 0;
      let statesMatchCounter = 0;

      // Filter Inputs ** Precisa revisar a lógica **
      eq.inputsAccepted.forEach(inputsAccepted => {
        inputs.forEach(i => {
          if (inputsAccepted == i) {
            inputsMatchCounter++;
          }
        })
      });
      inputsIsAccepted = eq.inputsAccepted.length <= inputsMatchCounter;

      // Filter State ** Aceita se existe pelo menos 1 estado igual ao informado **
      if (!state) {
        stateIsAccepted = true;
      } else {

      eq.statesAppliesTo.forEach(statesAppliesTo => {
        if (statesAppliesTo == state) {
            statesMatchCounter++;
          }
        })
        stateIsAccepted = statesMatchCounter > 0;
      }

      return inputsIsAccepted && stateIsAccepted;
    });
  }


}
