import { Injectable } from "@angular/core";
import { EQUATIONS } from "src/data/static-data";
import { Equation } from "src/model/equation";
import { InputsT, SoilClassT, StatesT, TexturalClassT } from "src/model/utils";

type NullableString = string | null | undefined

@Injectable({providedIn: 'root'})
export class EquationService {

  //TODO: adicionar classes e outras variaveis que se aplicam no filtro
  // Estados (sempre um) -> Classe textural e classe de solo é apenas uma
  findUsableEquations(inputs: InputsT[], state: StatesT, soilClass: NullableString, texturalClass: NullableString): Equation[] {
    // console.log("Procurando Equações compativeis, inputs: ", inputs, " state: ", state);
    return Array.from(EQUATIONS).filter(eq => {
      let inputsIsAccepted = false;
      let stateIsAccepted = false;
      let soilClassIsAccepted = false;
      let texturalClassIsAccepted = false;
      let inputsMatchCounter = 0;
      let statesMatchCounter = 0;

      if (soilClass === '') soilClass = null;
      if (texturalClass === '') texturalClass = null;

      // Filter soilClass & texturalClass
      if (!soilClass && !texturalClass) {
        soilClassIsAccepted = true;
        texturalClassIsAccepted = true;
      } else {
        if (soilClass == null) {
          soilClassIsAccepted = false;
        } else {
          soilClassIsAccepted = eq.soilClass.toLocaleLowerCase() == soilClass?.toLocaleLowerCase();
        }

        if (texturalClass == null) {
          texturalClassIsAccepted = false;
        } else {
          texturalClassIsAccepted = eq.texturalClass.toLocaleLowerCase() == texturalClass?.toLocaleLowerCase();
        }
      }

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

      return inputsIsAccepted && stateIsAccepted && (soilClassIsAccepted || texturalClassIsAccepted);
    });
  }


}
