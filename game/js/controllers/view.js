import { div } from "../libs/html.js";

export class View{
    //Recibe el parent, donde se va a agregar
    constructor(controller, parent){
        //relación de agregación con controller
        this.controller = controller;
        this.parent = parent;
        //Crea un div en el documento html
        //Esto se hereda en menuView con el "extends" y "super"
        this.container = div({},this.parent);

        //Nuevos elementos creados
        this.fadeContainer = div({ className: 'view-fadeContainer'}, this.container);
        this.elementsContainer = div({ className: 'view-elementsContainer'}, this.container);
        this.elementsContainer.style.transform = `translateX(${window.innerWidth}px)`;

        //Se agrega como un child de container
        this.show();
    }
    delete(){
        this.parent.removeChild(this.container);
    }
    show(){
        gsap.to(this.fadeContainer,{opacity: 0.75, duration: 0.25, ease:"expo.out"});
        gsap.to(this.elementsContainer,{x: 0, duration: 0.75, ease: "expo.out"});
    }
    hide(state){
        gsap.to(this.fadeContainer,{opacity: 0, duration: 0.75, ease:"expo.in", onComplete: this.hideComplete.bind(this,state)});
        gsap.to(this.elementsContainer,{x: window.innerWidth, duration: 0.5, ease: "expo.in"});
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