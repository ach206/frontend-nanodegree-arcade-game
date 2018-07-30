'use strict';
/*
@constructor Enemy, our player must avoid
@param values of the x-coordinates and y-coordinates for Enemy
*/
var Enemy = function(x, y, speed) {
    this.sprite = 'images/tommy-ball.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 80;
    this.height = 80;
};
/*
@description when the Emeny runs off the right side of canvas, the enemy will
return back to the left side of the canvas
@param = dt, a time delta between ticks
*/
Enemy.prototype.update = function(dt) {
    if (this.x > 505){
        this.x = Math.random() * 100;
    } else {
    this.x += Math.floor(this.speed * dt);
    }
};

//@description Draws the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*
@constructor for the player, whose goal is to make it to
the water
@param values of the x-coordinates and y-coordinates for the player
*/
class Player {
    constructor(x, y){
        this.sprite = 'images/susies.png';
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 80;
    }
    //@description Draws the player on the screen
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    update(){
        let modal = document.querySelector('.modal');
        if(this.y <= 50){
            //winner
            modal.style = "display: block;";
        }
     }

    /*
    @description will respond to keystrokes (up down left right arrow)
     by moving player accordingly
     */
    handleInput(e){
        let userPressed = e;
        switch(userPressed) {
            case "left":
                //move player left
                if(this.x > 20){
                this.x -= 101;
                }
                break;
            case "up":
                //move player up
                if(this.y > 49){
                this.y -= 83;
                }
                break;
            case "right":
                //move player right
                if(this.x < 400){
                this.x += 101;
                }
                break;
            case "down":
                //move player down
                if(this.y < 450){
                  this.y += 83;
                }
        }
    }
} //closes Player class



/*
@description Instantiate player and enemy objects.
then place the new objects in allEnemies array so we
can loop through them in engine.js
*/
let player = new Player(202, 464);
let enemyOne = new Enemy(10, 135, 117);
let enemyTwo = new Enemy(152, 217, 198);
let enemyThree = new Enemy(220, 300, 217);
let enemyFour = new Enemy(101, 135, 172);
let allEnemies = [enemyOne, enemyTwo, enemyThree, enemyFour];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
