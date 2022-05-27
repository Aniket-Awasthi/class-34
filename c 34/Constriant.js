class Constriant {
    constructor() {
        var options = {
            bodyA : ball.body,
            pointB: {x : 1200, y : 100},
           stiffness: 1,
            length: 830
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);


    }
    display() {

        var pointA = this.chain.bodyA.position;


        push();

        stroke(140, 209, 206);
        strokeWeight(7);
        line(pointA.x, pointA.y - 100, 1200, 100);
    }

}