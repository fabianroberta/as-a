function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const urlParams = new URLSearchParams(window.location.search);
const topic = urlParams.get('topic');
console.log(topic);

let allQuestions = [];

if (topic === 'random') {
  console.log('random questions');
  for (let key in window.questions) {
    allQuestions = allQuestions.concat(window.questions[key]);
  }
} else {
  allQuestions = window.questions[topic];
}

shuffleArray(allQuestions);

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');
const retryButton = document.getElementById('retry');

function displayQuestion() {
  submitButton.style.display = 'inline-block';
  nextButton.style.display = 'none';

  const questionData = allQuestions[currentQuestion];

  const questionElement = document.createElement('p');
  questionElement.className = 'question-text';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

displayQuestion();

function checkAnswer() {
  submitButton.style.display = 'none';

  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === allQuestions[currentQuestion].answer) {
      score++;
      selectedOption.classList.add('correct');
    } else {
      selectedOption.classList.add('wrong');
      const options = document.querySelectorAll('input[name="quiz"]');
      for (let i = 0; i < options.length; i++) {
        if (options[i].value === allQuestions[currentQuestion].answer) {
          options[i].classList.add('correct');
          break;
        }
      }
    }

    currentQuestion++;
    if (!(currentQuestion < 9 && currentQuestion < allQuestions.length)) {
      nextButton.innerHTML = 'View result';
    }
    nextButton.style.display = 'inline-block';
  }
}

function showNext() {
  // selectedOption.checked = false;
  if (currentQuestion < 9 && currentQuestion < allQuestions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  nextButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of 9!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  resultContainer.innerHTML = '';
  nextButton.innerHTML = 'Next';
  shuffleArray(allQuestions);
  displayQuestion();
}

submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', showNext);
retryButton.addEventListener('click', retryQuiz);
