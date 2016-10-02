function setup() {
		
	createCanvas(800,800);
	background(255);
	noStroke();
	gapColor = color(240);
	fill(gapColor);
	noLoop();
	lineLength = 12;
	loadPixels();


	// Initializes where the gaps will be
	for (var i = 0; i < int(random(25)); i++) {
		var shape = int(random(2));

		if (shape == 1){
		  	x = int(random(width));
		  	y = int(random(height));
		  	w = int(random(width/10,width/4));
		  	h = int(random(height/10,width/4));
		  	ellipse(x,y,w,h);
		  	loadPixels();

		} else {
		  	var x1 = int(random(width));
		  	var y1 = int(random(height));

		  	// basically make a random line from the original point to the next point
		    r = int(random(width/6));
		  	theta = PI-random(3.14);
		  	x = r*cos(theta);
		  	y = r*sin(theta);

		  	var x2 = x1 + x;
		  	var y2 = y1 + y;

		  	r = int(random(width/6));
		  	theta = PI-random(3.14);
		  	x = r*cos(theta);
		  	y = r*sin(theta);

		  	var x3 = x2 + x;
		  	var y3 = y2 = y;

		  	r = int(random(width/6));
		  	theta = PI-random(3.14);
		  	x = r*cos(theta);
		  	y = r*sin(theta);

		  	var x4 = x3 + x;
		  	var y4 = y3 + y;

		  	quad(x1,y1,x2,y2,x3,y3,x4,y4);
		  	loadPixels();

		}
	}
	loadPixels();
}
function arraysEqual(x,y){
	var limit=Math.min(x.length,y.length);
	for (var index = 0; index < limit; index++) {
		if(x[index] != y[index]) return false;
	}
	return true;
}
function mouseClicked(){
	clear();
	setup();
	draw();
}
// Drawing lines out from an upper left point using polar coordinates
// If the upper left point is in the shapes space don't draw it, else draw it 
function draw(){
	stroke(0);
	strokeWeight(1);
	for (var col = 0; col < int(width/lineLength); col++) {
		for (var row = 0; row < int(height/lineLength); row++) {
						// displayIndex = row*width+col;
			pixelIndex = (row*lineLength*width+col*lineLength)*4; //multiply by 4 for the RGBA
			pixelColor = color(pixels[pixelIndex],pixels[pixelIndex+1],pixels[pixelIndex+2]); 
			pixelColor = get(col*lineLength,row*lineLength);
			// println(pixelColor);//255
			// println(gapColor);
			// println(gapColor["levels"]); //240
			// println(pixelColor != gapColor["levels"]);
			// println(pixelColor != [255,255,255,255]);
			// println(arraysEqual(pixelColor,[255,255,255,255]));
			if(arraysEqual(pixelColor,[255,255,255,255])){
				// theta needs to be between 270 and 360 starting from row col
				// theta needs to be between 0 and 90 starting from row+1 col
				dir = int(random(2));
				if (dir == 0){
					lo = PI*3/4;
					hi = PI;
					r = lineLength;
				  	theta = random(lo*2,hi*2);
				  	x = r*cos(theta);
				  	y = r*sin(theta);
					line(col*lineLength,row*lineLength,col*lineLength+1.5*y,row*lineLength+1.5*x);

					// stroke(color(0, 0, 255));
					// strokeWeight(5);
					// point(col*lineLength, row*lineLength);
					// strokeWeight(1);
				} else {
					altrow = row+1;
					lo = 0;
					hi = PI/4;
					r = lineLength;
				  	theta = random(lo*2,hi*2);
				  	x = r*cos(theta);
				  	y = r*sin(theta);
					line(col*lineLength,altrow*lineLength,col*lineLength+1.5*y,altrow*lineLength+1.5*x);

					// stroke(color(0, 255, 0));
					// strokeWeight(5);
					// point(col*lineLength, row*lineLength);
					// strokeWeight(1);
				}
				

			} else {
				// stroke(color(255, 0, 0));
				// strokeWeight(5);
				// point(col*lineLength, row*lineLength);
				// strokeWeight(1);

			}
			stroke(0);
		}
	}
	filter(THRESHOLD);

}