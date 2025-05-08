import React from 'react';

export default function Imp1({ searchQuery = "" }) {
  const sections = [
    {
      title: "1. (a) Roles of Status & Control Flags  |  (b) Addressing Modes & Physical Address Calculations",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-700">1(a) Roles of Status Flags and Control Flags in the 8086</h3>
            <h4 className="text-lg font-medium mt-2">Status (Condition) Flags</h4>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li><strong>CF</strong> (Carry Flag): Unsigned overflow/carry out.</li>
              <li><strong>PF</strong> (Parity Flag): Even parity of low-order result byte.</li>
              <li><strong>AF</strong> (Auxiliary Carry): BCD carry between bits 3 and 4.</li>
              <li><strong>ZF</strong> (Zero Flag): Result = 0.</li>
              <li><strong>SF</strong> (Sign Flag): Result negative (MSB = 1).</li>
              <li><strong>OF</strong> (Overflow Flag): Signed overflow.</li>
            </ul>
            <h4 className="text-lg font-medium mt-4">Control Flags</h4>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li><strong>TF</strong> (Trap Flag): Single-step mode.</li>
              <li><strong>IF</strong> (Interrupt Flag): Maskable interrupts enabled.</li>
              <li><strong>DF</strong> (Direction Flag): String ops increment or decrement pointer.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700">1(b) Addressing Modes & Physical Address Calculations</h3>
            <div className="mt-2 space-y-2">
              <div>
                <h4 className="font-medium"><code>ADC [BP + 100H], AX</code></h4>
                <p><strong>Mode:</strong> Based-pointer with displacement (uses SS).</p>
                <p><strong>Offset:</strong> BP + 100H = 69B0H + 0100H = 6AB0H</p>
                <p><strong>Physical:</strong> SS×16 + 6AB0H = 4000H×16 + 6AB0H = <strong>46AB0H</strong></p>
              </div>
              <div>
                <h4 className="font-medium"><code>SUB BLOCK, AX</code></h4>
                <p><strong>Mode:</strong> Direct (absolute) in DS.</p>
                <p><strong>Offset:</strong> BLOCK = 4000H</p>
                <p><strong>Physical:</strong> DS×16 + 4000H = 2000H×16 + 4000H = <strong>24000H</strong></p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2. (a) Segmented Memory Concept & Registers  |  (b) ASSUME & DD Directives",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-700">2(a) Concept of Segmented Memory and Segment Registers</h3>
            <p>The 8086 forms a 20-bit physical address: <code>physical = (segment × 16) + offset</code>, allowing 1 MB from 16-bit registers.</p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
              <li><strong>CS</strong> – Code Segment</li>
              <li><strong>DS</strong> – Data Segment</li>
              <li><strong>SS</strong> – Stack Segment</li>
              <li><strong>ES</strong> – Extra Segment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700">2(b) Assembler Directives</h3>
            <h4 className="font-medium mt-2"><code>ASSUME</code></h4>
            <pre className="bg-gray-100 p-2 rounded"><code>ASSUME DS:DATA, CS:CODE, SS:STACK</code></pre>
            <h4 className="font-medium mt-3"><code>DD</code></h4>
            <pre className="bg-gray-100 p-2 rounded"><code>
{`myDWord  DD 12345678h       ; one 32-bit value
array     DD 100, 200, 300     ; three consecutive doublewords`}
</code></pre>
          </div>
        </div>
      )
    },
    {
      title: "3. (a) IMUL & POP Instructions  |  (b) Parity Program",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-700">3(a) Instruction Explanations</h3>
            <h4 className="font-medium mt-2"><code>IMUL</code></h4>
            <p>Signed multiply. Example:</p>
            <pre className="bg-gray-100 p-2 rounded"><code>
{`MOV AX, -5
IMUL BX         ; DX:AX = AX × BX (signed)`}
</code></pre>

            <h4 className="font-medium mt-4"><code>POP</code></h4>
            <p>Pop 16-bit from stack into register/mem, then SP += 2. Example:</p>
            <pre className="bg-gray-100 p-2 rounded"><code>{`
PUSH AX
PUSH BX
POP  CX        ; CX = BX
POP  DX        ; DX = AX`}</code></pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700">3(b) Count 1's in 8-bit Number & Determine Parity</h3>
            <pre>
<code>{`
; AL contains input; CL counts bits
MOV AX,@DATA
MOV DS,AX
MOV AL,num
XOR CL,CL
Loop:
  TEST AL,1
  JZ Skip
  INC CL
Skip:
  SHR AL,1
  JNZ Loop
; If CL LSB = 0 → even parity
TEST CL,1
JZ EvenMsg
; ...print "Odd"...
JMP Done
EvenMsg:
; ...print "Even"...
Done:
; exit
`}</code>
</pre>
          </div>
        </div>
      )
    }
  ];

  const filteredSections = sections.filter(({ title, content }) => {
    const text = title.toLowerCase() + ' ' +
      React.Children.toArray(content.props.children)
        .filter(c => typeof c === 'string' || typeof c === 'number')
        .join(' ')
        .toLowerCase();
    return text.includes(searchQuery.toLowerCase());
  });

  return (
    <main className="space-y-10 p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      {filteredSections.map((section, idx) => (
        <section key={idx} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-indigo-800 border-b border-indigo-200 pb-2">{section.title}</h2>
          <div className="text-gray-800">{section.content}</div>
        </section>
      ))}
    </main>
  );
}
