var questions = [
  {
    question:
      'Which of the following tag is used to insert a line-break in HTML?',
    answer: 'br',
    options: ['br', 'a', 'pre', "b"],
    value: 0,
  },
  {
    question: 'In css what does h1 can be called as',
    answer: 'Selector',
    options: ['Tag', 'Attribute', 'Selector', 'Value'],
    value: 0,
  },
  {
    question: 'How do I add scrolling text to my page?',
    answer: 'marquee',
    options: ['scroll', 'marquee', 'ciruler', 'tab'],
    value: 0,
  },
  {
    question:
      'What is the return type of the hashCode() method in the Object class?',
    answer: 'int',
    options: ['Object', 'int', 'long', 'void'],
    value: 0,
  },
  {
    question: 'What does the expression float a = 35 / 0 return?',
    answer: 'Infinity',
    options: ['0', 'Not a Number', 'Infinity', 'Run time exception'],
    value: 0,
  },
  {
    question: 'Which package contains the Random class?',
    answer: 'java.util package',
    options: [
      'java.util package',
      'java.lang package',
      'java.awt package',
      'java.io package',
    ],
    value: 0,
  },
  {
    question: 'Which type of JavaScript language?',
    answer: 'Object-Based',
    options: [
      'Object-Oriented',
      'Assembly-language',
      'High-level',
      'Object-Based',
    ],
    value: 0,
  },
  {
    question: 'The "function" and " var" are known as:',
    answer: 'Declaration statements',
    options: ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'],
    value: 0,
  },
  {
    question: 'In JavaScript the x===y statement implies that:',
    answer: 'Both are equal in the value and data type.',
    options: [
      'Both x and y are equal in value, type and reference address as well.',
      'Both are x and y are equal in value only.',
      'Both are equal in the value and data type.',
      'Both are not same at all.',
    ],
    value: 0,
  },
  {
    question: 'Which one of the following is an ternary operator:',
    answer: '?',
    options: ['?', ':', '-', '+'],
    value: 0,
  },
];

// Initial Variables
var totalpoints = questions.length;
var question_count = 0;
var points = 0;
var remainingQuestions = [];
var questionIdx;
var save_answer = [];
var count = 0;

// Set Initial Values to Sesstion storage
sessionStorage.setItem('answers', JSON.stringify(save_answer));
sessionStorage.setItem('points', points);
sessionStorage.setItem('totalpoints', totalpoints);

window.onload = function () {
  getRemainingQuestion();
  show();
};

// Assign All the questions to remainingQuestions variable
function getRemainingQuestion() {
  for (var i = 0; i < questions.length; i++) {
    remainingQuestions.push(questions[i]);
  }
}

// Display Questions
function show() {
  // Get Random Questions
  questionIdx = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
  console.log(questionIdx)

  // Selecting a question Id
  var question = document.getElementById('questions');

  // Assign options to that question
  var [first, second, third, fourth] = questionIdx.options;

  // List the Question data to page
  question.innerHTML = `
    <h2>Q${question_count + 1}. ${questionIdx.question}</h2>
    <ul class="option_group">
      <li class="option">${first}</li>
      <li class="option">${second}</li>
      <li class="option">${third}</li>
      <li class="option">${fourth}</li>
    </ul> 
  `;

  // Set Name to the button
  if (question_count === questions.length - 1) {
    document.querySelector('button.btn-next').innerHTML = 'Finish';
  } else {
    document.querySelector('button.btn-next').innerHTML = 'Next Question';
  }

  // Remove that random question from remainingQuestions
  var removeIdx = remainingQuestions.indexOf(questionIdx);
  console.log(removeIdx);
  remainingQuestions.splice(removeIdx, 1);
  question_count++;
  toggleActive();
}

// Clicking Next Button for next question
function next() {
  count++;
  // Save the selected option
  save_answer.push(questionIdx);

  // Check if the option is correct to increase score
  var user_answer = document.querySelector('li.option.active').innerHTML;
  if (user_answer === questionIdx.answer) {
    points += 1;
    sessionStorage.setItem('points', points);
  }

  // Check the question is last or not
  if (question_count === questions.length) {
    sessionStorage.setItem('answers', JSON.stringify(save_answer));
    location.href = 'end.html';
  }
  else {
    show();
  }
}

function toggleActive() {

  // Set active to the options
  var option = document.querySelectorAll('li.option');
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains('active')) {
          option[i].classList.remove('active');
        }
      }
      option[i].classList.add('active');
      questionIdx.value = count * 4 + i;
      console.log(questionIdx);
    };
  }
}
