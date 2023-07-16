import { THEMES_FACES, THEMES_FLAGS, THEMES_FOOD } from "../../libs/constants/constants.js";
import { div } from "../../libs/constants/html.js";
import { View } from "../view.js";
//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class ThemesView extends View {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.elementsContainer.className = 'themesView';

        div({innerHTML:'FACES',className: 'game-button', onclick: this.onButtonCLick.bind(this, THEMES_FACES)},this.elementsContainer);

        div({innerHTML:'FOOD',className: 'game-button', onclick: this.onButtonCLick.bind(this, THEMES_FOOD)},this.elementsContainer);

        div({innerHTML:'FLAGS',className: 'game-button', onclick: this.onButtonCLick.bind(this, THEMES_FLAGS)},this.elementsContainer);

    }
    onButtonCLick(theme){
        var event = new CustomEvent('save-theme',{
            detail: {
                theme: theme,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);
    }
}