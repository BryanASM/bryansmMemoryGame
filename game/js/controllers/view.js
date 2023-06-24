export class View{
    constructor(controller, parent){
        this.controller=controller;
        this.parent = parent;
        this.contrainer = document.createElement('div');
        this.parent.appendChild(this.contrainer);
    }
}