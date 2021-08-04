var bgImg;
var mouse,cat;
var catImg1,mouseImg1,catImg2,mouseImg2,catImg3,mouseImg3;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse2.png");
    mouseImg3 = loadImage("images/mouse3.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addImage("tomsleeping",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("jerrystanding",mouseImg1);
    mouse.scale = 0.15;


}

function draw() {


    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("tomlastimage",catImg3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("tomlastimage");
        mouse.addAnimation("jerrylastimage",mouseImg3);
        mouse.scale = 0.15;
        mouse.changeAnimation("jerrylastimage");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      mouse.addAnimation("jerryteasing",mouseImg2)
      mouse.changeAnimation("jerryteasing");
      mouse.frameDelay = 25;
      cat.velocityX = -5;
      cat.addAnimation("tomrunning",catImg2);
      cat.changeAnimation("tomrunning");
  }
  
  

}
