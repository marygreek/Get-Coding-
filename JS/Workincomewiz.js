const questions = [
  {
    question: "Do you receive income from employment or self employment?",
    type: "options",
    options: ["Yes", "No"],
    key:"Employed"
  },
  {
    question: "How much do you get paid? Please click next if you have no payments.",
    type: "text",
    key:"employmentPay"
    // If multiple vehicles - sub wizard for each - ex: Vehicle 1 and Vehicle 2
  },
  // {
  //   question: "How often do you pay?",
  //   type: "options",
  //   options: ["Monthly", "Bi-weekly", "Weekly", "Bi-monthly"],
  //   key:"carPaymentfreq"
  // },

  // {
  //   question: "How much is your payment?",
  //   type: "text",
  //   key:"carPaymentAmount"
  // },

  // {
  //   question: "When is your next payment?",
  //   type: "date",
  //   key:"carPaymentDate"
  // },
  // {
  //   question: "How much do you pay for car insurance for all vehicles per month?",
  //   type: "text",
  //   key:"carInsCost"
  // },
  // {
  //   question: "How often do you pay?",
  //   type: "options",
  //   options: ["Monthly", "Bi-weekly", "Weekly", "Bi-monthly"],
  //   key:"carInsfreq"
  // },
  // {
  //   question: "How much is your payment?",
  //   type: "text",
  //   key:"carInsAmount"
  // },
  // {
  //   question: "On average, how much do you pay for gas for all vehicles per month?",
  //   type: "text",
  //   key:"gasCost"
  // },
];

const Workincomeanswers = {
  Employed :0,
  employmentPay :0,
  // carPaymentfreq :0,
  // carPaymentAmount :0,
  // carPaymentDate :0,
  // carInsCost :0,
  // carInsfreq :0,
  // carInsAmount:0,
  // gasCost :0,
};

let currentQuestionIndex = 0;
const questionContainer = document.getElementById("question-container");
const questionLabel = document.getElementById("question-label");
const answerDropdown = document.getElementById("answer-dropdown");
const answerInput = document.getElementById("answer-input");
const nextButton = document.getElementById("next-button");
const lastButton = document.getElementById("last-button");
const skipButton = document.getElementById("skip-button");

function displayCurrentQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionLabel.textContent = currentQuestion.question;
  
  if (currentQuestion.type === "options") {
    answerDropdown.style.display = "block";
    answerInput.style.display = "none";
    answerDropdown.innerHTML = "";

    currentQuestion.options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      answerDropdown.appendChild(optionElement);
    });
  } else {
    answerDropdown.style.display = "none";
    answerInput.style.display = "block";
    answerInput.value = ""; 
    answerInput.type = currentQuestion.type; 
  }
}

function saveAnswer() {
  const currentQuestion = questions[currentQuestionIndex];
  if (currentQuestion.type === "options") {
    Workincomeanswers[currentQuestion.key] = answerDropdown.value;
  } else {
    Workincomeanswers[currentQuestion.key] = answerInput.value;
  }
}

  displayCurrentQuestion();

nextButton.addEventListener("click", () => {
  saveAnswer();
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayCurrentQuestion();
  } else {
    const answersJSON = JSON.stringify(Workincomeanswers);
    console.log("Final answers JSON:", answersJSON);
    localStorage.setItem("Workincomeanswers", answersJSON);
    // confirm("Thank you for completing the Automotive and Transport section. Please choose to save and continue or save and exit.");
  }
});

lastButton.addEventListener("click", () => {
  saveAnswer();
  currentQuestionIndex--;

  if (currentQuestionIndex >= 0) {
    displayCurrentQuestion();
  } else {
    alert("You are at the beginning of the survey.");
  }
});

const skipsSection = document.getElementById("skip-button");
skipButton.addEventListener("click", () => {
  window.location.href = "Miscincome.html";
});
const saveContinueButton = document.getElementById("save-continue-button");
saveContinueButton.addEventListener("click", () => {
  window.location.href = "Miscincome.html";
});
const saveexitButton = document.getElementById("save-exit-button");
saveexitButton.addEventListener("click", () => {
window.location.href = "NewUserIntro.html";
});

let Workincomeanswers_serialized = JSON.stringify(Workincomeanswers);
console.log(Workincomeanswers_serialized);

localStorage.setItem("Workincomeanswers", Workincomeanswers_serialized);

let Workincomeanswers_deserialized = JSON.parse(localStorage.getItem("Workincomeanswers"));

