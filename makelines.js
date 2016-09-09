function setup() {
		
	createCanvas(720,480);
	background(255);
}

function mouseClicked() {
	// ArrayList<FloatList> points = new ArrayList<FloatList>();
	clear();
	var points = [];
	var size = 12;
	for (var i = 0; i < size; i++) {
	  var x1 = random(width);
	  var y1 = random(height);
	  var x2 = random(width);
	  var y2 = random(height);
	  var slope = (y2-y1)/(x2-x1);
	  var intercept = y2 - (slope * x2);
	  var lineHolder = [];
	  // FloatList line = new FloatList();
	  append(lineHolder,slope);
	  append(lineHolder,intercept);
	  append(lineHolder,x1); 
	  append(lineHolder,x2);
	  append(points,lineHolder);
	  stroke(255,0,150);
	  strokeWeight(1);
	  line(x1, y1, x2, y2);
	}
	// /*
	// for a given y=mx+b and another given y=nx+c the x-coordinate of the intersection between them can
	// be represented as (c-b)/(m-n)
	// */

	for (var j = 0; j < size; j++) {
	  for (var k = j+1; k < size ; k++) {
	    // print(j,k,size,"\n");   
	    var l1 = points[j];
	    var l2 = points[k];
	    var m = l1[0];
	    var n = l2[0];
	    var b = l1[1];
	    var c= l2[1];
	    // FloatList l1 = points.get(j);
	    // FloatList l2 = points.get(k);
	    // float m = l1.get(0);
	    // float n = l2.get(0);
	    // float b = l1.get(1);
	    // float c = l2.get(1);
	    var xIntercept = (c-b)/(m-n);
	    // println(m,n,b,c,xIntercept);
	    if(xIntercept > min(l1[2],l1[3]) && xIntercept < max(l1[2],l1[3])) {
	      if(xIntercept > min(l2[2],l2[3]) && xIntercept < max(l2[2],l2[3])) {
	         strokeWeight(10);
	         stroke(255,125,150);
	         point(xIntercept, m*xIntercept+b);
	         strokeWeight(5);
	         stroke(255,175,200);
	         point(xIntercept, m*xIntercept+b);
	         // println("True: ", xIntercept); 
	      }
	    }
	    
	  }
	}
}