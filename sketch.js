var database, playerCount, game, player, form
var gameState = 0
var players
var distance = 0


function setup(){
    createCanvas(500,500);
    //creating database
    database = firebase.database()

    game = new Game()
    game.getState()
    game.start()
}

function draw(){

    if(playerCount === 4){
        game.updateState(1)
    }
    
    if(gameState === 1){
        game.play()
    }
}


