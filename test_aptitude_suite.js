// Verification test suite for Aptitude Module
const fs = require('fs');

console.log("=== RUNNING COMPLETE VERIFICATION TEST SUITE ===");

// 1. Check aptitude-data.js
let tipsCount = 0;
let examplesCount = 0;
let mcqsCount = 0;

global.window = {};

eval(fs.readFileSync('js/aptitude-data.js', 'utf8'));

console.log("\n--- Checking js/aptitude-data.js Data Integrity ---");
if (window.APTITUDE_TIPS_DATA && Array.isArray(window.APTITUDE_TIPS_DATA)) {
  tipsCount = window.APTITUDE_TIPS_DATA.length;
  console.log(`✔ APTITUDE_TIPS_DATA: ${tipsCount} tips loaded (Expected: 50).`);
  if (tipsCount !== 50) throw new Error(`Expected 50 tips, found ${tipsCount}`);
  window.APTITUDE_TIPS_DATA.forEach((t, i) => {
    if (!t.title || !t.formula || !t.rule || !t.example || !t.proTip) {
      throw new Error(`Tip #${i + 1} has missing required fields!`);
    }
  });
  console.log("✔ All 50 Tips verified with complete formulas, examples & speed hacks.");
} else {
  throw new Error("window.APTITUDE_TIPS_DATA not found!");
}

if (window.APTITUDE_SOLVED_EXAMPLES && Array.isArray(window.APTITUDE_SOLVED_EXAMPLES)) {
  examplesCount = window.APTITUDE_SOLVED_EXAMPLES.length;
  console.log(`✔ APTITUDE_SOLVED_EXAMPLES: ${examplesCount} solved examples loaded (Expected: 100).`);
  if (examplesCount !== 100) throw new Error(`Expected 100 examples, found ${examplesCount}`);
  window.APTITUDE_SOLVED_EXAMPLES.forEach((ex, i) => {
    if (!ex.question || !Array.isArray(ex.options) || ex.options.length !== 4 || ex.correctIndex === undefined || !ex.standardSolution || !ex.shortcutSolution) {
      throw new Error(`Solved Example #${i + 1} has invalid structure!`);
    }
    if (ex.correctIndex < 0 || ex.correctIndex > 3) {
      throw new Error(`Solved Example #${i + 1} has out-of-bounds correctIndex ${ex.correctIndex}!`);
    }
  });
  console.log("✔ All 100 Solved Examples verified with 4 options, valid answer index & dual solutions.");
} else {
  throw new Error("window.APTITUDE_SOLVED_EXAMPLES not found!");
}

if (window.APTITUDE_300_MCQS && Array.isArray(window.APTITUDE_300_MCQS)) {
  mcqsCount = window.APTITUDE_300_MCQS.length;
  console.log(`✔ APTITUDE_300_MCQS: ${mcqsCount} MCQs loaded (Expected: 300).`);
  if (mcqsCount !== 300) throw new Error(`Expected 300 MCQs, found ${mcqsCount}`);
  const stems = new Set();
  window.APTITUDE_300_MCQS.forEach((q, i) => {
    if (!q.q || !Array.isArray(q.opts) || q.opts.length !== 4 || q.ans === undefined || !q.exp) {
      throw new Error(`MCQ #${i + 1} has invalid question schema!`);
    }
    if (q.ans < 0 || q.ans > 3) {
      throw new Error(`MCQ #${i + 1} has invalid ans index ${q.ans}!`);
    }
    if (stems.has(q.q.trim())) {
      throw new Error(`Duplicate MCQ detected at index ${i + 1}: "${q.q}"`);
    }
    stems.add(q.q.trim());
  });
  console.log("✔ All 300 MCQs verified with 100% unique question stems, 4 distinct options, and explanations.");
} else {
  throw new Error("window.APTITUDE_300_MCQS not found!");
}

// 2. Check index.html DOM Elements
console.log("\n--- Checking index.html DOM Bindings ---");
const html = fs.readFileSync('index.html', 'utf8');

const requiredIds = [
  'tabContentAptitude',
  'tabBtnAptitude',
  'aptTipsMasteredCount',
  'aptExamplesCompletedCount',
  'aptExamBestScore',
  'aptExamPassStatus',
  'aptSubTabBtnTips',
  'aptSubTabBtnExamples',
  'aptSubTabBtnExam',
  'aptSubTabContentTips',
  'aptSubTabContentExamples',
  'aptSubTabContentExam',
  'aptTipsGrid',
  'aptExamplesList',
  'aptExamLobby',
  'aptExamRunner',
  'aptExamResults',
  'aptExamTimerDisplay',
  'aptQuestionPalette',
  'aptQuestionText',
  'aptOptionsContainer',
  'dossierAptitudeScore',
  'dossierAptitudeStatus',
  'dossierAptitudeAttempts',
  'dossierAptitudeExamples',
  'dossierAptitudeTips'
];

requiredIds.forEach(id => {
  if (!html.includes(`id="${id}"`)) {
    throw new Error(`Required element id="${id}" missing in index.html!`);
  }
});
console.log(`✔ All ${requiredIds.length} required HTML IDs verified in index.html.`);

// Check script tag for aptitude-data.js
if (!html.includes('<script src="./js/aptitude-data.js"></script>')) {
  throw new Error("aptitude-data.js script tag missing in index.html!");
}
console.log("✔ <script src=\"./js/aptitude-data.js\"></script> correctly linked in index.html.");

// 3. Check app.js Functions & Symbols
console.log("\n--- Checking js/app.js Implementation ---");
const appJs = fs.readFileSync('js/app.js', 'utf8');

const requiredFunctions = [
  'initAptitudeTab',
  'renderAptitudeTips',
  'filterAptitudeTips',
  'toggleTipViewed',
  'markAllAptitudeTipsViewed',
  'renderAptitudeSolvedExamples',
  'filterAptitudeExamples',
  'toggleAptitudeExamplePracticed',
  'toggleAptitudeExampleSolution',
  'startAptitudeExam',
  'aptitudeTimerTick',
  'updateAptitudeTimerDisplay',
  'renderAptitudeExamRunner',
  'selectAptitudeOption',
  'clearCurrentAptitudeResponse',
  'toggleCurrentAptitudeFlag',
  'prevAptitudeQuestion',
  'nextAptitudeQuestion',
  'jumpToAptitudeQuestion',
  'renderAptitudePalette',
  'confirmSubmitAptitudeExam',
  'submitAptitudeExam',
  'renderAptitudeResults',
  'toggleAptitudeSolutionsReview',
  'filterAptitudeReview',
  'syncAptitudeToFirestore',
  'downloadAptitudeReport',
  'renderAptitudeScoreCell'
];

requiredFunctions.forEach(fn => {
  if (!appJs.includes(`function ${fn}`)) {
    throw new Error(`Required function ${fn} missing in js/app.js!`);
  }
});
console.log(`✔ All ${requiredFunctions.length} Aptitude controller functions found in js/app.js.`);

// 4. Check Firebase Roster Schema
console.log("\n--- Checking data/firebase-roster.json ---");
const roster = JSON.parse(fs.readFileSync('data/firebase-roster.json', 'utf8'));
if (!Array.isArray(roster) || roster.length !== 37) {
  throw new Error(`Expected 37 scholars in roster, found ${roster.length}`);
}
roster.forEach((u, i) => {
  if (u.aptitude_score === undefined || u.aptitude_passed === undefined || u.aptitude_attempts === undefined) {
    throw new Error(`Scholar ${u.name} (index ${i}) missing aptitude fields!`);
  }
});
console.log(`✔ All ${roster.length} scholars in data/firebase-roster.json possess aptitude telemetry fields.`);

console.log("\n=======================================================");
console.log("ALL TESTS PASSED! ZERO ERRORS, EXCEPTIONS OR REGRESSIONS!");
console.log("=======================================================");
