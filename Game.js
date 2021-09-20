class Game {
    constructor() {
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");

        this.leaderboardTitle = createElement("h2");
        this.runner1 = createElement("h2");
        this.runner2 = createElement("h2");
        this.runner3 = createElement("h2");
        this.runner4 = createElement("h2");

        this.runnerMoving = false;
        this.leftKeyActive = false;
        this.fall = false;
    }
    
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }
    
    update(state){
        database.ref("/").update({
            gameState: state
        });
    }

    start() {
        player = new Player();
        playerCount = player.getCount();

        form = new Form();
        form.displayer();

        runner1 = createSprite(width/2 - 100, height - 100);
        runner1.addAnimation("running", runner1Img);
        
        runner2 = createSprite(width/2 - 50, height - 100);
        runner2.addAnimation("running", runner2Img);

        runner3 = createSprite(width/2 + 50, height - 100);
        runner3.addAnimation("running", runner3Img);

        runner4 = createSprite(width/2 + 100, height - 100);
        runner4.addAnimation("running", runner4Img);

        runners = [runner1, runner2, runner3, runner4];
    }


}