import processing.pdf.*;
boolean bRecordingPDF;
int pdfOutputCount = 1; 
 
void setup() {
  size(1000,1000);
  background(255);
  //translate(0,height);
  //rotate(3*PI/2);
  int txt = 4; //int(height/300)
  fill(0);
  noLoop();
  
  beginRecord(PDF, "zarard_" + pdfOutputCount + ".pdf");
  
  stroke(0); 
  line(0,0, width, height); 
  
  JSONObject milestones = loadJSONObject("milestones.json");
  Table table = loadTable("ages.csv","header");
  String[] ages = table.getStringColumn("Age");
  for(int i = 0; i < ages.length; i = i+1){
   text(ages[i] + " - ", 10, i*txt+1);
   String printLine = "";
   for (int event = 12; event < int(ages[i]); event = event+1){
     if (!milestones.isNull(str(event))){
       boolean doPrint = (random(0,1)*random(0,1) > 0) ? true : false;
       if (doPrint){
         printLine = printLine + milestones.getString(str(event)) + " ";
       }
     }
   }
   if (printLine.length() > 50){
     printLine = printLine.substring(0,printLine.length() - int(random(3,50)));
   }
   textSize(txt);
   fill (255,0,0); 
   text(printLine, 20, i*txt+1);
   println(printLine.length());
   
    
  }
  if (milestones == null) {
   println("JSONObject could not be parsed");
  } else {
   String event = milestones.getString("18");
   //println(event);
  }

  endRecord();
  println("Recorded");
 // exit();
  bRecordingPDF = false;
  pdfOutputCount++;  
}