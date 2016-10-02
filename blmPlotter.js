function preload(){
	milestones = loadJSON("milestones.json");
	ages = loadTable("ages.csv","csv","header").getColumn("Age");

}
function setup(){
	createCanvas(800,800);
	translate(100,100);

	textSize(32);
	fill(0);
	text("word", 10, 30); //str, x-coord, y-coord, width, height
	fill(0, 102, 153);
	rotate(PI/2);
	text("word", 0, 0);
	fill(0, 102, 153, 51);
	text("word", 0, 20);
	// for (var i = 0; i < int(random(25)); i++) {
	var placement = 0;
	for (person in ages){
		rotate(-PI/2);
		text("2", 0, placement);
		placement+=20
	}



}

function draw(){

}

