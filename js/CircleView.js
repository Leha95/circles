class CircleView{

    constructor(canvas,context){
        this.canvas = canvas;
        this.context = context;
    }

    render(x,y,r,color){
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.arc(x,y,r, 0, 2 * Math.PI);
        this.context.fill();
    }

}