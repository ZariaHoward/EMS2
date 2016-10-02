// Code from Golan's template has been reused here.

//===================================================
// Global variables. 
var nFramesInLoop = 360;
var nElapsedFrames;
var bRecording;
var bIAmRunningThisOnMyLaptop = false;

//===================================================
function setup() {
  createCanvas(800, 800);
  bRecording = false;
  nElapsedFrames = 0;
}

//===================================================
function keyPressed() {
  if (bIAmRunningThisOnMyLaptop) {
    bRecording = true;
    nElapsedFrames = 0;
  }
}

//===================================================
function draw() {

  // Compute a percentage (0...1) representing where we are in the loop.
  var percentCompleteFraction = 0;
  if (bRecording) {
    percentCompleteFraction = float(nElapsedFrames) / float(nFramesInLoop);
  } else {
    percentCompleteFraction = float(frameCount % nFramesInLoop) / float(nFramesInLoop);
  }

  // Render the design, based on that percentage. 
  renderMyDesign(percentCompleteFraction);

  // If we're recording the output, save the frame to a file. 
  // Note that the output images may be 2x large if you have a Retina mac. 
  // You can compile these frames into an animated GIF using a tool like: 
  if (bRecording & bIAmRunningThisOnMyLaptop) {
    var frameOutputFilename = "mynickname-loop-" + nf(nElapsedFrames, 4) + ".png";
    println("Saving output image: " + frameOutputFilename);
    saveCanvas(frameOutputFilename);
    nElapsedFrames++;
    if (nElapsedFrames >= nFramesInLoop) {
      bRecording = false;
    }
  }
}

//===================================================
function renderMyDesign(percent) {
  // This is an example of a function that renders a temporally looping design. 
  // It takes a "percent", between 0 and 1, indicating where we are in the loop. 
  // This example uses two different graphical techniques. 
  // Use or delete whatever you prefer from this example. 
  // Remember to SKETCH FIRST!

  //----------------------
  // here, I set the background and some other graphical properties
  background(255);
  smooth();
  stroke(0, 0, 0);
  strokeWeight(1);

  //----------------------
  // Here, I assign some handy variables. 
  var cx = width/2;
  var cy = height/2;

  //----------------------
  // Here, I use trigonometry to render a rotating element.
  fill(255);
  strokeWeight(7);
  ellipse(cx, cy, 600, 600);
  strokeWeight(1);


  
  var radius = 300;
  var rotatingArmAngle = percent * TWO_PI;
  var px = cx + radius * cos(rotatingArmAngle);
  var py = cy + radius * sin(rotatingArmAngle);
  fill(50);
  arc(cx, cy, 595, 595, 0, min(PI*2-.001,rotatingArmAngle + PI/4*percent), PIE);
  fill(25);
  arc(cx, cy, 595, 595, 0, min(PI*2-.001,rotatingArmAngle + PI/16*percent), PIE);
  fill(0);
  arc(cx, cy, 595, 595, 0, rotatingArmAngle, PIE);
  fill(0);


  //----------------------
  // Include some visual feedback. 
  // fill(0);
  // noStroke();
  // textAlign(CENTER);
  // textSize(30);
  // var percentDisplayString = "" + nf(percent, 1, 3);
  // text(int(percentDisplayString*100000)+1, width/2 +2, 200);

  stroke(0);

  var radius = 300;
  var rotatingArmAngle = percent * TWO_PI;
  var px = cx + radius * cos(rotatingArmAngle);
  var py = cy + radius * sin(rotatingArmAngle);
  fill(255);
  line(cx, cy, px, py);
  ellipse(px, py, 10, 10);


  var radius = 150;
  var rotatingArmAngle = percent * TWO_PI*2;
  var px = cx + radius * cos(rotatingArmAngle);
  var py = cy + radius * sin(rotatingArmAngle);
  fill(255);
  line(cx, cy, px, py);
  ellipse(px, py, 10, 10);

  var radius = 75;
  var rotatingArmAngle = percent * TWO_PI*3;
  var px = cx + radius * cos(rotatingArmAngle);
  var py = cy + radius * sin(rotatingArmAngle);
  fill(255);
  line(cx, cy, px, py);
  ellipse(px, py, 7, 7);

    var radius = 105;
  var rotatingArmAngle = percent * TWO_PI*3;
  var px = cx + radius * cos(-rotatingArmAngle);
  var py = cy + radius * sin(-rotatingArmAngle);
  fill(255);
  line(cx, cy, px, py);
  ellipse(px, py, 11, 11);

    var radius = 82;
  var rotatingArmAngle = percent * TWO_PI*2;
  var px = cx + radius * cos(-rotatingArmAngle);
  var py = cy + radius * sin(-rotatingArmAngle);
  fill(255);
  line(cx, cy, px, py);
  ellipse(px, py, 7, 7);

  var radius = 20;
  var rotatingArmAngle = percent * TWO_PI;
  rotatingArmAngle += PI/2;
  var px = cx + radius * cos(rotatingArmAngle);
  var py = cy + radius * sin(rotatingArmAngle);
  fill(0);
  line(cx, cy, px, py);
  ellipse(px, py, 3, 3);

  var radius = 20;
  var rotatingArmAngle = percent * TWO_PI;
  rotatingArmAngle += PI/8*5;
  var px = cx + radius * cos(rotatingArmAngle);
  var py = cy + radius * sin(rotatingArmAngle);
  fill(255);
  line(cx, cy, px, py);
  ellipse(px, py, 5, 5);

  var radius = 375;
  var rotatingArmAngle = percent * TWO_PI*2;
  rotatingArmAngle -= PI/2;
  var px = cx + radius * cos(rotatingArmAngle);
  var py = cy + radius * sin(rotatingArmAngle);
  fill(0);
  line(cx, cy, px, py);
  ellipse(px, py, 12, 12);

  var radius = 375;
  var rotatingArmAngle = percent * TWO_PI*2;
  rotatingArmAngle += PI/2;
  var px = cx + radius * cos(rotatingArmAngle);
  var py = cy + radius * sin(rotatingArmAngle);
  fill(0);
  line(cx, cy, px, py);
  ellipse(px, py, 15, 15);

  var radius = 200;
  var rotatingArmAngle = percent * TWO_PI*2;
  rotatingArmAngle += PI;
  var px = cx + radius * cos(rotatingArmAngle);
  var py = cy + radius * sin(rotatingArmAngle);
  fill(255);
  line(cx, cy, px, py);
  ellipse(px, py, 16, 16);


  

  var radius = 80;
  var rotatingArmAngle = percent * TWO_PI;
  rotatingArmAngle -= PI/4;
  var px = cx + radius * cos(rotatingArmAngle);
  var py = cy + radius * sin(rotatingArmAngle);
  fill(0);
  line(cx, cy, px, py);
  ellipse(px, py, 3, 3);

  var radius = 80;
  var rotatingArmAngle = percent * TWO_PI*5;
  rotatingArmAngle -= PI*3/4;
  var px = cx + radius * cos(rotatingArmAngle);
  var py = cy + radius * sin(rotatingArmAngle);
  fill(255);
  line(cx, cy, px, py);
  ellipse(px, py, 10, 10);

  var radius = 270;
  var rotatingArmAngle = percent * TWO_PI;
  rotatingArmAngle -= PI*3/4;
  var px = cx + radius * cos(rotatingArmAngle);
  var py = cy + radius * sin(rotatingArmAngle);
  fill(0);
  line(cx, cy, px, py);
  ellipse(px, py, 5, 5);


  


}