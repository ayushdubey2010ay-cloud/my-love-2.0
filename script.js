const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const teddy = document.getElementById("teddy");
const status = document.getElementById("status");

const sadGifs = ["sad1.gif", "sad2.gif", "sad3.gif"];
let sadIndex = 0;

noBtn.addEventListener("click", () => {
  teddy.src = sadGifs[sadIndex];
  sadIndex = (sadIndex + 1) % sadGifs.length;

  status.innerText = "Please maan jao 😭";

  const x = Math.random() * 300 - 150;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  teddy.src = "kiss.gif";
  document.getElementById("question").innerText = "Yaaay! ❤️";
  status.innerText = "Happy Valentine’s Day 😘";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
