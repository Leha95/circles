class GameController{

    constructor(canvas, context){
        this._end = false;
    
        this.canvas = canvas;
        this.context = context;


        this.circleView = new CircleView(this.canvas,this.context);
        this.circleBoomView = new CircleBoomView(this.canvas,this.context);


        this.gameModel = new GameModel();

        this.time_interval = setInterval(()=>this.gameModel.updateTime(), 1000);

        this.circles = [];
        this.effects = [];

        for(let i=0;i<20;i++){
            this.circles.push( new CircleModel(this.clientWidth, this.clientHeight) );
        }
    }

    onClick(event){
        let x = event.offsetX;
        let y = event.offsetY;
        let good_click = false;
        this.circles.forEach((circle,index,array)=>{
            if(circle.isPointInside(x,y)){
                array[index] = new CircleModel(this.clientWidth,this.clientHeight);
                this.effects.push(new CircleBoomAnimation(this.circleBoomView,{
                    x:circle.x,
                    y:circle.y,
                    r:circle.r,
                    color:circle.color
                }));
                this.gameModel.addPoint();
                good_click = true;
            }
        })
        if(!good_click){
            this.gameModel.minusPoint();
        }
    }

    get clientWidth(){
        return this.canvas.width;
    }

    get clientHeight(){
        return this.canvas.height;
    }

    render(){
        this.context.clearRect(0,0,this.clientWidth,this.clientHeight);

        this.circles.forEach((circle)=>{
            if(!circle.isClicked()){
                this.circleView.render(circle.x,circle.y,circle.r,circle.color);
            }
        })

        this.effects.forEach(function(effect){
            effect.render();
        })

        document.getElementById('points').innerHTML = this.gameModel.points;
        document.getElementById('time').innerHTML = this.gameModel.time;
    }

    update(){
        if(this._end == true){
            clearInterval(this.time_interval);
            return 'drop';
        }
        if(this.gameModel.pointsGone()){
            this.stop('You loss!');
            return;
        }

        if(this.gameModel.timeGone()){
            this.stop(`Time is gone! You have ${this.gameModel.points} points!`);
            return;
        }


        this.circles.forEach(function(circle){
            circle.update();
        })

        this.effects.forEach((effect,index,array)=>{
            if(effect.update()=='end'){
                delete array[index];
            }
        })

        this.render();
    }

    stop(message){
        this._end = true;
        alert(message);
    }



}