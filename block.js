class Block{
  constructor(x, y, width, height) {
    var options = {
      'restitution':0.5,
      'friction':1.0,
      'density':1.0
                              
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x, y,width, height, options);
    this.width = width;
    this.height = height;
    // this.Visiblity = 255;
    World.add(world, this.body);
    }

  display(){
    // if(this.body.speed < 5){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      strokeWeight(4);
      stroke(0);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
   /* else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
    }
  }
  score(){
    if(this.Visibility < 0 && this.Visibility>-105){
      score = score +5;
    }
   }*/
}