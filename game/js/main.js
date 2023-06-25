"use strict";

import { GameManager } from "./gameManager.js";
window.addEventListener('load', init, false);

function init(){
    //se iniciará el game manager donde está toda la lógica del pryecto, se crean las relaciones
    //solo se instancia el game manager en el main js
    //el game manager tiene una relación de composición con los controladores
    //los controladores tienen relación de agregación con el gamemanager
    const gameManager = new GameManager();
}