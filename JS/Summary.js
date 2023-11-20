const answersJSON = localStorage.getItem("autoandtransportanswers");
const answers = JSON.parse(answersJSON);
const summaryContainer = document.getElementById("Autosummary-container");
let summaryHTML = "<h2>Auto and Transportation</h2><ul>";

for (const key in answers) {
  summaryHTML += `<li><strong>${key}:</strong> ${answers[key]}</li>`;
}

summaryHTML += "</ul>";
summaryContainer.innerHTML = summaryHTML;
