import { DIFFICULTY_EASY, DIFFICULTY_MEDIUM,DIFFICULTY_HARD  } from "../../libs/constants/constants.js";
import { div } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";
//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class DifficultyView extends ControllerView {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.elementsContainer.className = 'difficultyView';
        
        div({innerHTML:'EASY',className: 'game-button', onclick: this.onButtonCLick.bind(this, DIFFICULTY_EASY)},this.elementsContainer);

        div({innerHTML:'MEDIUM',className: 'game-button', onclick: this.onButtonCLick.bind(this, DIFFICULTY_MEDIUM)},this.elementsContainer);

        div({innerHTML:'HARD',className: 'game-button', onclick: this.onButtonCLick.bind(this, DIFFICULTY_HARD)},this.elementsContainer);


        /*var easyBtn = document.createElement('div');
        this.elementsContainer.appendChild(easyBtn);
        easyBtn.innerHTML = 'EASY';
        easyBtn.className = 'game-button';*/


    }
    onButtonCLick(difficulty){
        var event = new CustomEvent('save-difficulty',{
            detail: {
                difficulty: difficulty,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);
    }
}