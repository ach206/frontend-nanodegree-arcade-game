
// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    let enemyX = this.x;
    let enemyY = this.y;
    if (this.x > 505){
        this.x = Math.random() * 100;
    } else {
    this.x += dt * (Math.random() * this.x);
    }
};
 
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y){
        this.sprite = 'images/char-pink-girl.png';
        this.x = x;
        this.y = y;
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update(){
        //update x , y positions
        let playerX = this.x;
        let playerY = this.y;
        //return whether Player and Enemy positions are the same (collide)
    }
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
                //update the x y pos
            case "up":
                //move player up
                if(this.y < 10){
                    userPressed.preventDefault();
                } else {
                this.y -= 89;
                }
                break;
                //update the x y pos
            case "right":
                //move player right
                if(this.x > 400){
                    userPressed.preventDefault();
                } else {
                this.x += 101;
                }
                //update the x y pos
                break;
            case "down":
                //move player down
                if(this.y > 380){
                    userPressed.preventDefault();
                } else {
                this.y += 89;
                }
                //update the x y pos
        }
    }
} //closes Player class

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

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
