import { div } from "../libs/html.js";

export class View{
constructor( parent){
        this.parent = parent;
        //Crea un div en el documento html
        //Esto se hereda en menuView con el "extends" y "super"
        this.container = div({},this.parent);
    }
}