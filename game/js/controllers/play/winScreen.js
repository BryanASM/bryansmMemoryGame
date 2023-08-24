import { ControllerView } from "../controllerView.js";
import { div, p } from "../../libs/html.js";

export class CreditsView extends ControllerView {

    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'winScreen';
        this.creditsContainer = div({ className: 'winContainer' }, this.elementsContainer);

        p({ innerHTML: 'Player username: ', className: 'creditsParagraphs' }, this.creditsContainer);
        p({ innerHTML: 'You WON!', className: 'creditsParagraphs' }, this.creditsContainer);
        p({ innerHTML: 'Your SCORE: ', className: 'creditsParagraphs' }, this.creditsContainer);
        p({ innerHTML: 'Your CLICKS', className: 'creditsParagraphs' }, this.creditsContainer);
        p({ innerHTML: 'Your TIME:', className: 'creditsParagraphs' }, this.creditsContainer);
        p({ innerHTML: 'PLAY AGAIN!', className: 'game-button' }, this.creditsContainer);
        p({ innerHTML: 'Go to Scores', className: 'game-button' }, this.creditsContainer);
    }
}