import { CREDITS_STATE, DIFFICULTY_STATE, THEMES_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE } from "../../libs/constants/constants.js";
import { View } from "../view.js";
import { div, img, p } from "../../libs/constants/html.js";

//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class MenuView extends View {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.elementsContainer.className = 'menuView';

        var loginBtn = div({innerHTML:'LOGIN', className:'game-button', onclick: this.onButtonClick.bind(this, LOGIN_STATE)}, this.elementsContainer);
        var playBtn = div({innerHTML:'PLAY', className:'game-button', onclick: this.onButtonClick.bind(this, PLAY_STATE)}, this.elementsContainer);
        var scoresBtn = div({innerHTML:'SCORES', className:'game-button', onclick: this.onButtonClick.bind(this, SCORES_STATE)}, this.elementsContainer);
        var difficultyBtn = div({innerHTML:'DIFFICULTY', className:'game-button', onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE)}, this.elementsContainer);
        var buttonsContainer = div({className: 'homeView-buttonContainer'},this.elementsContainer);
        var themesBtn = div({innerHTML:'THEMES', className:'game-button', onclick: this.onButtonClick.bind(this, THEMES_STATE)}, buttonsContainer);
        var creditsBtn = div({innerHTML:'CREDITS', className:'game-button', onclick: this.onButtonClick.bind(this, CREDITS_STATE)}, buttonsContainer);
    }
    onButtonClick(state){
        //this.controller.goto(state);
        var event = new CustomEvent('menu-button-click',{
            detail: {
                state: state,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);
    }
}