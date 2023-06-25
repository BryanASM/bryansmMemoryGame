import { View } from "../view.js";
//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class ThemesView extends View {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.container.className = 'themesView';

        var foodBtn = document.createElement('div');
        this.container.appendChild(foodBtn);
        foodBtn.innerHTML = 'FOOD';
        foodBtn.className = 'game-button';

        var facesBtn = document.createElement('div');
        this.container.appendChild(facesBtn);
        facesBtn.innerHTML = 'FACES';
        facesBtn.className = 'game-button';

        var flagsBtn = document.createElement('div');
        this.container.appendChild(flagsBtn);
        flagsBtn.innerHTML = 'FLAGS';
        flagsBtn.className = 'game-button';
    }
}