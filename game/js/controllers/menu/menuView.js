import { CREDITS_STATE, DIFFICULTY_STATE, THEMES_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE } from "../../libs/constants/constants.js";
import { View } from "../view.js";
import { div, p } from "../../libs/constants/html.js";

//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class MenuView extends View {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.container.className = 'menuView';

        var loginBtn = div({innerHTML:'LOGIN', className:'game-button', onclick: this.onButtonClick.bind(this, LOGIN_STATE)}, this.container);
        var playBtn = div({innerHTML:'PLAY', className:'game-button', onclick: this.onButtonClick.bind(this, PLAY_STATE)}, this.container);
        var creditsBtn = div({innerHTML:'CREDITS', className:'game-button', onclick: this.onButtonClick.bind(this, CREDITS_STATE)}, this.container);
        var themesBtn = div({innerHTML:'THEMES', className:'game-button', onclick: this.onButtonClick.bind(this, THEMES_STATE)}, this.container);
        var difficultyBtn = div({innerHTML:'DIFFICULTY', className:'game-button', onclick: this.onButtonClick.bind(this, DIFFICULTY_STATE)}, this.container);
        var scoresBtn = div({innerHTML:'SCORES', className:'game-button', onclick: this.onButtonClick.bind(this, SCORES_STATE)}, this.container);
    }
    onButtonClick(state, event){
        this.controller.goto(state);
    }
}