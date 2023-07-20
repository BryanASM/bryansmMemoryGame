import { ControllerView } from "../controllerView.js";
//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class CreditsView extends ControllerView {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.elementsContainer.className = 'creditsView';

        var text = document.createElement('p');
        this.elementsContainer.appendChild(text);
        text.innerHTML = 'Add credits here.';
    }
}