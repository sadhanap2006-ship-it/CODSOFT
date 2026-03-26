const rules = [
  {
    keywords: [
      'happy', 'excited', 'great', 'amazing', 'wonderful', 'joyful',
      'fantastic', 'good', 'cheerful', 'elated', 'thrilled', 'ecstatic',
      'glad', 'awesome', 'blessed'
    ],
    mood: 'happy',
    color: '#f0c060',
    badge: '😊 Happy',
    greeting: "That's so wonderful to hear! Happiness is worth celebrating. 🌟",
    tips: [
      { icon: '📔', text: 'Write down 3 things making you happy — it amplifies the feeling.' },
      { icon: '💌', text: 'Share your joy with someone you love today.' },
      { icon: '🎵', text: 'Put on your favorite upbeat playlist and let it flow.' },
      { icon: '🌿', text: 'Step outside — happy moments shine brighter in fresh air.' }
    ],
    quote: '"Happiness is not something ready-made. It comes from your own actions." — Dalai Lama',
    breathe: false
  },

  {
    keywords: [
      'sad', 'unhappy', 'down', 'depressed', 'blue', 'crying', 'cry',
      'heartbroken', 'miserable', 'hopeless', 'gloomy', 'upset',
      'grief', 'mourn', 'loss'
    ],
    mood: 'sad',
    color: '#7ab0d4',
    badge: '💙 Feeling Low',
    greeting: "I'm really sorry you're feeling this way. It's okay to not be okay — your feelings are valid. 💙",
    tips: [
      { icon: '🤗', text: 'Allow yourself to feel it. Suppressing sadness makes it grow.' },
      { icon: '☕', text: 'Make yourself a warm drink and wrap up in something cozy.' },
      { icon: '🧠', text: 'Talk to someone you trust — even a short conversation helps.' },
      { icon: '🚶', text: 'A gentle 10-minute walk can shift your mood slightly.' }
    ],
    quote: '"Even the darkest night will end, and the sun will rise." — Victor Hugo',
    breathe: true
  },

  {
    keywords: [
      'stressed', 'stress', 'overwhelmed', 'pressure', 'overloaded',
      'swamped', 'burnout', 'burn out', 'burned out', 'burnt out',
      'too much', 'drowning'
    ],
    mood: 'stressed',
    color: '#d47a9a',
    badge: '🌸 Stressed',
    greeting: "Stress can feel so heavy. Let's slow things down together for a moment. 🌸",
    tips: [
      { icon: '📝', text: 'Brain-dump everything on paper — get it out of your head.' },
      { icon: '🎯', text: 'Pick just ONE task to focus on. Everything else can wait.' },
      { icon: '💆', text: 'Try a 5-minute body scan: tense and release each muscle group.' },
      { icon: '🚫', text: "It's okay to say no. Protect your energy." }
    ],
    quote: '"You don\'t have to control your thoughts. You just have to stop letting them control you." — Dan Millman',
    breathe: true
  },

  {
    keywords: [
      'anxious', 'anxiety', 'nervous', 'worry', 'worried', 'panic',
      'scared', 'fear', 'overthinking', 'dread', 'apprehensive',
      'restless', 'uneasy'
    ],
    mood: 'anxious',
    color: '#9abf8a',
    badge: '🌱 Anxious',
    greeting: "Anxiety can feel so overwhelming. You're safe right here, right now. Let's ground you. 🌱",
    tips: [
      { icon: '✋', text: '5-4-3-2-1: name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.' },
      { icon: '🫁', text: 'Try box breathing: inhale 4s → hold 4s → exhale 4s → hold 4s.' },
      { icon: '🧊', text: 'Hold an ice cube — the sensation brings you back to the present.' },
      { icon: '📱', text: 'Limit news and social media for the next few hours.' }
    ],
    quote: '"Anxiety is the dizziness of freedom." — Søren Kierkegaard',
    breathe: true
  },

  {
    keywords: [
      'angry', 'anger', 'furious', 'rage', 'mad', 'irritated',
      'frustrated', 'annoyed', 'livid', 'hate', 'resentful', 'bitter'
    ],
    mood: 'angry',
    color: '#e07060',
    badge: '🔥 Frustrated',
    greeting: "Anger is a signal that something matters deeply to you. That's human. Let's channel it. 🔥",
    tips: [
      { icon: '👊', text: 'Physical release helps — go for a brisk walk or punch a pillow.' },
      { icon: '✏️', text: 'Write an unsent letter expressing everything you feel — then delete it.' },
      { icon: '⏸️', text: 'Pause before reacting. Count to 10 slowly, or leave the room.' },
      { icon: '🎧', text: 'Loud music or a cold shower can break the emotional loop.' }
    ],
    quote: '"For every minute you remain angry, you give up sixty seconds of peace of mind." — Ralph Waldo Emerson',
    breathe: false
  },

  {
    keywords: [
      'lonely', 'alone', 'isolated', 'no one', 'nobody', 'disconnected',
      'left out', 'abandoned', 'rejected', 'miss', 'missing'
    ],
    mood: 'lonely',
    color: '#a08acd',
    badge: '🫂 Lonely',
    greeting: "Feeling lonely is one of the hardest things. But you reached out — and that matters. I'm here. 🫂",
    tips: [
      { icon: '📞', text: "Text someone you haven't spoken to in a while — even just a 'hi'." },
      { icon: '☕', text: 'Go to a café or library — being around people, even strangers, can help.' },
      { icon: '🐾', text: 'Spend time with a pet, or watch videos of animals for comfort.' },
      { icon: '🌐', text: 'Join an online community around something you love.' }
    ],
    quote: '"The soul that sees beauty may sometimes walk alone." — Johann Wolfgang von Goethe',
    breathe: false
  },

  {
    keywords: [
      'tired', 'exhausted', 'sleepy', 'drained', 'fatigued',
      'no energy', 'can\'t sleep', 'insomnia', 'depleted'
    ],
    mood: 'tired',
    color: '#8aadcd',
    badge: '🌙 Tired',
    greeting: "Your body and mind are telling you something important — they need rest. Honor that. 🌙",
    tips: [
      { icon: '😴', text: 'Even a 20-minute nap can restore energy significantly.' },
      { icon: '📵', text: 'Put your phone down 30 minutes before bed — blue light disrupts sleep.' },
      { icon: '🫖', text: 'Try chamomile or lavender tea to wind down naturally.' },
      { icon: '🧘', text: 'Do gentle stretching or yoga nidra to release physical tension.' }
    ],
    quote: '"Rest is not idleness, and to lie sometimes on the grass under the trees is by no means a waste of time." — John Lubbock',
    breathe: false
  },

  {
    keywords: [
      'grateful', 'thankful', 'blessed', 'appreciate', 'content',
      'peaceful', 'calm', 'serene', 'fulfilled', 'loved'
    ],
    mood: 'grateful',
    color: '#c4a060',
    badge: '🙏 Grateful',
    greeting: "Gratitude is such a powerful feeling. Let's make it grow even more. 🙏",
    tips: [
      { icon: '📓', text: 'Write a gratitude journal entry — list 5 specific things you appreciate.' },
      { icon: '💛', text: "Tell someone exactly why you're grateful for them today." },
      { icon: '🌅', text: "Spend a few quiet minutes savoring this feeling — don't rush past it." },
      { icon: '🎁', text: 'Pay the feeling forward — do something kind for someone.' }
    ],
    quote: '"Gratitude turns what we have into enough." — Melody Beattie',
    breathe: false
  }
];

const fallback = {
  greeting: "I hear you. Tell me more about how you're feeling — I'm listening. 💬",
  tips: [
    { icon: '🧘', text: 'Take 3 slow, deep breaths right now.' },
    { icon: '💧', text: 'Drink a glass of water — hydration affects mood more than we think.' },
    { icon: '📝', text: "Try writing down what's on your mind without judgment." },
    { icon: '🤝', text: 'Reach out to someone you trust if you need more support.' }
  ],
  quote: '"You are allowed to be both a masterpiece and a work in progress." — Sophia Bush',
  breathe: false
};
