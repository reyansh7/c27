const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world
var holder,ball,ground;

function setup(){
    createCanvas(500,500)
    engine=Engine.create()
    world=engine.world
    var ground_options={
        isStatic:true
    }    
    ground=Bodies.rectangle(250,450,500,40,ground_options)
    World.add(world,ground)
    var ball_options={
        restitution:0.5,
        friction:0.05,
        density:1.0
        }
    ball=Bodies.circle(250,250,40,ball_options)
    World.add(world,ball)
    var holder_options={
        isStatic:true
    }
    holder=Bodies.rectangle(250,100,200,20,holder_options)
    World.add(world,holder)

    var chain_options={
        bodyA:ball,
        bodyB:holder,
        stiffness:0.04,
        length:300
    }
     var chain=Constraint.create(chain_options)
     World.add(world,chain)
}

function draw(){
    background("white")
    Engine.update(engine)
    fill("red")
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,500,40)
    fill("blue")
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,40,40)
    fill("green")
    rectMode(CENTER)
    rect(holder.position.x,holder.position.y,200,20)
    strokeWeight(8)
    stroke("black")
    line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)








}