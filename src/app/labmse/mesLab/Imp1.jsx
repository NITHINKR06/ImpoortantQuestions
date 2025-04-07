import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AssemblyPrograms() {
  return (
    <main className="space-y-12 p-4">
      <Section
        title="1. Binary Search in ALP"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an ALP to search a key element in a list of ‘n’ 8‑bit numbers using the Binary search algorithm.
            </p>
            <CodeBlock>
{`
DATA SEGMENT
  arr   db 06H,12H,15H,56H,65H,70H,78H
  len   db $-arr
  mid   db ?
  key   db 79H
  msg1  db 10,13,'KEY NOT FOUND',10,13,'$'
  msg2  db 10,13,'KEY FOUND AT POSITION $'
DATA ENDS

CODE SEGMENT
ASSUME CS:CODE, DS:DATA
START:
  MOV AX,DATA
  MOV DS,AX
  DEC len
  MOV DL,00H
  MOV DH,len
  MOV BX,0000
  MOV CL,key
UP:
  CMP DL,DH
  JG NOTFOUND
  MOV BL,DL
  ADD BL,DH
  SHR BL,01H
  MOV mid,BL
  CMP CL,arr[BX]
  JZ FOUND
  JB FIRSTHALF
  INC mid
  MOV DL,mid
  JMP UP
FIRSTHALF:
  DEC mid
  MOV DH,mid
  JMP UP
NOTFOUND:
  LEA DX,msg1
  MOV AH,09H
  INT 21H
  JMP EXIT
FOUND:
  LEA DX,msg2
  MOV AH,09H
  INT 21H
  MOV BL,mid
  CALL DISPHEXA
EXIT:
  MOV AH,4CH
  INT 21H
DISPHEXA PROC NEAR
  MOV DL,BL
  MOV CL,04H
  SHR DL,CL
  CMP DL,09H
  JBE L1
  ADD DL,07H
L1:
L2:
  ADD DL,30H
  MOV AH,02H
  INT 21H
  MOV DL,BL
  AND DL,0FH
  CMP DL,09H
  JBE L2
  ADD DL,07H
  ADD DL,30H
  MOV AH,02H
  INT 21H
  RET
DISPHEXA ENDP
CODE ENDS
END START

`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title="2. ALP Macros for Character I/O and String Display"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write ALP macros to (i) read a character and (ii) display a character; then use these to read a string (terminated by carriage return) and print it.
            </p>
            <CodeBlock>
{`
READCHAR MACRO
  MOV AH,01H
  INT 21H
ENDM

DISPCHAR MACRO
  MOV AH,02H
  INT 21H
ENDM

INCLUDE F1.MAC
INCLUDE F2.MAC

DATA SEGMENT
  str  db 50 DUP(?)
  n    db ?
  msg1 db 10,13,'ENTER STRING : $'
  msg2 db 10,13,'ENTERED STRING IS : $'
DATA ENDS

CODE SEGMENT
ASSUME CS:CODE, DS:DATA
START:
  MOV AX,DATA
  MOV DS,AX
  LEA DX,msg1
  MOV AH,09H
  INT 21H
  LEA SI,str
  CALL READSTRING
  MOV n,CL
  LEA DX,msg2
  MOV AH,09H
  INT 21H
  LEA SI,str
  MOV CL,n
  CALL DISPSTRING
  MOV AH,4CH
  INT 21H

READSTRING PROC NEAR
  MOV CL,00H
UP:
  CMP CL,50
  JZ L1
  READCHAR
  CMP AL,0DH
  JZ L1
  MOV [SI],AL
  INC SI
  INC CL
  JMP UP
L1:
  RET
READSTRING ENDP

DISPSTRING PROC NEAR
UP2:
  CMP CL,00
  JZ L2
  MOV DL,[SI]
  DISPCHAR
  INC SI
  DEC CL
  JMP UP2
L2:
  RET
DISPSTRING ENDP
CODE ENDS
END START

`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title="3. Display ASCII Code of a Character"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an ALP to read an alphanumeric character and display its equivalent ASCII code at the center of the screen.
            </p>
            <CodeBlock>

{`
CLRSCR MACRO
  MOV AH,00H
  MOV AL,02H
  INT 10H
ENDM

SETCURSOR MACRO row, col
  MOV DL,col
  MOV DH,row
  MOV BH,00H
  MOV AH,02H
  INT 10H
ENDM

DATA SEGMENT
  n    DB ?
  msg1 DB 10,13,'ENTER THE CHARACTER : $'
DATA ENDS

CODE SEGMENT
ASSUME CS:CODE, DS:DATA
START:
  MOV AX,DATA
  MOV DS,AX
  LEA DX,msg1
  MOV AH,09H
  INT 21H
  MOV AH,01H
  INT 21H
  MOV n,AL
  CLRSCR
  SETCURSOR 12,40
  MOV BL,n
  CALL DISPHEXA
  MOV AH,4CH
  INT 21H
DISPHEXA PROC NEAR
  MOV DL,BL
  MOV CL,04H
  SHR DL,CL
  CMP DL,09H
  JBE L1
  ADD DL,07H
L1:
L2:
  ADD DL,30H
  MOV AH,02H
  INT 21H
  MOV DL,BL
  AND DL,0FH
  CMP DL,09H
  JBE L2
  ADD DL,07H
  ADD DL,30H
  MOV AH,02H
  INT 21H
  RET
DISPHEXA ENDP
CODE ENDS
END START

`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title="4. Reverse String & Check Palindrome"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an ALP to reverse a given string and check whether it is a palindrome.
            </p>
            <CodeBlock>
{`
DATA SEGMENT
  str1 DB 20 DUP(?)
  str2 DB 20 DUP(?)
  n    DB ?
  M1   DB 10,13,'ENTER THE STRING: $'
  M2   DB 10,13,'STRING IS PALINDROME $'
  M3   DB 10,13,'STRING IS NOT PALINDROME$'
DATA ENDS

CODE SEGMENT
ASSUME CS:CODE, DS:DATA
START:
  MOV AX,DATA
  MOV DS,AX
  LEA SI,str1
  LEA DI,str2
  LEA DX,M1
  MOV AH,09H
  INT 21H
  CALL READSTRING
  MOV n,CL
  MOV CL,00H
  DEC SI
UP1:
  CMP CL,n
  JZ CHECK
  MOV AL,[SI]
  MOV [DI],AL
  DEC SI
  INC CL
  INC DI
  JMP UP1
CHECK:
  LEA SI,str1
  LEA DI,str2
  MOV CL,00H
UP2:
  CMP CL,n
  JZ PAL
  MOV AL,[SI]
  CMP AL,[DI]
  JNZ NOTPAL
  INC SI
  INC DI
  INC CL
  JMP UP2
NOTPAL:
  LEA DX,M3
  MOV AH,09H
  INT 21H
  JMP EXIT
PAL:
  LEA DX,M2
  MOV AH,09H
  INT 21H
EXIT:
  MOV AH,4CH
  INT 21H

READSTRING PROC NEAR
  MOV CL,00H
UP:
  MOV AH,01H
  INT 21H
  CMP AL,0DH
  JZ L1
  MOV [SI],AL
  INC SI
  INC CL
  JMP UP
L1:
  RET
READSTRING ENDP
CODE ENDS
END START

`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title="5. Factorial Using Recursion"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an ALP to compute the factorial of a positive integer ‘n’ using a recursive procedure.
            </p>
            <CodeBlock>
{`
DATA SEGMENT
  n    DB 06H
  fact DW ?
  msg  DB 'FACTORIAL(6)=$'
DATA ENDS

CODE SEGMENT
ASSUME CS:CODE, DS:DATA
START:
  MOV AX,DATA  
  MOV DS,AX  
  MOV AX,1  
  MOV BL,n  
  MOV BH,00
  CALL FACTORIAL
  MOV fact,AX  
  LEA DX,msg
  MOV AH,09H
  INT 21H
  CALL DISPHEXA
  MOV BX,fact
  CALL DISPHEXA
  MOV AH,4CH
  INT 21H
FACTORIAL PROC
  CMP BX,1
  JE L1
  PUSH BX
  DEC BX
  CALL FACTORIAL
  POP BX
  MUL BX
  RET
L1:
  RET
FACTORIAL ENDP

DISPHEXA PROC
  MOV DL,BL  
  MOV CL,04  
  SHR DL,CL
  CMP DL,09H
  JBE L2
  ADD DL,07H
L2:
  ADD DL,30H
  MOV AH,02H
  INT 21H
  MOV DL,BL
  AND DL,0FH
  CMP DL,09H
  JBE L2
  ADD DL,07H
  ADD DL,30H
  MOV AH,02H
  INT 21H
  RET
DISPHEXA ENDP
CODE ENDS
END START

`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title="6. Fibonacci Series Generator"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an ALP to generate the first ‘n’ Fibonacci numbers.
            </p>
            <CodeBlock>
{`
DATA SEGMENT
  f1  DB 00H
  f2  DB 01H
  f3  DB ?
  N   DB 10
  msg DB 'THE FIBONACCI SERIES IS:',10,13,'$'
DATA ENDS

CODE SEGMENT
ASSUME CS:CODE, DS:DATA
START:
  MOV AX,DATA
  MOV DS,AX
  LEA DX,msg  
  MOV AH,09H  
  INT 21H  
  MOV BL,f1
  CALL DISPHEXA
  MOV DL,' '
  MOV AH,02H  
  INT 21H
  MOV BL,f2
  CALL DISPHEXA
  MOV DL,' '
  MOV AH,02H  
  INT 21H
  MOV CL,00
  SUB N,02H 
  CMP CL,N
  JZ EXIT
UP:
  MOV AL,f1
  ADD AL,f2
  MOV f3,AL
  MOV BL,f3
  CALL DISPHEXA
  MOV DL,' '
  MOV AH,02H  
  INT 21H
  MOV AL,f2
  MOV f1,AL
  MOV AL,f3
  MOV f2,AL
  INC CL
  JMP UP
EXIT:
  MOV AH,4CH
  INT 21H
DISPHEXA PROC
  PUSH CX
  MOV DL,BL
  MOV CL,04
  SHR DL,CL
  CMP DL,09H
  JBE L1
  ADD DL,07H
L1:
  ADD DL,30H
  MOV AH,02H
  INT 21H
  MOV DL,BL
  AND DL,0FH
  CMP DL,09H
  JBE L1
  ADD DL,07H
  ADD DL,30H
  MOV AH,02H
  INT 21H
  POP CX
  RET
DISPHEXA ENDP
CODE ENDS
END START

`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title="7. Display Current Time"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an ALP to read the current time from the system and display it in standard format.
            </p>
            <CodeBlock>
{`
DATA SEGMENT
  HR  DB ?
  MIN DB ?
  SEC DB ?
  msg DB 'THE CURRENT TIME IS:',10,13,'$'
DATA ENDS

CODE SEGMENT
ASSUME CS:CODE, DS:DATA
START:
  MOV AX,DATA
  MOV DS,AX
  LEA DX,msg
  MOV AH,09H
  INT 21H
  MOV AH,2CH
  INT 21H
  MOV HR,CH
  MOV MIN,CL
  MOV SEC,DH
  MOV AL,HR
  AAM
  MOV BX,AX
  CALL DISPUNPACKDBCD
  MOV DL,':'
  MOV AH,02H
  INT 21H
  MOV AL,MIN
  AAM
  MOV BX,AX
  CALL DISPUNPACKDBCD
  MOV DL,':'
  MOV AH,02H
  INT 21H
  MOV AL,SEC
  AAM
  MOV BX,AX
  CALL DISPUNPACKDBCD
  MOV AH,4CH
  INT 21H
DISPUNPACKDBCD PROC NEAR
  MOV DL,BH
  ADD DL,30H
  MOV AH,02H
  INT 21H
  MOV DL,BL
  ADD DL,30H
  MOV AH,02H
  INT 21H
  RET
DISPUNPACKDBCD ENDP
CODE ENDS
END START


`}
            </CodeBlock>
          </>
        }
      />

<Section
        title="8. File Operations in ALP"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an ALP to create/open a file named myfile.txt, write "Welcome to MICROPROCESSOR LAB" into it, then read and display its content.
            </p>
            <CodeBlock>
{`
DATA SEGMENT
  BUF  DB 30 DUP(?)
  FILE DB 'MYFILE.TXT',0
  MSG  DB "WELCOME TO MICROPROCESSOR LAB$"
DATA ENDS

CODE SEGMENT
ASSUME CS:CODE, DS:DATA
START:
  MOV AX,DATA
  MOV DS,AX
  LEA DX,FILE
  MOV CX,0
  MOV AH,3CH
  INT 21H
  LEA DX,MSG
  MOV CX,30
  MOV BX,AX
  MOV AH,40H
  INT 21H
  MOV AH,3EH
  INT 21H
  LEA DX,FILE
  MOV AL,00H
  MOV AH,3DH
  INT 21H
  LEA DX,BUF
  MOV BX,AX
  MOV CX,30
  MOV AH,3FH
  INT 21H
  MOV AH,3EH
  INT 21H
  LEA DX,BUF
  MOV AH,09H
  INT 21H
  MOV AH,4CH
  INT 21H
CODE ENDS
END START

`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title=""
        content={
          <>
            <p className="mb-4 text-gray-700">
            
            </p>
            {/* <CodeBlock>
{``}
            </CodeBlock> */}
          </>
        }
      />
      
<Section
        title="1. Boolean Input Parity Check"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an Embedded C program to read an 8‑bit Boolean input from the serial monitor and display whether it has an even or odd number of 1s, along with the count.
            </p>
            <CodeBlock>
{`
char rx_byte = 0;
int count = 0;
void setup() {
  Serial.begin(9600);
}
void loop() {
  Serial.println("Enter the 8-bit boolean input:");
  while(1) {
    if(Serial.available() > 0) {
      rx_byte = Serial.read();
      if(rx_byte == '1') count++;
      else if(rx_byte == '\n') break;
    }
  }
  if((count % 2) == 0 && count != 0)
    Serial.println("Even number of 1's");
  else if((count % 2) != 0 && count != 0)
    Serial.println("Odd number of 1's");
  else
    Serial.println("Entered input does not have 1's");
  Serial.print("Number of 1's in the input: ");
  Serial.println(count);
  Serial.println("  ");
}

`}
            </CodeBlock>
          </>
        }
      />

<Section
        title="2. LED Brightness & Buzzer Control"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an Embedded C program to (A) control LED brightness using a potentiometer and (B) turn a buzzer ON/OFF using switches.
            </p>
            <CodeBlock>
{`
// A. LED Brightness Control
#define LED_PIN 8
void setup() {
  Serial.begin(9600);
  pinMode(LED_PIN, OUTPUT);
}
void loop() {
  int analogValue = analogRead(A0);
  int brightness = map(analogValue, 0, 1023, 0, 255);
  analogWrite(LED_PIN, brightness);
  Serial.print("Analog: ");
  Serial.print(analogValue);
  Serial.print(", Brightness: ");
  Serial.println(brightness);
  delay(100);
}

// B. Buzzer Control
#define switch_1 14
#define switch_2 15
#define Buzzer   16
void setup() {
  pinMode(Buzzer, OUTPUT);
  pinMode(switch_1, INPUT);
  pinMode(switch_2, INPUT);
}
void loop() {
  if(digitalRead(switch_1)==LOW && digitalRead(switch_2)==HIGH)
    digitalWrite(Buzzer, HIGH);
  else if(digitalRead(switch_1)==HIGH && digitalRead(switch_2)==LOW)
    digitalWrite(Buzzer, LOW);
  else if(digitalRead(switch_1)==LOW && digitalRead(switch_2)==LOW)
    digitalWrite(Buzzer, HIGH);
  else
    digitalWrite(Buzzer, LOW);
  delay(500);
}
`}
            </CodeBlock>
          </>
        }
      />

<Section
        title="3. LCD Message Display with Effects"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an Embedded C program to (A) display two messages alternatively with a flickering effect on LCD and (B) display a scrolling message in both directions.
            </p>
            <CodeBlock>
{`
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27,16,2);
void setup() {
  lcd.init();
  lcd.backlight();
}
void loop() {
  // A. Flickering messages
  lcd.setCursor(0,0);
  lcd.print("Student Name");
  delay(500);
  lcd.clear();
  lcd.setCursor(0,1);
  lcd.print("Institute Name");
  delay(500);
  lcd.clear();
  // B. Scrolling message
  for(int i=0;i<16;i++){
    lcd.setCursor(i,0);
    lcd.print("Microcontroller");
    lcd.setCursor(15-i,1);
    lcd.print("Programming");
    delay(500);
    lcd.clear();
  }
}

`}
            </CodeBlock>
          </>
        }
      />

<Section
        title="4. 7-Segment Up-Down Counter"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an Embedded C program to perform an up‑down counter on a 7‑segment display using switches.
            </p>
            <CodeBlock>
{`
#include <TM1637Display.h>
#define switch_1 14
#define switch_2 15
const int CLK = 8, DIO = 9;
TM1637Display display(CLK, DIO);
int num = 0;
bool UP = false, DOWN = false;
void setup(){
  pinMode(switch_1, INPUT);
  pinMode(switch_2, INPUT);
  display.setBrightness(7);
  display.setSegments((uint8_t[]){0,0,0,0});
}
void loop(){
  call();
  if(UP){
    if(num == 9999) num = 0;
    num++;
  }
  else if(DOWN){
    if(num == 0) num = 9999;
    num--;
  }
  else
    num = 0;
  display.showNumberDec(num, true, 4, 0);
  delay(500);
}
void call(){
  if(!digitalRead(switch_1))
    UP = true, DOWN = false;
  if(!digitalRead(switch_2))
    UP = false, DOWN = true;
}

`}
            </CodeBlock>
          </>
        }
      />

<Section
        title="5. 7-Segment Ring Counter"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an Embedded C program to perform a ring counter on a 7‑segment display.
            </p>
            <CodeBlock>
{`
#include <TM1637Display.h>
const int CLK = 8, DIO = 9;
TM1637Display display(CLK, DIO);
uint8_t ring[] = {0x06, 0x3F, 0x3F, 0x3F};
uint8_t dumy[4];
int i = 0;
void setup(){
  display.setBrightness(7);
  display.setSegments((uint8_t[]){0,0,0,0});
}
void loop(){
  display.setSegments(ring);
  delay(1000);
  for(i=0;i<3;i++){
    ring_counter();
  }
}
void ring_counter(){
  for(i=0;i<4;i++){
    dumy[i] = ring[(i+3)%4];
  }
  display.setSegments(dumy);
  delay(1000);
  for(i=0;i<4;i++){
    ring[i] = dumy[i];
  }
}


`}
            </CodeBlock>
          </>
        }
      />

<Section
        title="6. Stepper Motor Speed Control"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an Embedded C program to control the speed of a stepper motor using a potentiometer.
            </p>
            <CodeBlock>
{`
const int stepPin = 3, dirPin = 2;
int customDelayMapped;
void setup(){
  pinMode(stepPin, OUTPUT);
  pinMode(dirPin, OUTPUT);
  digitalWrite(dirPin, HIGH);
}
void loop(){
  customDelayMapped = speedUp();
  digitalWrite(stepPin, HIGH);
  delayMicroseconds(customDelayMapped);
  digitalWrite(stepPin, LOW);
  delayMicroseconds(customDelayMapped);
}
int speedUp(){
  int customDelay = analogRead(A0);
  return map(customDelay, 0, 1023, 1000, 4000);
}

`}
            </CodeBlock>
          </>
        }
      />

<Section
        title="7. Stepper Motor Direction Control"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an Embedded C program to drive a stepper motor clockwise and anticlockwise using switches.
            </p>
            <CodeBlock>
{`
const int switch_1 = 14, switch_2 = 15;
const int dirPin = 2, stepPin = 3;
bool clockwise = false, counterclockwise = false;
void setup(){
  pinMode(switch_1, INPUT);
  pinMode(switch_2, INPUT);
  pinMode(stepPin, OUTPUT);
  pinMode(dirPin, OUTPUT);
}
void loop(){
  call();
  if(clockwise){
    digitalWrite(dirPin, HIGH);
    digitalWrite(stepPin, HIGH);
    delayMicroseconds(1000);
    digitalWrite(stepPin, LOW);
    delayMicroseconds(1000);
  }
  if(counterclockwise){
    digitalWrite(dirPin, LOW);
    digitalWrite(stepPin, HIGH);
    delayMicroseconds(1000);
    digitalWrite(stepPin, LOW);
    delayMicroseconds(1000);
  }
}
void call(){
  if(digitalRead(switch_1)==LOW && digitalRead(switch_2)==HIGH)
    clockwise = true, counterclockwise = false;
  if(digitalRead(switch_1)==HIGH && digitalRead(switch_2)==LOW)
    clockwise = false, counterclockwise = true;
}


`}
            </CodeBlock>
          </>
        }
      />

<Section
        title="8. Keypad Calculator"
        content={
          <>
            <p className="mb-4 text-gray-700">
            Question: Write an Embedded C program to read input from a 4×4 keypad and simulate operations as a calculator.
            </p>
            <CodeBlock>
{`
#include <Keypad.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27,16,2);
const byte ROWS = 4, COLS = 4;
char keys[ROWS][COLS] = {
  {'1','2','3','+'},
  {'4','5','6','-'},
  {'7','8','9','*'},
  {'C','0','=','/'}
};
byte rowPins[ROWS] = {22,23,24,25};
byte colPins[COLS] = {26,27,28,29};
Keypad CustomKeypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);
boolean PresentValue = false, Final = false;
String num1 = "", num2 = "";
int answer;
char op;
void setup(){
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0,0);
  lcd.print("Welcome");
  lcd.setCursor(0,1);
  lcd.print("A=+,B=-,C=*,D=/");
  delay(5000);
  lcd.clear();
}
void loop(){
  char key = CustomKeypad.getKey();
  if(key != NO_KEY && (key >= '0' && key <= '9')){
    if(!PresentValue){
      num1 += key;
      lcd.setCursor(15 - num1.length(), 0);
      lcd.print(num1);
    } else {
      num2 += key;
      lcd.setCursor(15 - num2.length(), 1);
      lcd.print(num2);
      Final = true;
    }
  }
  else if(!PresentValue && key != NO_KEY && (key=='/' || key=='*' || key=='-' || key=='+')){
    PresentValue = true;
    op = key;
    lcd.setCursor(15,0);
    lcd.print(op);
  }
  else if(Final && key != NO_KEY && key=='='){
    if(op=='+') answer = num1.toInt() + num2.toInt();
    else if(op=='-') answer = num1.toInt() - num2.toInt();
    else if(op=='*') answer = num1.toInt() * num2.toInt();
    else if(op=='/') answer = num1.toInt() / num2.toInt();
    lcd.clear();
    lcd.setCursor(15,0);
    lcd.autoscroll();
    lcd.print(answer);
    lcd.noAutoscroll();
  }
  else if(key != NO_KEY && key=='C'){
    lcd.clear();
    PresentValue = false;
    Final = false;
    num1 = "";
    num2 = "";
    answer = 0;
    op = ' ';
  }
}

`}
            </CodeBlock>
          </>
        }
      />

      <ToastContainer />
    </main>
  );
}

const Section = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 transition-all duration-200">
      <div
        className="flex justify-between items-center cursor-pointer p-3 sm:p-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-800">{title}</h2>
        <span className="text-xl sm:text-2xl text-indigo-600 ml-4">
          {isOpen ? '−' : '+'}
        </span>
      </div>
      {isOpen && (
        <div className="mt-4 sm:mt-6 animate-fadeIns">
          {content}
        </div>
      )}
    </section>
  );
};

const CodeBlock = ({ children }) => {
  const preRef = React.useRef(null);

  const handleCopy = () => {
    if (preRef.current) {
      const textToCopy = preRef.current.innerText;
      navigator.clipboard.writeText(textToCopy);
      toast.success('Copied!', { autoClose: 2000, position: 'top-center', bodyClassName: 'text-xs' });
    }
  };

  return (
    <div className="relative">
      <button
        className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full shadow-lg transform hover:scale-105 transition duration-300 focus:outline-none text-xs sm:text-sm"
        onClick={handleCopy}
      >
        Copy
      </button>

      <pre
        ref={preRef}
        className="bg-gray-200 p-3 sm:p-4 rounded text-gray-800 overflow-auto whitespace-pre-wrap text-sm sm:text-base"
      >
        {children}
      </pre>
    </div>
  );
};

export { AssemblyPrograms };
