let score = 0;


let highScore = [
  {
    name: "Name",
    score: 5,
  },

  {
    name: "josh",
    score: 4,
  },
]

let questions = [{
  question: "what is your name ",
  answer: "name"
}, {
  question: "My favorite teacher ",
  answer: "tanany"
},
{
  question: "Where do I work? ",
  answer: "google"
},
{
  question: "what is your favorite color ",
  answer: "blue"
},
{
  question: "what is my favorite dish ",
  answer: "biryani"
}
];

const nameFull = () => {
  let userName = prompt("What's your name? ");

  console.log("Welcome " + userName);
}

const playGround = (question, answer) => {
  let userAnswer = prompt(question);

  if (userAnswer === answer) {
    console.log("aye!! you got it right");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

const gameLoop = () => {
  for (let i in questions) {
    let currentQuestion = questions[i];
    playGround(currentQuestion.question, currentQuestion.answer)
  }
}

const scoreHigh = () => {
  console.log("your score is ", score);

  console.log("High scores ");

  highScore.map(score => console.log(score.name, " : ", score.score))
}


nameFull();
gameLoop();
scoreHigh();
