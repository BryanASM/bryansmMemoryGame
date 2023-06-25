export class View{
    //Recibe el parent, donde se va a agregar
    constructor(controller, parent){
        //relación de agregación con controller
        this.controller=controller;
        this.parent = parent;
        //Crea un div en el documento html
        //Esto se hereda en menuView con el "extends" y "super"
        this.container = document.createElement('div');
        //Se agrega como un child de container
        this.parent.appendChild(this.container);
    }
}