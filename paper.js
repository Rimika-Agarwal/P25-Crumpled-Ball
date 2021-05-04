class Paper{
    constructor(x, y, r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0.7,
            density:0.5
        }
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("paper.png")
        this.r = r;
        World.add(world,this.body);
    }

    display(){
       imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r*3,this.r*3);
         
    }
}