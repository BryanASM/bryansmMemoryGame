import { View } from "../view.js";
import { createElement } from "../../libs/html.js";
//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class MenuView extends View {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.container.className = 'menuView';

        var text= createElement('p', {innerHTML:'Hola', className:'menuView_text', id:''}, this.container);

        var loginBtn = createElement('div',{innerHTML:'LOGIN', className:'game-button'}, this.container);

        var playBtn = createElement('div',{innerHTML:'LOGIN', className:'game-button'}, this.container);

    }
}