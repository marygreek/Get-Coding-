const questions = [
        {
          question: "Do you own any vehicles that you still make payments on?",
          type:"options",
          options: ["Yes", "No"],
        },
        {
          question: "How Many?",
          type: "number",
  // If multiple vehicles - sub wizard for each - ex: Vehcile 1 and Vehicle 2
        },
        {
          question: "How often do you pay?",
          type: "options",
          options: ["Monthly", "Bi-weekly", "Weekly", "Bi-monthly", "Other"],
        },
  
        {
          question: "How much is your payment?",
          type:"number",
        },
  
        { question: "When is your next payment?", 
          type: "text",
        },
        { question: "How much do you pay for car insurance for all vehicles per month?",
          type:"number",
        },
        {
          question: "On average, how much do you pay for gas for all vehicles per month?",
          type:"number",
        },
      ];

  // After last question - Thank you for submitting your auto and transportation expenses. Let's move on to home expenses 
  // Add button - Save and exit / Save and continue

      let currentQuestionIndex = 0;
      const questionContainer = document.getElementById("question-container");
      const questionLabel = document.getElementById("question-label");
      const answerDropdown = document.getElementById("answer-dropdown");
      const nextButton = document.getElementById("next-button");
      const lastButton = document.getElementById("last-button");
  
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

      displayCurrentQuestion();
  
      lastButton.addEventListener("click", () => {
        currentQuestionIndex--;
  
        if (currentQuestionIndex < questions.length) {
          displayCurrentQuestion();
        } else {
          alert("No more questions. Survey complete!");
        }
      });

    //   window.onload = function () { 
    //     startWizard();
    //   }
    //   function startWizard() {
    //     const questionContainer = document.getElementById("questioncontainer"); 			
    //     const answerDropdown = document.getElementById("answerdropdown");		
    // ​
    //     const questionFromArray = questions[1];	
    //     console.log(questionFromArray.question); 
    // ​
    //     questionContainer.innerHTML = questionFromArray.question; 
    // ​
    //   }
    
    // {  if(questionFromArray.type == "number"){ 
    //       const numberInput = "<input type='number' >";
    //       answerDropdown.innerHTML = numberInput;
    // ​
    //     }else if(questionFromArray.type == "text"){
    //       const textInput = "<input type='text' >";
    //       answerDropdown.innerHTML = textInput;
    //     }else if(questionFromArray.type == "options");
    //   }