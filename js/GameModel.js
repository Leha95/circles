class GameModel{

    constructor(){
        this.points = 0;
        this.time = 10;
    }

    addPoint(){
        this.points++;
    }

    minusPoint(){
        this.points--;
    }

    pointsGone(){
        return this.points<0;
    }

    timeGone(){
        return this.time<1;
    }

    updateTime(){
        this.time--;
    }

}