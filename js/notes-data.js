// Master Notes & Pre-Assessment Data for Digital Empowerment Bootcamp Powered By Kapil
const BOOTCAMP_NOTES_DATA = {
  1: {
    title: "Information Technology Foundation & Basics of C",
    duration: "Session 1 • 6 Hours",
    summary: "From absolute ground zero to writing your first real C computer program with zero laptop constraints.",
    preAssessment: [
      {
        q: "What is your current familiarity with computer hardware and code?",
        opts: ["Complete beginner (Zero Assumptions!)", "I use computers for basic typing and browsing", "I have tried coding once or twice", "I am looking for solid fundamental mastery"],
        ans: 0
      },
      {
        q: "What do you think is inside a computer's Central Processing Unit (CPU)?",
        opts: ["A microscopic person typing fast", "Electronic circuits (ALU, Control Unit, and Registers) operating on binary voltage pulses", "A tiny magnetic tape reader", "Pure software without physical parts"],
        ans: 1
      },
      {
        q: "Why do you think operating systems like Windows or Android are needed?",
        opts: ["Just to show pretty icons", "To manage physical hardware so programs can run without custom low-level device code", "To make computers expensive", "They aren't strictly necessary"],
        ans: 1
      },
      {
        q: "In word processing, what is the best practice for styling document headings?",
        opts: ["Manually making text bigger and bolding each line", "Using built-in Heading Styles (Heading 1, 2) to maintain structure and automated Tables of Contents", "Pressing Enter 5 times", "Changing font to Comic Sans"],
        ans: 1
      },
      {
        q: "What is source code before it gets compiled in C?",
        opts: ["Direct machine electricity", "Human-readable instructions written in high-level programming language syntax", "A secret password", "A database table"],
        ans: 1
      }
    ],
    sections: [
      {
        heading: "1. Evolution of IT & The Digital Era",
        analogy: "Think of computer evolution like transportation: from walking (Abacus) to horse carriages (Vacuum Tubes), steam engines (Transistors), high-speed electric trains (Integrated Circuits), and rocket ships (Microprocessors & AI).",
        content: `
          <p class="mb-2"><strong>Evolutionary Epochs:</strong></p>
          <ul class="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Mechanical Era:</strong> The Chinese Abacus (2700 BCE), Blaise Pascal's Pascaline gear calculator (1642), and Charles Babbage's Analytical Engine (1837) — the conceptual forefather of modern computers.</li>
            <li><strong>1st Generation (1940-1956):</strong> <em>Vacuum Tubes</em>. Enormous, heat-generating glass valves. Example: ENIAC, occupying 1,800 square feet!</li>
            <li><strong>2nd Generation (1956-1963):</strong> <em>Transistors</em>. Invented at Bell Labs. Dramatic shrink in size, power draw, and heat generation.</li>
            <li><strong>3rd Generation (1964-1971):</strong> <em>Integrated Circuits (ICs)</em>. Silicon microchips integrating thousands of transistors onto a single fingernail-sized wafer.</li>
            <li><strong>4th Generation (1971-Present):</strong> <em>Microprocessors (VLSI/ULSI)</em>. Complete CPU etched onto a single chip (Intel 4004 to modern multi-core chips).</li>
            <li><strong>5th Generation (The Horizon):</strong> Artificial Intelligence, neural processing units (NPUs), and Quantum computing.</li>
          </ul>
        `
      },
      {
        heading: "2. Basic Computer Organization & Components",
        analogy: "The Restaurant Analogy: The CPU is the Head Chef, CPU Registers are the Chef's Hands, RAM is the Kitchen Countertop (spacious but cleared at the end of the shift), and the SSD/HDD is the Cold Storage Pantry (permanent preservation).",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <h5 class="font-bold text-indigo-400 mb-1">CPU (Central Processing Unit)</h5>
              <p class="text-xs text-slate-300">
                • <strong>ALU (Arithmetic Logic Unit):</strong> Calculates additions, subtractions, multiplications, and boolean comparisons.<br>
                • <strong>CU (Control Unit):</strong> Decodes instructions and directs data traffic.<br>
                • <strong>Registers:</strong> High-speed internal scratchpads (PC, IR, ACC).
              </p>
            </div>
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <h5 class="font-bold text-emerald-400 mb-1">Memory Hierarchy</h5>
              <p class="text-xs text-slate-300">
                • <strong>Registers:</strong> Fastest, smallest (~sub-nanosecond).<br>
                • <strong>L1/L2/L3 Cache:</strong> High-speed SRAM buffering RAM data.<br>
                • <strong>RAM (DRAM):</strong> Volatile main memory (~10-50ns).<br>
                • <strong>SSD/HDD:</strong> Non-volatile secondary storage (~microseconds).
              </p>
            </div>
          </div>
        `
      },
      {
        heading: "3. The Operating System (OS)",
        analogy: "The OS is the Master Orchestra Conductor. Without the conductor, the violinists, drummers, and brass players would play over each other in total chaos.",
        content: `
          <p class="mb-2"><strong>Core Duties of the OS:</strong></p>
          <ul class="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Process Management:</strong> Round Robin scheduling, multi-tasking, preventing deadlocks.</li>
            <li><strong>Memory Management:</strong> Allocating virtual memory pages, isolating process address spaces.</li>
            <li><strong>File System:</strong> Hierarchical storage formatting (NTFS, ext4, APFS).</li>
            <li><strong>Device Drivers:</strong> Translating generic read/write calls to hardware signals.</li>
          </ul>
        `
      },
      {
        heading: "4. Professional Document Formatting with MS-Word",
        analogy: "A well-structured document is like a skyscraper: foundation (Page setup), steel framing (Heading Styles), floor plans (Tables), and exterior finishes (Typography & Margins).",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Heading Hierarchy:</strong> Use H1 for document titles, H2 for main sections, and H3 for sub-points. This enables 1-click dynamic Table of Contents generation!</li>
            <li><strong>Tables & Alignment:</strong> Always distribute column widths evenly and vertically center header text.</li>
            <li><strong>Mail Merge:</strong> Combine a master template with a recipient spreadsheet to create hundreds of customized letters in seconds.</li>
          </ul>
        `
      },
      {
        heading: "5. Zero-Assumption Basics of C Programming",
        analogy: "C is like Latin. It's concise, foundational, and virtually every modern operating system (Windows, Linux, macOS, iOS, Android) is written in it.",
        content: `
          <pre class="bg-slate-950 p-3 rounded-xl border border-slate-800 text-emerald-400 font-mono text-xs overflow-x-auto">
#include &lt;stdio.h&gt;

int main() {
    // 1. Variable declaration: Named boxes in RAM
    int learnerId = 101;
    float examScore = 98.5;
    char grade = 'A';

    // 2. Output to screen
    printf("Digital Empowerment Bootcamp Powered By Kapil\\n");
    printf("Learner ID: %d | Grade: %c | Score: %.1f%%\\n", learnerId, grade, examScore);

    // 3. Conditional decision
    if (examScore >= 60.0) {
        printf("Status: Passed! Day 1 Badge Earned!\\n");
    } else {
        printf("Status: Review notes and attempt again!\\n");
    }

    return 0; // Signals clean termination to the OS
}
          </pre>
        `
      }
    ]
  },
  2: {
    title: "Modular C, Recursion, RDBMS & MS-Excel",
    duration: "Session 2 • 6 Hours",
    summary: "Master structured logic with functions and recursion, architect relational SQL databases, and harness analytical spreadsheet formulas.",
    preAssessment: [
      {
        q: "Why do programmers break code into multiple functions?",
        opts: ["To make the code harder to read", "To avoid rewriting repetitive code and keep logic clean, testable, and modular", "Computers only run 10 lines of code per file", "Functions make code run 100x faster automatically"],
        ans: 1
      },
      {
        q: "What is recursion in simple terms?",
        opts: ["A function that deletes its own file", "A function that solves a problem by calling a smaller instance of itself until a stopping point is reached", "An endless crash loop", "A type of database"],
        ans: 1
      },
      {
        q: "Why use a Relational Database (RDBMS) instead of saving everything in text files?",
        opts: ["Text files cannot handle concurrent users, relationships, or fast indexed searches", "RDBMS is free, text files cost money", "Text files can only store numbers", "There is no difference"],
        ans: 0
      },
      {
        q: "In MS-Excel, what does putting a dollar sign like $A$1 do?",
        opts: ["Formats the cell as currency", "Locks the column and row so the reference does not shift when dragging or copying the formula", "Multiplies by 100", "Deletes the cell"],
        ans: 1
      }
    ],
    sections: [
      {
        heading: "1. Function-Oriented Programming in C",
        analogy: "A Swiss Army Knife: Instead of carrying 10 bulky single-purpose tools, each tool is a specialized function blade that you fold out when needed.",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Declaration (Prototype):</strong> <code>int addNumbers(int a, int b);</code> — tells the compiler what to expect.</li>
            <li><strong>Definition:</strong> The actual code logic enclosed in curly braces <code>{ ... }</code>.</li>
            <li><strong>Call by Value:</strong> In C, primitive arguments are copied into the function's own activation frame. Modifications inside the function do not affect the caller's variable!</li>
          </ul>
        `
      },
      {
        heading: "2. Recursive Functions Demystified",
        analogy: "The Russian Nesting Doll: Each doll contains an identical smaller doll inside. You stop when you open the smallest solid doll (The Base Case), and then close them all back up.",
        content: `
          <pre class="bg-slate-950 p-3 rounded-xl border border-slate-800 text-emerald-400 font-mono text-xs overflow-x-auto">
// Factorial recursion: 5! = 5 * 4 * 3 * 2 * 1 = 120
long long factorial(int n) {
    if (n <= 1) {
        return 1; // BASE CASE: Stopping condition!
    }
    return n * factorial(n - 1); // RECURSIVE STEP
}
          </pre>
          <p class="text-xs text-rose-300 mt-2"><strong>Warning:</strong> Missing the base case triggers <em>Stack Overflow</em> because the call stack runs out of memory!</p>
        `
      },
      {
        heading: "3. Relational Database Management Systems (RDBMS)",
        analogy: "A Multi-Drawer Filing Cabinet with Indexed Labels: Every folder (Table) has a unique Social Security / Roll Number (Primary Key) linking it cleanly to invoices or grades (Foreign Key).",
        content: `
          <p class="text-xs text-slate-300 mb-2"><strong>The Big 4 SQL Statements (CRUD):</strong></p>
          <pre class="bg-slate-950 p-3 rounded-xl border border-slate-800 text-sky-400 font-mono text-xs overflow-x-auto">
-- 1. CREATE Table
CREATE TABLE Students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    google_email TEXT UNIQUE,
    score INTEGER
);

-- 2. INSERT (Create)
INSERT INTO Students VALUES (1, 'Kapil Scholar', 'scholar@gmail.com', 95);

-- 3. SELECT (Read)
SELECT name, score FROM Students WHERE score >= 75 ORDER BY score DESC;

-- 4. UPDATE & DELETE
UPDATE Students SET score = 100 WHERE id = 1;
DELETE FROM Students WHERE id = 1;
          </pre>
        `
      },
      {
        heading: "4. Data Computation & Analytics with MS-Excel",
        analogy: "Excel is like a programmatic calculator spreadsheet where cells talk to each other through mathematical formulas.",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Essential Functions:</strong> <code>=SUM(A1:A10)</code>, <code>=AVERAGE(A1:A10)</code>, <code>=MAX()</code>, <code>=MIN()</code>.</li>
            <li><strong>Conditional Logic:</strong> <code>=IF(B2>=60, "Pass", "Review")</code>.</li>
            <li><strong>Lookup Mastery:</strong> <code>=VLOOKUP(lookup_value, table_range, column_index, FALSE)</code> or modern <code>=XLOOKUP()</code>.</li>
            <li><strong>Absolute vs. Relative:</strong> <code>A1</code> moves when copied; <code>$A$1</code> stays firmly locked.</li>
          </ul>
        `
      }
    ]
  },
  3: {
    title: "Web Engineering: HTML, CSS & JavaScript Variables",
    duration: "Session 3 • 3 Hours",
    summary: "The triad of the modern internet: HTML gives structure, CSS provides visual elegance, and JavaScript powers dynamic behavior.",
    preAssessment: [
      {
        q: "What role does HTML play on a web page?",
        opts: ["It adds animations", "It defines the structural skeleton and text content", "It manages the server hardware", "It acts as the database"],
        ans: 1
      },
      {
        q: "How does CSS differ from HTML?",
        opts: ["CSS is for numbers only", "CSS controls presentation, colors, layouts, and typography", "They are identical languages", "CSS only works on phones"],
        ans: 1
      },
      {
        q: "What is the modern keyword in JavaScript to declare a variable whose value should never be reassigned?",
        opts: ["var", "let", "const", "fixed"],
        ans: 2
      }
    ],
    sections: [
      {
        heading: "1. HTML Text Formatting & Semantic Structure",
        analogy: "HTML is the Human Skeleton: The skull is &lt;head&gt;, the torso is &lt;body&gt;, and the bones are &lt;h1&gt;, &lt;p&gt;, and &lt;section&gt;.",
        content: `
          <ul class="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Headings:</strong> <code>&lt;h1&gt;</code> (Main Title) down to <code>&lt;h6&gt;</code> (Minor Subtitle).</li>
            <li><strong>Paragraphs & Breaks:</strong> <code>&lt;p&gt;</code> for text blocks, <code>&lt;br&gt;</code> for a single line break, <code>&lt;hr&gt;</code> for a dividing line.</li>
            <li><strong>Semantic Meaning:</strong> <code>&lt;strong&gt;</code> (importance) vs <code>&lt;b&gt;</code> (visual bold); <code>&lt;em&gt;</code> (emphasis) vs <code>&lt;i&gt;</code> (visual italic).</li>
            <li><strong>Formatted Code:</strong> <code>&lt;pre&gt;&lt;code&gt; ... &lt;/code&gt;&lt;/pre&gt;</code> preserves spaces and syntax cleanly.</li>
          </ul>
        `
      },
      {
        heading: "2. CSS Colors & Visual Presentation",
        analogy: "CSS is the Skin, Clothing, and Makeup: It transforms a bare skeleton into a stunning, responsive visual artwork.",
        content: `
          <p class="text-xs text-slate-300 mb-2"><strong>Understanding Color Representations:</strong></p>
          <ul class="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Named Colors:</strong> <code>color: navy;</code>, <code>teal</code>, <code>crimson</code> (140 standard browser names).</li>
            <li><strong>Hexadecimal (#RRGGBB):</strong> <code>#4f46e5</code> (Indigo), <code>#10b981</code> (Emerald), <code>#ffffff</code> (Pure White).</li>
            <li><strong>RGB & RGBA:</strong> <code>rgba(79, 70, 229, 0.8)</code> — where the 4th value controls opacity/transparency!</li>
            <li><strong>HSL:</strong> <code>hsl(240, 80%, 60%)</code> — Hue (wheel angle), Saturation (vibrancy), Lightness.</li>
          </ul>
        `
      },
      {
        heading: "3. JavaScript Variables & Client-Side Interactivity",
        analogy: "JavaScript is the Nervous System & Muscles: It senses when a user clicks, scrolls, or types, and reacts instantly without reloading the page.",
        content: `
          <pre class="bg-slate-950 p-3 rounded-xl border border-slate-800 text-amber-400 font-mono text-xs overflow-x-auto">
// 1. Modern Variable Declarations
const bootcampTitle = "Digital Empowerment Bootcamp"; // Constant (Cannot be reassigned)
let learnerScore = 100;                                 // Variable (Can be updated)
let isCertified = true;                                // Boolean

// 2. Dynamic Interaction
function claimGraduation() {
    console.log("Learner passed with score: " + learnerScore);
    document.getElementById("statusBox").innerText = "🎉 Congratulations on Grand Graduation!";
    document.getElementById("statusBox").style.color = "#10b981";
}
          </pre>
        `
      }
    ]
  }
};

if (typeof module !== 'undefined') { module.exports = BOOTCAMP_NOTES_DATA; }
