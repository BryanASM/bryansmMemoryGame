import { div } from "../../libs/html.js";
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
        this.cardsContainer = div({className:'playView-cardsContainer'}, this.elementsContainer);
    }
    showCards(cards){
        this.cardsContainer.innerHTML='',
        console.log(cards);
        cards.forEach(card => {
            div({innerHTML:card.icon, className:'card'}, this.elementsContainer);
        });
    }
}