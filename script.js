const permissionScreen = document.getElementById('permission-screen');
const chatScreen = document.getElementById('chat-screen');
const chatBox = document.getElementById('chat-box');
const inputField = document.getElementById('user-input');

function getLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      permissionScreen.classList.add("hidden");
      chatScreen.classList.remove("hidden");

      const lat = position.coords.latitude.toFixed(2);
      const lon = position.coords.longitude.toFixed(2);
      addMessage(`🧭 Your location: ${lat}°, ${lon}°`);
    },
    (err) => {
      alert("❌ Location permission is required to use this chat.");
    }
  );
}

function sendMessage() {
  const message = inputField.value.trim();
  if (!message) return;

  addMessage("🧑 You: " + message);
  inputField.value = "";

  setTimeout(() => {
    const replies = [
      "✨ That's interesting!",
      "😄 Tell me more!",
      "🔥 Wow!",
      "🚀 Keep going!",
      "🤩 Awesome!",
      "🎯 You're on point!"
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    addMessage("🤖 Dopabot: " + reply);
  }, 700);
}

function addMessage(msg) {
  const div = document.createElement('div');
  div.textContent = msg;
  div.className = "p-2";
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}
