class Cannon{

    constructor(x,y,width,height, angle){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;

        this.cannonBaseImg= loadImage("assets/cannonBase.png")
        this.cannonImg = loadImage("assets/canon.png");

    }

    display(){

        push();
        translate(this.x, this.y)
        rotate(this.angle)
        imageMode(CENTER);
        image(this.cannonImg, 0,0, this.width, this.height)
        pop();
        image(this.cannonBaseImg, 70,20,200,200)
        noFill();
    }
}