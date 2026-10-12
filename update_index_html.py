"""
Script to update index.html with Aptitude module UI, navigation, dossier inspector, and table headers.
"""

def update():
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Add Sidebar button
    sidebar_target = """          <button onclick="sidebarNavigate('level0')" class="sidebar-nav-item w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-yellow-300 hover:bg-[#172033] transition group" title="Level 0 Computational Foundation">
            <i class="fa-solid fa-microchip text-yellow-400 text-sm group-hover:scale-110 transition shrink-0"></i>
            <span class="sidebar-label truncate">Level 0 Lab (25 Ex)</span>
          </button>"""
    
    sidebar_replacement = sidebar_target + """\n
          <button onclick="sidebarNavigate('aptitude')" class="sidebar-nav-item w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-bold text-violet-300 hover:text-violet-200 hover:bg-[#172033] transition group" title="Aptitude Mastery (50 Tips • 100 Examples • 300 MCQs)">
            <i class="fa-solid fa-brain text-violet-400 text-sm group-hover:scale-110 transition shrink-0"></i>
            <span class="sidebar-label truncate">Aptitude (50 Tips & 300Q)</span>
            <span class="sidebar-badge ml-auto text-[9px] px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">New</span>
          </button>"""
    
    assert sidebar_target in html, "Sidebar target not found"
    html = html.replace(sidebar_target, sidebar_replacement, 1)

    # 2. Add Mobile Bottom Quick Nav button
    mob_target = """<button onclick="switchTab('mocktests')" class="px-2.5 py-1 rounded bg-slate-100 text-teal-700 font-bold whitespace-nowrap"><i class="fa-solid fa-graduation-cap mr-1"></i>5 Mocks</button>"""
    mob_replacement = mob_target + """\n    <button onclick="switchTab('aptitude')" class="px-2.5 py-1 rounded bg-violet-50 text-violet-700 border border-violet-200 font-bold whitespace-nowrap"><i class="fa-solid fa-brain mr-1"></i>Aptitude (300Q)</button>"""
    assert mob_target in html, "Mobile nav target not found"
    html = html.replace(mob_target, mob_replacement, 1)

    # 3. Add Desktop Tab Bar button
    desktop_tab_target = """        <button onclick="switchTab('mocktests')" id="tabBtnMocktests" class="px-3 md:px-4 py-2.5 border-b-2 border-transparent text-slate-600 hover:text-teal-600 flex items-center gap-1.5 whitespace-nowrap font-medium">
          <i class="fa-solid fa-graduation-cap text-teal-600"></i> 5 Mocks (25 Qs)
        </button>"""
    desktop_tab_replacement = desktop_tab_target + """\n        <button onclick="switchTab('aptitude')" id="tabBtnAptitude" class="px-3 md:px-4 py-2.5 border-b-2 border-transparent text-slate-600 hover:text-violet-600 flex items-center gap-1.5 whitespace-nowrap font-medium">
          <i class="fa-solid fa-brain text-violet-500"></i> Aptitude Mastery (300Q)
        </button>"""
    assert desktop_tab_target in html, "Desktop tab target not found"
    html = html.replace(desktop_tab_target, desktop_tab_replacement, 1)

    # 4. Add Aptitude card in Scholar Dossier modal
    dossier_target = """      <!-- 5 Mock Assessments Breakdown -->"""
    dossier_addition = """      <!-- Aptitude Mastery Breakdown -->
      <div class="space-y-2">
        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <i class="fa-solid fa-brain text-violet-400"></i> Aptitude Mastery (300Q Exam • 100 Solved • 50 Tips)
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center font-mono">
          <div class="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl">
            <p class="text-slate-400 text-[10px]">300Q Exam Score</p>
            <p id="dossierAptitudeScore" class="font-black text-violet-300 mt-1">—</p>
            <p id="dossierAptitudeStatus" class="text-[9px] text-slate-500 font-mono mt-0.5">Not Attempted</p>
          </div>
          <div class="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl">
            <p class="text-slate-400 text-[10px]">Exam Attempts</p>
            <p id="dossierAptitudeAttempts" class="font-bold text-white mt-1">0</p>
          </div>
          <div class="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl">
            <p class="text-slate-400 text-[10px]">Solved Examples</p>
            <p id="dossierAptitudeExamples" class="font-bold text-emerald-400 mt-1">0/100</p>
          </div>
          <div class="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl">
            <p class="text-slate-400 text-[10px]">Tips Mastered</p>
            <p id="dossierAptitudeTips" class="font-bold text-amber-400 mt-1">0/50</p>
          </div>
        </div>
      </div>\n\n""" + dossier_target
    assert dossier_target in html, "Dossier target not found"
    html = html.replace(dossier_target, dossier_addition, 1)

    # 5. Add CSV Export button in Admin Dashboard
    csv_target = """        <!-- Download 5 Mocks CSV -->
        <button onclick="downloadMockAssessmentsReport()" class="p-3 bg-gradient-to-r from-teal-950/60 to-slate-900 hover:from-teal-900/70 border border-teal-500/60 rounded-xl transition text-left group shadow-lg">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-extrabold text-teal-300 group-hover:text-teal-200 transition">5 Mocks Report</span>
            <i class="fa-solid fa-graduation-cap text-xs text-teal-400 group-hover:scale-110 transition"></i>
          </div>
          <p class="text-[11px] text-teal-100 font-semibold">5 Mock Series (125 Qs)</p>
          <p class="text-[10px] text-teal-400/80 mt-1 font-mono">All 5 Mock Scores & % • CSV</p>
        </button>"""

    csv_addition = csv_target + """\n
        <!-- Download Aptitude Report CSV -->
        <button onclick="downloadAptitudeReport()" class="p-3 bg-gradient-to-r from-violet-950/60 to-slate-900 hover:from-violet-900/70 border border-violet-500/60 rounded-xl transition text-left group shadow-lg">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-extrabold text-violet-300 group-hover:text-violet-200 transition">Aptitude Report</span>
            <i class="fa-solid fa-brain text-xs text-violet-400 group-hover:scale-110 transition"></i>
          </div>
          <p class="text-[11px] text-violet-100 font-semibold">300-Q Exam & 100 Solved</p>
          <p class="text-[10px] text-violet-400/80 mt-1 font-mono">Scores, Pass % & Practice • CSV</p>
        </button>"""
    assert csv_target in html, "CSV target not found"
    html = html.replace(csv_target, csv_addition, 1)

    # Adjust grid columns for CSV download cards to fit 6 cards nicely
    grid_target = """<div class="grid grid-cols-2 md:grid-cols-5 gap-3">"""
    grid_replacement = """<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">"""
    if grid_target in html:
        html = html.replace(grid_target, grid_replacement, 1)

    # 6. Admin Table Header and Colspan
    th_target = """              <th class="p-3 text-center text-teal-300">Mock Series (5)</th>"""
    th_replacement = th_target + """\n              <th class="p-3 text-center text-violet-300">Aptitude (300Q)</th>"""
    assert th_target in html, "TH target not found"
    html = html.replace(th_target, th_replacement, 1)

    tbody_target = """<td colspan="12" class="p-6 text-center text-slate-500">"""
    tbody_replacement = """<td colspan="13" class="p-6 text-center text-slate-500">"""
    if tbody_target in html:
        html = html.replace(tbody_target, tbody_replacement, 1)

    # 7. Add #tabContentAptitude right after #tabContentCredentials
    # Let's find the closing div of tabContentCredentials
    cred_target = """            <button id="btnCertPdf" onclick="downloadCertificate('pdf')" class="px-5 py-2.5 bg-slate-100 text-slate-400 font-black text-xs rounded-xl border border-slate-200 flex items-center gap-2 cursor-not-allowed transition">
              <i class="fa-solid fa-file-pdf"></i> Download Official Certificate (PDF)
            </button>
          </div>
        </div>

      </div>"""

    aptitude_tab_html = """

      <!-- ======================================================== -->
      <!-- TAB: APTITUDE MASTERY MODULE                             -->
      <!-- 50 Tips & Tricks • 100 Solved Examples • 300-Q 120-Min Mock -->
      <!-- ======================================================== -->
      <div id="tabContentAptitude" class="hidden bg-white border border-slate-200 rounded-b-2xl p-4 md:p-6 space-y-6 shadow-sm">

        <!-- Module Header Banner -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800 border border-violet-200 font-bold">Aptitude & Placement Mastery</span>
              <span class="text-xs text-slate-500 font-mono">Quantitative & Logical Reasoning</span>
            </div>
            <h2 class="text-base md:text-xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
              <i class="fa-solid fa-brain text-violet-600"></i>
              <span class="rainbow-text font-black">Aptitude Speed Engine & Comprehensive Assessment</span>
            </h2>
            <p class="text-xs text-slate-600 mt-0.5">50 Vedic & Arithmetic Shortcuts • 100 Step-by-Step Solved Models • 300 Non-Repeated MCQs (120-Minute Timer Exam). Real-time Firebase & Admin sync.</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-right">
              <p class="text-[10px] text-slate-500 uppercase font-mono">Exam Benchmark</p>
              <p class="text-xs font-black text-emerald-600 font-mono">≥ 80% (240 / 300)</p>
            </div>
          </div>
        </div>

        <!-- 4 Metric Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
          <div class="p-3 bg-violet-50/60 border border-violet-200 rounded-xl text-left">
            <p class="text-[10px] text-violet-700 uppercase font-bold">50 Tips & Tricks</p>
            <p id="aptTipsMasteredCount" class="text-lg font-black text-violet-900 mt-0.5">0 / 50</p>
            <p class="text-[9px] text-slate-500 font-sans">Formulae & Shortcuts</p>
          </div>
          <div class="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-left">
            <p class="text-[10px] text-emerald-700 uppercase font-bold">100 Solved Models</p>
            <p id="aptExamplesCompletedCount" class="text-lg font-black text-emerald-900 mt-0.5">0 / 100</p>
            <p class="text-[9px] text-slate-500 font-sans">Standard + Shortcut</p>
          </div>
          <div class="p-3 bg-indigo-50/60 border border-indigo-200 rounded-xl text-left">
            <p class="text-[10px] text-indigo-700 uppercase font-bold">300-Q Mock Score</p>
            <p id="aptExamBestScore" class="text-lg font-black text-indigo-900 mt-0.5">—</p>
            <p id="aptExamBestPct" class="text-[9px] text-slate-500 font-sans">120-Min Benchmark</p>
          </div>
          <div class="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-left">
            <p class="text-[10px] text-amber-700 uppercase font-bold">Exam Status</p>
            <p id="aptExamPassStatus" class="text-sm font-bold text-slate-600 mt-1">Not Attempted</p>
            <p id="aptExamAttemptsLabel" class="text-[9px] text-slate-500 font-sans">Attempts: 0</p>
          </div>
        </div>

        <!-- Sub-Navigation Navigation Pills -->
        <div class="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
          <button id="aptSubTabBtnTips" onclick="switchAptitudeSubTab('tips')" class="px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-violet-600 text-white shadow-sm whitespace-nowrap">
            <i class="fa-solid fa-lightbulb"></i> 50 Tips & Shortcuts
          </button>
          <button id="aptSubTabBtnExamples" onclick="switchAptitudeSubTab('examples')" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition flex items-center gap-1.5 whitespace-nowrap">
            <i class="fa-solid fa-list-check"></i> 100 Solved Examples
          </button>
          <button id="aptSubTabBtnExam" onclick="switchAptitudeSubTab('exam')" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition flex items-center gap-1.5 whitespace-nowrap">
            <i class="fa-solid fa-stopwatch text-rose-500"></i> 300-MCQ 120-Min Mock Exam
          </button>
        </div>

        <!-- ========================================== -->
        <!-- SUB-TAB 1: 50 TIPS & TRICKS                -->
        <!-- ========================================== -->
        <div id="aptSubTabContentTips" class="space-y-4">
          <div class="flex flex-col sm:flex-row gap-2 items-center justify-between bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
            <div class="relative w-full sm:w-72">
              <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
              <input type="text" id="aptTipsSearchInput" oninput="filterAptitudeTips()" placeholder="Search formulas, shortcuts, topics..." class="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-500" />
            </div>
            <div class="flex items-center gap-2 w-full sm:w-auto">
              <select id="aptTipsCategorySelect" onchange="filterAptitudeTips()" class="w-full sm:w-auto px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:border-violet-500 font-medium">
                <option value="all">All Categories (50 Tips)</option>
                <option value="Mental Arithmetic & Speed Math">Speed Math & Mental Arithmetic</option>
                <option value="Number Systems & Divisibility">Number Systems & Divisibility</option>
                <option value="Percentages & Commercial Math">Percentages & Commercial Math</option>
                <option value="Simple & Compound Interest">Simple & Compound Interest</option>
                <option value="Ratios, Mixtures & Alligations">Ratios & Mixtures</option>
                <option value="Time & Work">Time & Work</option>
                <option value="Time, Speed & Distance">Time, Speed & Distance</option>
                <option value="Logical Reasoning: Clocks & Calendars">Clocks & Calendars</option>
                <option value="Algebra & Progressions">Algebra & Progressions</option>
                <option value="Geometry & Mensuration">Geometry & Mensuration</option>
                <option value="Modern Math: P&C and Probability">Modern Math & Probability</option>
              </select>
              <button onclick="markAllAptitudeTipsViewed()" class="px-2.5 py-1.5 text-[11px] font-bold bg-violet-50 text-violet-700 hover:bg-violet-100 border border-violet-200 rounded-lg whitespace-nowrap transition" title="Mark all tips as reviewed">
                <i class="fa-solid fa-check-double mr-1"></i> Mark All Read
              </button>
            </div>
          </div>

          <div id="aptTipsGrid" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Dynamically populated by renderAptitudeTips() -->
          </div>
        </div>

        <!-- ========================================== -->
        <!-- SUB-TAB 2: 100 SOLVED EXAMPLES             -->
        <!-- ========================================== -->
        <div id="aptSubTabContentExamples" class="hidden space-y-4">
          <div class="flex flex-col sm:flex-row gap-2 items-center justify-between bg-slate-50 border border-slate-200 p-2.5 rounded-xl">
            <div class="relative w-full sm:w-72">
              <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
              <input type="text" id="aptExamplesSearchInput" oninput="filterAptitudeExamples()" placeholder="Search 100 solved problems..." class="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500" />
            </div>
            <div class="flex items-center gap-2 w-full sm:w-auto">
              <select id="aptExamplesCategorySelect" onchange="filterAptitudeExamples()" class="w-full sm:w-auto px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:border-emerald-500 font-medium">
                <option value="all">All Domains (100 Problems)</option>
                <option value="Speed Math & Numbers">Speed Math & Numbers</option>
                <option value="Percentages & Commercial Math">Percentages & Commercial Math</option>
                <option value="Simple & Compound Interest">Simple & Compound Interest</option>
                <option value="Ratios & Mixtures">Ratios & Mixtures</option>
                <option value="Time & Work">Time & Work</option>
                <option value="Time, Speed & Distance">Time, Speed & Distance</option>
                <option value="Geometry & Mensuration">Geometry & Mensuration</option>
                <option value="Modern Math & Probability">Modern Math & Probability</option>
                <option value="Clocks & Calendars">Clocks & Calendars</option>
              </select>
              <select id="aptExamplesStatusFilter" onchange="filterAptitudeExamples()" class="px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:border-emerald-500 font-medium">
                <option value="all">All Status</option>
                <option value="completed">Practiced Only</option>
                <option value="pending">Pending Practice</option>
              </select>
            </div>
          </div>

          <div id="aptExamplesList" class="space-y-4">
            <!-- Dynamically populated by renderAptitudeSolvedExamples() -->
          </div>
        </div>

        <!-- ========================================== -->
        <!-- SUB-TAB 3: 300-MCQ 120-MIN MOCK EXAM       -->
        <!-- ========================================== -->
        <div id="aptSubTabContentExam" class="hidden space-y-4">

          <!-- 1. EXAM LOBBY VIEW -->
          <div id="aptExamLobby" class="space-y-6">
            <div class="bg-gradient-to-r from-violet-50 via-indigo-50 to-purple-50 border border-violet-200 rounded-2xl p-5 md:p-6 text-slate-800 space-y-4">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <span class="px-3 py-1 rounded-full bg-violet-600 text-white text-[11px] font-mono font-bold uppercase tracking-wider">
                  Official 120-Minute Aptitude Assessment
                </span>
                <span class="text-xs text-slate-600 font-mono">
                  300 Questions • 120 Minutes (7,200s) • Pass: 240/300 (80%)
                </span>
              </div>
              <div>
                <h3 class="text-xl md:text-2xl font-black text-slate-900">
                  Full-Length Non-Repeated Aptitude Examination
                </h3>
                <p class="text-xs text-slate-600 mt-1 leading-relaxed">
                  This examination simulates Tier-1 IT services, product companies, and competitive aptitude benchmarks. Exactly 300 questions curated with zero repeats across Arithmetic, Commercial Math, Algebra, Geometry, Modern Math, and Logical Reasoning.
                </p>
              </div>

              <!-- Rules Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div class="bg-white/80 border border-violet-200 p-3 rounded-xl">
                  <p class="text-[10px] text-slate-500 uppercase font-bold font-mono">Exam Timing</p>
                  <p class="font-bold text-slate-900 text-sm mt-0.5"><i class="fa-solid fa-clock text-violet-600 mr-1"></i> 120 Minutes</p>
                  <p class="text-[10px] text-slate-500">Live countdown timer with auto-submit.</p>
                </div>
                <div class="bg-white/80 border border-violet-200 p-3 rounded-xl">
                  <p class="text-[10px] text-slate-500 uppercase font-bold font-mono">Marking Scheme</p>
                  <p class="font-bold text-slate-900 text-sm mt-0.5"><i class="fa-solid fa-check-circle text-emerald-600 mr-1"></i> +1 Mark / Q (0 Negative)</p>
                  <p class="text-[10px] text-slate-500">Max score: 300. Passing score: 240.</p>
                </div>
                <div class="bg-white/80 border border-violet-200 p-3 rounded-xl">
                  <p class="text-[10px] text-slate-500 uppercase font-bold font-mono">Telemetry & Sync</p>
                  <p class="font-bold text-slate-900 text-sm mt-0.5"><i class="fa-solid fa-cloud-arrow-up text-indigo-600 mr-1"></i> Live Firestore</p>
                  <p class="text-[10px] text-slate-500">Scores sync instantly to Admin Dashboard.</p>
                </div>
              </div>

              <!-- Previous Result Summary in Lobby (if any) -->
              <div id="aptExamPreviousBanner" class="hidden p-3 bg-white border border-slate-300 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <p class="text-[10px] font-mono uppercase text-slate-500 font-bold">Previous Best Result</p>
                  <p id="aptExamPrevText" class="font-extrabold text-slate-900 text-sm"></p>
                </div>
                <div id="aptExamPrevBadge"></div>
              </div>

              <!-- Action button -->
              <div class="pt-2 flex flex-wrap items-center gap-3">
                <button onclick="startAptitudeExam()" class="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-violet-500/20 transition flex items-center gap-2">
                  <i class="fa-solid fa-play"></i> Start 120-Minute Assessment (300 Qs)
                </button>
                <button onclick="switchAptitudeSubTab('tips')" class="px-4 py-3 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 transition">
                  <i class="fa-solid fa-book mr-1"></i> Review Tips First
                </button>
              </div>
            </div>
          </div>

          <!-- 2. ACTIVE EXAM RUNNER VIEW -->
          <div id="aptExamRunner" class="hidden space-y-4">
            
            <!-- Sticky Floating Header -->
            <div class="sticky top-0 z-30 bg-slate-900 text-white p-3 rounded-2xl shadow-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div class="flex items-center space-x-3">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <div>
                  <p class="text-[10px] uppercase font-mono text-slate-400">Live 120-Min Timer</p>
                  <p id="aptExamTimerDisplay" class="text-lg md:text-xl font-black font-mono text-emerald-400 tracking-wider">02:00:00</p>
                </div>
              </div>

              <div class="flex items-center space-x-3 font-mono text-xs">
                <div class="bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
                  <span class="text-slate-400 text-[10px]">Progress: </span>
                  <span id="aptExamAnsweredCount" class="font-bold text-white">0</span>/300
                </div>
                <div class="bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
                  <span class="text-slate-400 text-[10px]">Flagged: </span>
                  <span id="aptExamFlaggedCount" class="font-bold text-violet-400">0</span>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <button onclick="toggleCurrentAptitudeFlag()" id="aptExamFlagBtn" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-bold transition flex items-center gap-1.5">
                  <i class="fa-regular fa-flag"></i> Flag
                </button>
                <button onclick="confirmSubmitAptitudeExam()" class="px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black transition flex items-center gap-1.5 shadow-md">
                  <i class="fa-solid fa-check"></i> Submit Exam
                </button>
              </div>
            </div>

            <!-- Two-Column Exam Workspace -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              <!-- Left: Current Question Area (8 cols) -->
              <div class="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-4 md:p-6 space-y-5 shadow-sm">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div class="flex items-center gap-2">
                    <span id="aptQuestionTopicBadge" class="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-bold">Topic</span>
                    <span class="text-xs font-bold text-slate-500 font-mono">Question <span id="aptCurrentQuestionNum" class="text-slate-900 font-extrabold text-sm">1</span> of 300</span>
                  </div>
                  <button onclick="clearCurrentAptitudeResponse()" class="text-[11px] text-slate-400 hover:text-rose-600 font-bold transition flex items-center gap-1">
                    <i class="fa-solid fa-rotate-left"></i> Clear Choice
                  </button>
                </div>

                <!-- Question Text -->
                <div id="aptQuestionText" class="text-sm md:text-base font-bold text-slate-800 leading-relaxed min-h-[4rem]">
                  Loading question...
                </div>

                <!-- 4 Options Container -->
                <div id="aptOptionsContainer" class="space-y-2.5">
                  <!-- Dynamically rendered options -->
                </div>

                <!-- Navigation Controls Footer -->
                <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button onclick="prevAptitudeQuestion()" id="aptPrevBtn" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition flex items-center gap-1.5">
                    <i class="fa-solid fa-arrow-left"></i> Previous
                  </button>
                  <button onclick="nextAptitudeQuestion()" id="aptNextBtn" class="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white font-black text-xs rounded-xl shadow-md transition flex items-center gap-1.5">
                    Save & Next <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              <!-- Right: Question Palette Grid (4 cols) -->
              <div class="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-200 pb-2">
                  <p class="text-xs font-bold text-slate-800 uppercase font-mono tracking-wider">Question Palette (1–300)</p>
                  <span class="text-[10px] text-slate-500 font-mono">Jump to Q</span>
                </div>

                <!-- Legend -->
                <div class="grid grid-cols-2 gap-2 text-[10px] text-slate-600 font-mono">
                  <div class="flex items-center gap-1.5">
                    <span class="w-3 h-3 rounded bg-emerald-500"></span> Answered
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-3 h-3 rounded bg-slate-200 border border-slate-400"></span> Visited / Unanswered
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-3 h-3 rounded bg-violet-600"></span> Flagged
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-3 h-3 rounded bg-white border border-slate-200"></span> Not Visited
                  </div>
                </div>

                <!-- 300 Buttons Palette Grid -->
                <div id="aptQuestionPalette" class="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-6 gap-1 max-h-[380px] overflow-y-auto p-1 bg-white border border-slate-200 rounded-xl">
                  <!-- 300 buttons populated dynamically -->
                </div>
              </div>

            </div>
          </div>

          <!-- 3. EXAM RESULTS & REVIEW VIEW -->
          <div id="aptExamResults" class="hidden space-y-6">
            <div id="aptResultHeroCard" class="bg-gradient-to-br from-slate-900 to-indigo-950 text-white border-2 border-violet-500/40 rounded-2xl p-6 text-center space-y-4 shadow-xl">
              <div id="aptResultBadgeContainer" class="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl font-black">
                <i class="fa-solid fa-trophy"></i>
              </div>
              <div>
                <span id="aptResultStatusPill" class="text-xs font-mono uppercase px-3 py-1 rounded-full font-bold"></span>
                <h3 id="aptResultHeading" class="text-xl md:text-2xl font-black mt-2">Aptitude Assessment Completed</h3>
                <p id="aptResultSubtext" class="text-xs text-slate-300 mt-1 max-w-lg mx-auto leading-relaxed"></p>
              </div>

              <!-- Score Banner -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto font-mono text-center">
                <div class="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
                  <p class="text-[10px] text-slate-400 uppercase">Total Score</p>
                  <p id="aptResultScoreText" class="text-xl font-black text-white mt-0.5">—</p>
                  <p class="text-[9px] text-slate-400">Out of 300</p>
                </div>
                <div class="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
                  <p class="text-[10px] text-slate-400 uppercase">Percentage</p>
                  <p id="aptResultPctText" class="text-xl font-black text-emerald-400 mt-0.5">—</p>
                  <p class="text-[9px] text-slate-400">Pass: ≥ 80%</p>
                </div>
                <div class="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
                  <p class="text-[10px] text-slate-400 uppercase">Correct / Wrong</p>
                  <p id="aptResultCorrectWrongText" class="text-base font-black text-amber-300 mt-1">—</p>
                  <p class="text-[9px] text-slate-400">Accuracy Analysis</p>
                </div>
                <div class="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
                  <p class="text-[10px] text-slate-400 uppercase">Time Spent</p>
                  <p id="aptResultTimeText" class="text-base font-black text-sky-300 mt-1">—</p>
                  <p class="text-[9px] text-slate-400">Out of 120 Mins</p>
                </div>
              </div>

              <!-- Firestore Live Sync Banner -->
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] text-emerald-400 font-mono">
                <i class="fa-solid fa-cloud-arrow-up text-emerald-400"></i>
                <span id="aptResultFirestoreSyncLabel">Telemetry synced live to Cloud Firestore & Admin Hub</span>
              </div>

              <!-- Retake / Review Buttons -->
              <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button onclick="toggleAptitudeSolutionsReview()" class="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2">
                  <i class="fa-solid fa-list-check"></i> <span id="aptReviewToggleBtnText">Review All 300 Explanations</span>
                </button>
                <button onclick="startAptitudeExam()" class="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition flex items-center gap-2">
                  <i class="fa-solid fa-rotate-right"></i> Retake Examination
                </button>
              </div>
            </div>

            <!-- Solutions Review Accordion / List -->
            <div id="aptSolutionsReviewContainer" class="hidden space-y-4">
              <div class="flex items-center justify-between bg-slate-50 border border-slate-200 p-3 rounded-xl flex-wrap gap-2">
                <p class="text-xs font-bold text-slate-800 uppercase font-mono">Complete Solutions & Explanations</p>
                <div class="flex items-center gap-1.5 text-xs">
                  <button onclick="filterAptitudeReview('all')" id="aptRevFilterAll" class="px-2.5 py-1 rounded-lg bg-slate-800 text-white font-bold text-[11px]">All (300)</button>
                  <button onclick="filterAptitudeReview('correct')" id="aptRevFilterCorrect" class="px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 font-semibold text-[11px]">Correct</button>
                  <button onclick="filterAptitudeReview('incorrect')" id="aptRevFilterIncorrect" class="px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 font-semibold text-[11px]">Incorrect</button>
                  <button onclick="filterAptitudeReview('unattempted')" id="aptRevFilterUnattempted" class="px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 font-semibold text-[11px]">Unattempted</button>
                </div>
              </div>

              <div id="aptReviewQuestionsList" class="space-y-3">
                <!-- Dynamically populated review questions -->
              </div>
            </div>

          </div>

        </div>

      </div>"""

    assert cred_target in html, "Credentials tab end target not found"
    html = html.replace(cred_target, cred_target + aptitude_tab_html, 1)

    # 8. Add script tag for aptitude-data.js before app.js
    script_target = """  <script src="./js/app.js"></script>"""
    script_replacement = """  <script src="./js/aptitude-data.js"></script>\n  <script src="./js/app.js"></script>"""
    assert script_target in html, "Script target not found"
    html = html.replace(script_target, script_replacement, 1)

    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html)

    print("index.html updated successfully!")

if __name__ == "__main__":
    update()
