import { View } from "../view.js";
//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class LoginView extends View {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.container.className = 'loginView';

        var okBtn = document.createElement('div');
        this.container.appendChild(okBtn);
        okBtn.innerHTML = 'OK';
        okBtn.className = 'game-button';

        this.container.style.transform = `translateX(${window.innerWidth}px)` 
    }
}