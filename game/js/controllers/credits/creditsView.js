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

        p({ innerHTML: 'Project lead: Esteban Padilla', className: 'creditsParagraphs' }, this.elementsContainer);
        p({ innerHTML: 'Code: Bryan Sanabria', className: 'creditsParagraphs' }, this.elementsContainer);
        p({ innerHTML: 'Design: Bryan Sanabria', className: 'creditsParagraphs' }, this.elementsContainer);
        p({ innerHTML: 'Technologies used:', className: 'creditsParagraphs' }, this.elementsContainer);
        p({ innerHTML: 'JavaScript', className: 'creditsParagraphs' }, this.elementsContainer);
        p({ innerHTML: 'Firebase', className: 'creditsParagraphs' }, this.elementsContainer);
        p({ innerHTML: 'Gulp', className: 'creditsParagraphs' }, this.elementsContainer);
        p({ innerHTML: 'Otra que se me olvida', className: 'creditsParagraphs' }, this.elementsContainer);
    }
}