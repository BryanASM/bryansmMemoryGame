import { MenuController } from './controllers/menu/menuController.js';
import { DifficultyController } from "./controllers/difficulty/difficultyController.js";
import { ThemesController } from "./controllers/themes/themesController.js";
import { LoginController } from "./controllers/login/loginController.js";
import { PlayController } from "./controllers/play/playController.js";
import { ScoresController } from "./controllers/scores/scoresController.js";
import { CreditsController } from "./controllers/credits/creditsController.js";

import { CREDITS_STATE, DIFFICULTY_MEDIUM, DIFFICULTY_STATE, HOME_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, THEMES_FOOD, THEMES_STATE } from "./libs/constants/constants.js";

export class GameManager {
    constructor() {
        this.difficulty = DIFFICULTY_MEDIUM;
        this.theme = THEMES_FOOD;
        this.username = '';
        this.controller = null;
        this.contentContainer = document.getElementById('contentContainer');
        this.navigationContainer = document.getElementById('navigationContainer');
        this.backBtn = document.getElementById('navigationContainer-back-button');
        this.title = document.getElementById('navigationContainer-title');
        this.backBtn.onclick = this.goto.bind(this, HOME_STATE);

        this.MenuController = new MenuController(this, this.contentContainer);

        this.contentContainer.addEventListener('menu-button-click', (event) => {
            this.presenting(event.detail.state);
        });

        this.contentContainer.addEventListener('hide-complete', (event) => {
            this.presenting(event.detail.state);
        });
        this.contentContainer.addEventListener('save-difficulty', (event) => {
            this.difficulty = event.detail.difficulty;
            this.saveDifficulty();
            this.goto(PLAY_STATE);
        });
        this.contentContainer.addEventListener('save-theme', (event) => {
            this.theme = event.detail.theme;
            this.saveTheme();
            this.goto(PLAY_STATE);
        });

        this.contentContainer.addEventListener('username-entered', (event) => {
            this.username = event.detail.username;
            this.saveUsername();
            this.goto(HOME_STATE);
        })


        this.loadDifficulty();
        this.loadTheme();
        this.loadUsername();

        /*this.presenting(SCORES_STATE);*/
    }

    presenting(state) {
        if (this.controller !== null) {
            this.controller.delete();
            this.controller = null;
        }
        this.backBtn.classList.remove('hidden');
        switch (state) {
            case HOME_STATE:
                this.backBtn.classList.add('hidden');
                this.title.innerHTML = 'Menu';
                //this.controller = new MenuController(this, this.contentContainer);
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

    goto(state) {
        if (this.controller !== null) {
            this.controller.hide(state);
        } else {
            this.presenting(state);
        }
    }

    loadDifficulty() {
        if (localStorage.getItem('difficulty')) {
            this.difficulty = localStorage.getItem('difficulty');
        }
    }
    saveDifficulty() {
        localStorage.setItem('difficulty', this.difficulty);
    }

    loadTheme() {
        if (localStorage.getItem('theme')) {
            this.difficulty = localStorage.getItem('theme');
        }
    }
    saveTheme() {
        localStorage.setItem('theme', this.theme);
    }

    saveUsername() {
        localStorage.setItem('username', this.username);
    }

    loadUsername() {
        if (localStorage.getItem('username')) {
            this.username = localStorage.getItem('username');
            console.log('USERNAME: ', this.username);
        }
    }

}