var canvas;
var music;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1900,600);

    //create 4 different surfaces
     surface1=new surface(60,800,60,40);
     surface2=new surface(80,800,60,40);
     surface3=new surface(50,800,60,40);
     surface4=new surface(60,800,60,40);
     


    //create box sprite and give velocity
    box1= new box(50,90,70,50);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
     if(surface1.isTouching(box)  && box.bounceOff(surface1)) 
     {
       box1.stroke("white");
     }

}

 function display() {
     box.display();
 }
    

