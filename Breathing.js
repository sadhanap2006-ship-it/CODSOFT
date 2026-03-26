const phases = [
  { label: 'Inhale…',  duration: 4000 },
  { label: 'Hold…',    duration: 7000 },
  { label: 'Exhale…',  duration: 8000 },
  { label: 'Hold…',    duration: 4000 }
];

let phaseIndex  = 0;
let breatheTimer = null;

function startBreathe() {
  const overlay = document.getElementById('breatheOverlay');
  overlay.style.display = 'flex';
  overlay.classList.add('breathing');
  phaseIndex = 0;
  runPhase();
}

function runPhase() {
  const label = document.getElementById('breatheLabel');
  label.textContent = phases[phaseIndex].label;
  breatheTimer = setTimeout(() => {
    phaseIndex = (phaseIndex + 1) % phases.length;
    runPhase();
  }, phases[phaseIndex].duration);
}

function closeBreathe() {
  clearTimeout(breatheTimer);
  phaseIndex = 0;
  const overlay = document.getElementById('breatheOverlay');
  overlay.style.display = 'none';
  overlay.classList.remove('breathing');
}
