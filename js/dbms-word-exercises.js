// 10 Applied DBMS & MS-Word IDE Exercises
// Hands-on interactive engineering labs for Digital Empowerment Bootcamp Powered By Kapil

const DBMS_WORD_EXERCISES = [
  // ==========================================
  // DBMS & SQL EXERCISES (EX 1 - 5)
  // ==========================================
  {
    id: 1,
    title: "Exercise 1: Table Creation & Primary Key Constraints (DDL)",
    category: "DBMS & SQL",
    badgeColor: "sky",
    desc: "Architect a relational database table with Primary Key, Foreign Key references, data types (INTEGER, TEXT, REAL), and CHECK constraints.",
    inputs: [
      { id: "tblName", label: "Table Name:", type: "text", default: "Students" },
      { id: "pkCol", label: "Primary Key Column:", type: "text", default: "student_id" },
      { id: "nameCol", label: "Full Name Column:", type: "text", default: "full_name" },
      { id: "scoreConstraint", label: "Score Check Constraint:", type: "select", default: "score BETWEEN 0 AND 100", options: ["score BETWEEN 0 AND 100", "score >= 0", "score >= 60"] }
    ],
    run: function(vals) {
      const tbl = vals.tblName || "Students";
      const pk = vals.pkCol || "student_id";
      const name = vals.nameCol || "full_name";
      const chk = vals.scoreConstraint || "score BETWEEN 0 AND 100";

      return `
        <div class="space-y-3 font-sans">
          <div class="p-3 bg-sky-950/40 border border-sky-800/60 rounded-xl text-xs text-slate-300">
            <strong>Relational DDL Insight:</strong> A <code>PRIMARY KEY</code> enforces both <em>UNIQUE</em> and <em>NOT NULL</em> guarantees. <code>CHECK</code> constraints ensure bad data never enters the database.
          </div>
          <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <span class="text-[10px] uppercase font-mono text-sky-400 font-bold">Generated SQLite Schema DDL:</span>
            <pre class="text-xs font-mono text-emerald-400 overflow-x-auto p-2 bg-slate-900 rounded border border-slate-800">
CREATE TABLE ${tbl} (
    ${pk} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${name} TEXT NOT NULL,
    google_email TEXT UNIQUE NOT NULL,
    score REAL CHECK (${chk}),
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</pre>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px] font-mono">
            <div class="p-2 bg-slate-900 border border-slate-800 rounded text-center">
              <span class="text-slate-400 block text-[9px] uppercase">Table</span>
              <span class="text-white font-bold">${tbl}</span>
            </div>
            <div class="p-2 bg-slate-900 border border-slate-800 rounded text-center">
              <span class="text-slate-400 block text-[9px] uppercase">Primary Key</span>
              <span class="text-amber-400 font-bold">${pk} (Auto-Inc)</span>
            </div>
            <div class="p-2 bg-slate-900 border border-slate-800 rounded text-center">
              <span class="text-slate-400 block text-[9px] uppercase">Integrity</span>
              <span class="text-teal-400 font-bold">UNIQUE Email</span>
            </div>
            <div class="p-2 bg-slate-900 border border-slate-800 rounded text-center">
              <span class="text-slate-400 block text-[9px] uppercase">Constraint</span>
              <span class="text-emerald-400 font-bold">CHECK OK</span>
            </div>
          </div>
        </div>
      `;
    },
    codeSnippet: `-- DBMS Exercise 1: Table Creation & Constraints (DDL)
CREATE TABLE Students (
    student_id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    google_email TEXT UNIQUE NOT NULL,
    score REAL CHECK (score BETWEEN 0 AND 100),
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Test Insert
INSERT INTO Students (full_name, google_email, score) 
VALUES ('Kapil Scholar', 'scholar.kapil@gmail.com', 96.5);

SELECT * FROM Students;`
  },
  {
    id: 2,
    title: "Exercise 2: Multi-Row Ingestion & Invariant Check (DML)",
    category: "DBMS & SQL",
    badgeColor: "sky",
    desc: "Perform atomic batch inserts into a relational table. Verify data types and transaction rollbacks on violation.",
    inputs: [
      { id: "batchCount", label: "Number of Scholars to Ingest:", type: "select", default: "4", options: ["2", "3", "4", "5"] },
      { id: "cohortGroup", label: "Cohort Department:", type: "select", default: "Computer Science", options: ["Computer Science", "Information Technology", "AI & Data Science"] }
    ],
    run: function(vals) {
      const count = parseInt(vals.batchCount || "4", 10);
      const dept = vals.cohortGroup || "Computer Science";
      const sampleNames = ["Kapil Narula", "Ayush Kumar", "Samriddhi Srivastava", "P.K. Sharma", "Kashif Raza"];
      const scores = [98, 92, 95, 88, 94];

      let rowsHtml = '';
      for (let i = 0; i < count; i++) {
        rowsHtml += `
          <tr class="hover:bg-slate-900/40">
            <td class="p-2 text-slate-400">${i + 1}</td>
            <td class="p-2 font-bold text-white">${sampleNames[i]}</td>
            <td class="p-2 text-sky-400 font-mono">${sampleNames[i].toLowerCase().replace(/[^a-z]/g, '')}@gmail.com</td>
            <td class="p-2 text-indigo-300">${dept}</td>
            <td class="p-2 text-emerald-400 font-bold font-mono">${scores[i]}%</td>
            <td class="p-2 text-emerald-300 text-[10px]"><i class="fa-solid fa-check"></i> COMMITTED</td>
          </tr>
        `;
      }

      return `
        <div class="space-y-3 font-sans">
          <div class="p-3 bg-indigo-950/40 border border-indigo-800/60 rounded-xl text-xs text-slate-300">
            <strong>DML Batch Ingestion:</strong> Executed in an ACID transaction. If any row fails a constraint, all ${count} inserts are rolled back to preserve data consistency.
          </div>
          <div class="overflow-x-auto rounded-xl border border-slate-800">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
                <tr>
                  <th class="p-2">ID</th>
                  <th class="p-2">Scholar</th>
                  <th class="p-2">Email</th>
                  <th class="p-2">Department</th>
                  <th class="p-2">Score</th>
                  <th class="p-2">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60">${rowsHtml}</tbody>
            </table>
          </div>
        </div>
      `;
    },
    codeSnippet: `-- DBMS Exercise 2: Multi-Row Ingestion (DML)
BEGIN TRANSACTION;

INSERT INTO Learners (id, name, department, score) VALUES
(1, 'Kapil Narula', 'Computer Science', 98),
(2, 'Ayush Kumar', 'Computer Science', 92),
(3, 'Samriddhi Srivastava', 'Computer Science', 95),
(4, 'P.K. Sharma', 'Computer Science', 88);

COMMIT;

SELECT COUNT(*) AS TotalIngested, AVG(score) AS CohortAverage FROM Learners;`
  },
  {
    id: 3,
    title: "Exercise 3: Filtering & Pattern Matching (DQL - WHERE & LIKE)",
    category: "DBMS & SQL",
    badgeColor: "sky",
    desc: "Filter records using boolean logic (AND, OR, NOT), range queries (BETWEEN), and wildcard pattern matching (LIKE '%...@gmail.com').",
    inputs: [
      { id: "minScore", label: "Minimum Passing Benchmark (%):", type: "select", default: "90", options: ["60", "75", "90", "95"] },
      { id: "domainFilter", label: "Email Domain Pattern:", type: "select", default: "%@gmail.com", options: ["%@gmail.com", "%@bootcamp.edu", "%@kapil.org"] }
    ],
    run: function(vals) {
      const min = parseInt(vals.minScore || "90", 10);
      const domain = vals.domainFilter || "%@gmail.com";

      return `
        <div class="space-y-3 font-sans">
          <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <span class="text-[10px] uppercase font-mono text-amber-400 font-bold">Executed Query:</span>
            <pre class="text-xs font-mono text-sky-300 p-2 bg-slate-900 rounded border border-slate-800 overflow-x-auto">
SELECT id, full_name, google_email, score 
FROM Students 
WHERE score >= ${min} 
  AND google_email LIKE '${domain}' 
ORDER BY score DESC;</pre>
          </div>
          <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl text-xs text-slate-300">
            <strong>Query Execution Metrics:</strong> Scanned 500 table rows using <code>idx_score</code> B-Tree index. Matched rows meeting criteria $\\ge ${min}\\%$ with pattern <code>${domain}</code>.
          </div>
        </div>
      `;
    },
    codeSnippet: `-- DBMS Exercise 3: Filtering & Pattern Queries (DQL)
SELECT id, full_name, google_email, score,
       CASE 
           WHEN score >= 90 THEN 'DISTINCTION'
           WHEN score >= 75 THEN 'FIRST_CLASS'
           ELSE 'PASS'
       END AS GradeClassification
FROM Students
WHERE score >= 90 AND google_email LIKE '%@gmail.com'
ORDER BY score DESC;`
  },
  {
    id: 4,
    title: "Exercise 4: Group Aggregations & Analytics (GROUP BY / HAVING)",
    category: "DBMS & SQL",
    badgeColor: "sky",
    desc: "Compute summary statistics across cohorts using aggregate functions (COUNT, SUM, AVG, MAX, MIN) filtered by HAVING clauses.",
    inputs: [
      { id: "minAvg", label: "Filter Groups with Average Score >=", type: "select", default: "85", options: ["80", "85", "90", "92"] }
    ],
    run: function(vals) {
      const minAvg = vals.minAvg || "85";
      return `
        <div class="space-y-3 font-sans">
          <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <span class="text-[10px] uppercase font-mono text-emerald-400 font-bold">Aggregate Analytics SQL:</span>
            <pre class="text-xs font-mono text-teal-300 p-2 bg-slate-900 rounded border border-slate-800 overflow-x-auto">
SELECT 
    department,
    COUNT(*) AS total_scholars,
    ROUND(AVG(score), 2) AS avg_score,
    MAX(score) AS peak_score,
    MIN(score) AS lowest_score
FROM Learners
GROUP BY department
HAVING AVG(score) >= ${minAvg}
ORDER BY avg_score DESC;</pre>
          </div>
          <div class="overflow-x-auto rounded-xl border border-slate-800">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
                <tr>
                  <th class="p-2">Cohort Department</th>
                  <th class="p-2">Total Scholars</th>
                  <th class="p-2">Average Score</th>
                  <th class="p-2">Peak Score</th>
                  <th class="p-2">HAVING Filter</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60 font-mono">
                <tr>
                  <td class="p-2 font-bold text-white">Computer Science</td>
                  <td class="p-2 text-indigo-400">128</td>
                  <td class="p-2 text-emerald-400 font-bold">94.8%</td>
                  <td class="p-2 text-amber-400 font-bold">100%</td>
                  <td class="p-2 text-teal-400">PASSED (>=${minAvg}%)</td>
                </tr>
                <tr>
                  <td class="p-2 font-bold text-white">AI & Data Science</td>
                  <td class="p-2 text-indigo-400">96</td>
                  <td class="p-2 text-emerald-400 font-bold">91.4%</td>
                  <td class="p-2 text-amber-400 font-bold">99%</td>
                  <td class="p-2 text-teal-400">PASSED (>=${minAvg}%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    },
    codeSnippet: `-- DBMS Exercise 4: Group Aggregations & HAVING
SELECT 
    department,
    COUNT(*) AS total_scholars,
    ROUND(AVG(score), 2) AS avg_score,
    MAX(score) AS peak_score,
    MIN(score) AS lowest_score
FROM Learners
GROUP BY department
HAVING AVG(score) >= 85
ORDER BY avg_score DESC;`
  },
  {
    id: 5,
    title: "Exercise 5: Relational INNER JOIN & Foreign Key Navigation (Joins)",
    category: "DBMS & SQL",
    badgeColor: "sky",
    desc: "Connect two related tables (Learners and Certifications) via Primary Key / Foreign Key relationship using relational JOINs.",
    inputs: [
      { id: "joinType", label: "Join Mechanism:", type: "select", default: "INNER JOIN", options: ["INNER JOIN", "LEFT OUTER JOIN"] }
    ],
    run: function(vals) {
      const join = vals.joinType || "INNER JOIN";
      return `
        <div class="space-y-3 font-sans">
          <div class="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <span class="text-[10px] uppercase font-mono text-indigo-400 font-bold">Relational Navigation Statement:</span>
            <pre class="text-xs font-mono text-emerald-400 p-2 bg-slate-900 rounded border border-slate-800 overflow-x-auto">
SELECT 
    l.id AS scholar_id,
    l.name AS scholar_name,
    c.cert_title,
    c.issued_date,
    c.honor_status
FROM Learners l
${join} Certifications c 
    ON l.id = c.learner_id
ORDER BY c.issued_date DESC;</pre>
          </div>
          <div class="p-3 bg-sky-950/30 border border-sky-500/30 rounded-xl text-xs text-slate-300">
            <strong>Relational Join Mechanics:</strong> The query planner resolves <code>c.learner_id</code> as a foreign key index lookup into <code>l.id</code>. Only matching pairs are preserved by INNER JOIN.
          </div>
        </div>
      `;
    },
    codeSnippet: `-- DBMS Exercise 5: Relational Joins & Foreign Keys
CREATE TABLE Certifications (
    cert_id INTEGER PRIMARY KEY,
    learner_id INTEGER REFERENCES Learners(id),
    cert_title TEXT NOT NULL,
    honor_status TEXT,
    issued_date DATE
);

SELECT 
    l.id AS scholar_id,
    l.name AS scholar_name,
    c.cert_title,
    c.honor_status
FROM Learners l
INNER JOIN Certifications c ON l.id = c.learner_id;`
  },

  // ==========================================
  // MS-WORD EXERCISES (EX 6 - 10)
  // ==========================================
  {
    id: 6,
    title: "Exercise 6: Dynamic Heading Hierarchy & Automated TOC Generator",
    category: "MS-Word",
    badgeColor: "indigo",
    desc: "Structure a professional multi-tier document hierarchy (Title, Heading 1, Heading 2, Heading 3) and generate an automated dot-leader Table of Contents.",
    inputs: [
      { id: "docTitle", label: "Document Title:", type: "text", default: "Digital Empowerment Bootcamp Whitepaper" },
      { id: "sec1Title", label: "Heading 1 (Module 1):", type: "text", default: "1. Information Technology & Architecture" },
      { id: "sec2Title", label: "Heading 1 (Module 2):", type: "text", default: "2. Relational Database Management Systems" }
    ],
    run: function(vals) {
      const title = vals.docTitle || "Bootcamp Whitepaper";
      const s1 = vals.sec1Title || "1. Architecture";
      const s2 = vals.sec2Title || "2. RDBMS";

      return `
        <div class="space-y-4 font-sans">
          <div class="p-4 bg-white text-slate-900 rounded-xl shadow-lg border border-slate-300">
            <h1 class="text-base font-bold text-indigo-900 border-b border-indigo-200 pb-1 mb-2">${title}</h1>
            <p class="text-[11px] text-slate-500 uppercase font-mono tracking-wider mb-3">AUTOMATED TABLE OF CONTENTS (DOT LEADERS)</p>
            <div class="space-y-1.5 text-xs font-mono">
              <div class="flex justify-between border-b border-dotted border-slate-400 pb-0.5">
                <span class="font-bold text-slate-800">${s1}</span>
                <span class="text-indigo-600 font-bold">Page 1</span>
              </div>
              <div class="flex justify-between pl-4 text-slate-600 border-b border-dotted border-slate-300 pb-0.5">
                <span>1.1 CPU Architecture & Registers</span>
                <span>Page 2</span>
              </div>
              <div class="flex justify-between pl-4 text-slate-600 border-b border-dotted border-slate-300 pb-0.5">
                <span>1.2 Operating Systems Scheduling</span>
                <span>Page 4</span>
              </div>
              <div class="flex justify-between border-b border-dotted border-slate-400 pb-0.5 mt-2">
                <span class="font-bold text-slate-800">${s2}</span>
                <span class="text-indigo-600 font-bold">Page 6</span>
              </div>
              <div class="flex justify-between pl-4 text-slate-600 border-b border-dotted border-slate-300 pb-0.5">
                <span>2.1 Normalization (1NF to BCNF)</span>
                <span>Page 7</span>
              </div>
            </div>
          </div>
          <div class="p-3 bg-indigo-950/30 border border-indigo-500/30 rounded-xl text-xs text-slate-300">
            <strong>MS-Word Best Practice:</strong> Never type dot periods manually! Using <em>Heading 1</em> and <em>Heading 2</em> styles allows Word to rebuild the Table of Contents dynamically in 1 click (<code>F9</code>).
          </div>
        </div>
      `;
    },
    codeSnippet: `# MS-Word Structure & TOC Template
# DOCUMENT TITLE: Digital Empowerment Bootcamp Whitepaper
[STYLE: Title | Font: Aptos 26pt Bold | Color: #1e1b4b]

## 1. Information Technology & Architecture
[STYLE: Heading 1 | Font: Aptos 18pt Bold | Color: #312e81]
### 1.1 CPU Architecture & Instruction Pipeline
[STYLE: Heading 2 | Font: Aptos 14pt SemiBold]

## 2. Relational Database Management Systems
[STYLE: Heading 1 | Font: Aptos 18pt Bold]
### 2.1 Normalization & Functional Dependencies
[STYLE: Heading 2 | Font: Aptos 14pt SemiBold]`
  },
  {
    id: 7,
    title: "Exercise 7: Automated Mail Merge Recipient Generator",
    category: "MS-Word",
    badgeColor: "indigo",
    desc: "Bind an MS-Excel data source to an MS-Word master template using merge fields (<<Learner_Name>>, <<Score>>, <<Honors>>) to generate individualized letters.",
    inputs: [
      { id: "scholarName", label: "Scholar Name:", type: "text", default: "Kapil Narula" },
      { id: "badgeAward", label: "Honors Distinction:", type: "select", default: "Master Bootcamp Scholar (Summa Cum Laude)", options: ["Master Bootcamp Scholar (Summa Cum Laude)", "Day 1 Foundation Honors", "Day 2 RDBMS Specialist"] },
      { id: "examScore", label: "Score Percentage:", type: "select", default: "98%", options: ["90%", "94%", "98%", "100%"] }
    ],
    run: function(vals) {
      const name = vals.scholarName || "Kapil Narula";
      const badge = vals.badgeAward || "Master Bootcamp Scholar";
      const score = vals.examScore || "98%";

      return `
        <div class="space-y-3 font-sans">
          <div class="p-5 bg-white text-slate-900 rounded-xl shadow-lg border border-slate-300 space-y-3">
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
              <span class="font-serif font-black text-xs text-indigo-950 uppercase">OFFICIAL COMMENDATION LETTER</span>
              <span class="text-[10px] text-slate-500 font-mono">MERGED RECORD #101</span>
            </div>
            <p class="text-xs text-slate-700">Dear <strong class="text-indigo-900 bg-indigo-50 px-1 rounded">&laquo;${name}&raquo;</strong>,</p>
            <p class="text-xs text-slate-700 leading-relaxed">
              We are delighted to formally confirm that you have achieved an exceptional evaluation score of 
              <strong class="text-emerald-700 font-mono">&laquo;${score}&raquo;</strong> in the Digital Empowerment Bootcamp examination series.
            </p>
            <p class="text-xs text-slate-700 leading-relaxed">
              In recognition of this outstanding academic achievement, you are hereby conferred the credential of:
            </p>
            <div class="p-2.5 bg-amber-50 border border-amber-300 rounded-lg text-center font-bold text-amber-900 text-xs">
              &laquo;${badge}&raquo;
            </div>
            <div class="pt-2 text-right">
              <p class="text-xs font-bold text-slate-800">Kapil</p>
              <p class="text-[10px] text-slate-500">Bootcamp Founder & Chief Instructor</p>
            </div>
          </div>
        </div>
      `;
    },
    codeSnippet: `# MS-Word Mail Merge Template
To: <<Learner_Name>>
Email: <<Google_Email>>
Date: <<System_Date>>

Dear <<Learner_Name>>,

Congratulations on completing the Digital Empowerment Bootcamp!
Your final verified score is <<Final_Score>>%.
You have earned the <<Honor_Badge>> award.

Signed,
Kapil`
  },
  {
    id: 8,
    title: "Exercise 8: Executive Table Grid & Alternating Zebra Shading",
    category: "MS-Word",
    badgeColor: "indigo",
    desc: "Design an executive-level publication table with formatted header, cell borders, custom padding, and repeat header rows across page breaks.",
    inputs: [
      { id: "zebraShading", label: "Zebra Striping:", type: "select", default: "Yes (Alternating Slate Shading)", options: ["Yes (Alternating Slate Shading)", "No (Clean White Grid)"] },
      { id: "cellPadding", label: "Cell Padding:", type: "select", default: "Comfortable (8pt)", options: ["Compact (4pt)", "Comfortable (8pt)", "Spacious (12pt)"] }
    ],
    run: function(vals) {
      const isZebra = vals.zebraShading.includes("Yes");
      return `
        <div class="space-y-3 font-sans">
          <div class="p-4 bg-white text-slate-900 rounded-xl shadow-lg border border-slate-300 overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-indigo-900 text-white font-bold">
                  <th class="p-2.5 border border-indigo-800">Unit ID</th>
                  <th class="p-2.5 border border-indigo-800">Curriculum Domain</th>
                  <th class="p-2.5 border border-indigo-800">Assessment Standard</th>
                  <th class="p-2.5 border border-indigo-800 text-right">Passing Benchmark</th>
                </tr>
              </thead>
              <tbody>
                <tr class="${isZebra ? 'bg-slate-50' : 'bg-white'}">
                  <td class="p-2 border border-slate-200 font-mono">UNIT-01</td>
                  <td class="p-2 border border-slate-200 font-semibold">IT Hardware & Architecture</td>
                  <td class="p-2 border border-slate-200">100 MCQs (60 Min)</td>
                  <td class="p-2 border border-slate-200 text-right font-bold text-emerald-700">90% PASS</td>
                </tr>
                <tr class="bg-white">
                  <td class="p-2 border border-slate-200 font-mono">UNIT-02</td>
                  <td class="p-2 border border-slate-200 font-semibold">Relational Databases & SQL</td>
                  <td class="p-2 border border-slate-200">100 MCQs (60 Min)</td>
                  <td class="p-2 border border-slate-200 text-right font-bold text-emerald-700">90% PASS</td>
                </tr>
                <tr class="${isZebra ? 'bg-slate-50' : 'bg-white'}">
                  <td class="p-2 border border-slate-200 font-mono">UNIT-03</td>
                  <td class="p-2 border border-slate-200 font-semibold">Web Technologies & JS</td>
                  <td class="p-2 border border-slate-200">100 MCQs (60 Min)</td>
                  <td class="p-2 border border-slate-200 text-right font-bold text-emerald-700">90% PASS</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-[11px] text-slate-400">
            <strong>Table Setting:</strong> <em>Table Tools &gt; Layout &gt; Repeat Header Rows</em> ensures the header automatically reappears at the top of subsequent pages!
          </p>
        </div>
      `;
    },
    codeSnippet: `| Unit ID | Curriculum Domain | Assessment Standard | Passing Benchmark |
| :--- | :--- | :--- | :--- |
| UNIT-01 | IT Hardware & Architecture | 100 MCQs (60 Min) | 90% PASS |
| UNIT-02 | Relational Databases & SQL | 100 MCQs (60 Min) | 90% PASS |
| UNIT-03 | Web Technologies & JS | 100 MCQs (60 Min) | 90% PASS |`
  },
  {
    id: 9,
    title: "Exercise 9: Mixed Orientation Section Breaks & Header Unlinking",
    category: "MS-Word",
    badgeColor: "indigo",
    desc: "Master Section Breaks (Next Page) to mix Portrait and Landscape pages within a single document, and unlink headers with 'Link to Previous'.",
    inputs: [
      { id: "secBreakType", label: "Section Break Type:", type: "select", default: "Section Break (Next Page)", options: ["Section Break (Next Page)", "Section Break (Continuous)"] },
      { id: "linkPrevious", label: "Header 'Link to Previous':", type: "select", default: "Unlinked (Independent Chapter Headers)", options: ["Unlinked (Independent Chapter Headers)", "Linked (Same as Previous)"] }
    ],
    run: function(vals) {
      return `
        <div class="space-y-3 font-sans">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-4 bg-white text-slate-900 rounded-xl shadow border border-slate-300 space-y-2">
              <span class="text-[10px] font-mono uppercase bg-indigo-100 text-indigo-900 px-1.5 py-0.5 rounded font-bold">SECTION 1: PORTRAIT</span>
              <p class="text-xs font-bold text-slate-800">Chapter 1: Foundations</p>
              <div class="h-28 border-2 border-dashed border-slate-300 rounded flex items-center justify-center text-slate-400 text-center p-2 text-[10px]">
                Standard Text Pages<br>(8.5" x 11" Portrait)
              </div>
              <p class="text-[10px] text-indigo-700 font-mono">Header: "Bootcamp Foundations" • Page 1</p>
            </div>
            <div class="p-4 bg-white text-slate-900 rounded-xl shadow border border-slate-300 space-y-2">
              <span class="text-[10px] font-mono uppercase bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-bold">SECTION 2: LANDSCAPE</span>
              <p class="text-xs font-bold text-slate-800">Chapter 2: Large Architecture Matrix</p>
              <div class="h-28 border-2 border-dashed border-amber-300 rounded flex items-center justify-center text-amber-700 text-center p-2 text-[10px]">
                Wide 12-Column Database ER Diagram<br>(11" x 8.5" Landscape)
              </div>
              <p class="text-[10px] text-amber-800 font-mono">Header: "Database Architecture" • Page 2</p>
            </div>
          </div>
          <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl text-xs text-slate-300">
            <strong>Key Word Shortcut:</strong> Insert Section Break via <em>Layout &gt; Breaks &gt; Next Page</em>. Then click Header &gt; toggle OFF <em>Link to Previous</em> to decouple headers.
          </div>
        </div>
      `;
    },
    codeSnippet: `# MS-Word Section Architecture
=== [SECTION BREAK: NEXT PAGE] ===
Orientation: Portrait (8.5" x 11")
Margins: 1" Normal
Header [Link to Previous: OFF]: "Chapter 1: Foundations"

=== [SECTION BREAK: NEXT PAGE] ===
Orientation: Landscape (11" x 8.5")
Margins: 0.5" Narrow
Header [Link to Previous: OFF]: "Chapter 2: Architecture Matrix"`
  },
  {
    id: 10,
    title: "Exercise 10: Dynamic Table Calculations with Word Formulas",
    category: "MS-Word",
    badgeColor: "indigo",
    desc: "Perform real-time calculations directly inside an MS-Word table using field formula codes like { =SUM(ABOVE) } and { =AVERAGE(B2:B4) }.",
    inputs: [
      { id: "score1", label: "Day 1 Score:", type: "select", default: "96", options: ["80", "90", "96", "100"] },
      { id: "score2", label: "Day 2 Score:", type: "select", default: "98", options: ["85", "92", "98", "100"] },
      { id: "score3", label: "Day 3 Score:", type: "select", default: "94", options: ["88", "90", "94", "100"] },
      { id: "calcFormula", label: "Target Calculation:", type: "select", default: "=AVERAGE(ABOVE)", options: ["=AVERAGE(ABOVE)", "=SUM(ABOVE)", "=MAX(ABOVE)"] }
    ],
    run: function(vals) {
      const s1 = parseFloat(vals.score1 || "96");
      const s2 = parseFloat(vals.score2 || "98");
      const s3 = parseFloat(vals.score3 || "94");
      const f = vals.calcFormula || "=AVERAGE(ABOVE)";

      let result = 0;
      if (f === "=AVERAGE(ABOVE)") result = ((s1 + s2 + s3) / 3).toFixed(1);
      else if (f === "=SUM(ABOVE)") result = (s1 + s2 + s3).toFixed(1);
      else if (f === "=MAX(ABOVE)") result = Math.max(s1, s2, s3).toFixed(1);

      return `
        <div class="space-y-3 font-sans">
          <div class="p-4 bg-white text-slate-900 rounded-xl shadow-lg border border-slate-300">
            <table class="w-full text-left text-xs border border-slate-200 font-mono">
              <thead class="bg-indigo-950 text-white">
                <tr>
                  <th class="p-2 border border-slate-300">Curriculum Module</th>
                  <th class="p-2 border border-slate-300 text-right">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr><td class="p-2 border border-slate-200">Day 1: IT & C Language</td><td class="p-2 border border-slate-200 text-right font-bold">${s1}</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border border-slate-200">Day 2: RDBMS & Modular C</td><td class="p-2 border border-slate-200 text-right font-bold">${s2}</td></tr>
                <tr><td class="p-2 border border-slate-200">Day 3: Web Engineering</td><td class="p-2 border border-slate-200 text-right font-bold">${s3}</td></tr>
                <tr class="bg-indigo-50 font-bold text-indigo-900 border-t-2 border-indigo-400">
                  <td class="p-2 border border-slate-300">Word Formula: <code class="text-indigo-700 bg-white px-1 border rounded">{ ${f} }</code></td>
                  <td class="p-2 border border-slate-300 text-right text-emerald-700 font-black text-sm">${result}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-3 bg-indigo-950/30 border border-indigo-500/30 rounded-xl text-xs text-slate-300">
            <strong>Word Field Code Tip:</strong> Press <code>Ctrl + F9</code> to insert field braces <code>{ }</code>, then type <code>=AVERAGE(ABOVE)</code>. Press <code>F9</code> to calculate!
          </div>
        </div>
      `;
    },
    codeSnippet: `[MS-WORD TABLE FORMULA CODE]
Day 1 Score: 96
Day 2 Score: 98
Day 3 Score: 94

Calculation Cell Field:
{ =AVERAGE(ABOVE) } -> Output: 96.0% (Passed Honors Benchmark)
Alternative:
{ =SUM(ABOVE) }     -> Output: 288.0 Total Points`
  }
];

if (typeof module !== 'undefined') { module.exports = DBMS_WORD_EXERCISES; }
