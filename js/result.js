// Get stored values
const score = Number(localStorage.getItem("score")) || 0;
const total = Number(localStorage.getItem("total")) || 0;

// Display result
document.getElementById("score").innerText =
  `Score: ${score} / ${total}`;

// Restart quiz
function restart() {
  localStorage.removeItem("score");
  localStorage.removeItem("total");

  window.location.href = "quiz.html";
}