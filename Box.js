class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
   // this.color = color;
    World.add(world, this.body);
   // this.image = loadImage("rock.jpeg");
    this.visibility = 255;
  }
  display(){
    if(this.body.speed<7){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("Blue");
    rect(pos.x, pos.y, this.width, this.height);
    }
    else{
      World.remove(world,this.body);
    }
    }
  
};

