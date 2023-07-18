import { div, p } from "../../libs/html.js";
import { View } from "../view.js";
//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class PlayView extends View {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.container.id = 'playView';
        this.elementsContainer.className = 'playView-elementsContainer';
        this.hudContainer = div({className:'playView-hudContainer'}, this.elementsContainer);
        this.cardsContainer = div({className:'playView-cardsContainer'}, this.elementsContainer);

        this.clicksText = p({innerHTML:'Clicks: 0', className:'playView-text'}, this.hudContainer);
        this.timerText = p({innerHTML:'Time: 0', className:'playView-text'}, this.hudContainer);
        this.resetBtn = div({innerHTML:'RESET', className:'game-button playView-resetBtn', onclick:this.onResetBtn.bind(this)}, this.hudContainer);
    }
    
    showCards(cards){
        this.cardsContainer.innerHTML='',
        console.log(cards);
        cards.forEach(card => {
            div({innerHTML:card.icon, className:'card'}, this.cardsContainer);
        });
    }

    onResetBtn(){
        this.controller.resetGame();
    }
    updateHUD(clicks, time){
        this.clicksText.innerHTML=`Clicks: ${clicks}`;
        this.timerText.innerHTML=`Time: ${time}`;
    }
}