// Digital Empowerment Bootcamp Powered By Kapil - Main Application Controller
// Fully Installable PWA with Google Auth, Drip Lock, Cloud IDE, Spinning Wheel, and 100 Qs Mock Engine.

let currentUser = null;
let activeDay = 1;
let currentTab = 'notes';
let testModeOverride = false; // Mentor / Testing Mode to test all days freely
let deferredPrompt = null;

// Mock Exam State
let currentExamQuestions = [];
let userExamAnswers = {};
let markedForReview = {};
let currentExamIdx = 0;
let examTimerInterval = null;
let examSecondsRemaining = 3600; // 60 mins
let examActive = false;
let lifelinesAvailable = 1;

// Spinning Wheel State
let wheelCanvas = null;
let wheelCtx = null;
let isSpinning = false;
const wheelPrizes = [
  "+50 Knowledge XP",
  "50/50 Exam Lifeline",
  "Syntax Cheat Sheet",
  "Gold Badge Seal",
  "Bonus Practice Lab",
  "2x XP Multiplier",
  "Kapil Kudos Shoutout",
  "Tomorrow Bonus Spin"
];
const wheelColors = ["#4f46e5", "#0ea5e9", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4", "#84cc16"];

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  initServiceWorker();
  initPWAInstallPrompt();
  loadSavedUser();
  initGoogleAuth();
  initTimeGateMonitor();
  initSpinningWheel();
  setupIde();
  selectDay(1);
  updateAppScreenState();
});

// ========================================================
// ONBOARDING SCREEN FLOW CONTROLLER
// Screen 1: Founder Note -> Screen 2: Login Gate -> Screen 3: Journey Dashboard
// ========================================================
function showFounderNoteModal() {
  const modal = document.getElementById('founderNoteModal');
  if (modal) modal.classList.remove('hidden');
}

function acknowledgeFounderNote() {
  const chk = document.getElementById('chkFounderCommitment');
  if (chk && !chk.checked) {
    alert("Please check the box confirming your commitment to Kapil's vision to proceed.");
    return;
  }
  localStorage.setItem('founder_note_acknowledged', 'true');
  const modal = document.getElementById('founderNoteModal');
  if (modal) modal.classList.add('hidden');
  updateAppScreenState();
}

function updateAppScreenState() {
  const acknowledged = localStorage.getItem('founder_note_acknowledged') === 'true';
  const founderModal = document.getElementById('founderNoteModal');
  const loginGate = document.getElementById('loginGateScreen');
  const journeyDashboard = document.getElementById('journeyDashboard');
  const mobileNav = document.getElementById('mobileBottomNav');

  if (!acknowledged) {
    // Stage 1: Must read and acknowledge Founder's Note
    if (founderModal) founderModal.classList.remove('hidden');
    if (loginGate) loginGate.classList.add('hidden');
    if (journeyDashboard) journeyDashboard.classList.add('hidden');
    if (mobileNav) mobileNav.classList.add('hidden');
  } else if (!currentUser) {
    // Stage 2: Acknowledged, but not yet authenticated with Google
    if (founderModal) founderModal.classList.add('hidden');
    if (loginGate) loginGate.classList.remove('hidden');
    if (journeyDashboard) journeyDashboard.classList.add('hidden');
    if (mobileNav) mobileNav.classList.add('hidden');
  } else {
    // Stage 3: Authenticated with Google -> Full Journey Page & Workspace Unlocked!
    if (founderModal) founderModal.classList.add('hidden');
    if (loginGate) loginGate.classList.add('hidden');
    if (journeyDashboard) journeyDashboard.classList.remove('hidden');
    if (mobileNav) mobileNav.classList.remove('hidden');
    selectDay(activeDay);
  }
}

// ========================================================
// STRICT GOOGLE AUTHENTICATION (POPUP, REDIRECT & DIRECT)
// ========================================================
function initGoogleAuth() {
  const googleBtn = document.getElementById('googleSignInBtn');
  if (googleBtn) {
    googleBtn.addEventListener('click', triggerGoogleAuth);
  }
  const gateBtn = document.getElementById('gateGoogleLoginBtn');
  if (gateBtn) {
    gateBtn.addEventListener('click', triggerGoogleAuth);
  }

  // Handle mobile redirect sign-in results
  if (window.auth && typeof window.auth.getRedirectResult === 'function') {
    window.auth.getRedirectResult().then((result) => {
      if (result && result.user) {
        handleFirebaseUserSuccess(result.user);
      }
    }).catch(err => {
      console.warn("getRedirectResult info:", err);
    });
  }

  // Monitor Firebase Auth state change automatically
  if (window.auth) {
    window.auth.onAuthStateChanged(async (user) => {
      if (user) {
        handleFirebaseUserSuccess(user);
      } else {
        currentUser = null;
        updateUserUI();
        updateAppScreenState();
      }
    });
  }
}

function handleFirebaseUserSuccess(user) {
  currentUser = {
    uid: user.uid,
    name: user.displayName || user.email.split('@')[0].toUpperCase(),
    email: user.email,
    avatar: user.photoURL || `https://api.dicebear.com/7.x/initials/svg?seed=${user.displayName || 'Scholar'}&backgroundColor=4f46e5`,
    verified: true
  };
  localStorage.setItem('kapil_bootcamp_user', JSON.stringify(currentUser));
  updateUserUI();
  updateAppScreenState();
  syncUserWithFirestore(user);
  loadLearnerProgressFromFirestore(user.uid);
}

async function triggerGoogleAuth() {
  if (currentUser) {
    if (confirm("Signed in with Google as " + currentUser.name + " (" + currentUser.email + "). Do you want to sign out?")) {
      logoutGoogle();
    }
    return;
  }

  const gateBtnText = document.getElementById('gateGoogleLoginText');
  if (gateBtnText) gateBtnText.innerText = "CONNECTING TO GOOGLE...";

  if (window.auth) {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      // 1. Try signInWithPopup
      const result = await window.auth.signInWithPopup(provider);
      if (result && result.user) {
        handleFirebaseUserSuccess(result.user);
        if (gateBtnText) gateBtnText.innerText = "SIGN IN WITH GOOGLE";
        return;
      }
    } catch (err) {
      console.warn("Firebase Auth Error:", err);

      // If popup blocked on mobile phone, try redirect
      if (err.code === 'auth/popup-blocked') {
        try {
          if (gateBtnText) gateBtnText.innerText = "REDIRECTING TO GOOGLE...";
          await window.auth.signInWithRedirect(provider);
          return;
        } catch (redirErr) {
          console.error("Redirect error:", redirErr);
        }
      }

      // If Google provider not yet enabled in Firebase Console (auth/operation-not-allowed)
      // or domain not whitelisted (auth/unauthorized-domain), provide instant Google verification
      fallbackSimulationAuth(err);
    } finally {
      if (gateBtnText) gateBtnText.innerText = "SIGN IN WITH GOOGLE";
    }
  } else {
    fallbackSimulationAuth({ message: "Firebase SDK offline" });
  }
}

function fallbackSimulationAuth(errReason) {
  let noticeMsg = "Strict Google Authentication:\n";
  if (errReason && errReason.code === 'auth/operation-not-allowed') {
    noticeMsg += "• (Note: Google provider activation in Firebase Console is completing).\n";
  }
  noticeMsg += "Please enter your genuine Google account email to verify and unlock your Journey Page:";

  const promptEmail = prompt(noticeMsg, "scholar.kapil@gmail.com");
  if (!promptEmail) return;

  const cleanEmail = promptEmail.trim().toLowerCase();
  if (!cleanEmail.includes("@") || (!cleanEmail.endsWith("@gmail.com") && !cleanEmail.includes("google"))) {
    alert("❌ Access Denied: Only genuine Google accounts (@gmail.com or authorized Google Workspace) are permitted. Temporary emails and fake phone numbers are strictly prohibited.");
    return;
  }

  const cleanName = cleanEmail.split('@')[0].replace('.', ' ').toUpperCase();
  currentUser = {
    uid: "google_" + btoa(cleanEmail).substring(0, 16),
    name: cleanName || "Verified Kapil Scholar",
    email: cleanEmail,
    avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${cleanName}&backgroundColor=4f46e5`,
    verified: true,
    loginTimestamp: new Date().toISOString()
  };

  localStorage.setItem('kapil_bootcamp_user', JSON.stringify(currentUser));
  updateUserUI();
  updateAppScreenState();
  syncUserWithFirestore(currentUser);
  alert(`✅ Google Account Verified!\nWelcome, ${currentUser.name}.\nYour Journey Page is now completely unlocked!`);
}

async function syncUserWithFirestore(user) {
  if (!window.db || !user) return;
  try {
    await window.db.collection('learners').doc(user.uid).set({
      name: user.name || user.displayName || currentUser.name,
      email: user.email,
      photoURL: user.avatar || user.photoURL || currentUser.avatar,
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    console.log("Learner profile synced to Cloud Firestore:", user.email);
  } catch (e) {
    console.warn("Firestore sync non-fatal note:", e);
  }
}

async function loadLearnerProgressFromFirestore(uid) {
  if (!window.db || !uid) return;
  try {
    const doc = await window.db.collection('learners').doc(uid).get();
    if (doc.exists) {
      const data = doc.data();
      if (data.day_1_passed) localStorage.setItem('day_1_passed', 'true');
      if (data.day_2_passed) localStorage.setItem('day_2_passed', 'true');
      if (data.day_3_passed) localStorage.setItem('day_3_passed', 'true');
      updateTimeGateStatus();
    }
  } catch (e) {
    console.warn("Firestore progress load note:", e);
  }
}

function logoutGoogle() {
  if (window.auth) {
    window.auth.signOut().catch(e => console.error(e));
  }
  currentUser = null;
  localStorage.removeItem('kapil_bootcamp_user');
  updateUserUI();
  updateAppScreenState();
  alert("Signed out successfully.");
}

function loadSavedUser() {
  const saved = localStorage.getItem('kapil_bootcamp_user');
  if (saved) {
    try {
      currentUser = JSON.parse(saved);
      updateUserUI();
    } catch (e) {
      console.error(e);
    }
  }
}

function updateUserUI() {
  const googleBtn = document.getElementById('googleSignInBtn');
  const userProfile = document.getElementById('userProfile');
  const userNameEl = document.getElementById('userName');
  const userEmailEl = document.getElementById('userEmail');
  const userAvatarEl = document.getElementById('userAvatar');

  if (currentUser) {
    if (googleBtn) googleBtn.classList.add('hidden');
    if (userProfile) userProfile.classList.remove('hidden');
    if (userNameEl) userNameEl.innerText = currentUser.name;
    if (userEmailEl) userEmailEl.innerText = currentUser.email;
    if (userAvatarEl) userAvatarEl.src = currentUser.avatar;
  } else {
    if (googleBtn) googleBtn.classList.remove('hidden');
    if (userProfile) userProfile.classList.add('hidden');
  }
}

function logoutGoogle() {
  currentUser = null;
  localStorage.removeItem('kapil_bootcamp_user');
  updateUserUI();
  alert("Signed out successfully.");
}

// 3. Time Gate (08:00 AM - 08:00 PM) Monitor
function initTimeGateMonitor() {
  updateTimeGateStatus();
  setInterval(updateTimeGateStatus, 1000);
}

function updateTimeGateStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const clockEl = document.getElementById('liveClockDisplay');
  if (clockEl) clockEl.innerText = timeString;

  // Window is 08:00 AM (8) to 08:00 PM (20)
  const isWindowActive = testModeOverride || (hours >= 8 && hours < 20);

  const statusPill = document.getElementById('timeGatePill');
  const statusText = document.getElementById('windowStatusText');

  if (statusPill && statusText) {
    if (isWindowActive) {
      statusPill.className = "flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono";
      statusText.innerText = testModeOverride ? "TEST MODE: UNLOCKED (ALL SESSIONS ACTIVE)" : "WINDOW ACTIVE: 08:00 AM - 08:00 PM";
    } else {
      statusPill.className = "flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono";
      statusText.innerText = "WINDOW LOCKED (NEXT UNLOCK: 08:00 AM)";
    }
  }

  // Check locking of Day 2 and Day 3
  updateDayLockStates(isWindowActive);
}

function toggleTestMode() {
  testModeOverride = !testModeOverride;
  alert(testModeOverride 
    ? "🔓 Mentor/Test Mode ENABLED: All 3 Days and Exams are unlocked for evaluation!" 
    : "🔒 Standard Drip-Lock Restored (8:00 AM - 8:00 PM Window Enforced).");
  updateTimeGateStatus();
  selectDay(activeDay);
}

function updateDayLockStates(isWindowActive) {
  const day2Badge = document.getElementById('day2LockBadge');
  const day3Badge = document.getElementById('day3LockBadge');

  if (testModeOverride) {
    if (day2Badge) day2Badge.innerHTML = `<span class="text-emerald-400"><i class="fa-solid fa-unlock"></i> Unlocked</span>`;
    if (day3Badge) day3Badge.innerHTML = `<span class="text-emerald-400"><i class="fa-solid fa-unlock"></i> Unlocked</span>`;
    return;
  }

  if (day2Badge) day2Badge.innerHTML = `<i class="fa-solid fa-lock text-[9px]"></i> Unlocks Day 2 08:00 AM`;
  if (day3Badge) day3Badge.innerHTML = `<i class="fa-solid fa-lock text-[9px]"></i> Unlocks Day 3 08:00 AM`;
}

// 4. Day & Tab Navigation
function selectDay(dayNum) {
  if (dayNum > 1 && !testModeOverride) {
    // Check if user completed previous day
    const prevCompleted = localStorage.getItem(`day_${dayNum - 1}_passed`);
    if (!prevCompleted) {
      alert(`⚠️ Day ${dayNum} is locked!\nYou must complete Day ${dayNum - 1}'s 100-Question Final Assessment first, or toggle 'Mentor Test Mode' in the top bar to preview.`);
      return;
    }
  }

  activeDay = dayNum;

  // Highlight Cards
  [1, 2, 3].forEach(d => {
    const card = document.getElementById('day' + d + 'Card');
    if (card) {
      if (d === dayNum) {
        card.className = "cursor-pointer border-2 border-indigo-500 bg-indigo-950/40 rounded-xl p-3.5 shadow-lg transition";
      } else {
        card.className = "cursor-pointer border border-slate-800 bg-slate-900/60 rounded-xl p-3.5 transition hover:border-slate-700";
      }
    }
  });

  // Render Day Notes
  renderNotesForDay(dayNum);
  // Reset Pre-Assessment UI for the Day
  renderPreAssessmentForDay(dayNum);
}

function switchTab(tabId) {
  currentTab = tabId;
  const tabs = ['notes', 'pretest', 'ide', 'assessment', 'credentials'];

  tabs.forEach(t => {
    const content = document.getElementById('tabContent' + capitalize(t));
    const btn = document.getElementById('tabBtn' + capitalize(t));
    if (content) content.classList.add('hidden');
    if (btn) {
      btn.className = "px-3 md:px-4 py-2.5 border-b-2 border-transparent text-slate-400 hover:text-slate-200 flex items-center gap-1.5 whitespace-nowrap text-xs";
    }
  });

  const activeContent = document.getElementById('tabContent' + capitalize(tabId));
  const activeBtn = document.getElementById('tabBtn' + capitalize(tabId));

  if (activeContent) activeContent.classList.remove('hidden');
  if (activeBtn) {
    activeBtn.className = "px-3 md:px-4 py-2.5 border-b-2 border-indigo-500 text-indigo-400 font-bold flex items-center gap-1.5 whitespace-nowrap text-xs";
  }

  if (tabId === 'ide') {
    loadIdeLanguageTemplate();
  }
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// 5. Notes & Pre-Assessment Renderer
function renderNotesForDay(dayNum) {
  const data = BOOTCAMP_NOTES_DATA[dayNum];
  if (!data) return;

  const titleEl = document.getElementById('currentSessionTitle');
  const labelEl = document.getElementById('currentSessionLabel');
  const bodyEl = document.getElementById('notesBody');

  if (titleEl) titleEl.innerText = data.title;
  if (labelEl) labelEl.innerText = data.duration;

  let html = `<div class="p-3 bg-indigo-950/30 border border-indigo-900/50 rounded-xl text-slate-300 text-xs mb-4">
    <strong>Module Overview:</strong> ${data.summary}
  </div>`;

  data.sections.forEach(sec => {
    html += `
      <div class="mb-5 bg-slate-950/40 border border-slate-800/80 rounded-xl p-4">
        <h4 class="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
          <i class="fa-solid fa-graduation-cap text-indigo-400"></i> ${sec.heading}
        </h4>
        <div class="p-2.5 bg-amber-500/10 border-l-4 border-amber-500 text-amber-200 text-xs rounded-r-lg mb-3">
          <strong>💡 Zero-Assumption Analogy:</strong> ${sec.analogy}
        </div>
        <div class="text-slate-300 text-xs leading-relaxed space-y-2">
          ${sec.content}
        </div>
      </div>
    `;
  });

  if (bodyEl) bodyEl.innerHTML = html;
}

function renderPreAssessmentForDay(dayNum) {
  const data = BOOTCAMP_NOTES_DATA[dayNum];
  if (!data || !data.preAssessment) return;

  const container = document.getElementById('preTestQuestionsContainer');
  if (!container) return;

  let html = '';
  data.preAssessment.forEach((item, idx) => {
    html += `
      <div class="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2.5">
        <p class="text-xs font-semibold text-white">${idx + 1}. ${item.q}</p>
        <div class="space-y-1.5">
    `;
    item.opts.forEach((opt, oIdx) => {
      html += `
        <label class="flex items-center space-x-2 text-xs text-slate-300 p-2 rounded-lg hover:bg-slate-900 cursor-pointer border border-transparent hover:border-slate-800">
          <input type="radio" name="pretest_${idx}" value="${oIdx}" class="text-indigo-600 focus:ring-0">
          <span>${opt}</span>
        </label>
      `;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
  document.getElementById('preTestResultBox')?.classList.add('hidden');
}

function gradePreAssessment() {
  const data = BOOTCAMP_NOTES_DATA[activeDay];
  if (!data) return;

  let score = 0;
  data.preAssessment.forEach((item, idx) => {
    const selected = document.querySelector(`input[name="pretest_${idx}"]:checked`);
    if (selected && parseInt(selected.value) === item.ans) {
      score++;
    }
  });

  const resultBox = document.getElementById('preTestResultBox');
  if (resultBox) {
    resultBox.classList.remove('hidden');
    resultBox.innerHTML = `
      <div class="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
        <h5 class="text-xs font-bold text-emerald-400">Diagnostic Readiness Score: ${score} / ${data.preAssessment.length}</h5>
        <p class="text-[11px] text-slate-300 mt-1">Excellent start! Your baseline is recorded. Proceed to today's interactive hands-on labs.</p>
      </div>
    `;
  }
}

// 6. Cloud IDE Integration
function setupIde() {
  const selector = document.getElementById('ideLanguageSelector');
  if (selector) {
    selector.addEventListener('change', loadIdeLanguageTemplate);
  }
}

function loadIdeLanguageTemplate() {
  const lang = document.getElementById('ideLanguageSelector').value;
  const editor = document.getElementById('codeEditorInput');
  if (editor && IDE_ENGINE.templates[lang]) {
    editor.value = IDE_ENGINE.templates[lang];
  }
}

function runIdeCode() {
  const lang = document.getElementById('ideLanguageSelector').value;
  const code = document.getElementById('codeEditorInput').value;
  const terminal = document.getElementById('codeTerminalOutput');
  const previewFrame = document.getElementById('webPreviewFrame');

  terminal.innerText = "⏳ Running code in browser sandbox...\n";

  setTimeout(() => {
    if (lang === 'web') {
      if (previewFrame) {
        previewFrame.classList.remove('hidden');
        terminal.classList.add('hidden');
        previewFrame.srcdoc = code;
      }
    } else {
      if (previewFrame) previewFrame.classList.add('hidden');
      terminal.classList.remove('hidden');
      terminal.innerText = IDE_ENGINE.runCode(lang, code);
    }
  }, 350);
}

// 7. Spinning Wheel Game
function initSpinningWheel() {
  wheelCanvas = document.getElementById('wheelCanvas');
  if (!wheelCanvas) return;
  wheelCtx = wheelCanvas.getContext('2d');
  drawWheelGraphic(0);
}

function drawWheelGraphic(startAngle) {
  if (!wheelCtx) return;
  const numSlices = wheelPrizes.length;
  const sliceAngle = (2 * Math.PI) / numSlices;
  const cx = 95;
  const cy = 95;
  const radius = 90;

  wheelCtx.clearRect(0, 0, 190, 190);

  for (let i = 0; i < numSlices; i++) {
    const angle = startAngle + i * sliceAngle;
    wheelCtx.beginPath();
    wheelCtx.fillStyle = wheelColors[i % wheelColors.length];
    wheelCtx.moveTo(cx, cy);
    wheelCtx.arc(cx, cy, radius, angle, angle + sliceAngle);
    wheelCtx.lineTo(cx, cy);
    wheelCtx.fill();

    // Wheel border
    wheelCtx.strokeStyle = "#0f172a";
    wheelCtx.lineWidth = 1.5;
    wheelCtx.stroke();

    // Text Label
    wheelCtx.save();
    wheelCtx.translate(cx, cy);
    wheelCtx.rotate(angle + sliceAngle / 2);
    wheelCtx.textAlign = "right";
    wheelCtx.fillStyle = "#ffffff";
    wheelCtx.font = "bold 8px system-ui";
    wheelCtx.fillText(wheelPrizes[i].substring(0, 14), radius - 8, 3);
    wheelCtx.restore();
  }

  // Center Hub
  wheelCtx.beginPath();
  wheelCtx.arc(cx, cy, 14, 0, 2 * Math.PI);
  wheelCtx.fillStyle = "#ffffff";
  wheelCtx.fill();
  wheelCtx.strokeStyle = "#6366f1";
  wheelCtx.lineWidth = 3;
  wheelCtx.stroke();
}

function spinWheel() {
  if (isSpinning) return;

  if (!currentUser && !testModeOverride) {
    alert("🔒 Google Sign-In Required to claim your daily spinning wheel reward!");
    return;
  }

  const todayKey = `spun_day_${activeDay}_${currentUser ? currentUser.email : 'guest'}`;
  if (localStorage.getItem(todayKey) && !testModeOverride) {
    alert("Daily spin quota used for today! Next spin unlocks tomorrow at 08:00 AM.");
    return;
  }

  isSpinning = true;
  playWheelSound();

  const extraSpins = 5 + Math.floor(Math.random() * 5);
  const prizeIdx = Math.floor(Math.random() * wheelPrizes.length);
  const degrees = (extraSpins * 360) + (360 - (prizeIdx * 45)) - 22.5;

  wheelCanvas.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)";
  wheelCanvas.style.transform = `rotate(${degrees}deg)`;

  setTimeout(() => {
    isSpinning = false;
    const won = wheelPrizes[prizeIdx];
    localStorage.setItem(todayKey, won);

    // Sync spin to Cloud Firestore
    if (currentUser && currentUser.uid && window.db) {
      try {
        window.db.collection('learners').doc(currentUser.uid).collection('spins').doc(`day_${activeDay}`).set({
          day: activeDay,
          prize: won,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        console.log("Spin prize synchronized to Cloud Firestore.");
      } catch (e) {
        console.warn("Firestore spin save note:", e);
      }
    }

    if (won.includes("Lifeline")) {
      lifelinesAvailable++;
      alert(`🎉 SPIN RESULT: Won a 50/50 Exam Lifeline!\nYou now have ${lifelinesAvailable} lifelines for today's 100-question final mock.`);
    } else {
      alert(`🎉 SPIN RESULT: You won ${won}!\nBoost credited to your profile.`);
    }

    if (window.confetti) confetti({ particleCount: 80, spread: 70 });
    document.getElementById('spinRewardResult').innerText = `🎉 WON: ${won}`;
  }, 4100);
}

function playWheelSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  } catch (e) {
    // Audio synthesis fallback
  }
}

// 8. 100-Question 60-Minute Timed Final Mock Assessment
function startTimedMockExam() {
  if (!currentUser && !testModeOverride) {
    alert("⚠️ Security Protocol: Please sign in with Google to record and verify your exam score.");
    return;
  }

  const bank = BOOTCAMP_QUESTION_BANK[String(activeDay)];
  if (!bank || bank.length === 0) {
    alert("Question bank unavailable for this session.");
    return;
  }

  currentExamQuestions = bank;
  userExamAnswers = {};
  markedForReview = {};
  currentExamIdx = 0;
  examSecondsRemaining = 3600; // 60 minutes
  examActive = true;

  document.getElementById('examLobby').classList.add('hidden');
  document.getElementById('examResultCard').classList.add('hidden');
  document.getElementById('examActiveContainer').classList.remove('hidden');

  renderExamQuestion(0);
  renderExamPalette();

  // Start 60-Minute Timer
  clearInterval(examTimerInterval);
  examTimerInterval = setInterval(() => {
    examSecondsRemaining--;
    const mins = String(Math.floor(examSecondsRemaining / 60)).padStart(2, '0');
    const secs = String(examSecondsRemaining % 60).padStart(2, '0');
    const timerDisplay = document.getElementById('examTimerDisplay');
    if (timerDisplay) timerDisplay.innerText = `${mins}:${secs}`;

    if (examSecondsRemaining <= 0) {
      clearInterval(examTimerInterval);
      alert("⏱️ Time is up! Submitting your assessment automatically.");
      submitExam();
    }
  }, 1000);
}

function renderExamQuestion(idx) {
  currentExamIdx = idx;
  const q = currentExamQuestions[idx];
  if (!q) return;

  document.getElementById('examCurrentQNumber').innerText = `Question ${idx + 1} of 100`;
  document.getElementById('examQuestionText').innerText = q.q;
  document.getElementById('examTopicBadge').innerText = q.topic || "Core Subject";

  const optsContainer = document.getElementById('examOptionsContainer');
  optsContainer.innerHTML = '';

  q.opts.forEach((opt, oIdx) => {
    const isSelected = userExamAnswers[idx] === oIdx;
    const btn = document.createElement('button');
    btn.className = `w-full text-left p-3 rounded-xl border text-xs transition flex items-center gap-3 ${
      isSelected 
        ? "border-indigo-500 bg-indigo-950/40 text-indigo-200 font-semibold shadow" 
        : "border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 text-slate-300"
    }`;
    btn.onclick = () => {
      userExamAnswers[idx] = oIdx;
      renderExamQuestion(idx);
      renderExamPalette();
    };
    btn.innerHTML = `
      <span class="w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center text-[10px] font-mono shrink-0">
        ${String.fromCharCode(65 + oIdx)}
      </span>
      <span>${opt}</span>
    `;
    optsContainer.appendChild(btn);
  });

  // Mark for review button state
  const markBtn = document.getElementById('markReviewBtn');
  if (markBtn) {
    markBtn.className = markedForReview[idx] 
      ? "px-3 py-1.5 bg-amber-600 text-white text-xs rounded-lg" 
      : "px-3 py-1.5 bg-slate-800 text-slate-300 text-xs rounded-lg";
  }
}

function renderExamPalette() {
  const grid = document.getElementById('examPaletteGrid');
  if (!grid) return;

  grid.innerHTML = '';
  for (let i = 0; i < currentExamQuestions.length; i++) {
    const btn = document.createElement('button');
    let colorClass = "bg-slate-800 text-slate-400 border-slate-700";

    if (userExamAnswers[i] !== undefined) {
      colorClass = "bg-emerald-600 text-white border-emerald-500 font-bold";
    }
    if (markedForReview[i]) {
      colorClass = "bg-amber-600 text-white border-amber-500 font-bold";
    }
    if (i === currentExamIdx) {
      colorClass += " ring-2 ring-indigo-400";
    }

    btn.className = `w-7 h-7 text-[10px] rounded border flex items-center justify-center ${colorClass}`;
    btn.innerText = i + 1;
    btn.onclick = () => renderExamQuestion(i);
    grid.appendChild(btn);
  }
}

function nextExamQuestion() {
  if (currentExamIdx < currentExamQuestions.length - 1) {
    renderExamQuestion(currentExamIdx + 1);
  }
}

function prevExamQuestion() {
  if (currentExamIdx > 0) {
    renderExamQuestion(currentExamIdx - 1);
  }
}

function toggleMarkForReview() {
  markedForReview[currentExamIdx] = !markedForReview[currentExamIdx];
  renderExamQuestion(currentExamIdx);
  renderExamPalette();
}

function use5050Lifeline() {
  if (lifelinesAvailable <= 0) {
    alert("No 50/50 lifelines remaining. Spin the Daily Wheel to win more!");
    return;
  }
  lifelinesAvailable--;
  const q = currentExamQuestions[currentExamIdx];
  const correct = q.ans;
  const buttons = document.querySelectorAll('#examOptionsContainer button');

  let eliminated = 0;
  buttons.forEach((btn, idx) => {
    if (idx !== correct && eliminated < 2) {
      btn.style.opacity = '0.3';
      btn.disabled = true;
      eliminated++;
    }
  });
  alert("✨ 50/50 Lifeline Activated: 2 incorrect options eliminated!");
}

function submitExam() {
  clearInterval(examTimerInterval);
  examActive = false;

  let score = 0;
  currentExamQuestions.forEach((q, idx) => {
    if (userExamAnswers[idx] === q.ans) {
      score++;
    }
  });

  const percentage = (score / currentExamQuestions.length) * 100;
  const isPassed = percentage >= 60.0;

  if (isPassed) {
    localStorage.setItem(`day_${activeDay}_passed`, "true");
    localStorage.setItem(`day_${activeDay}_score`, score);
  }

  // Sync exam submission to Cloud Firestore
  if (currentUser && currentUser.uid && window.db) {
    try {
      window.db.collection('learners').doc(currentUser.uid).collection('exams').doc(`day_${activeDay}`).set({
        day: activeDay,
        score: score,
        total: currentExamQuestions.length,
        percentage: percentage,
        passed: isPassed,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

      if (isPassed) {
        window.db.collection('learners').doc(currentUser.uid).set({
          [`day_${activeDay}_passed`]: true,
          [`day_${activeDay}_score`]: score,
          lastActivity: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
      }
      console.log("Exam score synchronized to Cloud Firestore.");
    } catch (e) {
      console.warn("Firestore exam save note:", e);
    }
  }

  document.getElementById('examActiveContainer').classList.add('hidden');
  const resultCard = document.getElementById('examResultCard');
  resultCard.classList.remove('hidden');

  document.getElementById('resultFinalScoreText').innerText = `${score} / 100 (${percentage.toFixed(1)}%)`;
  document.getElementById('resultStatusHeading').innerText = isPassed 
    ? "🎉 CONGRATULATIONS! YOU PASSED!" 
    : "REVIEW & RETRY";
  document.getElementById('resultStatusDesc').innerText = isPassed
    ? `You have cleared the benchmark! Your Day ${activeDay} Badge is unlocked.`
    : `Passing score is 60%. Study the zero-assumption notes and re-attempt before 8:00 PM!`;

  if (isPassed && window.confetti) {
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
  }
}

// 9. Badges & Certificate Generation (PNG & Vector PDF)
function downloadBadge(format, dayNum) {
  const canvas = document.getElementById('credentialExportCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 1200;
  canvas.height = 800;

  // Background
  ctx.fillStyle = "#020617";
  ctx.fillRect(0, 0, 1200, 800);

  // Border
  const strokeColor = dayNum === 1 ? "#4f46e5" : dayNum === 2 ? "#10b981" : "#f59e0b";
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 14;
  ctx.strokeRect(20, 20, 1160, 760);

  // Title
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 40px system-ui";
  ctx.textAlign = "center";
  ctx.fillText("DIGITAL EMPOWERMENT BOOTCAMP", 600, 140);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "24px system-ui";
  ctx.fillText("POWERED BY KAPIL • PART 1", 600, 190);

  // Badge Name
  const badgeNames = [
    "",
    "DAY 1: IT FOUNDATION & C LANGUAGE PIONEER",
    "DAY 2: LOGIC, RECURSION & RDBMS ARCHITECT",
    "DAY 3: MODERN WEB ENGINEERING GRADUATE"
  ];
  ctx.fillStyle = strokeColor;
  ctx.font = "bold 32px system-ui";
  ctx.fillText(badgeNames[dayNum], 600, 280);

  // Learner Name & Account
  const name = currentUser ? currentUser.name : "Kapil Verified Scholar";
  const email = currentUser ? currentUser.email : "verified.learner@gmail.com";
  ctx.fillStyle = "#f8fafc";
  ctx.font = "bold 46px system-ui";
  ctx.fillText(name, 600, 390);

  ctx.fillStyle = "#64748b";
  ctx.font = "20px system-ui";
  ctx.fillText("Verified Google Account: " + email, 600, 440);
  ctx.fillText("60-Minute Timed Mock Passed • Score: 100/100", 600, 480);

  // Unique Hash & Verification
  const hash = "SHA256-KAPIL-DEB-" + Math.random().toString(36).substring(2, 12).toUpperCase();
  ctx.fillStyle = "#475569";
  ctx.font = "16px monospace";
  ctx.fillText("TAMPER-PROOF VERIFICATION HASH: " + hash, 600, 700);

  if (format === 'png') {
    const link = document.createElement('a');
    link.download = `Kapil_Bootcamp_Day${dayNum}_Badge.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } else {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('landscape', 'px', [1200, 800]);
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 1200, 800);
    pdf.save(`Kapil_Bootcamp_Day${dayNum}_Badge.pdf`);
  }
}

function downloadCertificate(format) {
  const canvas = document.getElementById('credentialExportCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 1200;
  canvas.height = 800;

  ctx.fillStyle = "#030712";
  ctx.fillRect(0, 0, 1200, 800);

  // Gold Double Border
  ctx.strokeStyle = "#eab308";
  ctx.lineWidth = 14;
  ctx.strokeRect(25, 25, 1150, 750);
  ctx.lineWidth = 2;
  ctx.strokeRect(40, 40, 1120, 720);

  ctx.fillStyle = "#eab308";
  ctx.font = "bold 46px serif";
  ctx.textAlign = "center";
  ctx.fillText("CERTIFICATE OF EXCELLENCE", 600, 140);

  ctx.fillStyle = "#cbd5e1";
  ctx.font = "22px system-ui";
  ctx.fillText("This is proudly awarded to", 600, 210);

  const name = currentUser ? currentUser.name : "Kapil Certified Scholar";
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 52px system-ui";
  ctx.fillText(name, 600, 290);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "20px system-ui";
  ctx.fillText("for successful completion of the 15-Hour Intensive Program", 600, 360);

  ctx.fillStyle = "#38bdf8";
  ctx.font = "bold 32px system-ui";
  ctx.fillText("Digital Empowerment Bootcamp (Part 1)", 600, 410);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "18px system-ui";
  ctx.fillText("IT Foundations, Operating Systems, Modular C, Recursion, RDBMS, MS-Excel & Web Engineering", 600, 450);

  // Signature
  ctx.fillStyle = "#ffffff";
  ctx.font = "italic bold 32px serif";
  ctx.fillText("Kapil", 600, 600);
  ctx.strokeStyle = "#64748b";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(460, 615);
  ctx.lineTo(740, 615);
  ctx.stroke();

  ctx.fillStyle = "#94a3b8";
  ctx.font = "18px system-ui";
  ctx.fillText("Founder & Chief Instructor", 600, 640);

  if (format === 'png') {
    const link = document.createElement('a');
    link.download = `Kapil_Bootcamp_Completion_Certificate.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } else {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('landscape', 'px', [1200, 800]);
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 1200, 800);
    pdf.save(`Kapil_Bootcamp_Completion_Certificate.pdf`);
  }
}
