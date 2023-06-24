import { Controller } from "../controller";
import { MenuView } from "./menuView";

export  class MenuController extends Controller{
    constructor(gameManager, parent){
        super(gameManager);
        this.view = new MenuView(this, parent);
    }
}