class CircleBoomAnimation{

    constructor(view,{r,color,x,y}){
        this.view = view;
        this.r = 0;
        this.end_r = r*1.5;
        this.x = x;
        this.y = y;
        this.color = color;
    }

    update(){
        this.r++;
        if(this.r>=this.end_r){
            return 'end';
        }
    }

    render(){
        this.view.render(this.x,this.y,this.r,this.color)
    }

}


class CircleBoomView{


    constructor(canvas,context){
        this.canvas = canvas;
        this.context = context;
    }

    render(x,y,r,color){
        this.context.strokeStyle = color;
        this.context.beginPath();
        this.context.arc(x,y,r, 0, 2 * Math.PI);
        this.context.stroke();
    }

}