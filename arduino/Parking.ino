#include <ArduinoJson.h>

int park0_sensor0 = 2;
int park1_sensor0 = 3;
int park0_signal0 = 4;
int park1_signal0 = 5;
String park0sensor0;
String park1sensor0;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(park0_sensor0, INPUT);
  pinMode(park1_sensor0, INPUT);
  digitalWrite(park0_sensor0, HIGH);
  digitalWrite(park1_sensor0, HIGH);
  pinMode(park0_signal0, OUTPUT);
  pinMode(park1_signal0, OUTPUT);
  
}

void loop() {
  
  StaticJsonBuffer<400> jsonBuffer;
  JsonObject& json = jsonBuffer.createObject();
  JsonObject& s0 = jsonBuffer.createObject();
  JsonObject& s1 = jsonBuffer.createObject();
  // put your main code here, to run repeatedly:
  if(digitalRead(park0_sensor0) == LOW){
    s0["p"] = "0";
    s0["s"] = "f";
  }else{
    s0["p"] = "0";
    s0["s"] = "b";
  }
   if(digitalRead(park1_sensor0) == LOW){
    s1["p"] = "1";
    s1["s"] = "f";
  }else{
    s1["p"] = "1";
    s1["s"] = "b";
  }
  JsonArray& data = json.createNestedArray("d");
  data.add(s0);
  data.add(s1);
  
  json.printTo(Serial);
  //JsonObject& obj = jsonBuffer.parseObject(json);
  //obj.printTo(Serial);

  Serial.println();
  //json.prettyPrintTo(Serial);
  delay(10000);
}
