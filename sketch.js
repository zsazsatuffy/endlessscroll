
var e;
var end;
var shape1X;
var shape1Y;
var shape1W; 
var shape1H;
var surface; 
var shapeColor;
var current = 1;
var shape_num = 2 ;



function setup() {
  createCanvas(windowWidth,windowHeight);
  shape1X = width/2;
  shape1Y = -10;
  shape1W = 20;
  shape1H = 20;
  surface = color(255,255,255);
  shapeColor = color(0,0,0);
}
function draw() {
  if (shape_num == 1) { 
    make_multi_line();
  }
  if (shape_num == 2) { 
    make_multi_rect();
  }
  if (shape_num == 3) { 
    make_ellipse();
  }
  if (shape_num == 4) { 
    make_triangle();
  }
  if (shape_num == 5) { 
    make_rect();
  }
}


function mouseWheel(event) {
  e = event.delta;

  if (shape_num == 1)
  {
    if (current == 1) { 
      transition9();
    }
    if (current == 2) { 
      transition9();
    }
    if (current == 3) { 
      transition9();
    }
    if (current == 4) { 
      transition9();
    }
  }

  if (shape_num == 2)
  {
    if (current == 1) { 
      transition5();
    }
    if (current == 2) { 
      transition5();
    }
    if (current == 3) { 
      transition6();
    }
    if (current == 4) { 
      transition6();
    }
  }
  if (shape_num == 3)
  {
    if (current == 1 ) { 
      transition1();
    }
    if (current == 2) { 
      transition2();
    }
    if (current == 3) { 
      transition3();
    }
    if (current == 4) { 
      transition4();
    }
  }
  if (shape_num == 5)
  {  
    if (current == 1) { 
      transition5();
    }
    if (current == 2) { 
      transition6();
    }
    if (current == 3) { 
      transition7();
    }
    if (current == 4) { 
      transition7();
    }
  }

  if (shape_num == 4)
  {
    if (current == 1) { 
      transition8();
    }
    if (current == 2) { 
      transition9();
    }
    if (current == 3) { 
      transition8();
    }
    if (current == 4) { 
      transition2();
    }
  }
 
}


//Shapes
function make_ellipse()
{
  noStroke();
  background(surface);
  ellipse(shape1X,shape1Y,shape1W,shape1H);
  fill(shapeColor);
  
}

function make_rect()
{
  noStroke();
  background(surface);
  rectMode(CENTER); 
  rect(shape1X,shape1Y,shape1W,shape1H);
  fill(shapeColor);
}

function make_triangle()
{
    noStroke();
  background(surface);
  triangle(shape1X,shape1Y,shape1X+shape1W,shape1Y,shape1X+shape1W/2,shape1Y+shape1H);
  fill(shapeColor);
  
}

function make_multi_rect()
{
  noStroke();
  background(surface);
  rectMode(CENTER); 
  rect(shape1X,shape1Y,shape1W,shape1H);
  fill(shapeColor);
  rect(shape1X+50,shape1Y,shape1W,shape1H);
  fill(shapeColor);
  rect(shape1X,shape1Y+50,shape1W,shape1H);
  fill(shapeColor);
  rect(shape1X+50,shape1Y+50,shape1W,shape1H);
  fill(shapeColor);
  rect(shape1X-50,shape1Y,shape1W,shape1H);
  fill(shapeColor);
  rect(shape1X-50,shape1Y+50,shape1W,shape1H);
  fill(shapeColor);
  rect(shape1X,shape1Y-50,shape1W,shape1H);
  fill(shapeColor);
  rect(shape1X+50,shape1Y-50,shape1W,shape1H);
  fill(shapeColor);
   rect(shape1X-50,shape1Y-50,shape1W,shape1H);
  fill(shapeColor);
}

function make_multi_line()
{
  noStroke();
  background(surface);
  rectMode(CENTER); 
  rect(shape1X,shape1Y,windowWidth,shape1H);
  fill(shapeColor);
  rect(shape1X,shape1Y-100,windowWidth,shape1H);
  fill(shapeColor);
  rect(shape1X,shape1Y-200,windowWidth,shape1H);
  fill(shapeColor);
  rect(shape1X,shape1Y-300,windowWidth,shape1H);
  fill(shapeColor);
  rect(shape1X,shape1Y-400,windowWidth,shape1H);
  fill(shapeColor);
  rect(shape1X,shape1Y-500,windowWidth,shape1H);
  fill(shapeColor);
    rect(shape1X,shape1Y-600,windowWidth,shape1H);
  fill(shapeColor);
    rect(shape1X,shape1Y-700,windowWidth,shape1H);
  fill(shapeColor);
    rect(shape1X,shape1Y-800,windowWidth,shape1H);
  fill(shapeColor);
    rect(shape1X,shape1Y-900,windowWidth,shape1H);
  fill(shapeColor);
    rect(shape1X,shape1Y-1000,windowWidth,shape1H);
  fill(shapeColor);
}


//Transition

//for ellipse

function transition1(){

 shape1Y= shape1Y+8;

  if(shape1Y > height)
  {
     shape1Y = 0; 

     surface = color(random(255),random(255),random(255));
     shapeColor = color(random(255),random(255),random(255));
    current = parseInt(random(1,5));
    shape_num = parseInt(random(1,6));
  }
  
}

function transition2(){

 shape1Y= shape1Y+10;
 shape1W = shape1W+10;
 shape1H = shape1H+10;
   if(shape1Y > height+600)
  {
     shape1Y = 0; 
     shape1W = 20;
     shape1H = 20;
 
     surface = color(random(255),random(255),random(255));
     shapeColor = color(random(255),random(255),random(255));
    current = parseInt(random(1,5));
    shape_num = parseInt(random(1,6));
  }
  
}

function transition3(){

 shape1Y= height/2;
 shape1W = shape1W*2;
 shape1H = shape1H*1.2;
  if(shape1H > 600)
  {
     shape1Y = 0; 
     shape1W = 20;
     shape1H = 20;
     
     surface = color(random(255),random(255),random(255));
     shapeColor = color(random(255),random(255),random(255));
     
    current = parseInt(random(1,5));
    shape_num = parseInt(random(1,6));
  }
  
}

function transition4(){

  shape1Y= 0;
 shape1H= shape1H*1.2;
 shape1W= shape1W*1.08;

  if(shape1W > 10000)
  {
     shape1Y = 0; 
     shape1H = 20;
     shape1W = 20;

  
     surface = color(random(255),random(255),random(255));
     shapeColor = color(random(255),random(255),random(255));
    current = parseInt(random(1,5));
    shape_num = parseInt(random(1,6));
  }
  
}

//for rect
function transition5(){

 shape1Y= shape1Y+10;

  if(shape1Y > height)
  {
     shape1Y = 0; 


     surface = color(random(255),random(255),random(255));
     shapeColor = color(random(255),random(255),random(255));
    current = parseInt(random(1,5));
    shape_num = parseInt(random(1,6));
  }
  
}

function transition6(){

 shape1Y= shape1Y+10;
 shape1W= shape1W+8;
 shape1H= shape1H+8;


  if(shape1Y > height+300)
  {
     shape1Y = 0; 
     shape1W = 20;
     shape1H = 20;
     


     surface = color(random(255),random(255),random(255));
     shapeColor = color(random(255),random(255),random(255));
    current = parseInt(random(1,5));
    shape_num = parseInt(random(1,6));
  }
  
}

function transition7(){

 shape1Y= shape1Y+10;
 shape1W= shape1W+7;
 shape1H= shape1H+7;

 

  if(shape1Y > height+300)
  {
     shape1Y = 0; 
     shape1W = 20;
     shape1H = 20;

     surface = color(random(255),random(255),random(255));
     shapeColor = color(random(255),random(255),random(255));
    current = parseInt(random(1,5));
    shape_num = parseInt(random(1,6));
  }
  
}

//for triangle
function transition8(){

 shape1Y= shape1Y+15;
 shape1X= shape1X-10;
 shape1W= shape1W+20;
 shape1H= shape1H+20;

 

  if(shape1Y > height+100)
  {
     shape1Y = 0;
     shape1X = width/2;
     shape1W = 20;
     shape1H = 20;

     surface = color(random(255),random(255),random(255));
     shapeColor = color(random(255),random(255),random(255));
    current = parseInt(random(1,5));
    shape_num = parseInt(random(1,6));
  }
  
}

//for lines 
function transition9(){

 shape1Y= height;
 shape1H= shape1H+5;

 

  if(shape1H > height/5)
  {
     shape1Y = -100;
     shape1X = width/2;
     shape1W = 20;
     shape1H = 20;

     surface = color(random(255),random(255),random(255));
     shapeColor = color(random(255),random(255),random(255));
    current = parseInt(random(1,5));
    shape_num = parseInt(random(1,6));
  }
  
}