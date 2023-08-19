import { Controller } from "../controller.js";
import { PlayService } from "./playService.js";
import { PlayView } from "./playView.js";

export class PlayController extends Controller {
    //Recibe el game manager
    //Recibe el parent para agregar el view con appendChild
    constructor(gameManager, parent) {
        /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el gameManager, 
        para no repetir los elementos creados, los que estan en controller en este caso*/
        super(gameManager);
        //Se crea un view del gameManager, por eso se declara con this
        //Al 
        this.view = new PlayView(this, parent);
        this.cards = null;
        this.service = new PlayService(this);
        this.service.getCards(this.gameManager.difficulty, this.gameManager.theme);

        this.timer = null;
        this.time = 0;
        this.clicks = 0;

        window.addEventListener('card-selected', (event) => {
            this.onCardSelected();
        });
        this.hiddenTimer = null;
    }

    showCards(cards) {
        this.cards = cards;
        this.view.showCards(cards);
        this.timer = window.setInterval(this.gameTick.bind(this), 1000);
    }

    resetGame() {
        this.killGameTimer();
        this.time = 0;
        this.clicks = 0;
        this.service.getCards(this.gameManager.difficulty, this.gameManager.theme);
        this.view.updateHUD(this.clicks, this.time);
    }

    gameTick() {
        this.time += 1;
        this.view.updateHUD(this.clicks, this.time);
    }

    onCardSelected() {

        if (this.hiddenTimer !== null) return;

        this.clicks += 1;
        this.view.updateHUD(this.clicks, this.time);
        var event = new CustomEvent('show-card-on-selected', {
            detail: {
                test: 9,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });

        window.dispatchEvent(event);

        let cardSelected1 = null;
        let cardSelected2 = null;

        this.cards.forEach(card => {
            if (!card.isDiscovered) {
                if (cardSelected1 === null && card.isSelected) {
                    cardSelected1 = card;
                } else if (cardSelected2 === null && card.isSelected) {
                    cardSelected2 = card;
                }
            }
        });

        if (cardSelected1 !== null && cardSelected2 !== null) {
            if (cardSelected1.id === cardSelected2.id) {
                var event = new CustomEvent('show-card-on-discovered', {
                    detail: {
                        card: null,
                    },
                    bubbles: true,
                    cancelable: true,
                    composed: false,
                });

                this.view.container.dispatchEvent(event);

                if (this.checkGameComplete()) {
                    this.killGameTimer();
                    let score = this.clicks + this.time;
                    this.service.sendScore(score, this.clicks, this.timer, this.gameManager.username);
                    console.log('YOU WIN!');
                }
            } else {
                this.hiddenTimer = window.setTimeout(() => {
                    var event = new CustomEvent('hide-selected-card', {
                        detail: {
                            test: 9,
                        },
                        bubbles: true,
                        cancelable: true,
                        composed: false,
                    });
                    window.dispatchEvent(event);
                    window.clearTimeout(this.hiddenTimer);
                    this.hiddenTimer = null;
                }, 800)

            }
        }
    }
    killGameTimer() {
        window.clearInterval(this.timer);
        this.timer = null;
    }

    checkGameComplete() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            if (!card.isDiscovered) {
                return false;
            }
        }
        return true;
    }
}