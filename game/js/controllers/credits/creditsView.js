import { ControllerView } from "../controllerView.js";
import { div, p } from "../../libs/html.js";
//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class CreditsView extends ControllerView {
    //Recibe controller
    constructor(controller, parent) {
        /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
       para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.elementsContainer.className = 'creditsView';
        this.creditsContainer = div({ className: 'creditsContainer' }, this.elementsContainer);

        p({ innerHTML: 'Project lead: Esteban Padilla', className: 'creditsParagraphs' }, this.creditsContainer);
        p({ innerHTML: 'Code: Bryan Sanabria', className: 'creditsParagraphs' }, this.creditsContainer);
        p({ innerHTML: 'Design: Bryan Sanabria', className: 'creditsParagraphs' }, this.creditsContainer);
        p({ innerHTML: 'Technologies used:', className: 'creditsParagraphs' }, this.creditsContainer);
        p({ innerHTML: 'JavaScript', className: 'creditsParagraphs' }, this.creditsContainer);
        p({ innerHTML: 'Firebase', className: 'creditsParagraphs' }, this.creditsContainer);
        p({ innerHTML: 'Gulp', className: 'creditsParagraphs' }, this.creditsContainer);
        p({ innerHTML: 'Year: 2023', className: 'creditsParagraphs' }, this.creditsContainer);
    }
}