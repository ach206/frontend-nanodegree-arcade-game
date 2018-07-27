
/*
@constructor Enemy, our player must avoid
@param values of the x-coordinates and y-coordinates for Enemy
*/
var Enemy = function(x, y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
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
    this.x += dt * (Math.random() * this.x);
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
        this.sprite = 'images/char-pink-girl.png';
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 80;        
    }
    //@description Draws the player on the screen
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // update(){
    //  }

    /*
    @description will respond to keystrokes (up down left right arrow)
     by moving player accordingly
     */
    handleInput(e){
        let userPressed = e;
        switch(userPressed) {
            case "left":
                //move player left
                if(this.x < 20){
                    userPressed.preventDefault();
                } else {
                this.x -= 101;
                }
                break;
            case "up":
                //move player up
                if(this.y < 10){
                    userPressed.preventDefault();
                } else {
                this.y -= 89;
                }
                break;
            case "right":
                //move player right
                if(this.x > 400){
                    userPressed.preventDefault();
                } else {
                this.x += 101;
                }
                break;
            case "down":
                //move player down
                if(this.y > 380){
                    userPressed.preventDefault();
                } else {
                this.y += 89;
                }
        }
    }
} //closes Player class



/*
@description Instantiate player and enemy objects.
then place the new objects in allEnemies array so we
can loop through them in engine.js
*/
let player = new Player(202, 415);
let bugOne = new Enemy(10, 67);
let bugTwo = new Enemy(202, 150);
let bugThree = new Enemy(220, 232);
let bugFour = new Enemy(101, 67);
let allEnemies = [bugOne, bugTwo, bugThree, bugFour];

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
