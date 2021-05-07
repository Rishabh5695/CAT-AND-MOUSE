var bg,tom,jerry,tomimage1,tomimage2,jerryimage1,jerryimage2,tomimage3,jerryimage3
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    tomimage1=loadAnimation("images/cat1.png")
    tomimage2=loadAnimation("images/cat2.png","images/cat3.png")
    tomimage3=loadAnimation("images/cat4.png")
    jerryimage1=loadAnimation("images/mouse1.png")
    jerryimage2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryimage3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600)
    tom.addAnimation("catsitting",tomimage1)
    tom.scale=0.2
    jerry=createSprite(200,600)
    jerry.addAnimation("mousesitting",jerryimage1)
    jerry.scale=0.15

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
        tom.addAnimation("catstopped",tomimage3)
        tom.changeAnimation("catstopped")
        jerry.addAnimation("mousestopped",jerryimage3)
        jerry.changeAnimation("mousestopped")   
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
     if(keyCode===LEFT_ARROW){
         tom.velocityX=-10
         tom.addAnimation("catwalking",tomimage2)
         tom.changeAnimation("catwalking")
         jerry.addAnimation("mousemoving",jerryimage2)
         jerry.changeAnimation("mousemoving")
            }

}
