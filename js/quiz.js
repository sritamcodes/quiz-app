let current = 0;
let score = 0;
let selected = null;

// Load question
function loadQuestion() {
  const q = quizData[current];

  document.getElementById("question").innerText = q.question;

  let html = "";
  q.options.forEach(opt => {
    html += `<button onclick="selectAnswer('${opt}')">${opt}</button>`;
  });

  document.getElementById("options").innerHTML = html;

  document.getElementById("progress").innerText =
    `Question ${current + 1} / ${quizData.length}`;
}

// Select answer
function selectAnswer(ans) {
  selected = ans;

  // remove previous selection
  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.classList.remove("selected"));

  // highlight selected
  event.target.classList.add("selected");
}

// Next question
function nextQuestion() {
  if (!selected) {
    alert("Please select an option");
    return;
  }

  if (selected === quizData[current].correct) {
    score++;
  }

  selected = null;
  current++;

  if (current < quizData.length) {
    loadQuestion();
  } else {
    // ✅ store both score AND total (important fix)
    localStorage.setItem("score", score);
    localStorage.setItem("total", quizData.length);

    window.location.href = "result.html";
  }
}

// Initialize
loadQuestion();