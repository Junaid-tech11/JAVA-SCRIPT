const questions = [{
    question: 'Who is the founder of Pakistan?',
    answers: [
        {
            text: 'Allama Iqbal', correct: false
        },
        {
            text: 'Rehmat ALi', correct: false,
        },
        {
            text: 'Quaid-e-Azam', correct: true,
        },
        {
            text: 'Fatima Jinnah', correct: false
        }

    ]
},
{
    question: 'What is the Capital of Pakistan?',
    answers: [
        {
            text: 'Karachi', correct: false
        },
        {
            text: 'Lahore', correct: false,
        },
        {
            text: 'Islamabad', correct: true,
        },
        {
            text: 'Peshawar', correct: false
        }

    ]
},
{
    question: 'Who is the Pm of Pakistan?',
    answers: [
        {
            text: 'Asif ALi', correct: false
        },
        {
            text: 'Nawaz Sharif ', correct: false,
        },
        {
            text: 'Shebaz Sharif', correct: true,
        },
        {
            text: 'Imran Khan', correct: false
        }

    ]
},
];

const questionElements = document.getElementById('question');
const answerElements = document.querySelector('.answer');
const nextBtn = document.getElementById('nxt-btn')

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    showQuestion();
}

function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex]
    currentQuestion.answers.sort(() => Math.random() - 0.5);
    questionElements.innerHTML = currentQuestion.question;
    answerElements.innerHTML = '';
    currentQuestion.answers.forEach(e => {
        let newBtn = document.createElement('button')
        newBtn.innerHTML = e.text
        newBtn.classList.add('btn-2')
        answerElements.append(newBtn)

        if (e.correct) {
            newBtn.dataset.correct = e.correct;
        }

        newBtn.addEventListener('click', selectAnswer)
    });

}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if (isCorrect === true) {
        score++
        selectedBtn.classList.add('correct')
    } else {
        selectedBtn.classList.add('incorrect')
    }

    nextBtn.style.display = 'block'

    Array.from(answerElements.children).forEach(button => {
        if (button.dataset.correct == 'true') {
            button.classList.add('correct')
        }
        button.disabled = true
    })

}
nextBtn.addEventListener('click', () => {

    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        StartQuiz();
    }
});

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    currentQuestionIndex = ''
    questionElements.innerHTML = `You scored ${score}out of ${questions.length}`
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'block'
    answerElements.innerHTML = ''
}

StartQuiz();