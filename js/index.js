const WIDTH = 600, HEIGHT = 500;

let points = 0;
let points_element = document.getElementById('points');
points_element.innerHTML = points;

let time = 10;
let time_element = document.getElementById('time');
time_element.innerHTML = time;

let canvas = document.querySelector('#display');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let context = canvas.getContext('2d');

let circles = [];

for(let i=0;i<20;i++){
    circles.push( new CircleModel(WIDTH, HEIGHT) );
}

function stopGame(message){
    clearInterval(render_interval);
    clearInterval(time_interval);
    canvas.onclick = null;
    alert(message);
}

function Render(){
    circles.forEach(function(circle){
        circle.updata();
    })
    context.clearRect(0,0,WIDTH,HEIGHT);

    circles.forEach(function(circle){
        context.fillStyle = circle.color;
        context.beginPath();
        context.arc(circle.x,circle.y,circle.r, 0, 2 * Math.PI);
        context.fill();
    })
    
}

function time_update(){
    time--;
    time_element.innerHTML = time;
    if(time<1){
        stopGame(`Time is gone! You have ${points} points!`);
    }
}

let render_interval = setInterval(Render, 50);
let time_interval = setInterval(time_update, 1000);

canvas.onclick = function(event){
    
    let x = event.offsetX;
    let y = event.offsetY;
    let good_click = false;
    circles.forEach(function(circle,index,array){
        if(circle.isPointInside(x,y)){
            array[index] = new CircleModel(WIDTH, HEIGHT);
            points++;
            good_click = true;
        }
    })
    if(!good_click){
        points--;
    }
    points_element.innerHTML = points;
    if(points<0){
        stopGame('You loss!');
    }
}





