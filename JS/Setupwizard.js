const questions = [
  {
    question: "Do you own any vehicles that you still make payments on?",
    type: "options",
    options: ["Yes", "No"],
    key:"ownVehicle"
  },
  {
    question: "How Many?",
    type: "text",
    key:"vehicleCount"
    // If multiple vehicles - sub wizard for each - ex: Vehicle 1 and Vehicle 2
  },
  {
    question: "How often do you pay?",
    type: "options",
    options: ["Monthly", "Bi-weekly", "Weekly", "Bi-monthly", "Other"],
    key:"paymentFrequency"
  },

  {
    question: "How much is your payment?",
    type: "text",
    key:"paymentAmount"
  },

  {
    question: "When is your next payment?",
    type: "date",
    key:"paymentDate"
  },
  {
    question: "How much do you pay for car insurance for all vehicles per month?",
    type: "text",
    key:"InsCost"
  },
  {
    question: "On average, how much do you pay for gas for all vehicles per month?",
    type: "text",
    key:"gasCost"
  },
];
const value = {
  ownVehicle :0,
  vehicleCount :0,
  paymentFrequency :0,
  paymentAmount :0,
  paymentDate :0,
  InsCost :0,
  gasCost :0,
}
let currentQuestionIndex = 0;
const questionContainer = document.getElementById("question-container");
const questionLabel = document.getElementById("question-label");
const answerDropdown = document.getElementById("answer-dropdown");
const answerInput = document.getElementById("answer-input");
const nextButton = document.getElementById("next-button");
const lastButton = document.getElementById("last-button");

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

displayCurrentQuestion();

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
      displayCurrentQuestion();
  } else {
      confirm("No more questions. Survey complete!");
  }
});

lastButton.addEventListener("click", () => {
  currentQuestionIndex--;

  if (currentQuestionIndex >= 0) {
      displayCurrentQuestion();
  } else {
      alert("You are at the beginning of the survey.");
  }
});
