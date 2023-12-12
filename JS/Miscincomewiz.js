const questions = [
  {
    question: "Do you receive any types on income not related to employment? Ex: Rental Income, Tax credits",
    type: "options",
    options: ["Yes", "No"],
    key:"miscIncome"
  },
  {
    question: "How much do you get paid? Please click next if you have no payments.",
    type: "text",
    key:"miscIncomepay"
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

const Miscincomeanswers = {
  miscIncome :0,
  miscIncomepay :0,
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
    Miscincomeanswers[currentQuestion.key] = answerDropdown.value;
  } else {
    Miscincomeanswers[currentQuestion.key] = answerInput.value;
  }
}

displayCurrentQuestion();

nextButton.addEventListener("click", () => {
  saveAnswer();
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayCurrentQuestion();
  } else {
    const answersJSON = JSON.stringify(Miscincomeanswers);
    console.log("Final answers JSON:", answersJSON);
    localStorage.setItem("Miscincomeanswers", answersJSON);

    nextButton.style.display = "none";
    lastButton.style.display = "none";

    const saveContinueButton = document.createElement("button");
    saveContinueButton.id = "save-continue-button";
    saveContinueButton.textContent = "View Budget";
    saveContinueButton.addEventListener("click", () => {

      console.log("Data saved to local storage");
      window.location.href = "Summary.html";
    });
    questionContainer.appendChild(saveContinueButton);

    const saveExitButton = document.createElement("button");
    saveExitButton.id = "save-exit-button";
    saveExitButton.textContent = "Save and Exit";
    saveExitButton.addEventListener("click", () => {

      console.log("Data saved to local storage");
      window.location.href = "NewUserIntro.html";
    });
    questionContainer.appendChild(saveExitButton);
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
  window.location.href = "Summary.html";
});
const saveContinueButton = document.getElementById("save-continue-button");
saveContinueButton.addEventListener("click", () => {
  window.location.href = "Summary.html";
});

const saveexitButton = document.getElementById("save-exit-button");
saveexitButton.addEventListener("click", () => {
window.location.href = "NewUserIntro.html";
});

let Miscincomeanswers_serialized = JSON.stringify(Miscincomeanswers);
console.log(Miscincomeanswers_serialized);

localStorage.setItem("Miscincomeanswers", Miscincomeanswers_serialized);

let Miscincomeanswers_deserialized = JSON.parse(localStorage.getItem("Miscincomeanswers"));

