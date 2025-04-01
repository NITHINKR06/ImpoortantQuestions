import React from 'react';

export default function CallRetInfo() {
  return (
    <main className="space-y-12 p-4">
      <Section
        title="1 Working of the CALL Instruction (8086 Microprocessor)"
        content={
          <>
            <p className="mb-4 text-gray-700">
              The <strong>CALL</strong> instruction transfers control to a procedure (subroutine) and ensures execution returns to the main program.
            </p>
            <ul className="list-disc ml-8 text-gray-700 space-y-2">
              <li>
                <strong>Saves Return Address</strong>: Pushes the address of the next instruction (<strong>IP</strong> for near calls or <strong>IP + CS</strong> for far calls) onto the <strong>stack</strong>.
              </li>
              <li>
                <strong>Jumps to Procedure</strong>: Updates <strong>IP</strong> (and <strong>CS</strong> for far calls) with the procedure’s starting address.
              </li>
              <li>
                <strong>Near Call</strong>: Used within the same code segment (e.g., <code>CALL DELAY</code> saves <strong>IP</strong> only).
              </li>
              <li>
                <strong>Far Call</strong>: Used to jump to a different code segment (e.g., <code>CALL FAR_PROC</code> saves both <strong>IP</strong> and <strong>CS</strong>).
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              <strong>Example:</strong>
            </p>
            <pre className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto">
{`CALL DELAY   ; Near call
...
DELAY PROC NEAR
    ...
    RET      ; Returns to next instruction
DELAY ENDP`}
            </pre>
          </>
        }
      />

      <Section
        title="2 Working of the RET Instruction (8086 Microprocessor)"
        content={
          <>
            <p className="mb-4 text-gray-700">
              The <strong>RET</strong> instruction returns execution from a procedure to the main program by restoring the saved return address from the stack.
            </p>
            <ul className="list-disc ml-8 text-gray-700 space-y-2">
              <li>
                <strong>Restores Return Address</strong>: For a <strong>near RET</strong>, it pops the <strong>IP</strong> (2 bytes). For a <strong>far RET</strong>, it pops both <strong>IP</strong> and <strong>CS</strong> (4 bytes total).
              </li>
              <li>
                <strong>Resumes Execution</strong>: Updates <strong>IP</strong> (and <strong>CS</strong> for far returns) to jump back to the instruction following the original <strong>CALL</strong>.
              </li>
              <li>
                <strong>Stack Management</strong>: The stack pointer (<strong>SP</strong>) is adjusted correctly (<strong>+2</strong> for near calls and <strong>+4</strong> for far calls).
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              <strong>Example:</strong>
            </p>
            <pre className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto">
{`CALL DELAY   ; Near call pushes IP
...
DELAY PROC NEAR
    ...
    RET      ; Pops IP and resumes execution here
DELAY ENDP`}
            </pre>
          </>
        }
      />

      <Section
        title="3 Difference Between Procedures and Macros in 8086 Assembly"
        content={
          <>
            <p className="mb-4 text-gray-700">
              The following table summarizes the key differences between <strong>procedures</strong> and <strong>macros</strong>:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="py-2 px-4 border border-gray-300">Aspect</th>
                    <th className="py-2 px-4 border border-gray-300">Procedures</th>
                    <th className="py-2 px-4 border border-gray-300">Macros</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="py-2 px-4 border border-gray-300">Code Reuse</td>
                    <td className="py-2 px-4 border border-gray-300">Code is written once and called repeatedly.</td>
                    <td className="py-2 px-4 border border-gray-300">Code is duplicated at every macro invocation.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300">Execution</td>
                    <td className="py-2 px-4 border border-gray-300">Uses <code>CALL</code> and <code>RET</code>; transfers control to/from procedure.</td>
                    <td className="py-2 px-4 border border-gray-300">Inline code insertion; no control transfer.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300">Memory Usage</td>
                    <td className="py-2 px-4 border border-gray-300">Saves memory (code stored once).</td>
                    <td className="py-2 px-4 border border-gray-300">Increases memory (code duplicated each use).</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300">Execution Speed</td>
                    <td className="py-2 px-4 border border-gray-300">Slower due to <code>CALL</code>/<code>RET</code> overhead.</td>
                    <td className="py-2 px-4 border border-gray-300">Faster (no call/return overhead).</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300">Parameter Handling</td>
                    <td className="py-2 px-4 border border-gray-300">Passed via registers, stack, or memory.</td>
                    <td className="py-2 px-4 border border-gray-300">Parameters substituted during macro expansion.</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300">Code Maintenance</td>
                    <td className="py-2 px-4 border border-gray-300">Easier (modify one place).</td>
                    <td className="py-2 px-4 border border-gray-300">Harder (modify all instances).</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border border-gray-300">Use Cases</td>
                    <td className="py-2 px-4 border border-gray-300">Large, reusable code blocks (e.g., delay loops).</td>
                    <td className="py-2 px-4 border border-gray-300">Short, frequent code snippets (e.g., cursor setup).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-gray-700">
              <p className="mb-2">
                <strong>Key Differences:</strong>
              </p>
              <ul className="list-disc ml-8 space-y-1">
                <li>
                  <strong>Code Placement</strong>: Procedures reside in separate code blocks, while macros are expanded inline.
                </li>
                <li>
                  <strong>Overhead</strong>: Procedures involve stack operations (<code>CALL</code>/<code>RET</code>), whereas macros have no runtime overhead.
                </li>
                <li>
                  <strong>Flexibility</strong>: Macros support parameter substitution at assembly time, whereas procedures pass parameters at runtime.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-gray-700 mb-2"><strong>Example - Procedure:</strong></p>
              <pre className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto mb-4">
{`DELAY PROC NEAR  
    MOV CX, 0FFFFH  
L1: LOOP L1  
    RET  
DELAY ENDP`}
              </pre>
              <p className="text-gray-700 mb-2"><strong>Example - Macro:</strong></p>
              <pre className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto">
{`DELAY MACRO  
    MOV CX, 0FFFFH  
L1: LOOP L1  
ENDM`}
              </pre>
            </div>

            <p className="mt-4 text-gray-700">
              <strong>Conclusion:</strong> Use <strong>procedures</strong> for modularity and code reuse, and <strong>macros</strong> for speed-critical or repetitive short tasks.
            </p>
          </>
        }
      />


      {/* Section 2: Serial Library Functions */}
      <Section
        title="4. Serial Library Functions"
        content={
          <>
            <p className="mb-4 text-gray-700">
              Serial communication is essential in embedded systems for debugging, logging, and data exchange.
            </p>
            <ul className="list-disc ml-8 text-gray-700 space-y-2">
              <li>
                <strong>Serial.begin(baudrate)</strong>
                <br />
                <span className="italic">Purpose:</span> Initializes serial communication at the specified baud rate (e.g., 9600 bps).
                <br />
                <span className="italic">Example:</span>
                <pre className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto mt-2">
{`void setup() {
  Serial.begin(9600);  // Start serial communication at 9600 bps
}`}
                </pre>
              </li>
              <li>
                <strong>Serial.print(data)</strong>
                <br />
                <span className="italic">Purpose:</span> Sends data to the serial port as readable text (without a newline).
                <br />
                <span className="italic">Example:</span>
                <pre className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto mt-2">
{`void loop() {
  Serial.print("Temperature: ");
  Serial.print(25);
  // Output: Temperature: 25 (on the same line)
}`}
                </pre>
              </li>
              <li>
                <strong>Serial.println(data)</strong>
                <br />
                <span className="italic">Purpose:</span> Similar to <code>Serial.print()</code> but adds a newline at the end.
                <br />
                <span className="italic">Example:</span>
                <pre className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto mt-2">
{`void loop() {
  Serial.println("Hello, world!");
  // Each message appears on a new line.
}`}
                </pre>
              </li>
            </ul>
          </>
        }
      />

      {/* Section 3: Basic I/O Function Calls */}
      <Section
        title="5. Basic I/O Function Calls"
        content={
          <>
            <p className="mb-4 text-gray-700">
              Embedded systems use digital and analog I/O functions to interact with hardware like sensors and actuators.
            </p>
            <ul className="list-disc ml-8 text-gray-700 space-y-2">
              <li>
                <strong>pinMode(pin, mode)</strong>
                <br />
                <span className="italic">Purpose:</span> Configures a pin as an <code>INPUT</code>, <code>OUTPUT</code>, or <code>INPUT_PULLUP</code>.
                <br />
                <span className="italic">Example:</span>
                <pre className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto mt-2">
{`void setup() {
  pinMode(13, OUTPUT);  // Set digital pin 13 as an output
}`}
                </pre>
              </li>
              <li>
                <strong>digitalRead(pin)</strong>
                <br />
                <span className="italic">Purpose:</span> Reads the state (<code>HIGH</code> or <code>LOW</code>) of a digital pin.
                <br />
                <span className="italic">Example:</span>
                <pre className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto mt-2">
{`void loop() {
  int buttonState = digitalRead(2);  // Read the state of pin 2
}`}
                </pre>
              </li>
              <li>
                <strong>digitalWrite(pin, value)</strong>
                <br />
                <span className="italic">Purpose:</span> Writes a <code>HIGH</code> or <code>LOW</code> value to a digital pin.
                <br />
                <span className="italic">Example:</span>
                <pre className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto mt-2">
{`void loop() {
  digitalWrite(13, HIGH);  // Turn the LED on
  delay(1000);             // Wait for 1 second
  digitalWrite(13, LOW);   // Turn the LED off
  delay(1000);
}`}
                </pre>
              </li>
              <li>
                <strong>analogRead(pin)</strong>
                <br />
                <span className="italic">Purpose:</span> Reads an analog value from a specified analog pin and converts it (typically 0–1023).
                <br />
                <span className="italic">Example:</span>
                <pre className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto mt-2">
{`void loop() {
  int sensorValue = analogRead(A0);  // Read analog value from A0
}`}
                </pre>
              </li>
              <li>
                <strong>analogWrite(pin, value)</strong>
                <br />
                <span className="italic">Purpose:</span> Outputs a PWM signal to simulate an analog output. The value ranges from 0 (always off) to 255 (always on).
                <br />
                <span className="italic">Example:</span>
                <pre className="bg-gray-100 p-4 rounded text-gray-800 overflow-auto mt-2">
{`void loop() {
  analogWrite(9, 128);  // Output ~50% duty cycle PWM signal on pin 9
}`}
                </pre>
              </li>
            </ul>
          </>
        }
      />

      <Section
        title="6. Baud Rate Definition"
        content={
          <>
            <p className="mb-2 text-gray-700">
              <strong>Meaning:</strong> Baud rate (measured in baud) indicates the number of symbol changes or signal events per second in a communication channel.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Origin:</strong> Derived from the name of Émile Baudot, a pioneer in telegraphy.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Distinction from Bit Rate:</strong> Bit rate measures bits per second, whereas baud rate measures symbols per second. A single symbol can represent multiple bits.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Example:</strong> With QPSK modulation (2 bits per symbol) at 2400 baud, the bit rate is 2400 × 2 = 4800 bits/s.
            </p>
            <p className="text-gray-700">
              <strong>Importance:</strong> Higher baud rates can increase data throughput but require more bandwidth and careful synchronization.
            </p>
          </>
        }
      />

      {/* Section: Communication Methods in Embedded Systems (10 Marks) */}
      <Section
        title="7. Communication Methods in Embedded Systems"
        content={
          <>
            <h3 className="text-2xl font-bold text-indigo-800 mt-4">1. Parallel Communication </h3>
            <p className="mb-2 text-gray-700">
              <strong>Definition:</strong> Sends multiple bits simultaneously over separate wires.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Working:</strong> For example, an 8-bit bus transmits one byte using 8 lines at once.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Pros:</strong> High throughput and speed for short distances.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Cons:</strong> Limited distance due to signal skew and higher complexity.
            </p>

            <h3 className="text-2xl font-bold text-indigo-800 mt-6">2. Arduino Communication </h3>
            <p className="mb-2 text-gray-700">
              <strong>Overview:</strong> Arduino supports various methods like Serial (UART), I2C, SPI, and sometimes parallel.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>Serial (UART):</strong> Uses a single wire (plus ground) for data, suitable for longer distances.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>I2C & SPI:</strong> I2C uses 2 wires for multiple devices; SPI uses 4 wires for high-speed transfers.
            </p>
            <p className="text-gray-700">
              <strong>Parallel on Arduino:</strong> Occasionally used for fast transfers, but requires many I/O pins.
            </p>
          </>
        }
      />

      {/* Section: Procedure to Display a Two-Digit Hexadecimal Number as ASCII */}
      <Section
        title="8. Procedure to Display a Two-Digit Hexadecimal Number as ASCII"
        content={
          <>
            <p className="mb-2 text-gray-700">
              <strong>Assumption:</strong> 8‑bit hexadecimal number is in register BL.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>1. Extract the Upper Nibble:</strong> Shift the number right by 4 bits.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>2. Convert Upper Nibble to ASCII:</strong> If 0–9, add 30H; if A–F, add 37H.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>3. Display the Upper Digit:</strong> Use an output routine (e.g., DOS INT 21H, AH=02H).
            </p>
            <p className="mb-2 text-gray-700">
              <strong>4. Extract the Lower Nibble:</strong> Mask the original number with 0FH.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>5. Convert Lower Nibble to ASCII:</strong> Apply the same conversion.
            </p>
            <p className="text-gray-700">
              <strong>6. Display the Lower Digit:</strong> Output the resulting ASCII character.
            </p>
          </>
        }
      />

      {/* Section: Procedure to Read Two-Digit Hexadecimal ASCII and Convert It to an 8-Bit Value */}
      <Section
        title="9. Procedure to Read Two-Digit Hexadecimal ASCII and Convert It to an 8-Bit Value"
        content={
          <>
            <p className="mb-2 text-gray-700">
              <strong>1. Read the First ASCII Character:</strong> Use an input routine (e.g., DOS INT 21H, AH=01H).
            </p>
            <p className="mb-2 text-gray-700">
              <strong>2. Convert First Character to Hex:</strong> Subtract 30H for digits or 37H for A–F (gives the high nibble).
            </p>
            <p className="mb-2 text-gray-700">
              <strong>3. Shift the High Nibble Left:</strong> Shift left by 4 bits.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>4. Read the Second ASCII Character:</strong> Use the same input routine.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>5. Convert Second Character to Hex:</strong> Use the same conversion for the low nibble.
            </p>
            <p className="text-gray-700">
              <strong>6. Combine the Nibbles:</strong> Add (or logically OR) the shifted high nibble with the low nibble to obtain the complete 8‑bit value.
            </p>
          </>
        }
      />

    </main>
  );
}

// Reusable Section component defined locally in CallRetInfo
const Section = ({ title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="bg-white rounded-xl shadow-xl p-8 mb-6 transition-all duration-200">
      <div 
        className="flex justify-between items-center cursor-pointer hover:bg-indigo-50 p-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl font-semibold text-indigo-800">{title}</h2>
        <span className="text-2xl text-indigo-600 ml-4">
          {isOpen ? '−' : '+'}
        </span>
      </div>
      {isOpen && (
        <div className="mt-6 animate-fadeIn">
          {content}
        </div>
      )}
    </section>
  );
};