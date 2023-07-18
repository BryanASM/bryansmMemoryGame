import { div, input } from "../../libs/html.js";
import { View } from "../view.js";
//Extiende el view porque hay lógica que se repite, relación de herencia para reciclar código
export class LoginView extends View {
    //Recibe controller
    constructor(controller, parent){
         /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el controller, 
        para no repetir los elementos creados "el div llamado Container", el que está en controller*/
        super(controller, parent);
        this.elementsContainer.className = 'loginView';

        this.usernameIn = input({placeholder:' Username', className:'loginView-usernameIn'}, this.elementsContainer);

        this.okBtn = div({innerHTML: 'OK', className:'game-button', onclick: this.onOkBtn.bind(this)}, this.elementsContainer);
    }
        onOkBtn(){
            let username = this.usernameIn.value;

            if (username !== ''){
                let event = new CustomEvent('username-entered',{
                    detail: {
                        username: username,
                    },
                    bubbles:true,
                    cancelable: true,
                    composed:false,
                });
                this.container.dispatchEvent(event);
            }else{

            }
        }
        //this.elementsContainer.style.transform = `translateX(${window.innerWidth}px)` 
        
}