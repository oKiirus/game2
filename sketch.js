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
background(0)
timer = millis()

logo = createSprite()
logo.addImage(logoimg)

logo.visible=false

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
}

