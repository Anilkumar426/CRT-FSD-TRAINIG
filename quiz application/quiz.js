 const questions = [
      { q: "Capital of France?", a: ["London", "Paris", "Rome", "Madrid"], correct: 1 },
      { q: "Language in web browser?", a: ["Java", "Python", "C++", "JavaScript"], correct: 3 },
      { q: "2 + 2 * 2?", a: ["6", "8", "4", "2"], correct: 0 },
      { q: "Mona Lisa artist?", a: ["Picasso", "Van Gogh", "Da Vinci", "Michelangelo"], correct: 2 },
      { q: "Red planet?", a: ["Earth", "Venus", "Mars", "Jupiter"], correct: 2 },
      { q: "Purifies blood?", a: ["Liver", "Lung", "Heart", "Kidney"], correct: 3 },
      { q: "Liquid metal?", a: ["Gold", "Mercury", "Lead", "Copper"], correct: 1 },
      { q: "Eiffel Tower country?", a: ["Italy", "Germany", "France", "Spain"], correct: 2 },
      { q: "HTML stands for?", a: ["HyperText", "Markless", "TextLang", "None"], correct: 0 },
      { q: "CSS is for?", a: ["Logic", "Structure", "Design", "Database"], correct: 2 },
      { q: "WW2 ended?", a: ["1945", "1939", "1942", "1940"], correct: 0 },
      { q: "Fastest animal?", a: ["Tiger", "Leopard", "Cheetah", "Horse"], correct: 2 },
      { q: "H2O is?", a: ["Oxygen", "Water", "Hydrogen", "Salt"], correct: 1 },
      { q: "Constant in JS?", a: ["let", "const", "var", "static"], correct: 1 },
      { q: "Discovered gravity?", a: ["Newton", "Einstein", "Tesla", "Darwin"], correct: 0 }
    ];

    let current = 0, score = 0, selected = Array(15).fill(null), timer = 10;
    let timerInterval;

    const quizBox = document.getElementById("quiz-box");
    const qEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const timerBar = document.getElementById("timer-bar");
    const timeEl = document.getElementById("time");

    function startQuiz() {
      document.querySelector(".start-screen").style.display = "none";
      quizBox.style.display = "flex";
      loadQuestion(current);
    }

    function loadQuestion(index) {
      clearInterval(timerInterval);
      timer = 10;
      timeEl.textContent = timer + "s";
      timerBar.style.transform = `scaleX(1)`;
      timerInterval = setInterval(updateTimer, 1000);

      const q = questions[index];
      qEl.textContent = `${index + 1}. ${q.q}`;
      optionsEl.innerHTML = "";

      q.a.forEach((opt, i) => {
        const isSelected = selected[index] === i;
        const isCorrect = q.correct === i;
        const isWrong = isSelected && !isCorrect;

        let className = "";
        if (selected[index] !== null) {
          if (isCorrect) className = "correct";
          else if (isWrong) className = "wrong";
        }

        optionsEl.innerHTML += `
          <li class="${className}">
            <input type="radio" name="option" id="opt${i}" ${isSelected ? "checked" : ""} onclick="selectOption(${i})"/>
            <label for="opt${i}">${opt}</label>
          </li>
        `;
      });

      prevBtn.disabled = index === 0;
      nextBtn.textContent = index === questions.length - 1 ? "Finish" : "Next";
    }

    function updateTimer() {
      timer--;
      timeEl.textContent = timer + "s";
      timerBar.style.transform = `scaleX(${timer / 20})`;
      if (timer <= 0) {
        clearInterval(timerInterval);
        if (current < questions.length - 1) {
          current++;
          loadQuestion(current);
        } else {
          finishQuiz();
        }
      }
    }

    function selectOption(i) {
      selected[current] = i;
      loadQuestion(current);
    }

    function prevQuestion() {
      if (current > 0) {
        current--;
        loadQuestion(current);
      }
    }

    function nextQuestion() {
      if (selected[current] === null) {
        alert("Please select an option first!");
        return;
      }
      if (current < questions.length - 1) {
        current++;
        loadQuestion(current);
      } else {
        finishQuiz();
      }
    }

    function finishQuiz() {
      clearInterval(timerInterval);
      score = selected.reduce((acc, val, i) => val === questions[i].correct ? acc + 1 : acc, 0);
      document.getElementById("score").textContent = score;
      showStars(score);
      updateLeaderboard(score);
      document.getElementById("result-modal").classList.remove("hidden");
    }

    function showStars(score) {
      const stars = score >= 13 ? 5 : score >= 10 ? 4 : score >= 7 ? 3 : score >= 4 ? 2 : 1;
      document.getElementById("stars").textContent = "★".repeat(stars) + "☆".repeat(5 - stars);
    }

    function updateLeaderboard(newScore) {
      let scores = JSON.parse(localStorage.getItem("leaderboard")) || [];
      scores.push(newScore);
      scores = scores.sort((a, b) => b - a).slice(0, 5);
      localStorage.setItem("leaderboard", JSON.stringify(scores));
      document.getElementById("leaderboard").innerHTML = scores.map(s => `<li>${s}/15</li>`).join("");
    }

    function restartQuiz() {
      current = 0;
      score = 0;
      selected = Array(15).fill(null);
      document.getElementById("result-modal").classList.add("hidden");
      startQuiz();
    }

    prevBtn.onclick = prevQuestion;
    nextBtn.onclick = nextQuestion;


