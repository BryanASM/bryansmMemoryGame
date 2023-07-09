export class Controller{

    //Tiene relación de agregación con el gamemanager, le pasara el controlador en algun momento construido en otra clase
    //No es responsable del gamemanager, solo tiene referencia
    constructor(gameManager){
        this.gameManager = gameManager;
        //relaciones de agregación
        //Esto se hereda cuando se invoca con super al gameManager
        this.view = null;
        this.service = null;
        this.model = null;
    }
    delete(){
        this.view.delete();
    }

    hide(callback){
        this.view.hide(callback);
    }
}