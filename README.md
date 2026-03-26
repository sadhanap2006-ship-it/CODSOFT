<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MoodBuddy – Mental Health Chatbot</title>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="style.css" />
</head>
<body>
<header>
<div class="avatar-wrap">🌙</div>
<div class="header-text">
<h1>MoodBuddy</h1>
<p><span class="status-dot"></span>Here for you, always</p>
</div>
</header>

<div class="mood-bar">
<span class="mood-bar__label">I feel:</span>
<div class="mood-chip" onclick="sendMood('happy')">😊 Happy</div>
<div class="mood-chip" onclick="sendMood('sad')">😢 Sad</div>
<div class="mood-chip" onclick="sendMood('stressed')">😤 Stressed</div>
<div class="mood-chip" onclick="sendMood('anxious')">😰 Anxious</div>
<div class="mood-chip" onclick="sendMood('angry')">😠 Angry</div>
<div class="mood-chip" onclick="sendMood('lonely')">🫂 Lonely</div>
<div class="mood-chip" onclick="sendMood('tired')">😴 Tired</div>
<div class="mood-chip" onclick="sendMood('grateful')">🙏 Grateful</div>
</div>

<div class="chat-area" id="chat"></div>

<div class="input-area">
<textarea
id="input"
placeholder="Tell me how you're feeling…"
rows="1"
onkeydown="handleKey(event)"
oninput="autoResize(this)"
></textarea>
<button class="send-btn" onclick="handleSend()" aria-label="Send message">➤</button>
</div>

<div class="breathe-overlay" id="breatheOverlay"> 
<div class="breathe-circle" id="breatheCircle">breathe</div> 
<div class="breathe-label" id="breatheLabel">Inhale…</div>
<p class="breathe-sub">Follow the circle &bull; 4-7-8 technique</p>
<button class="close-breathe" onclick="closeBreathe()">Close</button>
</div>
<script src="rules.js"></script>
<script src="chatbot.js"></script>
<script src="breathing.js"></script>

</body>
</html>
