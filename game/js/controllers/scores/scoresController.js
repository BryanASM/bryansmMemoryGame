import { Controller } from "../controller.js";
import { ScoresService } from "./scoresService.js";
import { ScoresView } from "./scoresView.js";

export  class ScoresController extends Controller{
    //Recibe el game manager
    //Recibe el parent para agregar el view con appendChild
    constructor(gameManager, parent){
        /*Llamar a la clase base "Padre" relacion de herencia, y recibimos el gameManager, 
        para no repetir los elementos creados, los que estan en controller en este caso*/
        super(gameManager);
        //Se crea un view del gameManager, por eso se declara con this
        //Al 
        this.view = new ScoresView(this, parent);
        this.service = new ScoresService(this);
        this.service.getScores();
        this.scores = [];
    }

    showScores(scores){
        this.scores = scores;
        this.view.showScores(this.scores);
    }
}