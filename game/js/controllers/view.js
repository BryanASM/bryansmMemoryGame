import { div } from "../libs/constants/html.js";

export class View{
    //Recibe el parent, donde se va a agregar
    constructor(controller, parent){
        //relación de agregación con controller
        this.controller = controller;
        this.parent = parent;
        //Crea un div en el documento html
        //Esto se hereda en menuView con el "extends" y "super"
        this.container = div({},this.parent);
        
        this.container.style.transform = `translateX(${window.innerWidth}px)` 
        this.callback=null;
        //Se agrega como un child de container
        this.parent.appendChild(this.container);
        this.show();
    }
    delete(){
        this.parent.removeChild(this.container);
    }
    show(){
        gsap.to(this.container,{x: 0, duration: 0.5});
    }
    hide(callback, state){
        this.callback=callback;
        gsap.to(this.container,{x: window.innerWidth, duration: 0.5, onComplete: this.hideComplete.bind(this,state)});
    }
    hideComplete(state){
        this.callback(state);
    }
}