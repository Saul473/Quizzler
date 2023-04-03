let startBtn = document.getElementById("start-btn");
let startMenu = document.getElementById("startMenu");
let timer = document.getElementById("timer")
let quizSection = document.getElementById("quizSection")
let question = document.getElementById("question")
let answerA = document.getElementById("answerA")
let answerB = document.getElementById("answerB")
let answerC = document.getElementById("answerC")
let answerD = document.getElementById("answerD")
let initialsForm = document.getElementById("initialsForm")
let endGame = document.getElementById("endGame")
let initials = document.getElementById("initials")


var questions = [
    {
        q: "What is a concatenation?",
        a: "Really good show",
        b: "Joining of strings",
        c: "Syberian cat",
        d: "Saiyan from Planet Vegeta",
        answer: "b",
    },
    {
        q: "which of the following is not a coding language?",
        a: "Java",
        b: "Python",
        c: "Ruby",
        d: "Shining Emerald",
        answer: "d",
    },
    {
        q: "Which of the following represents the values of true or false?",
        a: "Boolean",
        b: "Boozean",
        c: "CSS",
        d: "< >",
        answer: "a",
    },
    {
        q: "How do you comment in an HTML document?",
        a: "//",
        b: "*/ /*",
        c: "<!--...-->",
        d: "/* */",
        answer: "c",
    },
    {
        q: "Which of the following do you use to style a page?",
        a: "HTML",
        b: "CSS",
        c: "JavaScript",
        d: "Python",
        answer: "b",
    },
];

timerCount = 100;
questionCount = 0;
let storedUsers;

function renderPageLoad() {
    quizSection.style = "display: none"
    endGame.style = "display: none"
    if (JSON.parse(localStorage.getItem("highscores")) === null) {
        storedUsers = [];
    } else {
    storedUsers = JSON.parse(localStorage.getItem("highscores"));
    }
    console.log(storedUsers);
}

function runQuiz() {
    if (questionCount === 5) {
        return endQuiz();
    }
    timer.textContent = "Time Left: " + timerCount;
    question.textContent = questions[questionCount].q;
    answerA.textContent = questions[questionCount].a;
    answerB.textContent = questions[questionCount].b;
    answerC.textContent = questions[questionCount].c;
    answerD.textContent = questions[questionCount].d;
}

renderPageLoad();

startBtn.addEventListener("click", function () {
    startTimer()
    startMenu.style = "display: none";
    quizSection.style = "display: block"
    runQuiz();
})

function startTimer() {
    let countdown = setInterval(function () {
        timerCount--;
        timer.textContent = "Time Left: " + timerCount;

        if (timerCount < 0) {
            clearInterval(countdown);
            alert("Whoops, try that again.")
            window.location.href = "index.html"
        }
    }, 1000);
}

function manageSelectionA() {
    if (questions[questionCount].answer === "a") {
        questionCount++
        console.log("correct!");
    } else {
        console.log("ERRRRR!");
        questionCount++
        timerCount -= 10
    }
    runQuiz()
}
function manageSelectionB() {
    if (questions[questionCount].answer === "b") {
        questionCount++
        console.log("correct!");
    } else {
        console.log("ERRRRR!");
        questionCount++
        timerCount -= 10
    }
    runQuiz()
}
function manageSelectionC() {
    if (questions[questionCount].answer === "c") {
        questionCount++
        console.log("correct!");
    } else {
        console.log("ERRRRR!");
        questionCount++
        timerCount -= 10
    }
    runQuiz()
}
function manageSelectionD() {
    if (questions[questionCount].answer === "d") {
        questionCount++
        console.log("correct!");
    } else {
        console.log("ERRRRR!");
        questionCount++
        timerCount -= 10
    }
    runQuiz()
}

answerA.addEventListener("click", manageSelectionA);
answerB.addEventListener("click", manageSelectionB);
answerC.addEventListener("click", manageSelectionC);
answerD.addEventListener("click", manageSelectionD);


function endQuiz() {
    quizSection.style = "display: none";
    endGame.style = "display: flex";
    console.log(timerCount)
}

function saveScore(e) {
    e.preventDefault()
    newScore = {
        user: initials.value,
        userScore: timerCount,
    };
    storedUsers.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(storedUsers));
    window.location.href = "leaderboard.html"
}

initialsForm.addEventListener("submit", saveScore);