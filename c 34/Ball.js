class Ball {
    constructor(x,y,width){
    
    var options = { 
        restitution : 0.1,
        friction : 0,
        density : 3
    }
    this.body = Bodies.circle(x,y,width,options);
    this.width = width;
   
    World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    strokeWeight(6);
    stroke("black");
    fill(10, 143, 134);
    
    ellipse(0,0,this.width *2);
    pop();  
    
    }
    }