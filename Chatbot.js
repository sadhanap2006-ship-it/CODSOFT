const chat = document.getElementById('chat');

function detectMood(text) {
  const lower = text.toLowerCase();
  for (const rule of rules) {
    if (rule.keywords.some(k => lower.includes(k))) return rule;
  }
  return null;
}

function buildBotHTML(rule, isGreeting = false) {
  if (isGreeting) {
    return `
      <p>Hello! 🌙 I'm <strong>MoodBuddy</strong>, your mental health companion. I'm here to listen, support, and guide you.</p>
      <p style="margin-top:8px; color:var(--muted); font-size:13px;">Tell me how you're feeling, or tap a mood above to get started.</p>
    `;
  }

  const data = rule || fallback;
  const badgeColor = rule ? rule.color : '#888';
  const badgeText  = rule ? rule.badge  : '💬 Sharing';

  let html = '';

  if (rule) {
    html += `
      <span class="mood-badge" style="
        background: ${badgeColor}22;
        color: ${badgeColor};
        border: 1px solid ${badgeColor}44;
      ">${badgeText}</span><br>
    `;
  }

  html += `<p>${data.greeting}</p>`;

  html += `<ul class="tip-list">`;
  data.tips.forEach(tip => {
    html += `
      <li>
        <span class="icon">${tip.icon}</span>
        <span>${tip.text}</span>
      </li>
    `;
  });
  html += `</ul>`;

  if (data.quote) {
    html += `<div class="quote-card">${data.quote}</div>`;
  }

  if (data.breathe) {
    html += `<button class="breathe-btn" onclick="startBreathe()">🫁 Try a breathing exercise</button>`;
  }

  return html;
}

function addMsg(html, role, animate = true) {
  const wrap   = document.createElement('div');
  wrap.className = `msg ${role}`;
  if (!animate) wrap.style.animationDuration = '0s';

  const icon   = document.createElement('div');
  icon.className = 'msg-icon';
  icon.textContent = role === 'bot' ? '🌙' : '🙂';

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = html;

  wrap.appendChild(icon);
  wrap.appendChild(bubble);
  chat.appendChild(wrap);
  chat.scrollTop = chat.scrollHeight;

  return wrap;
}

function addTyping() {
  const wrap   = document.createElement('div');
  wrap.className = 'msg bot';
  wrap.id = 'typing';

  const icon   = document.createElement('div');
  icon.className = 'msg-icon';
  icon.textContent = '🌙';

  const bubble = document.createElement('div');
  bubble.className = 'typing-indicator';
  bubble.innerHTML = `
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  `;

  wrap.appendChild(icon);
  wrap.appendChild(bubble);
  chat.appendChild(wrap);
  chat.scrollTop = chat.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById('typing');
  if (el) el.remove();
}

function respond(userText) {
  const rule = detectMood(userText);
  addTyping();
  setTimeout(() => {
    removeTyping();
    addMsg(buildBotHTML(rule), 'bot');
  }, 1000 + Math.random() * 600);
}

function sendMood(mood) {
  addMsg(`I'm feeling ${mood}`, 'user');
  const rule = rules.find(r => r.mood === mood);
  addTyping();
  setTimeout(() => {
    removeTyping();
    addMsg(buildBotHTML(rule), 'bot');
  }, 900);
}

function handleSend() {
  const input = document.getElementById('input');
  const text  = input.value.trim();
  if (!text) return;
  addMsg(text, 'user');
  input.value = '';
  input.style.height = 'auto';
  respond(text);
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleSend();
  }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}

window.onload = () => {
  addMsg(buildBotHTML(null, true), 'bot', false);
};
