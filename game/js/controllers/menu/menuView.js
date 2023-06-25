import { View } from "../view.js";
//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class MenuView extends View {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.container.className = 'menuView';

        var loginBtn = document.createElement('div');
        this.container.appendChild(loginBtn);
        loginBtn.innerHTML = 'LOGIN';
        loginBtn.className = 'game-button';

        var playBtn = document.createElement('div');
        this.container.appendChild(playBtn);
        playBtn.innerHTML = 'PLAY';
        playBtn.className = 'game-button';
    }
}