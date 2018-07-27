
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
    if (this.x > 505){
        this.x = 0;
        this.x = dt * (Math.random() * 101);
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
        //return whether Player and Enemy positions are the same (collide)
    }
    handleInput(e){
        let userPressed = e;
        switch(userPressed) {
            case "left":
                //move player left
                console.log('left triggered');
                this.x -= 87;
                break;
                //update the x y pos
            case "up":
                this.y -= 87;
                //move player up
                console.log('up triggered');
                break;

                //update the x y pos
            case "right":
                this.x += 83;
                //move player right
                console.log('right triggered');
                //update the x y pos
                break;
            case "down":
                this.y += 101;
                //move player down
                console.log('down triggered');
                //update the x y pos
        }
        // update(x, y);
    }
} //closes Player class

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let player = new Player(200, 404);
let bugOne = new Enemy(10, 77);
let bugTwo = new Enemy(202, 150);
let bugThree = new Enemy(220, 212);
let bugFour = new Enemy(101, 77);
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
