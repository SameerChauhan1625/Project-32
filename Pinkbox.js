class Pinkbox {

    constructor(x,y,w,h){
  
        var options ={
            restitution : 0.5,
            density: 0.6,
            friction: 0.7
          }
        this.box = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("Pink box.png");
        this.visibility = 255;
        World.add(world,this.box);
    }
  
    display(){
      if(this.box.speed<4){
        push();
       translate(this.box.position.x,this.box.position.y);
       rotate(this.box.angle);  
       imageMode(CENTER);
       image(this.image,0,0,this.width,this.height);
       pop();
      }else{
        World.remove(world,this.box);
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visibility);
        image(this.image,this.box.position.x,this.box.position.y,this.width,this.height);
        pop();
      }
     }

     score(){
      if(this.visibility <=0 && this.visibility > -5){
        score++
      }
    }
  
  
  }