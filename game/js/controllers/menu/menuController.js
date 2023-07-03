import { Controller } from "../controller.js";
import { MenuView } from "./menuView.js";

export  class MenuController extends Controller{
    //Recibe el game manager
    //Recibe el parent para agregar el view con appendChild
    constructor(gameManager, parent){
        /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el gameManager, 
        para no repetir los elementos creados, los que estan en controller en este caso*/
        super(gameManager);
        //Se crea un view del gameManager, por eso se declara con this
        //Al 
        this.view = new MenuView(this, parent);
    }
    goto(state){
        this.gameManager.goto(state);
    }
}