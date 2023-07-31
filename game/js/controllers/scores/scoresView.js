import { ControllerView } from "../controllerView.js";
import { ScoreView } from "./scoreView.js";
//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class ScoresView extends ControllerView {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.elementsContainer.className = 'scoresView';
    }

        showScores(scores){
        scores.forEach(score => {
            let scoreView = new ScoreView(this.elementsContainer, score);
        })
    }

}