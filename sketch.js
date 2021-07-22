
function setup() {
  createCanvas(400,400);

  box= createSprite(200,200,10,10)

}


function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){

    background("red")
  }
  if(keyDown(LEFT_ARROW)){

    background("green")
  }
  if(keyDown(DOWN_ARROW)){

    background("blue")
  }
  if(keyDown(UP_ARROW)){

    background("pink")
  }
drawSprites()
}





