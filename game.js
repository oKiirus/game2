
var playbutton, aboutbutton
var gameState="logo"
var bg1
var stars = []
var timer

function preload(){
    bg1 = loadImage('bg1.jpeg')
    logoimg=loadImage("logo.gif")
}

function setup(){
createCanvas(windowWidth,windowHeight)
//background(0)
timer = millis()

//logo = createSprite()
//logo.addImage(logoimg)

//logo.visible=false

/*
    for(var i = 0; i < 300; i++){
        stars[i] = new Star()
    }
    */
    
    playbutton = createImg("play.png")
    playbutton.position(windowWidth / 2 - 100,windowHeight / 2)
    playbutton.size(200,200)




    homebutton= createButton("Home")

}

function draw(){
 
    
    if(gameState == 'logo'){

       //logo.visible=true
        background(logoimg)
        /*
        if(millis() - timer > 10000){
            gameState = 'wait'
        }
        */
    }
   
  /*  
    if(playbutton.mousePressed(()=>{
        if(gameState=="wait"){
        gameState="howTo"
    } else {
        gameState="play"
    }
    }))



    if (gameState ==="wait"){

        background(0)

        for(var i = 0; i < stars.length; i++){
            stars[i].show()
        }
        textSize(50)
        fill("black")
        stroke(255)
        strokeWeight(5)
   text("LOST IN SPACE !! ",windowWidth/2-200,100)
   
    }

    if (gameState ==="howTo"){
        playbutton.position(windowWidth / 2 - 200,windowHeight / 4 * 3)
        background(0)

        for(var i = 0; i < stars.length; i++){
            stars[i].show()
        }
        textSize(50)
        fill("black")
        stroke(255)
        strokeWeight(5)
   text("Information",windowWidth/2-200,100)
   
    }

    

    if (gameState==="play"){        
        playbutton.hide()
        background(0)

        for(var i = 0; i < stars.length; i++){
            stars[i].show()
        }
       
    }
}

class Star{
   

    constructor(){
    
    this.y = Math.random() * windowHeight
    this.x = Math.random() * windowWidth
    this.r = random(3, 5)
    }

    show(){
     
        fill(255)
        stroke(255)
        rect(this.x, this.y, this.r, this.r)

        this.x += this.r

        if(this.x > windowWidth + 10){
this.x = 0
this.y = Math.random() * windowHeight
        }
       
    }*/

}
