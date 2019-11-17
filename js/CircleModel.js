class CircleModel{

    constructor(display_width,display_height){
        this.r = Math.random()*25+10;
        this.display_width = display_width;
        this.display_height = display_height;
        this.x = Math.random()*(display_width-this.r*2)+this.r;
        this.y = Math.random()*(display_height-this.r*2)+this.r;
        this.color = `rgba(${Math.round(Math.random()*220)+35},${Math.round(Math.random()*220)+35},${Math.round(Math.random()*220)+35},0.5)`;
        this.dx = Math.round(Math.random())==0 ? -1 : 1;
        this.dy = Math.round(Math.random())==0 ? -1 : 1;

        this.state = 'alive';
    }

    setClicked(){
        this.state = 'clicked';
    }

    isClicked(){
        return this.state=='clicked';
    }

    update(){
        this.x+=this.dx;
        this.y+=this.dy;
        if(this.x<this.r || this.x>this.display_width-this.r){
            this.dx = -this.dx;
        }
        if(this.y<this.r || this.y>this.display_height-this.r){
            this.dy = -this.dy;
        }
    }


    isPointInside(x,y){
        let is_inside = Math.sqrt((this.x-x)*(this.x-x)+(this.y-y)*(this.y-y))<=this.r;
        return is_inside;
    }


}