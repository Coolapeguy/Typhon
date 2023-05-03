var vic=0;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(45, 130, 103); //an RGB color orange
  //circle
  stroke(25, 23, 23);// an RGB color for the circle's border
  strokeWeight(5);
  fill(vic,vic,vic); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,200,200); // center of canvas, 20px dia // big circle is subject 99
  strokeWeight(2);
  
}

  function mousePressed(){
    if (vic>=100) 
      {vic=0} else 
    {vic=vic+5}

    


  }