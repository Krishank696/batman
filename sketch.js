var canvas
var drops
function preload(){
    
}

function setup(){
   createCanvas(500, 500);
    drops = newRain();
}

function draw(){
   canvas.display();
   drops.display();
}   

