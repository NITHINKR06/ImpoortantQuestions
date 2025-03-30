import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AssemblyPrograms() {
  return (
    <main className="space-y-12 p-4 bg-gray-50">
      <Section
        title="1. Assembly Program: Read &amp; Display Character Macros"
        content={
          <>
            <p className="mb-4 text-gray-700">
              This program defines two macros—one to read a character and one to display a character—and uses them in a main program that prompts for an input string, displays it, and then exits.
            </p>
            <CodeBlock>
{`Fl.mac (Read Character Macro)
Readchar MACRO
    mov AH, 01H  `}<span className="text-red-500 text-sm">{`; Read a character from keyboard`}</span>{`
    int 21H
ENDM

F2.mac (Display Character Macro)
Dispchar MACRO
    mov AH, 02H  `}<span className="text-red-500 text-sm">{`; Display a character on screen`}</span>{`
    int 21H
ENDM

Main Program (main.asm)
.model small
.stack 100h
.data
    msg1 db "Enter a string: $"
    msg2 db "You entered: $"
    inputstr db 50 dup('$')  `}<span className="text-red-500 text-sm">{`; Buffer to store input string`}</span>{`
    n db ?  `}<span className="text-red-500 text-sm">{`; Length of the input string`}</span>{`

.code
    assume cs:code, ds:data

    include Fl.mac
    include F2.mac

start:
    mov ax, @data
    mov ds, ax

    lea dx, msg1
    mov ah, 09H  `}<span className="text-red-500 text-sm">{`; Display message`}</span>{`
    int 21H

    lea si, inputstr
    call readstring  `}<span className="text-red-500 text-sm">{`; Read string from keyboard`}</span>{`
    mov n, cl  `}<span className="text-red-500 text-sm">{`; Store length of string`}</span>{`

    lea dx, msg2
    mov ah, 09H  `}<span className="text-red-500 text-sm">{`; Display message`}</span>{`
    int 21H

    lea si, inputstr
    mov cl, n
    call dispstring  `}<span className="text-red-500 text-sm">{`; Display the entered string`}</span>{`

    mov ah, 4CH  `}<span className="text-red-500 text-sm">{`; Exit program`}</span>{`
    int 21H

; Read a string from the keyboard
readstring proc near
    mov cl, 00H  `}<span className="text-red-500 text-sm">{`; Initialize counter`}</span>{`
up:
    Readchar  `}<span className="text-red-500 text-sm">{`; Read character`}</span>{`
    cmp al, 0DH  `}<span className="text-red-500 text-sm">{`; Check if Enter is pressed`}</span>{`
    je done
    mov [si], al
    inc si
    inc cl
    jmp up

done:
    ret
readstring endp

; Display a string
dispstring proc near
up2:
    cmp cl, 00H
    je done2
    mov dl, [si]
    Dispchar  `}<span className="text-red-500 text-sm">{`; Display character`}</span>{`
    inc si
    dec cl
    jmp up2

done2:
    ret
dispstring endp

end start`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title="2. Assembly Program: Palindrome Checker"
        content={
          <>
            <p className="mb-4 text-gray-700">
              This program reads an input string, reverses it, and compares the original and reversed strings to determine whether the input is a palindrome.
            </p>
            <CodeBlock>
{`DATA SEGMENT
    str1 DB 20 DUP(?)      `}<span className="text-red-500 text-sm">{`; Original input string`}</span>{`
    str2 DB 20 DUP(?)      `}<span className="text-red-500 text-sm">{`; Reversed string`}</span>{`
    n DB ?                 `}<span className="text-red-500 text-sm">{`; Length of string`}</span>{`
    msg1 DB 10,13, 'Enter string: $'
    msg2 DB 10,13, 'String is palindrome$'
    msg3 DB 10,13, 'String is not palindrome$'
DATA ENDS

CODE SEGMENT
    ASSUME CS:CODE, DS:DATA

START:
    MOV AX, DATA
    MOV DS, AX

    LEA DX, msg1         `}<span className="text-red-500 text-sm">{`; Display message 1`}</span>{`
    MOV AH, 09H
    INT 21H

    LEA SI, str1         `}<span className="text-red-500 text-sm">{`; Read input string`}</span>{`
    CALL READSTRING
    MOV n, CL            `}<span className="text-red-500 text-sm">{`; Store length of input string`}</span>{`

    MOV CL, 00H
    DEC SI               `}<span className="text-red-500 text-sm">{`; Move to last entered character`}</span>{`
UP1:
    CMP CL, n
    JGE CHECK            `}<span className="text-red-500 text-sm">{`; If all characters stored, jump to comparison`}</span>{`

    MOV AL, [SI]         `}<span className="text-red-500 text-sm">{`; Copy character from str1`}</span>{`
    MOV [DI], AL         `}<span className="text-red-500 text-sm">{`; Store in str2 (reverse order)`}</span>{`
    DEC SI
    INC DI
    INC CL
    jmp UP1              `}<span className="text-red-500 text-sm">{`; Repeat for all characters`}</span>{`

CHECK:
    LEA SI, str1         `}<span className="text-red-500 text-sm">{`; Reset pointers`}</span>{`
    LEA DI, str2
    MOV CL, 00H

COMPARE_LOOP:
    CMP CL, n
    JGE PAL              `}<span className="text-red-500 text-sm">{`; If all characters match, it's a palindrome`}</span>{`

    MOV AL, [SI]
    CMP AL, [DI]         `}<span className="text-red-500 text-sm">{`; Compare characters`}</span>{`
    JNE NOTPAL           `}<span className="text-red-500 text-sm">{`; If mismatch, it's not a palindrome`}</span>{`

    INC SI
    INC DI
    INC CL
    jmp COMPARE_LOOP     `}<span className="text-red-500 text-sm">{`; Continue checking`}</span>{`

PAL:
    LEA DX, msg2         `}<span className="text-red-500 text-sm">{`; Print "String is palindrome"`}</span>{`
    MOV AH, 09H
    INT 21H
    jmp EXIT

NOTPAL:
    LEA DX, msg3         `}<span className="text-red-500 text-sm">{`; Print "String is not palindrome"`}</span>{`
    MOV AH, 09H
    INT 21H

EXIT:
    MOV AH, 4CH          `}<span className="text-red-500 text-sm">{`; Exit program`}</span>{`
    INT 21H

READSTRING PROC NEAR
    MOV CL, 00H          `}<span className="text-red-500 text-sm">{`; Initialize counter`}</span>{`
INPUT_LOOP:
    MOV AH, 01H          `}<span className="text-red-500 text-sm">{`; Read a character`}</span>{`
    INT 21H
    CMP AL, 0DH          `}<span className="text-red-500 text-sm">{`; Check if Enter (Carriage Return) is pressed`}</span>{`
    JE END_INPUT

    MOV [SI], AL         `}<span className="text-red-500 text-sm">{`; Store character in str1`}</span>{`
    INC SI
    INC CL
    jmp INPUT_LOOP

END_INPUT:
    RET
READSTRING ENDP

CODE ENDS
END START`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title="3. Assembly Program: Name Input with Screen Clear and Cursor Position"
        content={
          <>
            <p className="mb-4 text-gray-700">
              This assembly program reads a user's name, clears the screen, sets the cursor position, and then displays the entered name.
            </p>
            <CodeBlock>
{`.MODEL SMALL
.STACK 100H

.DATA
    nameStr DB 30 DUP(?)   `}<span className="text-red-500 text-sm">{`; Space for user input (max 30 characters)`}</span>{`
    n DB ?                 `}<span className="text-red-500 text-sm">{`; Stores the length of the input string`}</span>{`
    msg1 DB 10, 13, 'Enter your name: $'
    msg2 DB 10, 13, 'Input in your name: $'

.CODE
; MACRO to clear screen
clrscr MACRO
    MOV AX, 0600H          `}<span className="text-red-500 text-sm">{`; Scroll entire screen up`}</span>{`
    MOV BH, 07H            `}<span className="text-red-500 text-sm">{`; Normal attribute (black background, white text)`}</span>{`
    MOV CX, 0000H          `}<span className="text-red-500 text-sm">{`; Upper-left corner (row 0, col 0)`}</span>{`
    MOV DX, 184FH          `}<span className="text-red-500 text-sm">{`; Lower-right corner (row 24, col 79)`}</span>{`
    INT 10H                `}<span className="text-red-500 text-sm">{`; BIOS video interrupt`}</span>{`
ENDM

; MACRO to set cursor position
setcursor MACRO row, col
    MOV DH, row            `}<span className="text-red-500 text-sm">{`; Row position`}</span>{`
    MOV DL, col            `}<span className="text-red-500 text-sm">{`; Column position`}</span>{`
    MOV BH, 00H            `}<span className="text-red-500 text-sm">{`; Page number`}</span>{`
    MOV AH, 02H            `}<span className="text-red-500 text-sm">{`; Set cursor position function`}</span>{`
    INT 10H
ENDM

.STARTUP
    MOV AX, @DATA          `}<span className="text-red-500 text-sm">{`; Load data segment`}</span>{`
    MOV DS, AX

    LEA DX, msg1           `}<span className="text-red-500 text-sm">{`; Display first message "Enter your name:"`}</span>{`
    MOV AH, 09H
    INT 21H

    LEA SI, nameStr
    CALL ReadString
    MOV n, CL              `}<span className="text-red-500 text-sm">{`; Store the length of input`}</span>{`

    clrscr
    setcursor 10, 30       `}<span className="text-red-500 text-sm">{`; Move cursor to row 10, column 30`}</span>{`

    LEA DX, msg2           `}<span className="text-red-500 text-sm">{`; Display second message "Input in your name:"`}</span>{`
    MOV AH, 09H
    INT 21H

    LEA SI, nameStr
    CALL DispString

    MOV AH, 4CH
    INT 21H

; Procedure to read a string from keyboard
ReadString PROC NEAR
    MOV CL, 00H          `}<span className="text-red-500 text-sm">{`; Initialize counter for string length`}</span>{`

ReadLoop:
    CMP CL, 30           `}<span className="text-red-500 text-sm">{`; Check if max length is reached`}</span>{`
    JGE DoneRead

    MOV AH, 01H          `}<span className="text-red-500 text-sm">{`; Read character from keyboard`}</span>{`
    INT 21H

    CMP AL, 0DH          `}<span className="text-red-500 text-sm">{`; Check if 'Enter' key is pressed`}</span>{`
    JE DoneRead

    MOV [SI], AL         `}<span className="text-red-500 text-sm">{`; Store character in nameStr`}</span>{`
    INC SI
    INC CL
    JMP ReadLoop

DoneRead:
    RET
ReadString ENDP

; Procedure to display a string
DispString PROC NEAR
    MOV CL, n           `}<span className="text-red-500 text-sm">{`; Load string length`}</span>{`

DispLoop:
    CMP CL, 00H
    JE DoneDisp

    MOV DL, [SI]        `}<span className="text-red-500 text-sm">{`; Load character`}</span>{`
    MOV AH, 02H         `}<span className="text-red-500 text-sm">{`; BIOS print function`}</span>{`
    INT 21H

    INC SI
    DEC CL
    JMP DispLoop

DoneDisp:
    RET
DispString ENDP

END`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title="4. Assembly Program: Factorial Calculation"
        content={
          <>
            <p className="mb-4 text-gray-700">
              This assembly program calculates the factorial of a number (stored in the variable <code>num</code>) and saves the result in <code>fact</code>.
            </p>
            <CodeBlock>
{`.MODEL SMALL
.STACK 100H

.DATA
    num DW 3       `}<span className="text-red-500 text-sm">{`; Number whose factorial is to be calculated`}</span>{`
    fact DW 1      `}<span className="text-red-500 text-sm">{`; Variable to store factorial result`}</span>{`
    msg1 DB 10,13, "Factorial: $"   `}<span className="text-red-500 text-sm">{`; Message for output`}</span>{`
    result DB 6 DUP('$')  `}<span className="text-red-500 text-sm">{`; Buffer to store factorial output`}</span>{`

.CODE
MAIN PROC
    MOV AX, @DATA  `}<span className="text-red-500 text-sm">{`; Load data segment`}</span>{`
    MOV DS, AX

    MOV CX, num    `}<span className="text-red-500 text-sm">{`; Load the number into CX (loop counter)`}</span>{`
    MOV AX, 1      `}<span className="text-red-500 text-sm">{`; Initialize AX with 1 (to calculate factorial)`}</span>{`

FactorialLoop:
    MUL CX         `}<span className="text-red-500 text-sm">{`; AX = AX * CX (Multiply AX with CX)`}</span>{`
    DEC CX         `}<span className="text-red-500 text-sm">{`; Decrement CX`}</span>{`
    JNZ FactorialLoop  `}<span className="text-red-500 text-sm">{`; Repeat until CX becomes 0`}</span>{`

    MOV fact, AX   `}<span className="text-red-500 text-sm">{`; Store the final factorial value in fact`}</span>{`

    MOV DX, OFFSET msg1
    MOV AH, 09H
    INT 21H

    CALL PrintNumber

    MOV AH, 4CH  `}<span className="text-red-500 text-sm">{`; Exit program`}</span>{`
    INT 21H
MAIN ENDP

PrintNumber PROC
    MOV BX, 10     `}<span className="text-red-500 text-sm">{`; Base 10 for division`}</span>{`
    MOV CX, 0      `}<span className="text-red-500 text-sm">{`; Counter for digits`}</span>{`

ConvertLoop:
    MOV DX, 0      `}<span className="text-red-500 text-sm">{`; Clear DX for division`}</span>{`
    DIV BX         `}<span className="text-red-500 text-sm">{`; AX = AX / 10, remainder in DX`}</span>{`
    ADD DL, '0'    `}<span className="text-red-500 text-sm">{`; Convert remainder to ASCII`}</span>{`
    PUSH DX
    INC CX         `}<span className="text-red-500 text-sm">{`; Increase digit count`}</span>{`
    CMP AX, 0
    JNE ConvertLoop

PrintLoop:
    POP DX
    MOV AH, 02H    `}<span className="text-red-500 text-sm">{`; DOS interrupt to print character`}</span>{`
    INT 21H
    LOOP PrintLoop

    RET
PrintNumber ENDP

END MAIN`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title="5. Assembly Program: Fibonacci Sequence (8086)"
        content={
          <>
            <p className="mb-4 text-gray-700">
              This assembly program generates a Fibonacci sequence using the 8086 microprocessor. It displays a set number of Fibonacci terms by calculating each term and then printing it to the screen.
            </p>
            <CodeBlock>
{`.MODEL SMALL
.STACK 100H

.DATA
    n DB 10            `}<span className="text-red-500 text-sm">{`; Number of Fibonacci terms to generate`}</span>{`
    msg DB 'Fibonacci Sequence: $'
    newline DB 0DH, 0AH, '$'  `}<span className="text-red-500 text-sm">{`; Newline characters`}</span>{`

.CODE
MAIN PROC
    MOV AX, @DATA      `}<span className="text-red-500 text-sm">{`; Load data segment`}</span>{`
    MOV DS, AX

    LEA DX, msg
    MOV AH, 09H
    INT 21H

    MOV AX, 0         `}<span className="text-red-500 text-sm">{`; First number (AX = 0)`}</span>{`
    MOV BX, 1         `}<span className="text-red-500 text-sm">{`; Second number (BX = 1)`}</span>{`

    CALL DISPLAY_NUM  `}<span className="text-red-500 text-sm">{`; Print first Fibonacci number`}</span>{`
    DEC n            `}<span className="text-red-500 text-sm">{`; Reduce count`}</span>{`
    CMP n, 0
    JE EXIT_PROGRAM  `}<span className="text-red-500 text-sm">{`; If n = 0, exit`}</span>{`
    CALL DISPLAY_NUM  `}<span className="text-red-500 text-sm">{`; Print second Fibonacci number`}</span>{`
    DEC n            `}<span className="text-red-500 text-sm">{`; Reduce count`}</span>{`
    CMP n, 0
    JE EXIT_PROGRAM  
GEN_FIB:
    ADD AX, BX       `}<span className="text-red-500 text-sm">{`; AX = AX + BX (Next Fibonacci number)`}</span>{`
    CALL DISPLAY_NUM `}<span className="text-red-500 text-sm">{`; Print Fibonacci number`}</span>{`
    XCHG AX, BX      `}<span className="text-red-500 text-sm">{`; Swap AX and BX (Prepare for next iteration)`}</span>{`
    DEC n            `}<span className="text-red-500 text-sm">{`; Decrement count`}</span>{`
    JNZ GEN_FIB      `}<span className="text-red-500 text-sm">{`; If n > 0, repeat`}</span>{`
EXIT_PROGRAM:
    LEA DX, newline  
    MOV AH, 09H
    INT 21H

    MOV AH, 4CH      
    INT 21H
MAIN ENDP

DISPLAY_NUM PROC
    PUSH AX
    PUSH BX
    PUSH CX
    PUSH DX

    XOR CX, CX       `}<span className="text-red-500 text-sm">{`; Digit count = 0`}</span>{`
    MOV BX, 10       `}<span className="text-red-500 text-sm">{`; Decimal base for conversion`}</span>{`
CONVERT_LOOP:
    XOR DX, DX       `}<span className="text-red-500 text-sm">{`; Clear DX before division`}</span>{`
    DIV BX           `}<span className="text-red-500 text-sm">{`; AX = AX / 10, remainder in DX`}</span>{`
    ADD DL, '0'      `}<span className="text-red-500 text-sm">{`; Convert remainder to ASCII`}</span>{`
    PUSH DX          `}<span className="text-red-500 text-sm">{`; Store digit on stack`}</span>{`
    INC CX           `}<span className="text-red-500 text-sm">{`; Increase digit count`}</span>{`
    TEST AX, AX      `}<span className="text-red-500 text-sm">{`; Check if AX = 0`}</span>{`
    JNZ CONVERT_LOOP `}<span className="text-red-500 text-sm">{`; If not, continue`}</span>{`
PRINT_DIGITS:
    POP DX           `}<span className="text-red-500 text-sm">{`; Get digit from stack`}</span>{`
    MOV AH, 02H      `}<span className="text-red-500 text-sm">{`; DOS interrupt to print character`}</span>{`
    INT 21H
    LOOP PRINT_DIGITS `}<span className="text-red-500 text-sm">{`; Print all digits`}</span>{`
    MOV DL, ' '     `}<span className="text-red-500 text-sm">{`; Print a space separator`}</span>{`
    MOV AH, 02H
    INT 21H

    POP DX
    POP CX
    POP BX
    POP AX
    RET
DISPLAY_NUM ENDP

END MAIN`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title="6. Assembly Program: Read &amp; Display System Time"
        content={
          <>
            <p className="mb-4 text-gray-700">
              This assembly program retrieves the current system time using a DOS interrupt and displays the hour, minute, and second on the screen.
            </p>
            <CodeBlock>
{`.MODEL SMALL
.STACK 100H

.DATA
    HR   DB ?         `}<span className="text-red-500 text-sm">{`; Stores Hours`}</span>{`
    MIN  DB ?         `}<span className="text-red-500 text-sm">{`; Stores Minutes`}</span>{`
    SEC  DB ?         `}<span className="text-red-500 text-sm">{`; Stores Seconds`}</span>{`
    msg  DB 'Current Time is: ', 0DH, 0AH, '$'  `}<span className="text-red-500 text-sm">{`; Newline formatted message`}</span>{`

.CODE
MAIN PROC
    MOV AX, @DATA     `}<span className="text-red-500 text-sm">{`; Load data segment`}</span>{`
    MOV DS, AX

    LEA DX, msg
    MOV AH, 09H
    INT 21H

    MOV AH, 2CH
    INT 21H           `}<span className="text-red-500 text-sm">{`; AL = Hour, CL = Minute, DH = Second`}</span>{`

    MOV HR, AL        
    MOV MIN, CL       
    MOV SEC, DH       

    MOV AL, HR
    CALL DISPLAY_BCD

    MOV DL, ':'     
    MOV AH, 02H
    INT 21H

    MOV AL, MIN
    CALL DISPLAY_BCD

    MOV DL, ':'     
    MOV AH, 02H
    INT 21H

    MOV AL, SEC
    CALL DISPLAY_BCD

    MOV DL, 0DH
    MOV AH, 02H
    INT 21H

    MOV DL, 0AH
    MOV AH, 02H
    INT 21H

    MOV AH, 4CH
    INT 21H
MAIN ENDP

DISPLAY_BCD PROC
    AAM              
    MOV BX, AX       

    MOV DL, BH       
    ADD DL, '0'      
    MOV AH, 02H
    INT 21H          

    MOV DL, BL       
    ADD DL, '0'      
    MOV AH, 02H
    INT 21H          

    RET
DISPLAY_BCD ENDP

END MAIN`}
            </CodeBlock>
          </>
        }
      />

      <Section
        title="Assembly Programs Code Explanation"
        content={
          <div className="space-y-6">
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-xl font-semibold text-indigo-700">1. Read &amp; Display Character Macros</h3>
              <ul className="list-disc pl-5 text-gray-700 mt-2">
                <li>
                  <code>mov AH, 01H</code> reads a character{" "}
                  <span className="text-red-500 text-sm">{`; Read a character from keyboard`}</span>.
                </li>
                <li>
                  <code>mov AH, 02H</code> displays a character{" "}
                  <span className="text-red-500 text-sm">{`; Display a character on screen`}</span>.
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-xl font-semibold text-indigo-700">2. Palindrome Checker</h3>
              <ul className="list-disc pl-5 text-gray-700 mt-2">
                <li>Stores input in <code>str1</code> and reverses it to <code>str2</code>.</li>
                <li>Compares characters using <code>MOV</code> and <code>CMP</code>.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-xl font-semibold text-indigo-700">3. Name Input with Screen Clear &amp; Cursor Position</h3>
              <ul className="list-disc pl-5 text-gray-700 mt-2">
                <li>Prompts for name input and uses macros to clear the screen (<code>clrscr</code>) and set cursor (<code>setcursor</code>).</li>
                <li>Displays the entered name using DOS interrupts.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-xl font-semibold text-indigo-700">4. Factorial Calculation</h3>
              <ul className="list-disc pl-5 text-gray-700 mt-2">
                <li>Uses <code>MUL CX</code> to multiply <code>AX</code> by <code>CX</code> in a loop.</li>
                <li>Stores the result in <code>fact</code> after decrementing <code>CX</code>.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-xl font-semibold text-indigo-700">5. Fibonacci Sequence</h3>
              <ul className="list-disc pl-5 text-gray-700 mt-2">
                <li>Initializes the sequence with <code>AX = 0</code> and <code>BX = 1</code>.</li>
                <li>Calculates next terms with <code>ADD AX, BX</code> and swaps registers using <code>XCHG</code>.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-xl font-semibold text-indigo-700">6. Read &amp; Display System Time</h3>
              <ul className="list-disc pl-5 text-gray-700 mt-2">
                <li>Uses <code>MOV AH, 2CH</code> to retrieve the current time.</li>
                <li>
                  <code>AAM</code> converts the time value and <code>MOV DL, BL</code> prepares digits for display.
                </li>
              </ul>
            </div>
          </div>
        }
      />

      <ToastContainer />
    </main>
  );
}

const Section = ({ title, content }) => {
  return (
    <section className="bg-white rounded-xl shadow-xl p-8">
      {title && (
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">{title}</h2>
      )}
      <div>{content}</div>
    </section>
  );
};

const CodeBlock = ({ children }) => {
  const preRef = React.useRef(null);

  const handleCopy = () => {
    if (preRef.current) {
      const textToCopy = preRef.current.innerText;
      navigator.clipboard.writeText(textToCopy);
      toast.success("Copied!", { autoClose: 2000 , position: 'top-center', bodyClassName: "text-xs"});
    }
  };

  return (
    <div className="relative">
      <button
  className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-3 py-1 rounded-full shadow-lg transform hover:scale-105 transition duration-300 focus:outline-none"
  onClick={handleCopy}
>
  Copy
</button>

      <pre
        ref={preRef}
        className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto whitespace-pre-wrap"
      >
        {children}
      </pre>
    </div>
  );
};

export { AssemblyPrograms };
