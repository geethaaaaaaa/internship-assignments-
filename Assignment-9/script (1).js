function changeMood(emoji, text) {
  const mood = document.getElementById("moodDisplay");
  const moodText = document.getElementById("moodText");

  mood.innerText = emoji;
  moodText.innerText = text;

  // small animation
  mood.style.transform = "scale(1.2)";
  setTimeout(() => {
    mood.style.transform = "scale(1)";
  }, 200);
}