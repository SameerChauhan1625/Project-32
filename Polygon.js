class Polygon {

    constructor(x,y,w,h){

        var options ={
            restitution : 0.5,
            density: 1.5,
            friction: 0.7
          }
        this.body = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("Polygon.png");
        World.add(world,this.body);
    }

    display(){
     push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);  
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
     pop();
    }


}