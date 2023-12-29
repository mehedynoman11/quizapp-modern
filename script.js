// const generateRandomNumber = () => Math.round(Math.random() * 10);

// const q1 = document.getElementById("question");
// const f1 = document.getElementById("formE");
// const i1 = document.getElementById("input");
// const scoreDisplay = document.getElementById("score");
// let score = 0;

// let num1, num2, correctAns;

// const updateQuestion = () => {
//     if (score === 20) {
//         q1.innerText = "Thank you!";
//     } else {
//         num1 = generateRandomNumber();
//         num2 = generateRandomNumber();
//         correctAns = num1 + num2;
//         q1.innerText = `What is ${num1} + ${num2}?`;
//     }
// };

// const handleFormSubmit = (event) => {
//     event.preventDefault();

//     const userAns = parseInt(i1.value, 10);

//     if (userAns === correctAns) {
//         score++;
//         alert("Correct!");
//     } else {
//         alert("Incorrect. Try again!");
//     }

//     scoreDisplay.innerText = `Score: ${score}`;
//     i1.value = "";
//     updateQuestion();
// };

// f1.addEventListener("submit", handleFormSubmit);

// // Initial question setup
// updateQuestion();

const generateRandomNumber = () => Math.round(Math.random() * 10);

const q1 = document.getElementById("question");
const f1 = document.getElementById("formE");
const i1 = document.getElementById("input");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const resetButton = document.getElementById("resetButton");

let score = 0;
let num1, num2, correctAns;
let timerSeconds = 30;
let timerInterval;

const updateQuestion = () => {
    if (score === 10) {
        q1.innerText = "Thank you!";
        clearInterval(timerInterval);
        f1.style.display = "none";
    } else {
        num1 = generateRandomNumber();
        num2 = generateRandomNumber();
        correctAns = num1 + num2;
        q1.innerText = `What is ${num1} + ${num2}?`;
    }
};

const handleFormSubmit = (event) => {
    event.preventDefault();

    const userAns = parseInt(i1.value, 10);

    if (userAns === correctAns) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect. Try again!");
    }

    scoreDisplay.innerText = `Score: ${score}`;
    i1.value = "";
    updateQuestion();
};

const resetGame = () => {
    score = 0;
    timerSeconds = 30;
    scoreDisplay.innerText = "Score: 0";
    timerDisplay.innerText = "Time: 30s";
    f1.style.display = "block";
    clearInterval(timerInterval);
    updateQuestion();
    startTimer();
};

resetButton.addEventListener("click", resetGame);

const startTimer = () => {
    timerInterval = setInterval(() => {
        timerSeconds--;
        timerDisplay.innerText = `Time: ${timerSeconds}s`;

        if (timerSeconds === 0) {
            clearInterval(timerInterval);
            alert("Time's up! Game over.");
            resetGame();
        }
    }, 1000);
};

f1.addEventListener("submit", handleFormSubmit);

// Initial question setup and timer start
updateQuestion();
startTimer();
