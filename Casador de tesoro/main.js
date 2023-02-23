var ball;
var allWall=[];
var allChest=[];
var chest=[{x:250, y: 310, isCollected: false},
    {x:520, y: 80, isCollected: false},
    {x:80, y: 330, isCollected: false}];
var Wall=[{x:350, y:380, w: 1200, h: 40},
    {x:350, y:20, w: 1200, h: 40}, 
    {x:20, y:200, w: 40, h: 1200}, 
    {x:580, y:200, w: 40, h: 1200}, 
    {x:200, y:100, w: 20, h: 150},
    {x:80, y:100, w: 100, h: 20},
    {x:160, y:180, w: 100, h: 20},
    {x:120, y:240, w: 20, h: 120},
    {x:200, y:320, w: 20, h: 120},
    {x:340, y:260, w: 300, h: 20},
    {x:280, y:180, w: 20, h: 150},
    {x:370, y:100, w: 200, h: 20},
    {x:500, y:180, w: 300, h: 20},]

function preload (){

    chestImage=loadImage("2 tersoro.png")
}
function setup(){
createCanvas(600,400);

ball=createSprite(40,40,30,30);

for(var i in Wall){
var Walls=createSprite(Wall[i].x,Wall[i].y,Wall[i].w,Wall[i].h)
allWall.push(Wall)
}
for(var j in chest){
    var chest1=createSprite(chest[j].x,chest[j].y,chest[j].w,chest[j].h)
chest1.addImage (chestImage)
    allChest.push(chest1) 
    chest1.scale= 0.05 
    }
} 

function draw(){
    background (2)
    for(var j in allChest){

    if(ball.collide(allChest[j])){
allChest [j].visible=false;
allChest[j].destroy(); 
    }
    }


    //for(var i in allWall){ 
        //ball.collide(allWall[i])
   // }

        if (keyDown ("d")){  
    ball.x+=5;
}

if (keyDown ("a")){  
    ball.x-=5;
}
if (keyDown ("w")){  
    ball.y-=5;
}
if (keyDown ("s")){  
    ball.y+=5;
}

drawSprites();
}

