import { MenuController } from './controllers/menu/menuController.js';
import { DifficultyController } from "./controllers/difficulty/difficultyController.js";
import { ThemesController} from "./controllers/themes/themesController.js";
import { LoginController} from "./controllers/login/loginController.js";
import { PlayController} from "./controllers/play/playController.js";
import { ScoresController} from "./controllers/scores/scoresController.js";
import { CreditsController} from "./controllers/credits/creditsController.js";

import { CREDITS_STATE, DIFFICULTY_STATE, HOME_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE } from "./libs/constants/constants.js";

export class GameManager{
    constructor(){
        this.controller = null;
        this.contentContainer = document.getElementById('contentContainer');
        this.navigationContainer = document.getElementById('navigationContainer');
        this.backBtn = document.getElementById('navigationContainer-back-button');
        this.title = document.getElementById('navigationContainer-title');
        this.goto(HOME_STATE);

        this.backBtn.onclick = this.goto.bind(this, HOME_STATE);

    }

    goto(state){
        if (this.controller!==null){
            this.controller.delete();
        }
        this.backBtn.classList.remove('hidden');
        switch(state){
            case HOME_STATE:
                this.backBtn.classList.add('hidden');
                this.title.innerHTML = 'Menu';
                this.controller = new MenuController(this, this.contentContainer);
                break;
            case DIFFICULTY_STATE: 
                this.title.innerHTML = 'Difficulty';
                this.controller = new DifficultyController(this, this.contentContainer);
                break;
            case THEMES_STATE:
                this.title.innerHTML = 'Themes';
                this.controller = new ThemesController(this, this.contentContainer);
                break;
            case LOGIN_STATE:
                this.title.innerHTML = 'LOGIN';
                this.controller = new LoginController(this, this.contentContainer);
                break;
            case PLAY_STATE:
                this.title.innerHTML = 'Play';
                this.controller = new PlayController(this, this.contentContainer);
                break;
            case SCORES_STATE:
                this.title.innerHTML = 'Scores';
                this.controller = new ScoresController(this, this.contentContainer);
                break;
            case CREDITS_STATE:
                this.title.innerHTML = 'Credits';
                this.controller = new CreditsController(this, this.contentContainer);
                break;
            default:
                break;
        }
    }
}