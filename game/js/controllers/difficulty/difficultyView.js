import { View } from "../view.js";
//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class DifficultyView extends View {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.elementsContainer.className = 'difficultyView';
        //div({},this.elementsContainer);
        var easyBtn = document.createElement('div');
        this.elementsContainer.appendChild(easyBtn);
        easyBtn.innerHTML = 'EASY';
        easyBtn.className = 'game-button';

        var mediumBtn = document.createElement('div');
        this.elementsContainer.appendChild(mediumBtn);
        mediumBtn.innerHTML = 'MEDIUM';
        mediumBtn.className = 'game-button';

        var hardBtn = document.createElement('div');
        this.elementsContainer.appendChild(hardBtn);
        hardBtn.innerHTML = 'HARD';
        hardBtn.className = 'game-button';
    }
    onButtonCLick(event){

    }
}