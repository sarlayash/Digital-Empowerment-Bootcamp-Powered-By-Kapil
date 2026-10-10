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
        heading: "4. Professional Document Formatting with MS-Word (Comprehensive Master Guide)",
        analogy: "A well-structured document is like an architectural skyscraper: the foundation is Page Setup & Margins, the steel framing is Heading Styles & Sections, the floor plans are Tables, and the exterior finishes are Typography, Mail Merge & Document Protection.",
        content: `
          <div class="space-y-4">
            <!-- 4.1 Interface & Anatomy -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-indigo-400 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-window-maximize"></i> 4.1 Ribbon Anatomy, Document Views & Rulers
              </h5>
              <p class="text-xs text-slate-300">
                • <strong>The Ribbon System:</strong> Organized into logical tabs: <em>File</em> (Backstage view for open/save/export), <em>Home</em> (typography, clipboard, paragraph, styles), <em>Insert</em> (tables, illustrations, headers, page numbers), <em>Layout</em> (margins, orientation, section breaks), <em>References</em> (Table of Contents, footnotes, citations), <em>Mailings</em> (Mail Merge wizard), and <em>Review</em> (track changes, spell check).<br>
                • <strong>Document Views:</strong> <em>Print Layout</em> (WYSIWYG layout reflecting actual printed paper), <em>Web Layout</em> (responsive continuous web stream), and <em>Read Mode</em> (optimized two-column reader view).<br>
                • <strong>Rulers & Tab Stops:</strong> Activate via <em>View &gt; Ruler</em>. Rulers allow direct dragging of Left Indent, First-Line Indent, and Right Indent, as well as placing precise Left, Center, Right, and Decimal tab stops.
              </p>
            </div>

            <!-- 4.2 Typography & Formatting -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-sky-400 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-font"></i> 4.2 Typography & Character-Level Formatting
              </h5>
              <p class="text-xs text-slate-300">
                • <strong>Font Families:</strong> <em>Serif</em> (e.g. Times New Roman, Georgia — decorative feet, ideal for printed books), <em>Sans-Serif</em> (e.g. Aptos, Calibri, Arial — clean geometric strokes, ideal for digital screens), and <em>Monospace</em> (e.g. Consolas, Courier — uniform character width for code).<br>
                • <strong>Font Measurement:</strong> Measured in Points (pt). 72 points equal exactly 1 inch. Standard body text is 11pt or 12pt; H1 headings are 18pt–24pt.<br>
                • <strong>Character Styling:</strong> Bold (<code>Ctrl + B</code>), Italic (<code>Ctrl + I</code>), Underline (<code>Ctrl + U</code>), Strikethrough, Subscript (<code>Ctrl + =</code>, for chemical formulas like H<sub>2</sub>O), and Superscript (<code>Ctrl + Shift + +</code>, for powers like x<sup>2</sup>).<br>
                • <strong>Pro-Tip:</strong> <code>Ctrl + Spacebar</code> instantly strips all manual formatting and resets selected text to default Normal style!
              </p>
            </div>

            <!-- 4.3 Paragraph Formatting -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-emerald-400 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-align-left"></i> 4.3 Paragraph Architecture, Spacing & Indentations
              </h5>
              <p class="text-xs text-slate-300">
                • <strong>Alignment Modes:</strong> Left Align (<code>Ctrl + L</code>, standard for English prose), Center (<code>Ctrl + E</code>, cover titles and badges), Right (<code>Ctrl + R</code>, dates and signatures), and Justify (<code>Ctrl + J</code>, flush against both left and right margins, standard for academic journals and newspapers).<br>
                • <strong>Line Spacing:</strong> Single (<code>Ctrl + 1</code>), 1.15 (modern default), 1.5 lines (<code>Ctrl + 5</code>), or Double (<code>Ctrl + 2</code>, standard for academic manuscript submissions).<br>
                • <strong>Paragraph Spacing (Before & After):</strong> Never press Enter multiple times to space out paragraphs! Set <em>Space After = 6pt or 8pt</em> in <em>Paragraph Settings</em> to maintain clean, programmatic vertical flow.<br>
                • <strong>Hanging Indents (<code>Ctrl + T</code>):</strong> The first line stays flush at the left margin, while all subsequent lines indent by 0.5 inches. Mandatory standard for APA/MLA bibliographic references!
              </p>
            </div>

            <!-- 4.4 Styles & Automated TOC -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-amber-400 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-list-ol"></i> 4.4 Heading Hierarchy, Automated Table of Contents & Navigation Pane
              </h5>
              <p class="text-xs text-slate-300">
                • <strong>Why Styles Rule Publishing:</strong> Manually bolding and enlarging text does not inform Word of document semantics. Using built-in <em>Heading 1</em>, <em>Heading 2</em>, and <em>Heading 3</em> embeds structural metadata.<br>
                • <strong>Navigation Pane (<code>Ctrl + F &gt; Headings</code>):</strong> View your document's live interactive outline. Drag-and-drop headings to reorder entire multi-page chapters effortlessly without copy-pasting!<br>
                • <strong>Automated Table of Contents:</strong> Navigate to <em>References &gt; Table of Contents &gt; Automatic Table 1</em>. Word parses all Heading styles and builds a dot-leader page-indexed table. Press <code>F9</code> (Update Field) at any time to refresh numbers and titles automatically.
              </p>
            </div>

            <!-- 4.5 Sections & Orientation -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-rose-400 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-file-invoice"></i> 4.5 Section Breaks, Mixed Page Orientations & Header Unlinking
              </h5>
              <p class="text-xs text-slate-300">
                • <strong>Page Break vs. Section Break:</strong> A Page Break (<code>Ctrl + Enter</code>) merely forces text to the next page while keeping all page settings identical. A <em>Section Break (Next Page)</em> creates an independent layout realm.<br>
                • <strong>Mixing Portrait & Landscape:</strong> Insert <em>Layout &gt; Breaks &gt; Section Break (Next Page)</em> before a wide data table. Set orientation to <em>Landscape</em> for that section. Insert another Section Break after the table and switch back to <em>Portrait</em>!<br>
                • <strong>Decoupling Headers & Footers:</strong> Double click the header in Section 2 &gt; turn OFF <strong>Link to Previous</strong>. This allows independent chapter headers and distinct page numbering schemes (e.g. Roman numerals <em>i, ii, iii</em> for front matter, Arabic numerals <em>1, 2, 3</em> for chapters).
              </p>
            </div>

            <!-- 4.6 Tables in Word -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-teal-400 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-table"></i> 4.6 Executive Tables, Repeating Header Rows & Word Formulas
              </h5>
              <p class="text-xs text-slate-300">
                • <strong>Table Formatting:</strong> Always distribute columns evenly and set cell margins. Use alternating row shading (Zebra striping) for readability.<br>
                • <strong>Repeat Header Rows:</strong> For tables spanning multiple pages, select the header row &gt; <em>Table Layout &gt; Repeat Header Rows</em>. Word automatically duplicates the header at the top of every subsequent printed page.<br>
                • <strong>Formulas inside Word Tables:</strong> Word includes an internal calculation engine! Click a table cell &gt; <em>Table Layout &gt; Formula</em> &gt; type <code>=SUM(ABOVE)</code> or <code>=AVERAGE(LEFT)</code>. Alternatively press <code>Ctrl + F9</code> to insert field braces and type <code>{ =SUM(B2:D2) }</code>.
              </p>
            </div>

            <!-- 4.7 Mail Merge -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-indigo-300 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-envelope-open-text"></i> 4.7 Automated Mail Merge Pipeline
              </h5>
              <p class="text-xs text-slate-300">
                • <strong>Architecture:</strong> Master Word Letter Template + Structured Excel Spreadsheet Dataset.<br>
                • <strong>Workflow:</strong> <em>Mailings &gt; Start Mail Merge &gt; Letters</em> &gt; <em>Select Recipients &gt; Use Existing List</em> (select Excel file) &gt; <em>Insert Merge Field</em> (place <code>&laquo;Learner_Name&raquo;</code> and <code>&laquo;Score&raquo;</code>) &gt; <em>Preview Results</em> &gt; <em>Finish & Merge</em>.<br>
                • <strong>Conditional Rules:</strong> Insert <em>Rules &gt; If...Then...Else</em> to dynamically output "Passed with Distinction" if Score &ge; 90, or "Assessment Retry Recommended" otherwise!
              </p>
            </div>

            <!-- 4.8 Keyboard Shortcuts -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-amber-300 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-keyboard"></i> 4.8 Master MS-Word Keyboard Shortcuts Cheatsheet
              </h5>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-mono mt-1">
                <div class="p-1.5 bg-slate-900 border border-slate-800 rounded"><code>Ctrl + Enter</code>: Page Break</div>
                <div class="p-1.5 bg-slate-900 border border-slate-800 rounded"><code>Shift + F3</code>: Toggle Case (UP/low/Cap)</div>
                <div class="p-1.5 bg-slate-900 border border-slate-800 rounded"><code>Ctrl + Space</code>: Clear Formats</div>
                <div class="p-1.5 bg-slate-900 border border-slate-800 rounded"><code>F9</code>: Update TOC / Field</div>
                <div class="p-1.5 bg-slate-900 border border-slate-800 rounded"><code>Ctrl + Shift + C/V</code>: Copy/Paste Format</div>
                <div class="p-1.5 bg-slate-900 border border-slate-800 rounded"><code>Ctrl + T</code>: Hanging Indent</div>
                <div class="p-1.5 bg-slate-900 border border-slate-800 rounded"><code>Ctrl + K</code>: Insert Hyperlink</div>
                <div class="p-1.5 bg-slate-900 border border-slate-800 rounded"><code>Ctrl + F</code>: Navigation Pane</div>
              </div>
            </div>
          </div>
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
        heading: "3. Relational Database Management Systems (RDBMS & SQL Master Guide)",
        analogy: "A Relational Database is like an automated, indestructible airport control tower: flight logs (Tables) are cross-referenced by unique Flight IDs (Primary Keys), connected to passenger tickets (Foreign Keys), guarded by strict safety checklists (Integrity Constraints & ACID Transactions), and searchable in milliseconds using radar beacons (B-Tree Indexes).",
        content: `
          <div class="space-y-4">
            <!-- 3.1 Architecture -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-sky-400 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-server"></i> 3.1 Why DBMS? File Systems vs. DBMS & The 3-Tier Architecture
              </h5>
              <p class="text-xs text-slate-300">
                • <strong>Limitations of Flat File Systems:</strong> Data redundancy (duplicate entries wasting disk), data inconsistency (updating an address in one file leaves outdated addresses in another), lack of atomicity (system crashes mid-write leave corrupt files), concurrent access anomalies (two users overwriting simultaneously), and poor security.<br>
                • <strong>The ANSI/SPARC 3-Schema Architecture:</strong><br>
                &nbsp;&nbsp;1. <em>External / View Level:</em> What specific end-users see (e.g. Student portal sees grades; HR sees payroll).<br>
                &nbsp;&nbsp;2. <em>Conceptual / Logical Level:</em> The entire database blueprint — entities, attributes, relationships, and integrity rules.<br>
                &nbsp;&nbsp;3. <em>Internal / Physical Level:</em> Low-level binary layout on disk, B-Tree indexes, page blocks, and compression.<br>
                • <strong>Data Independence:</strong> <em>Logical Data Independence</em> allows modifying the conceptual schema without breaking user views. <em>Physical Data Independence</em> allows changing storage devices or indexes without modifying conceptual queries!
              </p>
            </div>

            <!-- 3.2 Relational Model & Terminology -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-indigo-400 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-table-cells"></i> 3.2 Relational Model Anatomy & Mathematical Terminology
              </h5>
              <p class="text-xs text-slate-300">
                • <strong>Relation (Table):</strong> A two-dimensional grid of rows and columns based on set theory.<br>
                • <strong>Tuple (Row / Record):</strong> A single entity instance (e.g. one specific scholar's row). Order of tuples does NOT matter.<br>
                • <strong>Attribute (Column / Field):</strong> A named property describing entities (e.g. <code>email</code>, <code>score</code>).<br>
                • <strong>Domain:</strong> The set of permissible, atomic values for an attribute (e.g. Score domain = integers between 0 and 100).<br>
                • <strong>Degree:</strong> The total number of attributes (columns) in a relation.<br>
                • <strong>Cardinality:</strong> The total number of tuples (rows) currently in a relation.
              </p>
            </div>

            <!-- 3.3 Relational Keys Hierarchy -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-amber-400 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-key"></i> 3.3 Relational Keys Hierarchy Demystified
              </h5>
              <p class="text-xs text-slate-300">
                • <strong>Super Key:</strong> ANY combination of one or more attributes that can uniquely identify a tuple (e.g. <code>{id}</code>, <code>{id, name}</code>, <code>{email, score}</code>).<br>
                • <strong>Candidate Key:</strong> A <em>minimal</em> Super Key with no superfluous attributes (e.g. <code>{id}</code> and <code>{email}</code>).<br>
                • <strong>Primary Key:</strong> The specific Candidate Key chosen by the database architect as the principal identifier. Rules: Strictly <strong>NOT NULL</strong> and strictly <strong>UNIQUE</strong> forever.<br>
                • <strong>Alternate Key:</strong> All other Candidate Keys not chosen as the Primary Key (e.g. <code>email</code> is an Alternate Key).<br>
                • <strong>Foreign Key:</strong> An attribute in a table that references the Primary Key of another table, establishing a secure relational bridge.
              </p>
            </div>

            <!-- 3.4 Integrity Constraints -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-emerald-400 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-shield-halved"></i> 3.4 The 4 Fundamental Integrity Constraints
              </h5>
              <p class="text-xs text-slate-300">
                1. <strong>Domain Integrity:</strong> Every attribute value must be an atomic element from its defined domain (e.g. age cannot be "apple").<br>
                2. <strong>Entity Integrity:</strong> No component of a Primary Key may be NULL. Every entity must possess a concrete identity.<br>
                3. <strong>Referential Integrity:</strong> If table B has a Foreign Key referencing table A, that value must either point to an existing Primary Key row in table A, or be NULL.<br>
                4. <strong>Key Constraint:</strong> No two tuples in a relation may possess identical values for the candidate key.
              </p>
            </div>

            <!-- 3.5 Normalization Masterclass -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-teal-400 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-filter"></i> 3.5 Normalization Masterclass: Eliminating Anomalies (1NF to BCNF)
              </h5>
              <p class="text-xs text-slate-300">
                • <strong>The 3 Evils of Unnormalized Tables:</strong><br>
                &nbsp;&nbsp;• <em>Insertion Anomaly:</em> Cannot record a department without enrolling a student first.<br>
                &nbsp;&nbsp;• <em>Deletion Anomaly:</em> Deleting the last student accidentally destroys the department record!<br>
                &nbsp;&nbsp;• <em>Update Anomaly:</em> Changing department head requires modifying 10,000 student rows; missing one causes inconsistency.<br>
                • <strong>1NF (First Normal Form):</strong> Values in all columns must be strictly <strong>Atomic</strong> (indivisible). No repeating groups, arrays, or comma-separated lists (e.g. phone numbers must each have their own row or table).<br>
                • <strong>2NF (Second Normal Form):</strong> Must be in 1NF + <strong>No Partial Dependency</strong>. Every non-prime attribute must depend on the <em>entire</em> candidate key, not just a subset of a composite primary key.<br>
                • <strong>3NF (Third Normal Form):</strong> Must be in 2NF + <strong>No Transitive Dependency</strong>. Non-prime attributes must not depend on other non-prime attributes ($A \\to B$ and $B \\to C$ must be decomposed into two tables).<br>
                • <strong>BCNF (Boyce-Codd Normal Form):</strong> Stricter version of 3NF. For every non-trivial functional dependency $X \\to Y$, $X$ MUST be a <strong>Super Key</strong>.
              </p>
            </div>

            <!-- 3.6 ACID Properties -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-rose-400 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-atom"></i> 3.6 ACID Properties & Transaction Management
              </h5>
              <p class="text-xs text-slate-300">
                • <strong>Atomicity ("All or Nothing"):</strong> Either all operations of a transaction commit successfully, or the entire transaction is rolled back with zero side effects. Enforced via <em>Undo Logs</em>.<br>
                • <strong>Consistency:</strong> Transactions preserve all integrity constraints before and after execution (e.g. bank balances cannot become negative).<br>
                • <strong>Isolation:</strong> Concurrent transactions execute independently as if running sequentially. Prevents <em>Dirty Reads</em> (reading uncommitted data) and <em>Phantom Reads</em>. Enforced via <strong>Two-Phase Locking (2PL)</strong>.<br>
                • <strong>Durability:</strong> Once a transaction commits, its writes are permanent and survive any power failure or OS crash. Enforced via <em>Write-Ahead Logging (WAL)</em>.
              </p>
            </div>

            <!-- 3.7 SQL Deep Dive -->
            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <h5 class="font-bold text-amber-300 text-xs flex items-center gap-1.5">
                <i class="fa-solid fa-code"></i> 3.7 Structured Query Language (SQL) Master Reference
              </h5>
              <pre class="bg-slate-900 p-3 rounded-lg border border-slate-800 text-sky-300 font-mono text-[11px] overflow-x-auto leading-relaxed">
-- 1. DDL: Create Normalized Tables with Constraints
CREATE TABLE Courses (
    course_id INTEGER PRIMARY KEY,
    course_title TEXT NOT NULL UNIQUE,
    credits INTEGER CHECK (credits &gt; 0)
);

CREATE TABLE Students (
    student_id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    google_email TEXT UNIQUE NOT NULL,
    course_id INTEGER REFERENCES Courses(course_id),
    score REAL CHECK (score BETWEEN 0 AND 100)
);

-- 2. DML: Atomically Insert Data
INSERT INTO Courses VALUES (101, 'Computer Architecture', 4), (102, 'RDBMS Mastery', 4);
INSERT INTO Students (full_name, google_email, course_id, score) VALUES 
('Kapil Scholar', 'scholar.kapil@gmail.com', 102, 98.5),
('Samriddhi S.', 'samriddhi@gmail.com', 102, 95.0),
('Ayush Kumar', 'ayush@gmail.com', 101, 92.0);

-- 3. DQL: Relational INNER JOIN with Aggregation
SELECT 
    c.course_title,
    COUNT(s.student_id) AS enrolled_students,
    ROUND(AVG(s.score), 2) AS cohort_average
FROM Courses c
INNER JOIN Students s ON c.course_id = s.course_id
GROUP BY c.course_id, c.course_title
HAVING AVG(s.score) &gt;= 90.0
ORDER BY cohort_average DESC;

-- 4. B-Tree Index for Sub-Millisecond Search
CREATE INDEX idx_student_score ON Students(score);</pre>
            </div>
          </div>
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
