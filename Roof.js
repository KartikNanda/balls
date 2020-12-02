class Roof{
    constructor(x,y,w,h){
        var options={
            isStatic: true
          
        }
        this.w=w;
        this.y=y;
        this.h=h;
        this.x=x;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display(){
        var groundPos=this.body.position;

        push();
        translate(groundPos.x,groundPos.y);

        rectMode(CENTER);
        fill(128,128,128);
       rect(0,0,this.w,this.h)
        pop();
        
    }
}