const DEFAULT_X_POSITION = 50;
const DEFAULT_Y_POSITION = 50;
const GAMEBROAD_WIDTH = 500;
const GAMEBROAD_HEIGHT = 500;

let Hero = function () {
    this.xPosition = DEFAULT_X_POSITION;
    this.yPosition = DEFAULT_Y_POSITION;

    this.moveLeft = function () {
        this.xPosition -= 20;
    };
    this.moveRight = function () {
        this.xPosition += 20;
    };
    this.moveUp = function () {
        this.yPosition -= 20;
    };
    this.moveDown = function () {
        this.yPosition += 20;
    };

    this.Show= function (ctx) {
        let image = new Image(100,100);
        let xPosition = this.xPosition;
        let yPosition = this.yPosition;
        image.src = 'dragon.jpg';
        image.onload=function () {
            ctx.drawImage(image,xPosition,yPosition)
        }
    };
};

let GameBroad = function () {
    this.pikachu = new Hero();
    this.ctx = undefined;

    this.start = function () {
        this.ctx = document.getElementById("myCanvas").getContext("2d");
        this.pikachu.Show(this.ctx);
    };

    this.movePikachu = function (event) {
        switch (event.keyCode) {
            case 37:
                this.pikachu.moveLeft();
                break;
            case 38:
                this.pikachu.moveUp();
                break;
            case 39:
                this.pikachu.moveRight();
                break;
            case 40:
                this.pikachu.moveDown();
                break;
        }

        this.ctx.clearRect(0,0, GAMEBROAD_WIDTH,GAMEBROAD_HEIGHT);
        this.pikachu.Show(this.ctx);
    }
};

let gameBroad = new GameBroad();
gameBroad.start();

