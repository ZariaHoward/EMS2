// see https://processing.org/reference/libraries/pdf/index.html
import processing.pdf.*;
boolean bRecordingPDF;
int pdfOutputCount = 4; 


void setup() {
  size(2700, 600); //cut the length in half
  noLoop();
}


void draw() {
  background(200); // this should come BEFORE beginRecord()
  beginRecord(PDF, "zarard_" + pdfOutputCount + ".pdf");
  int txt = 3;
  //--------------------------
  textSize(txt); 
  //for (int L=0; L<nLines; L++) {
  //  String outputStr = ""; 
  //  for (int i=0; i < 1132; i++) {
  //    char randomChar = (char)(random('a', 'z')); 
  //    outputStr += randomChar;
  //  }
  //  fill(0); 
  //  float textY = map(L, 0, nLines-1, 20, height-20);
  //  text (outputStr, 20, textY);
  //}
  PFont font;
// The font must be located in the sketch's 
// "data" directory to load successfully
  textFont(createFont("Century Gothic", 32), txt);
  
  JSONObject milestones = loadJSONObject("milestones.json");
  Table table = loadTable("agesMore.csv","header");
  String[] ages = table.getStringColumn("age");
  String[] classification = table.getStringColumn("classification");
  String[] agency = table.getStringColumn("lawenforcementagency");
  String[] armed = table.getStringColumn("armed");
  int nLines = ages.length; 
  for(int i = 0; i < ages.length; i = i+1){
   //text(ages[i] + " - ", 10, i*txt+1);
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
   printLine = printLine + " . . . . . . . . . Killed by " + classification[i] + " from " + agency[i] + " while armed with " + armed[i] + "." ;
   textSize(txt);
   //fill (68,108,179); 
   fill(0);
   float textY = map(i, 0, nLines-1, 20, height-20);
   text (printLine, 20, textY);
  }
  //--------------------------

  endRecord();
  pdfOutputCount++;
}