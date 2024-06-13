class PlayerComponent extends GameComponent {
    constructor(width, height, color, x, y) {
        super(width, height, color, x, y)

        this.velocity = 0.0;
        this.lives = 3;
        this.invincible = false;
        this.schild = true;
    }

    accelerate(v) {
        this.velocity += v;
    }

    calcMove(dt) {
        if (this.y + this.velocity > this.getGroundContactY()){
            this.y = this.getGroundContactY();
            this.velocity = 0;
        }
        else if (this.y + this.velocity < 0){
            this.y = 0;
            this.velocity = 0;
        }
        else
            this.y += this.velocity * dt;
    }

    isAlive() {
        return this.lives > 0;
    }

    gotDamaged(livesTaken) {
        gameIsFrozen = true;
        this.lives -= livesTaken;

        var counter = 0;
        var blinkAnimation = setInterval(() => {
            if (counter >= 6) {
                clearInterval(blinkAnimation);
                gameIsFrozen = false;
                return;
            }

            if (counter % 2 === 0){
                this.color = "orange";
            }
            else {
                this.color = "blue";
            }

            counter++;
        }, 500);
    }
    collectPowerUp(powerUpType){
        switch(powerUpType){
            
            case 0:
                this.lives++;
                var counter = 0;
                var blinkAnimation = setInterval(() => {
                if (counter >= 4) {
                    clearInterval(blinkAnimation);
                gameIsFrozen = false;
                return;
                }

                if (counter % 2 === 0){
                this.color = "green";
                }
                else {
                this.color = "blue";
                }

                counter++;
                }, 200);
                console.log;
                break;
            case 1:
                    var counter = 0;
                    var blinkAnimation = setInterval(() => {
                    if (counter >= 4) {
                        clearInterval(blinkAnimation);
                    gameIsFrozen = false;
                    return;
                    }
    
                    if (counter % 2 === 0){
                    this.color = "white";
                    }
                    else {
                    this.color = "blue";
                    }

                    counter++;
                    }, 200);
                                       
                    gameSpeed /= 2;
                    const myTimeout = setTimeout(this.speedCooldown, 2000)
                break;
            case 2:
                    var counter = 0;
                    var blinkAnimation = setInterval(() => {
                    if (counter >= 4) {
                        clearInterval(blinkAnimation);
                    gameIsFrozen = false;
                    return;
                    }
    
                    if (counter % 2 === 0){
                    this.color = "cyan";
                    }
                    else {
                    this.color = "blue";
                    }

                    counter++;
                    }, 200);
                    this.schild = true
                    break;                                  
        }
        
    }
    speedCooldown() {
        gameSpeed *= 2
    }
}