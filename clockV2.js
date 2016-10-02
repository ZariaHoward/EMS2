function setup(){
	blockSize = 40;
	background(255);
	mainMatrixWidth = 23;
	mainMatrixHeight = 8;
	createCanvas(mainMatrixWidth * blockSize, mainMatrixHeight * blockSize);
	stroke(0);
	strokeWeight(4);
	rect(0, 0, width-1, height-1);
	matrixNumbersList = [];
	matrix0 = [[ 9, 10, 11, 12,],
				[8, 0, 0, 13,],
				[7, 0, 0, 14,],
				[6, 0, 0, 15,],
				[5, 0, 0, 16,],
				[4, 3, 2, 1 ]]; //16			

	matrix1 = [[ 0, 8, 7, 0,],
				[0, 0, 6, 0,],
				[0, 0, 5, 0,],
				[0, 0, 4, 0,],
				[0, 0, 3, 0,],
				[0, 0, 2, 1 ]]; //8

	matrix2 = [[ 16, 15, 14, 13,],
				[ 0,  0,  0, 12,],
				[ 8,  9, 10, 11,],
				[ 7,  0,  0,  0,],
				[ 5,  0,  0,  0,],
				[ 4,  3,  2,  1 ]]; //16

	matrix3 =  [[ 1, 2, 3, 4,],
				[ 0,  0,  0, 5,],
				[ 9,  8, 7, 6,],
				[ 10, 11, 12, 13,],
				[ 0,  0,  0,  14,],
				[ 18, 17, 16, 15 ]]; //18

	matrix4 = [[ 14,  0,  8, 7,],
				[13,  0,  9, 6,],
				[12, 11, 10, 5,],
				[ 0,  0,  0, 4,],
				[ 0,  0,  0, 2,],
				[ 0,  0,  0, 1 ]]; //14

	matrix5 =  [[ 4,  3,  2,  1,],
				[ 5,  0,  0,  0,],
				[ 6,  7,  8,  9,],
				[ 0,  0,  0, 10,],
				[ 0,  0,  0, 11,],
				[15, 14, 13, 12 ]]; //15

	matrix6 =  [[ 4,  3,  2,  1,],
				[ 5,  0,  0,  0,],
				[ 6, 17,  16, 15,],
				[ 7,  0,  0, 14,],
				[ 8,  0,  0, 13,],
				[ 9, 10, 11, 12 ]];//17

	matrix7 = [[  9,  8,  7,  6,],
				[ 0,  0,  0,  5,],
				[ 0,  0,  0,  4,],
				[ 0,  0,  0,  3,],
				[ 0,  0,  0,  2,],
				[ 0,  0,  0,  1 ]]; //9

	matrix8 = [[ 16, 17, 18, 19,],
				[15,  0,  0, 20,],
				[14, 13, 12, 11,],
				[ 3,  2,  1, 10,],
				[ 4,  0,  0,  9,],
				[ 5,  6,  7,  8 ]]; //20

	matrix9 = [[  9,  8,  7,  6,],
				[10,  0,  0,  5,],
				[11, 12, 13,  4,],
				[ 0,  0,  0,  3,],
				[ 0,  0,  0,  2,],
				[ 0,  0,  0,  1 ]]; //13

	digit1transition = [];
	digit2transition = [];
	digit3transition = [];
	digit4transition = [];

	append(matrixNumbersList,matrix0);
	append(matrixNumbersList,matrix1);
	append(matrixNumbersList,matrix2);
	append(matrixNumbersList,matrix3);
	append(matrixNumbersList,matrix4);
	append(matrixNumbersList,matrix5);
	append(matrixNumbersList,matrix5);
	append(matrixNumbersList,matrix6);
	append(matrixNumbersList,matrix7);
	append(matrixNumbersList,matrix8);
	append(matrixNumbersList,matrix9);

	mainMatrix = [];
	for (var row = 0; row < mainMatrixHeight; row++) {
		var list = [];
		for (var col = 0; col < mainMatrixWidth; col++) {
			append(list, 0);
		}
		append(mainMatrix, list);
	}
	animate(hour(),minute(),true);
}

function animate(hour,minute,replace=false){
	digit1 = (hour - hour%10)/10
	digit1matrix = matrixNumbersList[digit1];
	digit2 = hour%10
	digit2matrix = matrixNumbersList[digit2];
	digit3 = (minute - minute%10)/10
	digit3matrix = matrixNumbersList[digit3];
	digit4 = minute%10
	digit4matrix = matrixNumbersList[digit4];
	accurateDigitsList=[digit1matrix,digit2matrix,digit3matrix,digit4matrix];
	mainMatrix[3][11] = 1;
	mainMatrix[5][11] = 1;
	var s = sec();
	var m = minute();
	var h = hour();
	//previous hour is h-1 , previous minute is m-1 . . . 
	if(replace == true){
		for (var row = 1; row < mainMatrixHeight-1; row++) {
			for (var col = 1; col < 5; col++) {
				mainMatrix[row][col] = digit1matrix[row-1][col-1]*(-1);
			}
			for (var col = 6; col < 10; col++) {
				mainMatrix[row][col] = digit2matrix[row-1][col-6]*(-1);
			}
			for (var col = 13; col < 17; col++) {
				mainMatrix[row][col] = digit3matrix[row-1][col-13]*(-1);
			}
			for (var col = 18; col < 22; col++) {
				mainMatrix[row][col] = digit4matrix[row-1][col-18]*(-1);
			}	
		}
	} else if (s == 0) {
		correctDigits = checkForCorrectDigit(mainMatrix,h,m,s);
		for (var digitSlot = 0; digitSlot <=3; i++){
			if (correctDigits[digitSlot] == false){
				var coords1 = findMinMaxInDigit(digitSlot,mainMatrix);

				if (digitSlot == 0) {
					var coords2 = findMinMaxInNewDigit(matrixNumbersList[digit1 -1])
					makeShortestPath(coords1.min.row, coords1.min.col,  , end , 0 )
				} else if (digitSlot == 1) {
					var coords2 = findMinMaxInNewDigit(matrixNumbersList[digit2 -1])
					makeShortestPath(coords1.min.row, coords1.min.col,  , end , 0 )
				} else if (digitSlot == 2) {
					var coords2 = findMinMaxInNewDigit(matrixNumbersList[digit3 -1])
					makeShortestPath(coords1.min.row, coords1.min.col,  , end , 0 )
				} else {
					var coords2 = findMinMaxInNewDigit(matrixNumbersList[digit4 -1])
					makeShortestPath(coords1.min.row, coords1.min.col,  , end , 0 )
				}
			}
		}
	}
} 
//object.max.row or object.min.col
function findMinMaxInNewDigit(matrix)({
	var minimum = new Object();
	var maximum = new Object();
	minimum.row = 0;
	minimum.col = 0;
	maximum.row = 0;
	maximum.col = 0;
	for (var col=0; col < 6 ; col ++){
		for (var row = 0; row < 4; row++){
			if (matrix[row][col] < matrix[minimum.row][minimum.col]){
					minimum.row = row;
					minimum.col = col;
				}
			if (matrix[row][col] > matrix[maximum.row][maximum.col]){
				maximum.row = row;
				maximum.col = col;
			}
		}
	} 
	retval = new Object;
	retval.min = minimum;
	retval.max = maximum;
	return retval;
})
function findMinMaxInDigit(digitSlot,matrix){
	var minimum = new Object();
	var maximum = new Object();
	if (digitSlot == 1){
		minimum.row = 1;
		minimum.col = 6;
		maximum.row = 1;
		maximum.col = 6;
		for (var row = 1; row < mainMatrixHeight-1; row++) {
			for (var col = 6; col < 10; col++) {
				if (matrix[row][col] < matrix[minimum.row][minimum.col]){
					minimum.row = row;
					minimum.col = col;
				}
				if (matrix[row][col] > matrix[maximum.row][maximum.col]){
					maximum.row = row;
					maximum.col = col;
				}
			}
		}
	}else if (digitSlot == 2){
		minimum.row = 1;
		minimum.col = 13;
		maximum.row = 1;
		maximum.col = 13;
		for (var row = 1; row < mainMatrixHeight-1; row++) {
			for (var col = 13; col < 17; col++) {
				if (matrix[row][col] < matrix[minimum.row][minimum.col]){
					minimum.row = row;
					minimum.col = col;
				}
				if (matrix[row][col] > matrix[maximum.row][maximum.col]){
					maximum.row = row;
					maximum.col = col;
				}
			}
		}

	}else if (digitSlot == 3){
		minimum.row = 1;
		minimum.col = 18;
		maximum.row = 1;
		maximum.col = 18;
		for (var row = 1; row < mainMatrixHeight-1; row++) {
			for (var col = 18; col < 22; col++) {
				if (matrix[row][col] < matrix[minimum.row][minimum.col]){
					minimum.row = row;
					minimum.col = col;
				}
				if (matrix[row][col] > matrix[maximum.row][maximum.col]){
					maximum.row = row;
					maximum.col = col;
				}
			}
		}

	}else{
		minimum.row = 1;
		minimum.col = 1;
		maximum.row = 1;
		maximum.col = 1;
		// this is when digit slot == 0
		for (var row = 1; row < mainMatrixHeight-1; row++) {
			for (var col = 1; col < 5; col++) {
				if (matrix[row][col] < matrix[minimum.row][minimum.col]){
					minimum.row = row;
					minimum.col = col;
				}
				if (matrix[row][col] > matrix[maximum.row][maximum.col]){
					maximum.row = row;
					maximum.col = col;
				}
			}
		}
	}
	retval = new Object;
	retval.min = minimum;
	retval.max = maximum;
	return retval;
}
function checkForCorrectDigit(matrix,hour,minute,second){
	digit1 = (hour - hour%10)/10
	digit1matrix = matrixNumbersList[digit1];
	digit2 = hour%10
	digit2matrix = matrixNumbersList[digit2];
	digit3 = (minute - minute%10)/10
	digit3matrix = matrixNumbersList[digit3];
	digit4 = minute%10
	digit4matrix = matrixNumbersList[digit4];
	results = [true,true,true,true];

	for (var row = 1; row < mainMatrixHeight-1; row++) {
		for (var col = 1; col < 5; col++) {
			if (mainMatrix[row][col] != digit1matrix[row-1][col-1]*(-1)){
				results[0] = false;
				break;
			}
		}
		if (results[0] = false) break;
	}
	for (var row = 1; row < mainMatrixHeight-1; row++) {
		for (var col = 6; col < 10; col++) {
			if (mainMatrix[row][col] != digit2matrix[row-1][col-6]*(-1)){
				results[1] = false;
				break;
			}
		}
		if (results[1] = false) break;
	}
	for (var row = 1; row < mainMatrixHeight-1; row++) {
		for (var col = 13; col < 17; col++) {
			if (mainMatrix[row][col] != digit3matrix[row-1][col-13]*(-1)){
				results[2] = false;
				break;
			}
		}
		if (results[2] = false) break;
	}
	for (var row = 1; row < mainMatrixHeight-1; row++) {
		for (var col = 18; col < 22; col++) {
			if (mainMatrix[row][col] != digit4matrix[row-1][col-18]*(-1)){
				results[3] = false;
				break;
			}	
		}
		if (results[3] = false) break;
	}
	return results;
}
//only call this function with rows and columns in bounds of the matrix
function makeShortestPath(row1,col1,row2,col2,matrix,depth){
	//what this function does it creates a path for the snake to move on
	if (row1 == row2 && col1 == col2){
		return matrix;
	} else if (depth < matrix[row1+1][col1] &&
			   depth < matrix[row1-1][col1] && 
			   depth < matrix[row1][col1+1] && 
			   depth < matrix[row1][col1-1]) {
		return matrix;
	} else {
		if (depth != 0) matrix[row1][col1] = depth;
		if (row1+1 < mainMatrixHeight){
			matrix = makeShortestPath(row1+1,col1,row2,col2,matrix,depth+1);
		}
		if (row1-1 > 0){
			matrix = makeShortestPath(row1-1,col1,row2,col2,matrix,depth+1);
		}
		if (col+1 < mainMatrixWidth){
			matrix = makeShortestPath(row1,col1+1,row2,col2,matrix,depth+1);
		}
		if (col-1 > 0){
			matrix = makeShortestPath(row1,col1-1,row2,col2,matrix,depth+1);
		}
		return matrix;
	}
}



function moveSnakeOnPath(){

}

function draw(){
	clear();
	stroke(255);
	strokeWeight(2);
	var millisecond = millis();
	var h = hour(); // 0-23
	var m = minute(); //0-59
	if (millisecond%1000 == 0) { //every second do stuff
		animate(h,m);
		animate2(h,m);
	}
	for (row = 0; row < mainMatrixHeight; row++) {
		for (col = 0; col < mainMatrixWidth; col++) {

			if (mainMatrix[row][col] < 0){
				fill('#fae');
				rect(blockSize*col,blockSize*row,blockSize,blockSize);
				noFill();
			}
			fill(0);
			textAlign(CENTER);
			textSize(25);
			text(str(mainMatrix[row][col]),blockSize*col,blockSize*row,blockSize,blockSize)
				

		}
	}
}
