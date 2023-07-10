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
        //Se agrega como un child de container
        this.show();
    }
    delete(){
        this.parent.removeChild(this.container);
    }
    show(){
        gsap.to(this.container,{x: 0, duration: 0.75, ease: "expo.out"});
    }
    hide(state){
        gsap.to(this.container,{x: window.innerWidth, duration: 0.5, ease: "expo.in", onComplete: this.hideComplete.bind(this,state)});
    }
    hideComplete(state){
        var event = new CustomEvent('hide-complete',{
            detail: {
                state: state,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        })
        this.container.dispatchEvent(event);
    }
}