// Level 0 Foundation Lab: 25 Hands-on Computational & Binary Exercises
// From Zero to Infinity - Zero Assumptions Curriculum Powered By Kapil

const LEVEL0_EXERCISES = [
  {
    id: 1,
    title: "Exercise 1: Name to ASCII Decoder & Character Breakdown",
    category: "Character Encoding",
    desc: "Type your name or any word in any case (uppercase, lowercase, mixed). The engine breaks down every individual character into its Decimal ASCII code, Hexadecimal, 8-bit Binary representation, and bit-level parity.",
    inputs: [
      { id: "nameInput", label: "Enter your name or text:", type: "text", default: "Kapil Narula" }
    ],
    run: function(vals) {
      const text = vals.nameInput || "Kapil";
      let html = `<div class="space-y-4">
        <div class="p-3 bg-indigo-950/40 border border-indigo-900/60 rounded-xl text-xs text-slate-300">
          <strong>Zero-Assumption Insight:</strong> Computers do not store letters like 'K' or 'a'. Every character is mapped to a standard number (ASCII code) between 0 and 127, stored as 8 binary electrical switches (1s and 0s).
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border border-slate-800 rounded-xl overflow-hidden">
            <thead class="bg-slate-900 text-indigo-300 font-mono text-[11px]">
              <tr>
                <th class="p-2.5 border-b border-slate-800">Index</th>
                <th class="p-2.5 border-b border-slate-800">Char</th>
                <th class="p-2.5 border-b border-slate-800">Case</th>
                <th class="p-2.5 border-b border-slate-800">ASCII (Decimal)</th>
                <th class="p-2.5 border-b border-slate-800">ASCII (Hex)</th>
                <th class="p-2.5 border-b border-slate-800">8-Bit Binary</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 font-mono">`;
      
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        const code = ch.charCodeAt(0);
        const hex = "0x" + code.toString(16).toUpperCase().padStart(2, '0');
        const bin = code.toString(2).padStart(8, '0');
        let charCase = "Special / Space";
        if (code >= 65 && code <= 90) charCase = "UPPERCASE";
        else if (code >= 97 && code <= 122) charCase = "lowercase";

        html += `<tr class="hover:bg-slate-900/40">
          <td class="p-2.5 text-slate-500">${i + 1}</td>
          <td class="p-2.5 font-bold text-amber-300">${ch === ' ' ? '<span class="text-slate-500">[SPACE]</span>' : ch}</td>
          <td class="p-2.5 text-slate-400 text-[10px]">${charCase}</td>
          <td class="p-2.5 font-bold text-emerald-400">${code}</td>
          <td class="p-2.5 text-sky-400">${hex}</td>
          <td class="p-2.5 text-indigo-300 tracking-wider">${bin}</td>
        </tr>`;
      }

      html += `</tbody></table></div>`;
      
      // Summary String
      const binaryString = Array.from(text).map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
      html += `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
        <span class="text-[10px] uppercase font-mono text-slate-500">Full Binary Stream Sent to CPU:</span>
        <p class="font-mono text-xs text-indigo-300 break-all">${binaryString}</p>
      </div>`;

      return html;
    },
    codeSnippet: `// C Language Equivalent
#include <stdio.h>

int main() {
    char name[] = "Kapil";
    for(int i = 0; name[i] != '\\0'; i++) {
        printf("Char: %c | ASCII Dec: %d | Hex: 0x%X\\n", name[i], (int)name[i], (int)name[i]);
    }
    return 0;
}`
  },

  {
    id: 2,
    title: "Exercise 2: Multi-Base Converter (Binary, Octal, Decimal & Hex)",
    category: "Number Systems",
    desc: "Enter any positive decimal integer. The engine calculates and visually displays its exact representation across all 4 primary computing number bases: Binary (Base 2), Octal (Base 8), Decimal (Base 10), and Hexadecimal (Base 16) with remainder steps.",
    inputs: [
      { id: "decInput", label: "Enter Decimal Number (Base 10):", type: "number", default: 254 }
    ],
    run: function(vals) {
      let num = parseInt(vals.decInput);
      if (isNaN(num) || num < 0) num = 0;

      const bin = num.toString(2);
      const oct = num.toString(8);
      const hex = num.toString(16).toUpperCase();

      let html = `<div class="space-y-4">
        <!-- 4 Base Cards Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div class="p-3 bg-slate-950 border border-indigo-900/60 rounded-xl text-center">
            <span class="text-[10px] font-mono text-indigo-400">BINARY (Base 2)</span>
            <div class="text-sm font-bold text-white font-mono break-all mt-1">${bin}₂</div>
          </div>
          <div class="p-3 bg-slate-950 border border-emerald-900/60 rounded-xl text-center">
            <span class="text-[10px] font-mono text-emerald-400">OCTAL (Base 8)</span>
            <div class="text-sm font-bold text-white font-mono mt-1">${oct}₈</div>
          </div>
          <div class="p-3 bg-slate-950 border border-sky-900/60 rounded-xl text-center">
            <span class="text-[10px] font-mono text-sky-400">DECIMAL (Base 10)</span>
            <div class="text-sm font-bold text-white font-mono mt-1">${num}₁₀</div>
          </div>
          <div class="p-3 bg-slate-950 border border-amber-900/60 rounded-xl text-center">
            <span class="text-[10px] font-mono text-amber-400">HEX (Base 16)</span>
            <div class="text-sm font-bold text-white font-mono mt-1">0x${hex}₁₆</div>
          </div>
        </div>

        <!-- Binary Division Steps Table -->
        <div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
          <h5 class="text-xs font-bold text-indigo-400 flex items-center gap-1.5">
            <i class="fa-solid fa-calculator"></i> Step-by-Step Repeated Division by 2 (Tracking Remainders)
          </h5>
          <p class="text-[11px] text-slate-400">Divide the quotient by 2 repeatedly until 0. Read the remainders from bottom to top (LSB to MSB):</p>
          <div class="font-mono text-xs text-slate-300 space-y-1 mt-2 pl-2 border-l-2 border-indigo-500">`;

      let temp = num;
      let step = 1;
      if (temp === 0) {
        html += `<div>0 / 2 = 0 | Remainder: 0</div>`;
      }
      while (temp > 0 && step <= 16) {
        let q = Math.floor(temp / 2);
        let rem = temp % 2;
        html += `<div>Step ${step}: ${temp} ÷ 2 = ${q} | <strong class="text-emerald-400">Remainder: ${rem}</strong></div>`;
        temp = q;
        step++;
      }

      html += `</div>
          <p class="text-[11px] text-emerald-400 font-mono mt-2">✓ Result from bottom to top: <strong>${bin}₂</strong></p>
        </div>
      </div>`;

      return html;
    },
    codeSnippet: `// C Language Base Conversion
#include <stdio.h>

int main() {
    int n = 254;
    printf("Decimal: %d\\n", n);
    printf("Octal:   %o\\n", n);
    printf("Hex:     %X\\n", n);
    return 0;
}`
  },

  {
    id: 3,
    title: "Exercise 3: Binary Bit Counter & Byte Size Calculator",
    category: "Hardware & Memory",
    desc: "Calculate total bits, bytes, nibbles (4-bit chunks), and CPU words for any payload.",
    inputs: [
      { id: "bytePayload", label: "Payload text or data:", type: "text", default: "Digital Empowerment 2026" }
    ],
    run: function(vals) {
      const txt = vals.bytePayload || "";
      const byteCount = new TextEncoder().encode(txt).length;
      const bitCount = byteCount * 8;
      const nibbleCount = byteCount * 2;
      const wordCount32 = (byteCount / 4).toFixed(2);
      const wordCount64 = (byteCount / 8).toFixed(2);

      return `<div class="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-center">
        <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl">
          <span class="text-[10px] text-slate-400">TOTAL BITS</span>
          <div class="text-lg font-bold text-indigo-400">${bitCount} bits</div>
        </div>
        <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl">
          <span class="text-[10px] text-slate-400">TOTAL BYTES</span>
          <div class="text-lg font-bold text-emerald-400">${byteCount} Bytes</div>
        </div>
        <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl">
          <span class="text-[10px] text-slate-400">NIBBLES (4-bit)</span>
          <div class="text-lg font-bold text-amber-400">${nibbleCount} nibbles</div>
        </div>
        <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl">
          <span class="text-[10px] text-slate-400">64-BIT CPU WORDS</span>
          <div class="text-lg font-bold text-sky-400">${wordCount64} words</div>
        </div>
      </div>`;
    },
    codeSnippet: `int bytes = sizeof("Digital Empowerment 2026");\nprintf("Bytes: %d | Bits: %d\\n", bytes, bytes * 8);`
  },

  {
    id: 4,
    title: "Exercise 4: Bitwise Logic Gates Explorer (AND, OR, NOT, XOR)",
    category: "Digital Logic",
    desc: "Test electronic Boolean operations on two 8-bit integers.",
    inputs: [
      { id: "gateA", label: "Operand A (0-255):", type: "number", default: 12 },
      { id: "gateB", label: "Operand B (0-255):", type: "number", default: 10 }
    ],
    run: function(vals) {
      const a = parseInt(vals.gateA) || 0;
      const b = parseInt(vals.gateB) || 0;
      const andRes = a & b;
      const orRes = a | b;
      const xorRes = a ^ b;
      const notA = (~a) & 0xFF;

      const toBin = n => n.toString(2).padStart(8, '0');

      return `<div class="space-y-3 font-mono text-xs">
        <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1 text-slate-300">
          <div>A = ${a.toString().padStart(3, ' ')} -> <span class="text-indigo-400">${toBin(a)}</span></div>
          <div>B = ${b.toString().padStart(3, ' ')} -> <span class="text-emerald-400">${toBin(b)}</span></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div class="p-2.5 bg-slate-950 border border-slate-800 rounded-lg">
            <span class="text-[10px] text-slate-400">A AND B (&)</span>
            <div class="text-emerald-400 font-bold">${toBin(andRes)} (${andRes})</div>
          </div>
          <div class="p-2.5 bg-slate-950 border border-slate-800 rounded-lg">
            <span class="text-[10px] text-slate-400">A OR B (|)</span>
            <div class="text-sky-400 font-bold">${toBin(orRes)} (${orRes})</div>
          </div>
          <div class="p-2.5 bg-slate-950 border border-slate-800 rounded-lg">
            <span class="text-[10px] text-slate-400">A XOR B (^)</span>
            <div class="text-amber-400 font-bold">${toBin(xorRes)} (${xorRes})</div>
          </div>
          <div class="p-2.5 bg-slate-950 border border-slate-800 rounded-lg">
            <span class="text-[10px] text-slate-400">NOT A (~) 8-bit</span>
            <div class="text-rose-400 font-bold">${toBin(notA)} (${notA})</div>
          </div>
        </div>
      </div>`;
    },
    codeSnippet: `int a = 12, b = 10;\nprintf("AND: %d | OR: %d | XOR: %d\\n", a & b, a | b, a ^ b);`
  },

  {
    id: 5,
    title: "Exercise 5: Two's Complement & Negative Binary Explorer",
    category: "Binary Arithmetic",
    desc: "Discover how computers store negative integers in hardware without dedicated minus signs.",
    inputs: [
      { id: "negNum", label: "Enter integer (-128 to 127):", type: "number", default: -5 }
    ],
    run: function(vals) {
      let n = parseInt(vals.negNum) || 0;
      let raw = (n < 0 ? (256 + n) : n) & 0xFF;
      let bin = raw.toString(2).padStart(8, '0');
      let signBit = bin[0];

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 font-mono text-xs">
        <p class="text-slate-300">Target Integer: <strong class="text-amber-400">${n}</strong></p>
        <p>Two's Complement 8-bit format: <strong class="text-indigo-400 text-sm tracking-widest">${bin}</strong></p>
        <p class="text-slate-400 text-[11px]">Sign Bit (MSB): <strong class="${signBit === '1' ? 'text-rose-400' : 'text-emerald-400'}">${signBit}</strong> (${signBit === '1' ? 'Negative' : 'Positive'})</p>
        <div class="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
          Rule: Invert all bits of positive magnitude (${Math.abs(n)}) and add 1.
        </div>
      </div>`;
    },
    codeSnippet: `signed char c = -5;\nprintf("Unsigned byte value: %u\\n", (unsigned char)c);`
  },

  {
    id: 6,
    title: "Exercise 6: Memory Address & Pointer Offset Visualizer",
    category: "C Programming & Hardware",
    desc: "Simulate physical RAM addresses and pointer offset jumps based on data types.",
    inputs: [
      { id: "baseAddr", label: "Base RAM Address (Hex):", type: "text", default: "0x7FFEE4A0" },
      { id: "typeSelect", label: "Data Type:", type: "select", options: ["char (1B)", "int (4B)", "double (8B)"], default: "int (4B)" }
    ],
    run: function(vals) {
      let base = parseInt(vals.baseAddr || "0x7FFEE4A0", 16) || 0x7FFEE4A0;
      let step = vals.typeSelect.includes("char") ? 1 : vals.typeSelect.includes("double") ? 8 : 4;

      let html = `<div class="space-y-2 font-mono text-xs">
        <span class="text-[10px] text-slate-400">Consecutive Array Elements in RAM:</span>
        <div class="divide-y divide-slate-800 border border-slate-800 rounded-xl bg-slate-950">`;

      for (let i = 0; i < 4; i++) {
        let addr = (base + (i * step)).toString(16).toUpperCase();
        html += `<div class="p-2.5 flex items-center justify-between text-slate-300">
          <span>Element array[${i}]</span>
          <span class="text-indigo-400 font-bold">0x${addr}</span>
          <span class="text-[11px] text-emerald-400">+${i * step} bytes</span>
        </div>`;
      }
      html += `</div></div>`;
      return html;
    },
    codeSnippet: `int arr[4];\nfor(int i=0; i<4; i++) printf("&arr[%d] = %p\\n", i, (void*)&arr[i]);`
  },

  {
    id: 7,
    title: "Exercise 7: Data Type Size & Hardware Limits Matrix",
    category: "C Programming & Types",
    desc: "Inspect C primitive types, storage byte footprint, and exact min/max limits.",
    inputs: [],
    run: function() {
      const types = [
        { name: "char", size: "1 Byte (8 bits)", range: "-128 to 127" },
        { name: "unsigned char", size: "1 Byte (8 bits)", range: "0 to 255" },
        { name: "short int", size: "2 Bytes (16 bits)", range: "-32,768 to 32,767" },
        { name: "int", size: "4 Bytes (32 bits)", range: "-2,147,483,648 to 2,147,483,647" },
        { name: "unsigned int", size: "4 Bytes (32 bits)", range: "0 to 4,294,967,295" },
        { name: "long long", size: "8 Bytes (64 bits)", range: "~ -9.22 × 10¹⁸ to +9.22 × 10¹⁸" },
        { name: "float", size: "4 Bytes (32 bits)", range: "±1.18×10⁻³⁸ to ±3.4×10³⁸ (6 decimals)" },
        { name: "double", size: "8 Bytes (64 bits)", range: "±2.23×10⁻³⁰⁸ to ±1.79×10³⁰⁸ (15 decimals)" }
      ];

      let html = `<div class="overflow-x-auto"><table class="w-full text-xs font-mono border border-slate-800 rounded-xl">
        <thead class="bg-slate-900 text-indigo-300">
          <tr><th class="p-2 text-left">Type</th><th class="p-2 text-left">RAM Footprint</th><th class="p-2 text-left">Permissible Value Range</th></tr>
        </thead>
        <tbody class="divide-y divide-slate-800/60 bg-slate-950">`;

      types.forEach(t => {
        html += `<tr><td class="p-2 font-bold text-amber-300">${t.name}</td><td class="p-2 text-emerald-400">${t.size}</td><td class="p-2 text-slate-300">${t.range}</td></tr>`;
      });

      return html + `</tbody></table></div>`;
    },
    codeSnippet: `printf("int: %zu bytes | double: %zu bytes\\n", sizeof(int), sizeof(double));`
  },

  {
    id: 8,
    title: "Exercise 8: ASCII Case Shifter (The +32 / -32 Math Engine)",
    category: "Character Encoding",
    desc: "Understand how compilers flip letter casing purely through arithmetic on the 6th bit (difference of 32).",
    inputs: [
      { id: "charToShift", label: "Enter a letter:", type: "text", default: "K" }
    ],
    run: function(vals) {
      let c = (vals.charToShift || "K")[0];
      let code = c.charCodeAt(0);
      let isUpper = (code >= 65 && code <= 90);
      let isLower = (code >= 97 && code <= 122);
      let flippedCode = isUpper ? (code + 32) : isLower ? (code - 32) : code;
      let flippedChar = String.fromCharCode(flippedCode);

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-2">
        <div class="flex items-center gap-4">
          <div>Original: <strong class="text-amber-400 text-base">${c}</strong> (ASCII: ${code})</div>
          <div class="text-slate-500">──▶</div>
          <div>Flipped: <strong class="text-emerald-400 text-base">${flippedChar}</strong> (ASCII: ${flippedCode})</div>
        </div>
        <p class="text-slate-400 text-[11px] pt-1">
          Math Formula: ${isUpper ? `${code} + 32 = ${flippedCode}` : `${code} - 32 = ${flippedCode}`}.
          Notice bit 5 (value 32) flips from 0 to 1!
        </p>
      </div>`;
    },
    codeSnippet: `char toLower(char c) { return (c >= 'A' && c <= 'Z') ? c + 32 : c; }`
  },

  {
    id: 9,
    title: "Exercise 9: Unit Converter (Bits, Bytes, KB, MB, GB, TB, PB)",
    category: "Informational Technology",
    desc: "Convert digital data across decimal (1000) and binary (1024) storage tiers.",
    inputs: [
      { id: "dataVal", label: "Amount in Gigabytes (GB):", type: "number", default: 8 }
    ],
    run: function(vals) {
      let gb = parseFloat(vals.dataVal) || 0;
      let mb = gb * 1024;
      let kb = mb * 1024;
      let bytes = kb * 1024;
      let bits = bytes * 8;
      let tb = (gb / 1024).toFixed(4);

      return `<div class="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-1.5 text-slate-300">
        <div>${gb} Gigabytes (GB) equals:</div>
        <div class="text-indigo-400">• ${mb.toLocaleString()} Megabytes (MB)</div>
        <div class="text-sky-400">• ${kb.toLocaleString()} Kilobytes (KB)</div>
        <div class="text-emerald-400">• ${bytes.toLocaleString()} Bytes</div>
        <div class="text-amber-400 font-bold">• ${bits.toLocaleString()} Bits</div>
        <div class="text-slate-400">• ${tb} Terabytes (TB)</div>
      </div>`;
    },
    codeSnippet: `double gb = 8.0;\ndouble bytes = gb * 1024 * 1024 * 1024;\nprintf("Bytes: %.0f\\n", bytes);`
  },

  {
    id: 10,
    title: "Exercise 10: Clock Speed to Cycle Time Calculator",
    category: "Computer Organization",
    desc: "Calculate the exact duration of a single CPU clock tick in nanoseconds from processor GHz.",
    inputs: [
      { id: "cpuGhz", label: "CPU Clock Frequency (in GHz):", type: "number", default: 3.2 }
    ],
    run: function(vals) {
      let ghz = parseFloat(vals.cpuGhz) || 1.0;
      let hz = ghz * 1e9;
      let cycleSeconds = 1 / hz;
      let cycleNs = (cycleSeconds * 1e9).toFixed(3);
      let cyclePs = (cycleSeconds * 1e12).toFixed(1);

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-2">
        <p>Clock Speed: <strong class="text-indigo-400">${ghz} GHz</strong> (${(ghz * 1000).toLocaleString()} Million cycles/sec)</p>
        <p>Duration of 1 Clock Tick: <strong class="text-emerald-400 text-sm">${cycleNs} nanoseconds</strong> (${cyclePs} picoseconds)</p>
        <p class="text-[11px] text-slate-400">In the time electricity takes to travel 30 cm down a wire (~1ns), your CPU completes ~${(1/cycleNs).toFixed(1)} internal instruction clock ticks!</p>
      </div>`;
    },
    codeSnippet: `// 1 cycle at 3.2 GHz = 1 / 3,200,000,000 sec = 0.3125 ns`
  },

  {
    id: 11,
    title: "Exercise 11: Hex Color to RGB & Binary Pixel Explorer",
    category: "CSS & Web Technologies",
    desc: "Decompose any Hex code into individual 8-bit Red, Green, and Blue light channels.",
    inputs: [
      { id: "hexColorInput", label: "Enter Hex Color (e.g., #4F46E5):", type: "text", default: "#4F46E5" }
    ],
    run: function(vals) {
      let raw = (vals.hexColorInput || "#4F46E5").replace('#', '').padEnd(6, '0').substring(0, 6);
      let r = parseInt(raw.substring(0, 2), 16) || 0;
      let g = parseInt(raw.substring(2, 4), 16) || 0;
      let b = parseInt(raw.substring(4, 6), 16) || 0;

      let rBin = r.toString(2).padStart(8, '0');
      let gBin = g.toString(2).padStart(8, '0');
      let bBin = b.toString(2).padStart(8, '0');

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3 font-mono text-xs">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl border border-white/20 shadow" style="background:#${raw};"></div>
          <div>
            <div class="font-bold text-white">#${raw.toUpperCase()}</div>
            <div class="text-[11px] text-slate-400">rgb(${r}, ${g}, ${b})</div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2 text-center text-[11px]">
          <div class="p-2 bg-rose-950/40 border border-rose-900/60 rounded-lg text-rose-300">
            <div>RED: ${r}</div>
            <div class="font-bold tracking-wider">${rBin}</div>
          </div>
          <div class="p-2 bg-emerald-950/40 border border-emerald-900/60 rounded-lg text-emerald-300">
            <div>GREEN: ${g}</div>
            <div class="font-bold tracking-wider">${gBin}</div>
          </div>
          <div class="p-2 bg-sky-950/40 border border-sky-900/60 rounded-lg text-sky-300">
            <div>BLUE: ${b}</div>
            <div class="font-bold tracking-wider">${bBin}</div>
          </div>
        </div>
      </div>`;
    },
    codeSnippet: `// CSS Color Translation\ncolor: rgb(79, 70, 229); /* #4F46E5 */`
  },

  {
    id: 12,
    title: "Exercise 12: Little-Endian vs Big-Endian Byte Order Inspector",
    category: "Hardware & Memory",
    desc: "Inspect how Intel x86/ARM vs network protocols arrange bytes of a 32-bit integer in memory.",
    inputs: [
      { id: "endianHex", label: "32-Bit Integer (Hex):", type: "text", default: "0x12345678" }
    ],
    run: function(vals) {
      let raw = (vals.endianHex || "0x12345678").replace('0x', '').replace('0X', '').padStart(8, '0').substring(0, 8);
      let b1 = raw.substring(0, 2), b2 = raw.substring(2, 4), b3 = raw.substring(4, 6), b4 = raw.substring(6, 8);

      return `<div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
        <div class="p-3 bg-slate-950 border border-indigo-900/60 rounded-xl space-y-1">
          <span class="text-[10px] text-indigo-400 font-bold">LITTLE-ENDIAN (x86 / Intel / Windows)</span>
          <p class="text-[11px] text-slate-400">Least Significant Byte first at lower address:</p>
          <div class="p-2 bg-slate-900 rounded font-bold text-emerald-400">[${b4}] [${b3}] [${b2}] [${b1}]</div>
        </div>
        <div class="p-3 bg-slate-950 border border-sky-900/60 rounded-xl space-y-1">
          <span class="text-[10px] text-sky-400 font-bold">BIG-ENDIAN (Network Order / Internet TCP/IP)</span>
          <p class="text-[11px] text-slate-400">Most Significant Byte first at lower address:</p>
          <div class="p-2 bg-slate-900 rounded font-bold text-sky-400">[${b1}] [${b2}] [${b3}] [${b4}]</div>
        </div>
      </div>`;
    },
    codeSnippet: `unsigned int x = 0x12345678;\nunsigned char *c = (unsigned char*)&x;\nprintf("First byte in RAM: 0x%X\\n", *c);`
  },

  {
    id: 13,
    title: "Exercise 13: Floating Point & IEEE 754 Intuition Visualizer",
    category: "Hardware & Math",
    desc: "Deconstruct floating-point decimal numbers into Sign, Exponent, and Mantissa.",
    inputs: [
      { id: "floatInput", label: "Floating point number:", type: "number", default: -13.625 }
    ],
    run: function(vals) {
      let f = parseFloat(vals.floatInput) || 0.0;
      let buf = new ArrayBuffer(4);
      new Float32Array(buf)[0] = f;
      let u32 = new Uint32Array(buf)[0];
      let bin = u32.toString(2).padStart(32, '0');

      let sign = bin[0];
      let exp = bin.substring(1, 9);
      let mantissa = bin.substring(9);

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-2">
        <p>Float32: <strong class="text-amber-400">${f}</strong></p>
        <div class="p-2 bg-slate-900 rounded text-center text-[11px] space-x-1">
          <span class="text-rose-400 font-bold">[Sign: ${sign}]</span>
          <span class="text-sky-400 font-bold">[Exponent: ${exp}]</span>
          <span class="text-emerald-400 font-bold">[Mantissa: ${mantissa.substring(0, 10)}...]</span>
        </div>
        <p class="text-[10px] text-slate-400">Total: 1 Sign bit + 8 Exponent bits + 23 Mantissa bits = 32 bits</p>
      </div>`;
    },
    codeSnippet: `float f = -13.625f;\nprintf("Size of float: %zu bytes\\n", sizeof(f));`
  },

  {
    id: 14,
    title: "Exercise 14: Caesar Cipher ASCII Shifter (Intro to Cryptography)",
    category: "Character Encoding",
    desc: "Encrypt and decrypt text by shifting each character's ASCII code by a key offset.",
    inputs: [
      { id: "cipherText", label: "Plaintext:", type: "text", default: "KAPIL BOOTCAMP" },
      { id: "cipherShift", label: "Shift Key (1-25):", type: "number", default: 3 }
    ],
    run: function(vals) {
      let txt = vals.cipherText || "KAPIL";
      let shift = parseInt(vals.cipherShift) || 3;
      let encrypted = "";

      for (let i = 0; i < txt.length; i++) {
        let code = txt.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          encrypted += String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          encrypted += String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
          encrypted += txt[i];
        }
      }

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-2">
        <div>Plaintext: <strong class="text-slate-200">${txt}</strong></div>
        <div>Encrypted (Shift +${shift}): <strong class="text-emerald-400 text-sm">${encrypted}</strong></div>
        <p class="text-[10px] text-slate-400">Ancient mechanical cryptography operating directly through ASCII circular modular arithmetic.</p>
      </div>`;
    },
    codeSnippet: `char encrypt(char c, int k) { return ((c - 'A' + k) % 26) + 'A'; }`
  },

  {
    id: 15,
    title: "Exercise 15: Odd / Even Binary Bit Inspector (LSB Bitmask)",
    category: "Digital Logic",
    desc: "Why `n & 1` is 10x faster for CPU odd/even checks than arithmetic modulo `n % 2`.",
    inputs: [
      { id: "oddNum", label: "Enter integer:", type: "number", default: 47 }
    ],
    run: function(vals) {
      let n = parseInt(vals.oddNum) || 0;
      let bin = n.toString(2).padStart(8, '0');
      let lsb = n & 1;

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-2">
        <p>Number: <strong class="text-white">${n}</strong> -> Binary: <strong>${bin}</strong></p>
        <p>Least Significant Bit (LSB): <strong class="${lsb === 1 ? 'text-amber-400' : 'text-sky-400'}">${lsb}</strong></p>
        <div class="p-2 bg-slate-900 rounded text-emerald-400 font-bold">
          ${lsb === 1 ? 'ODD NUMBER (Last bit has power 2⁰ = 1)' : 'EVEN NUMBER (Last bit has power 0)'}
        </div>
      </div>`;
    },
    codeSnippet: `if (num & 1) printf("Odd\\n"); else printf("Even\\n");`
  },

  {
    id: 16,
    title: "Exercise 16: Bit Shift (`<<` and `>>`) Multiplier / Divider",
    category: "Binary Arithmetic",
    desc: "How the CPU multiplies or divides by powers of 2 in 0 clock cycles by simply sliding bits.",
    inputs: [
      { id: "shiftNum", label: "Initial Number:", type: "number", default: 8 },
      { id: "shiftAmount", label: "Shift amount (positions):", type: "number", default: 2 }
    ],
    run: function(vals) {
      let n = parseInt(vals.shiftNum) || 8;
      let s = parseInt(vals.shiftAmount) || 2;
      let left = n << s;
      let right = n >> s;

      return `<div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
        <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span class="text-indigo-400 font-bold">LEFT SHIFT: ${n} &lt;&lt; ${s}</span>
          <div class="text-emerald-400 text-sm font-bold">= ${left}</div>
          <div class="text-[10px] text-slate-400">Equivalent to ${n} × 2^${s} (${n} × ${Math.pow(2, s)})</div>
        </div>
        <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
          <span class="text-sky-400 font-bold">RIGHT SHIFT: ${n} &gt;&gt; ${s}</span>
          <div class="text-amber-400 text-sm font-bold">= ${right}</div>
          <div class="text-[10px] text-slate-400">Equivalent to ${n} ÷ 2^${s} (${n} ÷ ${Math.pow(2, s)})</div>
        </div>
      </div>`;
    },
    codeSnippet: `int mult = 8 << 2; // 8 * 4 = 32\nint div = 8 >> 2;  // 8 / 4 = 2`
  },

  {
    id: 17,
    title: "Exercise 17: String Length & Null Terminator (`\\0`) Explorer",
    category: "C Programming & Memory",
    desc: "Why every C string requires 1 extra hidden byte for `\\0` (ASCII 0) to prevent buffer overflows.",
    inputs: [
      { id: "cStringInput", label: "Word:", type: "text", default: "Kapil" }
    ],
    run: function(vals) {
      let s = vals.cStringInput || "Kapil";
      let chars = Array.from(s);

      let html = `<div class="space-y-2 font-mono text-xs">
        <span class="text-[11px] text-slate-400">Memory Array Layout: char str[${chars.length + 1}];</span>
        <div class="flex flex-wrap gap-1.5">`;

      chars.forEach((c, idx) => {
        html += `<div class="p-2 bg-slate-950 border border-slate-800 rounded text-center min-w-[50px]">
          <div class="font-bold text-amber-300">'${c}'</div>
          <div class="text-[10px] text-slate-500">idx ${idx}</div>
        </div>`;
      });

      html += `<div class="p-2 bg-rose-950/40 border border-rose-900 rounded text-center min-w-[50px]">
          <div class="font-bold text-rose-300">'\\0'</div>
          <div class="text-[10px] text-rose-400">idx ${chars.length}</div>
        </div></div>
        <p class="text-[11px] text-slate-400">Characters: ${chars.length} | Total RAM bytes allocated: ${chars.length + 1} bytes.</p>
      </div>`;

      return html;
    },
    codeSnippet: `char name[] = "Kapil";\nprintf("strlen: %zu | sizeof: %zu\\n", strlen(name), sizeof(name));`
  },

  {
    id: 18,
    title: "Exercise 18: Compound Boolean Expression Evaluator",
    category: "Digital Logic",
    desc: "Evaluate complex conditions like `(A && !B) || (C && B)` with live truth switches.",
    inputs: [
      { id: "boolA", label: "Flag A:", type: "select", options: ["true", "false"], default: "true" },
      { id: "boolB", label: "Flag B:", type: "select", options: ["true", "false"], default: "false" },
      { id: "boolC", label: "Flag C:", type: "select", options: ["true", "false"], default: "true" }
    ],
    run: function(vals) {
      let a = vals.boolA === "true";
      let b = vals.boolB === "true";
      let c = vals.boolC === "true";

      let exp1 = a && !b;
      let exp2 = c && b;
      let finalResult = exp1 || exp2;

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-2">
        <div class="text-slate-300">Evaluating: <code>(A &amp;&amp; !B) || (C &amp;&amp; B)</code></div>
        <div class="text-slate-400 text-[11px]">
          • Step 1: (${a} &amp;&amp; !${b}) = <span class="text-indigo-400">${exp1}</span><br>
          • Step 2: (${c} &amp;&amp; ${b}) = <span class="text-sky-400">${exp2}</span>
        </div>
        <div class="p-2.5 bg-slate-900 rounded font-bold text-sm ${finalResult ? 'text-emerald-400' : 'text-rose-400'}">
          FINAL EVALUATION: ${finalResult ? 'TRUE (1)' : 'FALSE (0)'}
        </div>
      </div>`;
    },
    codeSnippet: `if ((a && !b) || (c && b)) { printf("Condition Satisfied\\n"); }`
  },

  {
    id: 19,
    title: "Exercise 19: CPU Instruction Cycle Step-by-Step Simulator",
    category: "Computer Organization",
    desc: "Trace what happens in the hardware across the 4 stages of instruction execution.",
    inputs: [
      { id: "asmInstr", label: "Instruction:", type: "select", options: ["ADD R1, R2", "SUB R3, R1", "MOV R0, 42"], default: "ADD R1, R2" }
    ],
    run: function(vals) {
      let inst = vals.asmInstr || "ADD R1, R2";
      return `<div class="grid grid-cols-1 md:grid-cols-4 gap-2 font-mono text-xs">
        <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl">
          <span class="text-[10px] text-indigo-400 font-bold">1. FETCH</span>
          <p class="text-[11px] text-slate-300 mt-1">PC reads instruction '${inst}' from RAM into Instruction Register (IR).</p>
        </div>
        <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl">
          <span class="text-[10px] text-emerald-400 font-bold">2. DECODE</span>
          <p class="text-[11px] text-slate-300 mt-1">Control Unit decodes opcode into ALU electrical micro-instructions.</p>
        </div>
        <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl">
          <span class="text-[10px] text-amber-400 font-bold">3. EXECUTE</span>
          <p class="text-[11px] text-slate-300 mt-1">ALU adds contents of R1 and R2 across logic gates.</p>
        </div>
        <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl">
          <span class="text-[10px] text-sky-400 font-bold">4. STORE</span>
          <p class="text-[11px] text-slate-300 mt-1">Result written into Accumulator; PC incremented for next cycle.</p>
        </div>
      </div>`;
    },
    codeSnippet: `// Hardware Machine Cycle: Fetch -> Decode -> Execute -> Store`
  },

  {
    id: 20,
    title: "Exercise 20: Memory vs Disk Latency Scale Humanizer",
    category: "Hardware & Memory",
    desc: "Humanize computer speeds: If 1 CPU cycle took 1 human second, how long would RAM and SSD take?",
    inputs: [],
    run: function() {
      const scale = [
        { item: "CPU L1 Cache (~0.5 ns)", real: "0.5 ns", human: "1 Second" },
        { item: "RAM Main Memory (~50 ns)", real: "50 ns", human: "1.6 Minutes" },
        { item: "NVMe SSD Read (~50 μs)", real: "50,000 ns", human: "1.1 Days" },
        { item: "Mechanical Hard Drive (~10 ms)", real: "10,000,000 ns", human: "7.7 Months" },
        { item: "Internet Server Roundtrip (~100 ms)", real: "100,000,000 ns", human: "6.3 Years" }
      ];

      let html = `<div class="divide-y divide-slate-800 border border-slate-800 rounded-xl bg-slate-950 font-mono text-xs">`;
      scale.forEach(s => {
        html += `<div class="p-2.5 flex items-center justify-between text-slate-300">
          <span class="font-bold text-amber-300">${s.item}</span>
          <span class="text-slate-400">${s.real}</span>
          <span class="text-emerald-400 font-bold">${s.human}</span>
        </div>`;
      });
      return html + `</div>`;
    },
    codeSnippet: `// Speed disparity explains why Cache and RAM are vital.`
  },

  {
    id: 21,
    title: "Exercise 21: Bitmask Flag Permission System",
    category: "Systems & Security",
    desc: "How OS kernels and Unix permissions store user privileges in a single byte using binary flags.",
    inputs: [
      { id: "permRead", label: "Read Permission (1):", type: "select", options: ["Yes", "No"], default: "Yes" },
      { id: "permWrite", label: "Write Permission (2):", type: "select", options: ["Yes", "No"], default: "Yes" },
      { id: "permExec", label: "Execute Permission (4):", type: "select", options: ["Yes", "No"], default: "No" },
      { id: "permAdmin", label: "Admin Privilege (8):", type: "select", options: ["Yes", "No"], default: "No" }
    ],
    run: function(vals) {
      let mask = 0;
      if (vals.permRead === "Yes") mask |= 1;
      if (vals.permWrite === "Yes") mask |= 2;
      if (vals.permExec === "Yes") mask |= 4;
      if (vals.permAdmin === "Yes") mask |= 8;

      let bin = mask.toString(2).padStart(8, '0');

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-2">
        <p>Permission Mask Value: <strong class="text-indigo-400 text-sm">${mask}</strong> (Binary: <strong>${bin}</strong>)</p>
        <p class="text-slate-400 text-[11px]">4 independent user permissions packed into a single byte!</p>
      </div>`;
    },
    codeSnippet: `#define READ 1\n#define WRITE 2\nint userPerms = READ | WRITE;`
  },

  {
    id: 22,
    title: "Exercise 22: Integer Overflow & Wraparound Inspector",
    category: "C Programming & Types",
    desc: "Experience what happens in C hardware when an 8-bit unsigned integer exceeds 255.",
    inputs: [
      { id: "overflowStart", label: "Start Value:", type: "number", default: 254 },
      { id: "overflowAdd", label: "Amount to Add:", type: "number", default: 3 }
    ],
    run: function(vals) {
      let start = parseInt(vals.overflowStart) || 254;
      let add = parseInt(vals.overflowAdd) || 3;
      let rawSum = start + add;
      let wrapped = rawSum % 256;

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-2">
        <div>Mathematical sum: ${start} + ${add} = <strong>${rawSum}</strong></div>
        <div class="p-2.5 bg-rose-950/30 border border-rose-900 rounded font-bold text-rose-300">
          8-Bit Hardware Result (uint8_t): ${wrapped} (Overflow Wraparound!)
        </div>
        <p class="text-[11px] text-slate-400">Because 8 bits cannot store 256 or higher, the 9th carry bit falls off the register!</p>
      </div>`;
    },
    codeSnippet: `unsigned char x = 255;\nx = x + 1;\nprintf("x is now: %u\\n", x); // Prints 0!`
  },

  {
    id: 23,
    title: "Exercise 23: Relational SQL Column Size Calculator",
    category: "RDBMS & Databases",
    desc: "Calculate row storage footprints for database tables to optimize memory buffers.",
    inputs: [
      { id: "intCols", label: "Number of INT columns (4B each):", type: "number", default: 3 },
      { id: "textCols", label: "VARCHAR length estimate (Bytes):", type: "number", default: 60 }
    ],
    run: function(vals) {
      let intCount = parseInt(vals.intCols) || 0;
      let textBytes = parseInt(vals.textCols) || 0;
      let rowBytes = (intCount * 4) + textBytes + 4; // 4 bytes header
      let mb100k = ((rowBytes * 100000) / (1024 * 1024)).toFixed(2);

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-2 text-slate-300">
        <div>Single Row Footprint: <strong class="text-emerald-400">${rowBytes} Bytes</strong></div>
        <div>100,000 Records RAM footprint: <strong class="text-indigo-400">${mb100k} MB</strong></div>
        <p class="text-[11px] text-slate-400">Understanding binary sizes allows database architects to design performant indexes.</p>
      </div>`;
    },
    codeSnippet: `CREATE TABLE Learners (id INT, name VARCHAR(60), score INT);`
  },

  {
    id: 24,
    title: "Exercise 24: HTML Entity & Unicode Code Point Explorer",
    category: "Web & HTML",
    desc: "Inspect how characters like <, >, &, and currency symbols map to Unicode and HTML entities.",
    inputs: [
      { id: "specialSymbol", label: "Symbol:", type: "select", options: ["<", ">", "&", "©", "₹", "♥", "🚀"], default: "₹" }
    ],
    run: function(vals) {
      let s = vals.specialSymbol || "₹";
      let code = s.codePointAt(0);
      let hex = "U+" + code.toString(16).toUpperCase().padStart(4, '0');

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-2">
        <div>Symbol: <span class="text-2xl text-amber-400">${s}</span></div>
        <div>Unicode Code Point: <strong class="text-sky-400">${hex}</strong> (Decimal: ${code})</div>
        <div>HTML Entity: <code class="text-emerald-400">&amp;#${code};</code></div>
      </div>`;
    },
    codeSnippet: `<!-- In HTML text -->\n<p>Price: &#8377; 500 (Indian Rupee)</p>`
  },

  {
    id: 25,
    title: "Exercise 25: Recursion Depth Stack Frame Memory Gauge",
    category: "Algorithms & Recursion",
    desc: "Calculate how many bytes of call stack memory are consumed at each recursive level.",
    inputs: [
      { id: "recDepth", label: "Recursion Depth (n):", type: "number", default: 10 },
      { id: "frameSize", label: "Stack Frame Size (Bytes):", type: "number", default: 32 }
    ],
    run: function(vals) {
      let depth = parseInt(vals.recDepth) || 10;
      let frame = parseInt(vals.frameSize) || 32;
      let totalBytes = depth * frame;

      return `<div class="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-2">
        <div>Recursion Depth: <strong class="text-indigo-400">${depth} calls</strong></div>
        <div>Total Stack Consumed: <strong class="text-emerald-400">${totalBytes} Bytes</strong> (${(totalBytes / 1024).toFixed(2)} KB)</div>
        <p class="text-[11px] text-slate-400">If depth reaches 100,000 without a base case, ~3.2 MB is consumed, triggering a <em>Stack Overflow</em> crash!</p>
      </div>`;
    },
    codeSnippet: `long long fact(int n) { if(n<=1) return 1; return n * fact(n-1); }`
  }
];

if (typeof module !== 'undefined') { module.exports = LEVEL0_EXERCISES; }
