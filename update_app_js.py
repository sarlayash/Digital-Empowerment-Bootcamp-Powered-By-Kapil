"""
Script to update js/app.js with Aptitude module controller, Firestore sync, Admin table rendering, Dossier population, and CSV reports.
"""

def update():
    with open("js/app.js", "r", encoding="utf-8") as f:
        code = f.read()

    # 1. Update switchTab
    old_tabs = "const tabs = ['notes', 'foundations', 'javadsa', 'dbmsword', 'level0', 'mocktests', 'pretest', 'ide', 'assessment', 'credentials'];"
    new_tabs = "const tabs = ['notes', 'foundations', 'javadsa', 'dbmsword', 'level0', 'mocktests', 'pretest', 'ide', 'assessment', 'credentials', 'aptitude'];"
    assert old_tabs in code, "switchTab tabs array not found"
    code = code.replace(old_tabs, new_tabs, 1)

    old_switch_cond = "  } else if (tabId === 'credentials') {\n    updateCredentialsUI();\n  }"
    new_switch_cond = """  } else if (tabId === 'credentials') {
    updateCredentialsUI();
  } else if (tabId === 'aptitude') {
    initAptitudeTab();
  }"""
    assert old_switch_cond in code, "switchTab condition not found"
    code = code.replace(old_switch_cond, new_switch_cond, 1)

    # 2. Update loadLearnerProgressFromFirestore
    old_load_prog = """      // Sync 5 Mock Assessments progress
      for (let m = 1; m <= 5; m++) {
        if (data[`mock_${m}_score`] !== undefined) localStorage.setItem(`mock_${m}_score`, String(data[`mock_${m}_score`]));
        if (data[`mock_${m}_passed`]) localStorage.setItem(`mock_${m}_passed`, 'true');
        if (data[`mock_${m}_attempts`] !== undefined) localStorage.setItem(`mock_${m}_attempts`, String(data[`mock_${m}_attempts`]));
      }
      renderMockSeriesCards();"""

    new_load_prog = old_load_prog + """\n
      // Sync Aptitude Mastery Progress
      if (data.aptitude_score !== undefined) localStorage.setItem('aptitude_exam_score', String(data.aptitude_score));
      if (data.aptitude_passed !== undefined) localStorage.setItem('aptitude_exam_passed', String(data.aptitude_passed));
      if (data.aptitude_attempts !== undefined) localStorage.setItem('aptitude_exam_attempts', String(data.aptitude_attempts));
      if (data.aptitude_completed_examples && Array.isArray(data.aptitude_completed_examples)) {
        localStorage.setItem('aptitude_completed_examples', JSON.stringify(data.aptitude_completed_examples));
      }
      if (data.aptitude_viewed_tips && Array.isArray(data.aptitude_viewed_tips)) {
        localStorage.setItem('aptitude_viewed_tips', JSON.stringify(data.aptitude_viewed_tips));
      }
      if (typeof updateAptitudeOverviewMetrics === 'function') updateAptitudeOverviewMetrics();"""
    assert old_load_prog in code, "loadLearnerProgressFromFirestore mock target not found"
    code = code.replace(old_load_prog, new_load_prog, 1)

    # 3. Update applyFirestoreSnapshotToAdmin
    old_apply_snap = """      if (d.foundations_count !== undefined) scholar.foundations_count = Number(d.foundations_count);
      if (d.level0_count !== undefined) scholar.level0_count = Number(d.level0_count);
      if (d.javadsa_count !== undefined) scholar.javadsa_count = Number(d.javadsa_count);
      if (d.dbmsword_count !== undefined) scholar.dbmsword_count = Number(d.dbmsword_count);"""

    new_apply_snap = old_apply_snap + """\n
      if (d.aptitude_score !== undefined) scholar.aptitude_score = Number(d.aptitude_score);
      if (d.aptitude_passed !== undefined) scholar.aptitude_passed = Boolean(d.aptitude_passed);
      if (d.aptitude_attempts !== undefined) scholar.aptitude_attempts = Number(d.aptitude_attempts);
      if (d.aptitude_completed_examples && Array.isArray(d.aptitude_completed_examples)) {
        scholar.aptitude_examples_count = d.aptitude_completed_examples.length;
      } else if (d.aptitude_examples_count !== undefined) {
        scholar.aptitude_examples_count = Number(d.aptitude_examples_count);
      }
      if (d.aptitude_viewed_tips && Array.isArray(d.aptitude_viewed_tips)) {
        scholar.aptitude_tips_count = d.aptitude_viewed_tips.length;
      } else if (d.aptitude_tips_count !== undefined) {
        scholar.aptitude_tips_count = Number(d.aptitude_tips_count);
      }"""
    assert old_apply_snap in code, "applyFirestoreSnapshotToAdmin target not found"
    code = code.replace(old_apply_snap, new_apply_snap, 1)

    # 4. Update loadAdminDashboardData base roster mapping
    old_roster_map = """      dbmsword_count: item.dbmsword_count ?? 0,
      linkedinUrl: item.linkedinUrl ?? '',
      githubUrl: item.githubUrl ?? '',
      ...item"""

    new_roster_map = """      dbmsword_count: item.dbmsword_count ?? 0,
      aptitude_score: item.aptitude_score ?? null,
      aptitude_passed: item.aptitude_passed ?? false,
      aptitude_attempts: item.aptitude_attempts ?? 0,
      aptitude_examples_count: item.aptitude_examples_count ?? 0,
      aptitude_tips_count: item.aptitude_tips_count ?? 0,
      linkedinUrl: item.linkedinUrl ?? '',
      githubUrl: item.githubUrl ?? '',
      ...item"""
    assert old_roster_map in code, "loadAdminDashboardData base roster map not found"
    code = code.replace(old_roster_map, new_roster_map, 1)

    # 5. Update Firestore merged object in loadAdminDashboardData
    old_merged_snap = """          dbmsword_count: Number(d.dbmsword_count || (Array.isArray(d.dbmsword_completed) ? d.dbmsword_completed.length : (existing ? existing.dbmsword_count : 0))),"""
    new_merged_snap = old_merged_snap + """\n          aptitude_score: d.aptitude_score !== undefined ? Number(d.aptitude_score) : (existing ? existing.aptitude_score : null),
          aptitude_passed: d.aptitude_passed !== undefined ? Boolean(d.aptitude_passed) : Boolean(existing ? existing.aptitude_passed : false),
          aptitude_attempts: Number(d.aptitude_attempts || (existing ? existing.aptitude_attempts : 0)),
          aptitude_examples_count: Number(d.aptitude_examples_count || (Array.isArray(d.aptitude_completed_examples) ? d.aptitude_completed_examples.length : (existing ? existing.aptitude_examples_count : 0))),
          aptitude_tips_count: Number(d.aptitude_tips_count || (Array.isArray(d.aptitude_viewed_tips) ? d.aptitude_viewed_tips.length : (existing ? existing.aptitude_tips_count : 0))),"""
    assert old_merged_snap in code, "loadAdminDashboardData Firestore merged snap not found"
    code = code.replace(old_merged_snap, new_merged_snap, 1)

    # 6. Update local user overlay in loadAdminDashboardData
    old_local_existing = """      day3_score: null, day3_passed: false, day3_attempts: 0,
      mock1_score: null, mock1_passed: false, mock1_attempts: 0,"""

    new_local_existing = """      day3_score: null, day3_passed: false, day3_attempts: 0,
      aptitude_score: null, aptitude_passed: false, aptitude_attempts: 0,
      aptitude_examples_count: 0, aptitude_tips_count: 0,
      mock1_score: null, mock1_passed: false, mock1_attempts: 0,"""
    assert old_local_existing in code, "local existing object not found"
    code = code.replace(old_local_existing, new_local_existing, 1)

    old_local_overlay = """    if (typeof dbmsWordCompletedSet !== 'undefined' && dbmsWordCompletedSet) {
      existing.dbmsword_count = Math.max(existing.dbmsword_count || 0, dbmsWordCompletedSet.size);
    }"""

    new_local_overlay = old_local_overlay + """\n
    const aptScoreLocal = localStorage.getItem('aptitude_exam_score');
    if (aptScoreLocal !== null) {
      existing.aptitude_score = Number(aptScoreLocal);
      existing.aptitude_passed = localStorage.getItem('aptitude_exam_passed') === 'true';
      existing.aptitude_attempts = Number(localStorage.getItem('aptitude_exam_attempts') || 1);
    }
    const aptExLocal = localStorage.getItem('aptitude_completed_examples');
    if (aptExLocal) {
      try {
        const arr = JSON.parse(aptExLocal);
        if (Array.isArray(arr)) existing.aptitude_examples_count = Math.max(existing.aptitude_examples_count || 0, arr.length);
      } catch (e) {}
    }
    const aptTipsLocal = localStorage.getItem('aptitude_viewed_tips');
    if (aptTipsLocal) {
      try {
        const arr = JSON.parse(aptTipsLocal);
        if (Array.isArray(arr)) existing.aptitude_tips_count = Math.max(existing.aptitude_tips_count || 0, arr.length);
      } catch (e) {}
    }"""
    assert old_local_overlay in code, "local overlay target not found"
    code = code.replace(old_local_overlay, new_local_overlay, 1)

    # 7. Add Aptitude column rendering in filterAdminLearnerTable
    old_table_row = """        <!-- Mock Series -->
        <td class="p-3 text-center">
          ${mocksAttempted > 0 ? `
            <div class="inline-flex flex-col items-center">
              <span class="px-2 py-0.5 rounded border ${mockBadgeClass} font-mono font-bold text-[10px]">
                ${mocksPassed}/5 Passed (${mockAvg}%)
              </span>
              <span class="text-[9px] text-slate-500 mt-0.5 font-mono">${mocksAttempted}/5 Attempted</span>
            </div>
          ` : `
            <span class="text-slate-500 font-mono text-[11px]">—</span>
          `}
        </td>"""

    new_table_row = old_table_row + """\n
        <!-- Aptitude (300Q) -->
        <td class="p-3 text-center">
          ${renderAptitudeScoreCell(lrn.aptitude_score, lrn.aptitude_passed, lrn.aptitude_attempts)}
        </td>"""
    assert old_table_row in code, "Admin table mock series cell not found"
    code = code.replace(old_table_row, new_table_row, 1)

    # 8. Update inspectLearnerDossier
    old_dossier_mod = """  if (javaEl) javaEl.innerText = `${lrn.javadsa_count || 0}/25 Progs`;
  if (dbmsEl) dbmsEl.innerText = `${lrn.dbmsword_count || 0}/10 Labs`;"""

    new_dossier_mod = old_dossier_mod + """\n
  // Aptitude Mastery Breakdown in Dossier
  const aptScoreEl = document.getElementById('dossierAptitudeScore');
  const aptStatusEl = document.getElementById('dossierAptitudeStatus');
  const aptAttemptsEl = document.getElementById('dossierAptitudeAttempts');
  const aptExamplesEl = document.getElementById('dossierAptitudeExamples');
  const aptTipsEl = document.getElementById('dossierAptitudeTips');

  if (aptScoreEl) {
    if (lrn.aptitude_score === null || lrn.aptitude_score === undefined) {
      aptScoreEl.innerText = '—';
      aptScoreEl.className = 'font-black text-slate-500 mt-1';
      if (aptStatusEl) aptStatusEl.innerText = 'Not Attempted';
    } else {
      const pct = Math.round((lrn.aptitude_score / 300) * 100);
      aptScoreEl.innerText = `${lrn.aptitude_score}/300 (${pct}%)`;
      aptScoreEl.className = `font-black mt-1 ${lrn.aptitude_passed ? 'text-emerald-400' : 'text-rose-400'}`;
      if (aptStatusEl) aptStatusEl.innerText = lrn.aptitude_passed ? 'PASSED (≥80%)' : 'RETRY';
    }
  }
  if (aptAttemptsEl) aptAttemptsEl.innerText = String(lrn.aptitude_attempts || 0);
  if (aptExamplesEl) aptExamplesEl.innerText = `${lrn.aptitude_examples_count || 0}/100`;
  if (aptTipsEl) aptTipsEl.innerText = `${lrn.aptitude_tips_count || 0}/50`;"""
    assert old_dossier_mod in code, "inspectLearnerDossier module count not found"
    code = code.replace(old_dossier_mod, new_dossier_mod, 1)

    # 9. Update downloadConsolidatedReport headers and rows
    old_csv_headers = """    "Mock 5 Passed",
    "Mock Series Avg (%)","""

    new_csv_headers = """    "Mock 5 Passed",
    "Mock Series Avg (%)",
    "Aptitude Score (out of 300)",
    "Aptitude Percentage (%)",
    "Aptitude Passed (≥80%)",
    "Aptitude Attempts",
    "Aptitude Solved Done (out of 100)",
    "Aptitude Tips Viewed (out of 50)","""
    assert old_csv_headers in code, "Consolidated CSV headers target not found"
    code = code.replace(old_csv_headers, new_csv_headers, 1)

    old_csv_row = """      ...formatMockVal(5),
      mockAvg,"""

    new_csv_row = """      ...formatMockVal(5),
      mockAvg,
      lrn.aptitude_score !== null && lrn.aptitude_score !== undefined ? lrn.aptitude_score : "N/A",
      lrn.aptitude_score !== null && lrn.aptitude_score !== undefined ? Math.round((lrn.aptitude_score / 300) * 100) + "%" : "N/A",
      lrn.aptitude_passed ? "YES" : (lrn.aptitude_score !== null && lrn.aptitude_score !== undefined ? "NO" : "NOT_ATTEMPTED"),
      lrn.aptitude_attempts || 0,
      lrn.aptitude_examples_count || 0,
      lrn.aptitude_tips_count || 0,"""
    assert old_csv_row in code, "Consolidated CSV row target not found"
    code = code.replace(old_csv_row, new_csv_row, 1)

    # 10. Append Complete Aptitude Module Controller and downloadAptitudeReport
    aptitude_controller_code = """

// ========================================================
// APTITUDE MASTERY MODULE CONTROLLER
// 50 Tips & Shortcuts • 100 Solved Models • 300-Q 120-Min Mock Exam
// ========================================================

let currentAptitudeSubTab = 'tips'; // 'tips' | 'examples' | 'exam'
let aptitudeCompletedExamples = new Set();
let aptitudeViewedTips = new Set();

// Exam runtime state
let aptitudeExamActive = false;
let aptitudeExamTimerInterval = null;
let aptitudeExamSecondsLeft = 120 * 60; // 7200 seconds (120 mins)
let aptitudeCurrentQIndex = 0; // 0 .. 299
let aptitudeUserAnswers = {}; // { [qIndex]: optIndex }
let aptitudeFlagged = new Set(); // Set of qIndices
let aptitudeVisited = new Set(); // Set of qIndices
let aptitudeReviewFilter = 'all'; // 'all' | 'correct' | 'incorrect' | 'unattempted'

function renderAptitudeScoreCell(score, passed, attempts) {
  if (score === null || score === undefined) {
    return `<span class="text-slate-500 font-mono text-[11px]">—</span>`;
  }
  const pct = Math.round((score / 300) * 100);
  const badgeClass = passed 
    ? "bg-violet-500/20 text-violet-300 border-violet-500/40" 
    : "bg-rose-500/15 text-rose-300 border-rose-500/30";
  return `
    <div class="inline-flex flex-col items-center">
      <span class="px-2 py-0.5 rounded border ${badgeClass} font-mono font-bold text-[10px]">
        ${score}/300 (${pct}%)
      </span>
      <span class="text-[9px] text-slate-500 mt-0.5 font-mono">Att: ${attempts || 1} • ${passed ? 'PASS' : 'RETRY'}</span>
    </div>
  `;
}

function initAptitudeTab() {
  loadAptitudeLocalState();
  updateAptitudeOverviewMetrics();
  switchAptitudeSubTab(currentAptitudeSubTab);
}

function loadAptitudeLocalState() {
  try {
    const exStored = localStorage.getItem('aptitude_completed_examples');
    if (exStored) {
      const parsed = JSON.parse(exStored);
      if (Array.isArray(parsed)) aptitudeCompletedExamples = new Set(parsed);
    }
  } catch (e) {}

  try {
    const tipsStored = localStorage.getItem('aptitude_viewed_tips');
    if (tipsStored) {
      const parsed = JSON.parse(tipsStored);
      if (Array.isArray(parsed)) aptitudeViewedTips = new Set(parsed);
    }
  } catch (e) {}
}

function updateAptitudeOverviewMetrics() {
  const tipsEl = document.getElementById('aptTipsMasteredCount');
  const exEl = document.getElementById('aptExamplesCompletedCount');
  const bestScoreEl = document.getElementById('aptExamBestScore');
  const bestPctEl = document.getElementById('aptExamBestPct');
  const statusEl = document.getElementById('aptExamPassStatus');
  const attemptsEl = document.getElementById('aptExamAttemptsLabel');

  if (tipsEl) tipsEl.innerText = `${aptitudeViewedTips.size} / 50`;
  if (exEl) exEl.innerText = `${aptitudeCompletedExamples.size} / 100`;

  const savedScore = localStorage.getItem('aptitude_exam_score');
  const savedPassed = localStorage.getItem('aptitude_exam_passed') === 'true';
  const savedAttempts = Number(localStorage.getItem('aptitude_exam_attempts') || '0');

  if (bestScoreEl) {
    if (savedScore !== null && savedScore !== undefined) {
      const pct = Math.round((Number(savedScore) / 300) * 100);
      bestScoreEl.innerText = `${savedScore} / 300`;
      if (bestPctEl) bestPctEl.innerText = `${pct}% Overall Benchmark`;
    } else {
      bestScoreEl.innerText = '—';
      if (bestPctEl) bestPctEl.innerText = '120-Min Benchmark';
    }
  }

  if (statusEl) {
    if (savedScore === null || savedScore === undefined) {
      statusEl.innerText = 'Not Attempted';
      statusEl.className = 'text-sm font-bold text-slate-500 mt-1';
    } else if (savedPassed) {
      statusEl.innerText = 'PASSED (≥80%)';
      statusEl.className = 'text-sm font-black text-emerald-600 mt-1';
    } else {
      statusEl.innerText = 'RETRY NEEDED';
      statusEl.className = 'text-sm font-black text-rose-600 mt-1';
    }
  }

  if (attemptsEl) attemptsEl.innerText = `Attempts: ${savedAttempts}`;
}

function switchAptitudeSubTab(subTabId) {
  currentAptitudeSubTab = subTabId;

  const btnTips = document.getElementById('aptSubTabBtnTips');
  const btnExamples = document.getElementById('aptSubTabBtnExamples');
  const btnExam = document.getElementById('aptSubTabBtnExam');

  const contentTips = document.getElementById('aptSubTabContentTips');
  const contentExamples = document.getElementById('aptSubTabContentExamples');
  const contentExam = document.getElementById('aptSubTabContentExam');

  if (contentTips) contentTips.classList.add('hidden');
  if (contentExamples) contentExamples.classList.add('hidden');
  if (contentExam) contentExam.classList.add('hidden');

  const inactiveBtnCls = "px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition flex items-center gap-1.5 whitespace-nowrap";
  const activeBtnCls = "px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-violet-600 text-white shadow-sm whitespace-nowrap";

  if (btnTips) btnTips.className = inactiveBtnCls;
  if (btnExamples) btnExamples.className = inactiveBtnCls;
  if (btnExam) btnExam.className = inactiveBtnCls;

  if (subTabId === 'tips') {
    if (contentTips) contentTips.classList.remove('hidden');
    if (btnTips) btnTips.className = activeBtnCls;
    renderAptitudeTips();
  } else if (subTabId === 'examples') {
    if (contentExamples) contentExamples.classList.remove('hidden');
    if (btnExamples) btnExamples.className = activeBtnCls;
    renderAptitudeSolvedExamples();
  } else if (subTabId === 'exam') {
    if (contentExam) contentExam.classList.remove('hidden');
    if (btnExam) btnExam.className = activeBtnCls;
    updateAptitudeExamLobbyUI();
  }
}

// ----------------------------------------------------
// 50 TIPS & SHORTCUTS ENGINE
// ----------------------------------------------------
function renderAptitudeTips() {
  const grid = document.getElementById('aptTipsGrid');
  if (!grid || typeof APTITUDE_TIPS_DATA === 'undefined') return;

  const search = (document.getElementById('aptTipsSearchInput')?.value || '').toLowerCase().trim();
  const cat = document.getElementById('aptTipsCategorySelect')?.value || 'all';

  const filtered = APTITUDE_TIPS_DATA.filter(t => {
    const matchCat = cat === 'all' || t.category === cat;
    const matchSearch = !search || 
      t.title.toLowerCase().includes(search) || 
      t.formula.toLowerCase().includes(search) || 
      t.rule.toLowerCase().includes(search) || 
      t.proTip.toLowerCase().includes(search) || 
      t.category.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full p-8 text-center text-slate-400 bg-slate-50 border border-slate-200 rounded-2xl">
        <i class="fa-solid fa-search mb-2 text-xl text-slate-300"></i>
        <p class="text-sm font-semibold text-slate-700">No aptitude tips match your search criteria.</p>
        <p class="text-xs text-slate-500 mt-1">Try resetting the category filter or searching a different formula term.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(t => {
    const isViewed = aptitudeViewedTips.has(t.id);
    return `
      <div class="bg-white border ${isViewed ? 'border-violet-300 shadow-sm' : 'border-slate-200'} rounded-2xl p-4 md:p-5 space-y-3 transition hover:border-violet-400 hover:shadow-md flex flex-col justify-between">
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-100 text-violet-800 font-bold">
              Tip #${t.id} • ${escapeHtml(t.category)}
            </span>
            <button onclick="toggleTipViewed(${t.id})" class="text-[11px] font-bold px-2 py-0.5 rounded transition ${isViewed ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}" title="Toggle read status">
              <i class="fa-solid ${isViewed ? 'fa-check-circle text-emerald-600' : 'fa-circle-check text-slate-400'} mr-1"></i>
              ${isViewed ? 'Mastered' : 'Mark Read'}
            </button>
          </div>

          <h3 class="text-sm md:text-base font-black text-slate-900 leading-snug">
            ${escapeHtml(t.title)}
          </h3>

          <!-- Formula Code Box -->
          <div class="bg-slate-900 text-violet-300 font-mono text-xs px-3 py-2 rounded-xl border border-slate-800 shadow-inner overflow-x-auto font-bold flex items-center justify-between gap-2">
            <span><i class="fa-solid fa-bolt text-amber-400 mr-1.5"></i>${escapeHtml(t.formula)}</span>
            <button onclick="copyToClipboard('${escapeHtml(t.formula).replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-white text-[10px]" title="Copy formula">
              <i class="fa-regular fa-copy"></i>
            </button>
          </div>

          <!-- Rule Explanation -->
          <p class="text-xs text-slate-700 leading-relaxed">
            <strong class="text-slate-900 font-bold">Concept:</strong> ${escapeHtml(t.rule)}
          </p>

          <!-- Step-by-Step Example -->
          <div class="bg-violet-50/70 border border-violet-200/80 rounded-xl p-3 text-xs text-slate-800 space-y-1">
            <p class="font-bold text-violet-900 flex items-center gap-1.5 text-[11px]">
              <i class="fa-solid fa-calculator text-violet-600"></i> Worked Demonstration:
            </p>
            <p class="text-slate-700 text-xs leading-relaxed font-mono">
              ${escapeHtml(t.example)}
            </p>
          </div>
        </div>

        <!-- Pro Tip Box -->
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-[11px] text-amber-900 flex items-start gap-2 mt-2">
          <i class="fa-solid fa-lightbulb text-amber-600 text-xs mt-0.5 shrink-0"></i>
          <div>
            <strong class="font-bold text-amber-950">Speed Hack:</strong> ${escapeHtml(t.proTip)}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterAptitudeTips() {
  renderAptitudeTips();
}

function toggleTipViewed(tipId) {
  if (aptitudeViewedTips.has(tipId)) {
    aptitudeViewedTips.delete(tipId);
  } else {
    aptitudeViewedTips.add(tipId);
  }
  localStorage.setItem('aptitude_viewed_tips', JSON.stringify(Array.from(aptitudeViewedTips)));
  updateAptitudeOverviewMetrics();
  renderAptitudeTips();
  syncAptitudeToFirestore();
}

function markAllAptitudeTipsViewed() {
  if (typeof APTITUDE_TIPS_DATA === 'undefined') return;
  APTITUDE_TIPS_DATA.forEach(t => aptitudeViewedTips.add(t.id));
  localStorage.setItem('aptitude_viewed_tips', JSON.stringify(Array.from(aptitudeViewedTips)));
  updateAptitudeOverviewMetrics();
  renderAptitudeTips();
  syncAptitudeToFirestore();
  showToast("Aptitude Tips", "All 50 formulas & speed tricks marked as mastered!");
}

// ----------------------------------------------------
// 100 SOLVED EXAMPLES ENGINE
// ----------------------------------------------------
function renderAptitudeSolvedExamples() {
  const container = document.getElementById('aptExamplesList');
  if (!container || typeof APTITUDE_SOLVED_EXAMPLES === 'undefined') return;

  const search = (document.getElementById('aptExamplesSearchInput')?.value || '').toLowerCase().trim();
  const cat = document.getElementById('aptExamplesCategorySelect')?.value || 'all';
  const status = document.getElementById('aptExamplesStatusFilter')?.value || 'all';

  const filtered = APTITUDE_SOLVED_EXAMPLES.filter(ex => {
    const matchCat = cat === 'all' || ex.category === cat;
    const isDone = aptitudeCompletedExamples.has(ex.id);
    const matchStatus = status === 'all' || (status === 'completed' && isDone) || (status === 'pending' && !isDone);
    const matchSearch = !search || 
      ex.question.toLowerCase().includes(search) || 
      ex.category.toLowerCase().includes(search) ||
      ex.tipReference.toLowerCase().includes(search);
    return matchCat && matchStatus && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center text-slate-400 bg-slate-50 border border-slate-200 rounded-2xl">
        <i class="fa-solid fa-magnifying-glass mb-2 text-xl text-slate-300"></i>
        <p class="text-sm font-semibold text-slate-700">No solved problems match current filters.</p>
        <p class="text-xs text-slate-500 mt-1">Try switching to 'All Domains' or 'All Status'.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(ex => {
    const isDone = aptitudeCompletedExamples.has(ex.id);
    return `
      <div class="bg-white border ${isDone ? 'border-emerald-300 shadow-sm' : 'border-slate-200'} rounded-2xl p-4 md:p-5 space-y-3 transition hover:border-emerald-400">
        <!-- Header -->
        <div class="flex items-center justify-between flex-wrap gap-2">
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
              Example #${ex.id} • ${escapeHtml(ex.category)}
            </span>
            <span class="text-[10px] text-slate-500 font-mono">
              ${escapeHtml(ex.tipReference)}
            </span>
          </div>
          <button onclick="toggleAptitudeExamplePracticed(${ex.id})" class="px-2.5 py-1 text-xs font-bold rounded-lg transition ${isDone ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
            <i class="fa-solid ${isDone ? 'fa-check' : 'fa-check-circle text-slate-400'} mr-1"></i>
            ${isDone ? 'Practiced' : 'Mark as Practiced'}
          </button>
        </div>

        <!-- Question Body -->
        <div class="text-sm font-bold text-slate-900 leading-relaxed">
          ${escapeHtml(ex.question)}
        </div>

        <!-- 4 Options Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          ${ex.options.map((opt, optIdx) => {
            const isCorrect = optIdx === ex.correctIndex;
            return `
              <div class="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 flex items-center space-x-2 text-slate-800 font-mono">
                <span class="w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] ${isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'}">
                  ${String.fromCharCode(65 + optIdx)}
                </span>
                <span class="${isCorrect ? 'font-bold text-emerald-800' : 'text-slate-800'}">${escapeHtml(opt)}</span>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Solution Pane Toggle -->
        <div class="pt-1">
          <button onclick="toggleAptitudeExampleSolution(${ex.id})" id="btnToggleSol_${ex.id}" class="text-xs font-bold text-violet-600 hover:text-violet-800 flex items-center gap-1.5 transition">
            <i class="fa-solid fa-chevron-right text-[10px]" id="iconToggleSol_${ex.id}"></i> Show Detailed Solution & Speed Shortcut
          </button>

          <div id="solPane_${ex.id}" class="hidden mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs">
            <!-- Standard Method -->
            <div class="space-y-1">
              <p class="font-bold text-slate-900 flex items-center gap-1.5 text-[11px]">
                <i class="fa-solid fa-book text-slate-600"></i> Standard Textbook Method:
              </p>
              <p class="text-slate-700 font-mono text-[11px] leading-relaxed bg-white p-2.5 rounded-lg border border-slate-200">
                ${escapeHtml(ex.standardSolution)}
              </p>
            </div>

            <!-- Shortcut Method -->
            <div class="space-y-1">
              <p class="font-bold text-emerald-800 flex items-center gap-1.5 text-[11px]">
                <i class="fa-solid fa-bolt text-amber-500"></i> Speed / Shortcut Trick Method:
              </p>
              <p class="text-emerald-900 font-mono text-[11px] leading-relaxed bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-200 font-semibold">
                ${escapeHtml(ex.shortcutSolution)}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterAptitudeExamples() {
  renderAptitudeSolvedExamples();
}

function toggleAptitudeExamplePracticed(exId) {
  if (aptitudeCompletedExamples.has(exId)) {
    aptitudeCompletedExamples.delete(exId);
  } else {
    aptitudeCompletedExamples.add(exId);
  }
  localStorage.setItem('aptitude_completed_examples', JSON.stringify(Array.from(aptitudeCompletedExamples)));
  updateAptitudeOverviewMetrics();
  renderAptitudeSolvedExamples();
  syncAptitudeToFirestore();
}

function toggleAptitudeExampleSolution(exId) {
  const pane = document.getElementById(`solPane_${exId}`);
  const icon = document.getElementById(`iconToggleSol_${exId}`);
  const btn = document.getElementById(`btnToggleSol_${exId}`);
  if (!pane) return;

  if (pane.classList.contains('hidden')) {
    pane.classList.remove('hidden');
    if (icon) icon.className = "fa-solid fa-chevron-down text-[10px]";
    if (btn) btn.innerHTML = `<i class="fa-solid fa-chevron-down text-[10px]" id="iconToggleSol_${exId}"></i> Hide Solution`;
  } else {
    pane.classList.add('hidden');
    if (icon) icon.className = "fa-solid fa-chevron-right text-[10px]";
    if (btn) btn.innerHTML = `<i class="fa-solid fa-chevron-right text-[10px]" id="iconToggleSol_${exId}"></i> Show Detailed Solution & Speed Shortcut`;
  }
}

// ----------------------------------------------------
// 300-MCQ 120-MIN MOCK EXAM ENGINE
// ----------------------------------------------------
function updateAptitudeExamLobbyUI() {
  const lobby = document.getElementById('aptExamLobby');
  const runner = document.getElementById('aptExamRunner');
  const results = document.getElementById('aptExamResults');

  if (aptitudeExamActive) {
    if (lobby) lobby.classList.add('hidden');
    if (results) results.classList.add('hidden');
    if (runner) runner.classList.remove('hidden');
    return;
  }

  if (runner) runner.classList.add('hidden');

  const savedScore = localStorage.getItem('aptitude_exam_score');
  const prevBanner = document.getElementById('aptExamPreviousBanner');
  const prevText = document.getElementById('aptExamPrevText');
  const prevBadge = document.getElementById('aptExamPrevBadge');

  if (savedScore !== null && savedScore !== undefined && prevBanner && prevText && prevBadge) {
    const pct = Math.round((Number(savedScore) / 300) * 100);
    const passed = localStorage.getItem('aptitude_exam_passed') === 'true';
    const att = localStorage.getItem('aptitude_exam_attempts') || '1';
    prevText.innerText = `Score: ${savedScore} / 300 (${pct}%) • Attempts: ${att}`;
    prevBadge.innerHTML = passed
      ? `<span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs"><i class="fa-solid fa-check mr-1"></i> PASSED (≥80%)</span>`
      : `<span class="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-300 font-bold text-xs"><i class="fa-solid fa-rotate-left mr-1"></i> RETRY NEEDED</span>`;
    prevBanner.classList.remove('hidden');
  }

  if (lobby) lobby.classList.remove('hidden');
  if (results) results.classList.add('hidden');
}

function startAptitudeExam() {
  if (typeof APTITUDE_300_MCQS === 'undefined' || APTITUDE_300_MCQS.length === 0) {
    alert("Aptitude 300 MCQs data bank is loading. Please try again in a moment.");
    return;
  }

  if (aptitudeExamActive) {
    if (!confirm("An exam session is already in progress. Do you want to restart the 120-minute timer?")) {
      return;
    }
  }

  aptitudeExamActive = true;
  aptitudeExamSecondsLeft = 120 * 60; // 7,200 seconds
  aptitudeCurrentQIndex = 0;
  aptitudeUserAnswers = {};
  aptitudeFlagged.clear();
  aptitudeVisited.clear();
  aptitudeVisited.add(0);

  const lobby = document.getElementById('aptExamLobby');
  const results = document.getElementById('aptExamResults');
  const runner = document.getElementById('aptExamRunner');

  if (lobby) lobby.classList.add('hidden');
  if (results) results.classList.add('hidden');
  if (runner) runner.classList.remove('hidden');

  if (aptitudeExamTimerInterval) clearInterval(aptitudeExamTimerInterval);
  aptitudeExamTimerInterval = setInterval(aptitudeTimerTick, 1000);

  renderAptitudeExamRunner();
  renderAptitudePalette();
  updateAptitudeExamHeader();

  showToast("Exam Commenced", "120-minute timer started. 300 questions loaded. Best of luck!");
}

function aptitudeTimerTick() {
  if (!aptitudeExamActive) return;

  aptitudeExamSecondsLeft--;
  if (aptitudeExamSecondsLeft <= 0) {
    aptitudeExamSecondsLeft = 0;
    updateAptitudeTimerDisplay();
    clearInterval(aptitudeExamTimerInterval);
    alert("⏱️ 120 Minutes Expired! Your examination is being automatically submitted now.");
    submitAptitudeExam(true);
    return;
  }

  updateAptitudeTimerDisplay();
}

function updateAptitudeTimerDisplay() {
  const el = document.getElementById('aptExamTimerDisplay');
  if (!el) return;

  const hours = Math.floor(aptitudeExamSecondsLeft / 3600);
  const minutes = Math.floor((aptitudeExamSecondsLeft % 3600) / 60);
  const seconds = aptitudeExamSecondsLeft % 60;

  const hStr = String(hours).padStart(2, '0');
  const mStr = String(minutes).padStart(2, '0');
  const sStr = String(seconds).padStart(2, '0');

  el.innerText = `${hStr}:${mStr}:${sStr}`;

  if (aptitudeExamSecondsLeft <= 600) {
    // Under 10 minutes: flashing red
    el.className = "text-lg md:text-xl font-black font-mono text-rose-400 tracking-wider animate-pulse";
  } else if (aptitudeExamSecondsLeft <= 1800) {
    // Under 30 minutes: amber
    el.className = "text-lg md:text-xl font-black font-mono text-amber-400 tracking-wider";
  } else {
    el.className = "text-lg md:text-xl font-black font-mono text-emerald-400 tracking-wider";
  }
}

function updateAptitudeExamHeader() {
  const ansEl = document.getElementById('aptExamAnsweredCount');
  const flagEl = document.getElementById('aptExamFlaggedCount');
  const currQEl = document.getElementById('aptCurrentQuestionNum');

  const countAnswered = Object.keys(aptitudeUserAnswers).length;
  if (ansEl) ansEl.innerText = String(countAnswered);
  if (flagEl) flagEl.innerText = String(aptitudeFlagged.size);
  if (currQEl) currQEl.innerText = String(aptitudeCurrentQIndex + 1);

  const flagBtn = document.getElementById('aptExamFlagBtn');
  if (flagBtn) {
    const isFlagged = aptitudeFlagged.has(aptitudeCurrentQIndex);
    if (isFlagged) {
      flagBtn.className = "px-3 py-1.5 rounded-xl bg-violet-600 text-white border border-violet-500 text-xs font-bold transition flex items-center gap-1.5 shadow-sm";
      flagBtn.innerHTML = '<i class="fa-solid fa-flag"></i> Flagged';
    } else {
      flagBtn.className = "px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-bold transition flex items-center gap-1.5";
      flagBtn.innerHTML = '<i class="fa-regular fa-flag"></i> Flag';
    }
  }
}

function renderAptitudeExamRunner() {
  if (typeof APTITUDE_300_MCQS === 'undefined') return;
  const qData = APTITUDE_300_MCQS[aptitudeCurrentQIndex];
  if (!qData) return;

  const topicBadge = document.getElementById('aptQuestionTopicBadge');
  const qText = document.getElementById('aptQuestionText');
  const optsContainer = document.getElementById('aptOptionsContainer');
  const prevBtn = document.getElementById('aptPrevBtn');
  const nextBtn = document.getElementById('aptNextBtn');

  if (topicBadge) topicBadge.innerText = qData.topic || "Quantitative Aptitude";
  if (qText) qText.innerText = qData.q;

  if (prevBtn) {
    prevBtn.disabled = aptitudeCurrentQIndex === 0;
    prevBtn.className = aptitudeCurrentQIndex === 0 
      ? "px-4 py-2 bg-slate-100 text-slate-400 font-bold text-xs rounded-xl cursor-not-allowed" 
      : "px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition flex items-center gap-1.5";
  }

  if (nextBtn) {
    const isLast = aptitudeCurrentQIndex === APTITUDE_300_MCQS.length - 1;
    nextBtn.innerHTML = isLast 
      ? `Review Palette <i class="fa-solid fa-list-check ml-1"></i>` 
      : `Save & Next <i class="fa-solid fa-arrow-right ml-1"></i>`;
  }

  const selectedOpt = aptitudeUserAnswers[aptitudeCurrentQIndex];

  if (optsContainer) {
    optsContainer.innerHTML = qData.opts.map((opt, idx) => {
      const isSelected = selectedOpt === idx;
      return `
        <button onclick="selectAptitudeOption(${aptitudeCurrentQIndex}, ${idx})" class="w-full p-3 rounded-xl border text-left flex items-center space-x-3 transition font-mono text-xs ${isSelected ? 'border-violet-600 bg-violet-50 text-violet-950 font-bold shadow-sm' : 'border-slate-200 bg-slate-50/70 hover:bg-slate-100/80 text-slate-800'}">
          <span class="w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${isSelected ? 'bg-violet-600 text-white' : 'bg-slate-200 text-slate-700'}">
            ${String.fromCharCode(65 + idx)}
          </span>
          <span class="flex-1 text-xs md:text-sm leading-relaxed">${escapeHtml(opt)}</span>
          ${isSelected ? '<i class="fa-solid fa-circle-check text-violet-600 text-sm shrink-0"></i>' : ''}
        </button>
      `;
    }).join('');
  }

  aptitudeVisited.add(aptitudeCurrentQIndex);
  updateAptitudeExamHeader();
  renderAptitudePalette();
}

function selectAptitudeOption(qIndex, optIndex) {
  aptitudeUserAnswers[qIndex] = optIndex;
  renderAptitudeExamRunner();
}

function clearCurrentAptitudeResponse() {
  if (aptitudeUserAnswers[aptitudeCurrentQIndex] !== undefined) {
    delete aptitudeUserAnswers[aptitudeCurrentQIndex];
    renderAptitudeExamRunner();
  }
}

function toggleCurrentAptitudeFlag() {
  if (aptitudeFlagged.has(aptitudeCurrentQIndex)) {
    aptitudeFlagged.delete(aptitudeCurrentQIndex);
  } else {
    aptitudeFlagged.add(aptitudeCurrentQIndex);
  }
  updateAptitudeExamHeader();
  renderAptitudePalette();
}

function prevAptitudeQuestion() {
  if (aptitudeCurrentQIndex > 0) {
    aptitudeCurrentQIndex--;
    renderAptitudeExamRunner();
  }
}

function nextAptitudeQuestion() {
  if (aptitudeCurrentQIndex < APTITUDE_300_MCQS.length - 1) {
    aptitudeCurrentQIndex++;
    renderAptitudeExamRunner();
  } else {
    showToast("Palette Reached", "You have navigated to the final question. Use the palette to review or Submit Exam when finished.");
  }
}

function jumpToAptitudeQuestion(index) {
  if (index >= 0 && index < APTITUDE_300_MCQS.length) {
    aptitudeCurrentQIndex = index;
    renderAptitudeExamRunner();
  }
}

function renderAptitudePalette() {
  const palette = document.getElementById('aptQuestionPalette');
  if (!palette || typeof APTITUDE_300_MCQS === 'undefined') return;

  const total = APTITUDE_300_MCQS.length;
  let html = '';

  for (let i = 0; i < total; i++) {
    const isCurrent = i === aptitudeCurrentQIndex;
    const isAnswered = aptitudeUserAnswers[i] !== undefined;
    const isFlagged = aptitudeFlagged.has(i);
    const isVisited = aptitudeVisited.has(i);

    let btnClass = "w-full aspect-square rounded-lg text-[10px] font-bold font-mono transition flex items-center justify-center border relative ";

    if (isAnswered && isFlagged) {
      btnClass += "bg-violet-600 text-white border-violet-700 shadow-sm";
    } else if (isAnswered) {
      btnClass += "bg-emerald-600 text-white border-emerald-700 shadow-sm";
    } else if (isFlagged) {
      btnClass += "bg-purple-100 text-purple-900 border-purple-400 font-black";
    } else if (isVisited) {
      btnClass += "bg-slate-100 text-slate-800 border-slate-300";
    } else {
      btnClass += "bg-white text-slate-600 border-slate-200 hover:border-slate-400";
    }

    if (isCurrent) {
      btnClass += " ring-2 ring-indigo-500 ring-offset-1 font-black";
    }

    html += `
      <button onclick="jumpToAptitudeQuestion(${i})" class="${btnClass}" title="Question #${i + 1}">
        ${i + 1}
        ${isAnswered && isFlagged ? '<span class="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-300"></span>' : ''}
      </button>
    `;
  }

  palette.innerHTML = html;
}

function confirmSubmitAptitudeExam() {
  const answeredCount = Object.keys(aptitudeUserAnswers).length;
  const unansweredCount = APTITUDE_300_MCQS.length - answeredCount;
  const flaggedCount = aptitudeFlagged.size;

  const msg = `Are you sure you want to finish and submit your 120-Minute Aptitude Assessment?\\n\\n` +
    `• Answered Questions: ${answeredCount} / 300\\n` +
    `• Unattempted Questions: ${unansweredCount} / 300\\n` +
    `• Flagged for Review: ${flaggedCount}\\n\\n` +
    `Your score will be permanently calculated and synced with Cloud Firestore. Submit now?`;

  if (confirm(msg)) {
    submitAptitudeExam(false);
  }
}

function submitAptitudeExam(isAutoSubmit) {
  if (!aptitudeExamActive) return;
  aptitudeExamActive = false;

  if (aptitudeExamTimerInterval) {
    clearInterval(aptitudeExamTimerInterval);
    aptitudeExamTimerInterval = null;
  }

  // Calculate score
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  APTITUDE_300_MCQS.forEach((q, idx) => {
    const userChoice = aptitudeUserAnswers[idx];
    if (userChoice === undefined) {
      unattemptedCount++;
    } else if (userChoice === q.ans) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const totalQuestions = APTITUDE_300_MCQS.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = percentage >= 80; // Passing benchmark: 80% (240 / 300)

  const prevAttempts = Number(localStorage.getItem('aptitude_exam_attempts') || '0');
  const newAttempts = prevAttempts + 1;

  const timeUsedSeconds = 7200 - aptitudeExamSecondsLeft;
  const timeUsedMins = Math.floor(timeUsedSeconds / 60);

  // Store in LocalStorage
  localStorage.setItem('aptitude_exam_score', String(correctCount));
  localStorage.setItem('aptitude_exam_percentage', String(percentage));
  localStorage.setItem('aptitude_exam_passed', String(passed));
  localStorage.setItem('aptitude_exam_attempts', String(newAttempts));
  localStorage.setItem('aptitude_exam_last_taken', new Date().toISOString());

  updateAptitudeOverviewMetrics();

  // Render Results UI
  renderAptitudeResults(correctCount, incorrectCount, unattemptedCount, percentage, passed, timeUsedMins);

  // Synchronize to Cloud Firestore
  syncAptitudeToFirestore();

  if (passed && typeof confetti === 'function') {
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
  }

  showToast(
    passed ? "Benchmark Passed!" : "Exam Submitted",
    `Score: ${correctCount}/300 (${percentage}%). Telemetry synced to Firebase!`
  );
}

function renderAptitudeResults(correct, incorrect, unattempted, percentage, passed, timeMins) {
  const runner = document.getElementById('aptExamRunner');
  const results = document.getElementById('aptExamResults');
  if (runner) runner.classList.add('hidden');
  if (results) results.classList.remove('hidden');

  const badgeBox = document.getElementById('aptResultBadgeContainer');
  const statusPill = document.getElementById('aptResultStatusPill');
  const heading = document.getElementById('aptResultHeading');
  const subtext = document.getElementById('aptResultSubtext');

  const scoreText = document.getElementById('aptResultScoreText');
  const pctText = document.getElementById('aptResultPctText');
  const cwText = document.getElementById('aptResultCorrectWrongText');
  const timeText = document.getElementById('aptResultTimeText');

  if (scoreText) scoreText.innerText = `${correct}`;
  if (pctText) pctText.innerText = `${percentage}%`;
  if (cwText) cwText.innerText = `${correct} ✔ / ${incorrect} ✘`;
  if (timeText) timeText.innerText = `${timeMins} mins`;

  if (passed) {
    if (badgeBox) {
      badgeBox.className = "w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-3xl font-black";
      badgeBox.innerHTML = '<i class="fa-solid fa-trophy"></i>';
    }
    if (statusPill) {
      statusPill.className = "text-xs font-mono uppercase px-3 py-1 rounded-full font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40";
      statusPill.innerText = "OFFICIAL BENCHMARK PASSED (≥80%)";
    }
    if (heading) heading.innerText = "Outstanding Aptitude Mastery!";
    if (subtext) subtext.innerText = `Congratulations! You scored ${correct}/300 (${percentage}%), surpassing the 80% passing benchmark for Tier-1 technology and professional competitive examinations.`;
  } else {
    if (badgeBox) {
      badgeBox.className = "w-16 h-16 mx-auto rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center text-3xl font-black";
      badgeBox.innerHTML = '<i class="fa-solid fa-graduation-cap"></i>';
    }
    if (statusPill) {
      statusPill.className = "text-xs font-mono uppercase px-3 py-1 rounded-full font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40";
      statusPill.innerText = "PASSING BENCHMARK: 240/300 (80%)";
    }
    if (heading) heading.innerText = "Assessment Complete — Keep Practicing!";
    if (subtext) subtext.innerText = `You scored ${correct}/300 (${percentage}%). Review your mistakes using the step-by-step explanations below, master the 50 speed shortcuts, and retake the assessment.`;
  }
}

function toggleAptitudeSolutionsReview() {
  const container = document.getElementById('aptSolutionsReviewContainer');
  const btnText = document.getElementById('aptReviewToggleBtnText');
  if (!container) return;

  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    if (btnText) btnText.innerText = "Hide Review Explanations";
    filterAptitudeReview(aptitudeReviewFilter || 'all');
    container.scrollIntoView({ behavior: 'smooth' });
  } else {
    container.classList.add('hidden');
    if (btnText) btnText.innerText = "Review All 300 Explanations";
  }
}

function filterAptitudeReview(filterType) {
  aptitudeReviewFilter = filterType;

  ['all', 'correct', 'incorrect', 'unattempted'].forEach(f => {
    const btn = document.getElementById(`aptRevFilter${capitalize(f)}`);
    if (btn) {
      if (f === filterType) {
        btn.className = "px-2.5 py-1 rounded-lg bg-slate-800 text-white font-bold text-[11px] shadow-sm";
      } else {
        btn.className = "px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 font-semibold text-[11px]";
      }
    }
  });

  const list = document.getElementById('aptReviewQuestionsList');
  if (!list || typeof APTITUDE_300_MCQS === 'undefined') return;

  const filtered = APTITUDE_300_MCQS.map((q, idx) => {
    const userAns = aptitudeUserAnswers[idx];
    const isCorrect = userAns === q.ans;
    const isUnattempted = userAns === undefined;
    return { q, idx, userAns, isCorrect, isUnattempted };
  }).filter(item => {
    if (filterType === 'correct') return item.isCorrect;
    if (filterType === 'incorrect') return !item.isCorrect && !item.isUnattempted;
    if (filterType === 'unattempted') return item.isUnattempted;
    return true; // all
  });

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="p-6 text-center text-slate-400 bg-white border border-slate-200 rounded-xl">
        <p class="text-xs font-semibold text-slate-700">No questions found under '${filterType}' filter.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = filtered.map(item => {
    const { q, idx, userAns, isCorrect, isUnattempted } = item;
    let statusBadge = '';
    if (isUnattempted) {
      statusBadge = '<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold text-[10px] font-mono">Unattempted</span>';
    } else if (isCorrect) {
      statusBadge = '<span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px] font-mono">✔ Correct</span>';
    } else {
      statusBadge = '<span class="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-[10px] font-mono">✘ Incorrect</span>';
    }

    return `
      <div class="bg-white border border-slate-200 rounded-xl p-4 space-y-2.5 text-xs text-slate-800">
        <div class="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
          <span class="font-mono font-bold text-slate-700">Question #${idx + 1} • <span class="text-violet-600">${escapeHtml(q.topic)}</span></span>
          ${statusBadge}
        </div>

        <p class="font-bold text-slate-900 leading-relaxed">${escapeHtml(q.q)}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono text-[11px]">
          ${q.opts.map((opt, oIdx) => {
            let optClass = "p-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 flex items-center gap-2";
            if (oIdx === q.ans) {
              optClass = "p-2 rounded-lg border border-emerald-400 bg-emerald-50 text-emerald-950 font-bold flex items-center gap-2";
            } else if (userAns === oIdx && !isCorrect) {
              optClass = "p-2 rounded-lg border border-rose-400 bg-rose-50 text-rose-950 font-bold flex items-center gap-2";
            }
            return `
              <div class="${optClass}">
                <span class="font-bold w-4">${String.fromCharCode(65 + oIdx)}.</span>
                <span class="truncate">${escapeHtml(opt)}</span>
                ${oIdx === q.ans ? '<span class="ml-auto text-[10px] text-emerald-700 font-sans font-bold">✔ Correct Key</span>' : ''}
                ${userAns === oIdx && !isCorrect ? '<span class="ml-auto text-[10px] text-rose-700 font-sans font-bold">✘ Your Answer</span>' : ''}
              </div>
            `;
          }).join('')}
        </div>

        <div class="bg-violet-50/70 border border-violet-200 p-2.5 rounded-lg text-slate-700 space-y-1 mt-1">
          <p class="font-bold text-violet-900 text-[10px] uppercase font-mono"><i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i>Detailed Explanation:</p>
          <p class="text-[11px] leading-relaxed font-mono">${escapeHtml(q.exp)}</p>
        </div>
      </div>
    `;
  }).join('');
}

// ----------------------------------------------------
// FIRESTORE SYNCHRONIZATION FOR APTITUDE
// ----------------------------------------------------
async function syncAptitudeToFirestore() {
  if (!window.db || !currentUser || !currentUser.uid) {
    console.log("Local aptitude progress saved in local storage.");
    return;
  }
  try {
    const score = Number(localStorage.getItem('aptitude_exam_score') || '0');
    const pct = Number(localStorage.getItem('aptitude_exam_percentage') || '0');
    const passed = localStorage.getItem('aptitude_exam_passed') === 'true';
    const attempts = Number(localStorage.getItem('aptitude_exam_attempts') || '0');
    const exList = Array.from(aptitudeCompletedExamples);
    const tipsList = Array.from(aptitudeViewedTips);

    const updatePayload = {
      aptitude_score: score,
      aptitude_percentage: pct,
      aptitude_passed: passed,
      aptitude_attempts: attempts,
      aptitude_completed_examples: exList,
      aptitude_examples_count: exList.length,
      aptitude_viewed_tips: tipsList,
      aptitude_tips_count: tipsList.length,
      last_updated: firebase.firestore.FieldValue.serverTimestamp()
    };

    await window.db.collection('learners').doc(currentUser.uid).set(updatePayload, { merge: true });
    console.log("Aptitude telemetry successfully synchronized to Cloud Firestore!");

    const syncLabel = document.getElementById('aptResultFirestoreSyncLabel');
    if (syncLabel) syncLabel.innerText = "Telemetry synced live to Cloud Firestore & Admin Hub";
  } catch (err) {
    console.warn("Firestore aptitude sync notice:", err);
  }
}

// ----------------------------------------------------
// CSV EXPORT FOR APTITUDE MODULE
// ----------------------------------------------------
function downloadAptitudeReport() {
  if (adminLearnersData.length === 0) {
    alert("No learner records available to export. Syncing live data now...");
    loadAdminDashboardData();
    return;
  }

  const dateStr = new Date().toISOString().split('T')[0];
  const headers = [
    "Learner ID",
    "Scholar Name",
    "Google Email",
    "LinkedIn Profile URL",
    "GitHub Profile URL",
    "Aptitude Score (out of 300)",
    "Aptitude Percentage (%)",
    "Aptitude Status",
    "Aptitude Exam Attempts",
    "Solved Examples Done (out of 100)",
    "Tips Mastered (out of 50)",
    "Last Active Timestamp"
  ];

  const rows = adminLearnersData.map(lrn => {
    const s = lrn.aptitude_score;
    const p = Boolean(lrn.aptitude_passed);
    const att = lrn.aptitude_attempts || 0;
    const pct = s !== null && s !== undefined ? Math.round((s / 300) * 100) + "%" : "N/A";
    const status = s !== null && s !== undefined ? (p ? "PASSED" : "RETRY") : "NOT_ATTEMPTED";

    return [
      lrn.uid,
      lrn.name,
      lrn.email,
      lrn.linkedinUrl || "N/A",
      lrn.githubUrl || "N/A",
      s !== null && s !== undefined ? s : "N/A",
      pct,
      status,
      att,
      lrn.aptitude_examples_count || 0,
      lrn.aptitude_tips_count || 0,
      lrn.last_active || "N/A"
    ];
  });

  const csvContent = [
    `"Digital Empowerment Bootcamp - Aptitude Mastery & 300-Q Assessment Report"`,
    `"Generated: ${new Date().toLocaleString()} • Passing Threshold: ≥80% (240/300)"`,
    "",
    headers.map(h => `"${h}"`).join(","),
    ...rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(","))
  ].join("\\r\\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Kapil_Bootcamp_Aptitude_300Q_Report_${dateStr}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
"""

    code += aptitude_controller_code

    with open("js/app.js", "w", encoding="utf-8") as f:
        f.write(code)

    print("js/app.js updated successfully!")

if __name__ == "__main__":
    update()
