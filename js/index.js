const WIDTH = 600, HEIGHT = 500;

let canvas = document.querySelector('#display');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let context = canvas.getContext('2d');

gameController = new GameController(canvas,context);

function update(){
    
    let game_update_result = gameController.update();
    if(game_update_result=='drop'){
        clearInterval(render_interval);
        canvas.onclick = null;
    }
}

let render_interval = setInterval(update, 50);

canvas.onclick = function(event){

    gameController.onClick(event);
    
}





