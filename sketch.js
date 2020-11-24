var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
  
    angleMode(DEGREES);   
}

function draw(){
    background("purple");


    translate(200,200)
    rotate(-90)

    sc = second();

    hr = hour();

    mn = minute();
   

     scAngle = map(sc, 0, 60, 0, 360);

    mnAngle = map(mn,0,60,0,360)

    hrAngle = map(hr % 12,0,12,0,360)


    
   
    push();
    stroke(0,0,255);

    rotate(hrAngle);

    strokeWeight(7);

    line(0,0,50,0);

    pop()

   
    push();
    stroke(255,0,0);

    rotate(scAngle); 

    strokeWeight(7);

    line(0,0,100,0);

    pop()

   
    push();
    stroke(0,255,0);

    rotate(mnAngle);

    strokeWeight(7);

    line(0,0,75,0);

    pop()




   
    point(0,0)
    stroke(255,0,255);

    
  
    noFill();
    strokeWeight(10);

    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
    
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);

    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
  
   
}