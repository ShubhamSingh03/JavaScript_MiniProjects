const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.querySelector("#quiz");
const submitBtn = document.querySelector("#submit");
const answerElements = document.querySelectorAll(".answer");
let quizQuestion = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");

let currentQuiz = 0;
let score = 0;
let randomObjectinArray;
// let scoreCard = document.createElement("h3");
// scoreCard.innerText = `${score} out of ${currentQuiz}`;
// scoreCard.style.textAlign = "center"
// quiz.appendChild(scoreCard);

// function to deselect options when next question appear
function deselectAnswers(){
    answerElements.forEach((answer) => (answer.checked = false));
}

loadQuiz()

// loading questions and options on page
function loadQuiz() {
    deselectAnswers();
    randomObjectinArray = quizData[currentQuiz];
    quizQuestion.innerText = randomObjectinArray["question"];
    a_text.innerText = randomObjectinArray["a"];
    b_text.innerText = randomObjectinArray["b"];
    c_text.innerText = randomObjectinArray["c"];
    d_text.innerText = randomObjectinArray["d"];
}

// check input answer matches with an answer in array
function getSelected() {
    let answer;
    answerElements.forEach((answerElement) => {
    if (answerElement.checked)
    {
        answer = answerElement.id;
    }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
    if (answer === quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length){
        loadQuiz();
    }
    else {
        quiz.innerHTML = `
        <h2>You answered ${score} out of ${quizData.length} questions correctly!</h2>
        `
    }
    }
})