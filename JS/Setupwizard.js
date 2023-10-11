const questions = [
    {
      question: "Do you currently pay for rent or a mortgage?:",
      options: ["Rent", "Mortgage", "None"],
    },
    {
      question: "How much do you pay?:",
      options: ["Insert Amount"],
    },
    {
      question: "How often do you pay?:",
      options: ["Monthly", "Bi-weekly", "Weekly", "Bi-monthly", "Other"],
    },

    { question: "When is your next payment?:", options: ["Insert Date"] },
  ];

  let currentQuestionIndex = 0;
  const questionContainer = document.getElementById("question-container");
  const questionLabel = document.getElementById("question-label");
  const answerDropdown = document.getElementById("answer-dropdown");
  const nextButton = document.getElementById("next-button");

  function displayCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionLabel.textContent = currentQuestion.question;
    answerDropdown.innerHTML = "";

    currentQuestion.options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      answerDropdown.appendChild(optionElement);
    });
  }

  displayCurrentQuestion();

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayCurrentQuestion();
    } else {
      alert("No more questions. Survey complete!");
    }
  });