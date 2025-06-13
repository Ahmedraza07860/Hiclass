let current = 0;
let score = 0;
let questionsPerSet = 10;
let currentSet = 0;
let totalSets = Math.ceil(quizData.length / questionsPerSet);

function loadQuestion() {
  const index = currentSet * questionsPerSet + current;
  const q = quizData[index];
  if (!q) return showResults();

  document.getElementById('question').innerText = q.question;
  const optDiv = document.getElementById('options');
  optDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i, index, btn);
    optDiv.appendChild(btn);
  });
}

function checkAnswer(index, realIndex, button) {
  const correctIndex = quizData[realIndex].answer;

  const buttons = document.querySelectorAll(".options button");
  buttons.forEach(btn => btn.disabled = true);

  if (index === correctIndex) {
    score++;
    document.getElementById("correctSound").play();
    button.style.background = "#10b981";
    button.style.color = "white";
    button.style.borderColor = "#10b981";
  } else {
    document.getElementById("wrongSound").play();
    button.style.background = "#ef4444";
    button.style.color = "white";
    button.style.borderColor = "#ef4444";
    buttons[correctIndex].style.background = "#10b981";
    buttons[correctIndex].style.color = "white";
    buttons[correctIndex].style.borderColor = "#10b981";
  }

  setTimeout(() => {
    current++;
    const totalQuestions = quizData.length;
    if (current < questionsPerSet && (currentSet * questionsPerSet + current) < totalQuestions) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  const startIndex = currentSet * questionsPerSet;
  const endIndex = Math.min(startIndex + questionsPerSet, quizData.length);

  document.getElementById("question").innerText = "🎉 Set Completed!";
  document.getElementById("options").innerHTML = "";

  document.getElementById("result").innerText =
    `Correct Answers: ${score} / ${endIndex - startIndex}`;

  if (currentSet + 1 < totalSets) {
    document.querySelector(".btn-try").style.display = "inline-block";
  } else {
    document.querySelector(".btn-try").style.display = "none";
    document.getElementById("leaderboard").innerText = "📘 You completed all questions!";
  }
}

function nextSet() {
  currentSet++;
  current = 0;
  score = 0;
  document.getElementById("result").innerText = "";
  document.querySelector(".btn-try").style.display = "none";
  loadQuestion();
}

window.onload = loadQuestion;
