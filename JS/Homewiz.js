const questions = [
  // {
  //   question: "Do you currently pay rent of for a mortgage?",
  //   type: "options",
  //   options: ["Yes", "No"],
  //   key:"housingType"
  // },
  {
    question: "Do you pay rent or for a mortgage?",
    type: "options",
    options: ["Rent", "Mortgage"],
    key:"rentMort"
    // If multiple vehicles - sub wizard for each - ex: Vehicle 1 and Vehicle 2
  },
  // {
  //   question: "How often do you pay?",
  //   type: "options",
  //   options: ["Monthly", "Bi-weekly", "Weekly", "Bi-monthly"],
  //   key:"homePaymentfreq"
  // },

  {
    question: "How much do you pay each month?",
    type: "text",
    key:"homePaymentAmount"
  },

  // {
  //   question: "When is your next payment?",
  //   type: "date",
  //   key:"homePaymentDate"
  // },
  {
    question: "How much do you pay for home or renters insurance each month?  ",
    type: "text",
    key:"homeInsCost"
  },
  // {
  //   question: "How often do you pay?",
  //   type: "options",
  //   options: ["Monthly", "Bi-weekly", "Weekly", "Bi-monthly"],
  //   key:"homeInsfreq"
  // },
  // {
  //   question: "How much is your payment?",
  //   type: "text",
  //   key:"homeInsAmount"
  // },
  
];

const homeanswers = {
  // housingType :0,
  rentMort :0,
  // homePaymentfreq :0,
  homePaymentAmount :0,
  // homePaymentDate :0,
  homeInsCost :0,
  // homeInsfreq :0,
  // homeInsAmount:0,
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
    homeanswers[currentQuestion.key] = answerDropdown.value;
  } else {
    homeanswers[currentQuestion.key] = answerInput.value;
  }
}

  displayCurrentQuestion();

  nextButton.addEventListener("click", () => {
    saveAnswer();
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayCurrentQuestion();
    } else {
      const answersJSON = JSON.stringify(homeanswers);
      console.log("Final answers JSON:", answersJSON);
      localStorage.setItem("homeanswers", answersJSON);
  
      nextButton.style.display = "none";
      lastButton.style.display = "none";
  
      const saveContinueButton = document.createElement("button");
      saveContinueButton.id = "save-continue-button";
      saveContinueButton.textContent = "Save and Continue";
      saveContinueButton.addEventListener("click", () => {
  
        console.log("Data saved to local storage");
        window.location.href = "Billsandutilitieswiz.html";
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
  window.location.href = "Billsandutilitieswiz.html";							
});							
const saveContinueButton = document.getElementById("save-continue-button");							
saveContinueButton.addEventListener("click", () => {							
  window.location.href = "Billsandutilitieswiz.html";							
});							
const saveexitButton = document.getElementById("save-exit-button");
saveexitButton.addEventListener("click", () => {
window.location.href = "NewUserIntro.html";
});

let homeanswers_serialized = JSON.stringify(homeanswers);
console.log(homeanswers_serialized);

localStorage.setItem("homeanswers", homeanswers_serialized);

let homeanswers_deserialized = JSON.parse(localStorage.getItem("homeanswers"));

