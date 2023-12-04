const autoandtransport = JSON.parse(localStorage.getItem('autoandtransportanswers'));
// const autoandtransport = JSON.parse(localStorage.getItem('homeanswers'));
// // const autoandtransport = JSON.parse(localStorage.getItem('Billsandutilitiesanswers'));
// // const autoandtransport = JSON.parse(localStorage.getItem('Feesandchargesanswers'));
// // const autoandtransport = JSON.parse(localStorage.getItem('Transfersanswers'));
// // const autoandtransport = JSON.parse(localStorage.getItem('Foodanddininganswers'));
// // const autoandtransport = JSON.parse(localStorage.getItem('Personalcareanswers'));
// // const autoandtransport = JSON.parse(localStorage.getItem('Workincomeanswers'));
// // const autoandtransport = JSON.parse(localStorage.getItem('Miscincomeanswers'));


// Auto and Transport
// Function to display values
function displayAutoAndTransportValues(retrievedData, container) {
  console.log('Displaying values:', retrievedData);  // Log the retrieved data

  const vehicleCountElement = container.querySelector('.autoandtransport-vehicle-count');
  const vehicleCostsElement = container.querySelector('.autoandtransport-vehicle-costs');
  const insuranceCostsElement = container.querySelector('.autoandtransport-insurance-costs');
  const gasCostsElement = container.querySelector('.autoandtransport-gas-costs');
  const sumOfCostsElement = container.querySelector('.autoandtransport-sum-of-costs');

  // Set values for Auto and Transport section
  vehicleCountElement.textContent = retrievedData.vehicleCount || 'N/A';
  vehicleCostsElement.textContent = isNaN(retrievedData.carPaymentAmount) ? 'N/A' : retrievedData.carPaymentAmount;
  insuranceCostsElement.textContent = isNaN(retrievedData.carInsCost) ? 'LS' : retrievedData.carInsCost;
  gasCostsElement.textContent = isNaN(retrievedData.gasCost) ? 'LS' : retrievedData.gasCost;

  // Calculate sum of costs
  const sumOfCosts = calculateSumOfCosts(retrievedData);
  sumOfCostsElement.textContent = isNaN(sumOfCosts) ? 'N/A' : `$${sumOfCosts}`;
}

// Function to calculate sum of costs
function calculateSumOfCosts(retrievedData) {
  const vehicleCosts = parseFloat(retrievedData.carPaymentAmount) || 0;
  const insuranceCosts = parseFloat(retrievedData.carInsCost) || 0;
  const gasCosts = parseFloat(retrievedData.gasCost) || 0;

  return vehicleCosts + insuranceCosts + gasCosts;
}

// Call the function to display values for each Auto and Transport table
const autoAndTransportTables = document.querySelectorAll('.autoandtransport-summary-container');
autoAndTransportTables.forEach((table, index) => {
  const retrievedDataAutoAndTransport = JSON.parse(localStorage.getItem('autoandtransportanswers')) || {};
  console.log('Retrieved Data:', retrievedDataAutoAndTransport);  // Log the retrieved data
  displayAutoAndTransportValues(retrievedDataAutoAndTransport, table);
});


// // Home
// // Function to display values
// function displayHomeValues(retrievedData, container) {
//   console.log('Displaying values:', retrievedData);  // Log the retrieved data

//   const rentMortgageElement = container.querySelector('.home-rent-mortgage');
//   const housingCostsElement = container.querySelector('.home-home-costs');
//   const homeinsuranceElement = container.querySelector('.home-homeinsurance-costs');
 
//   // Set values for Auto and Transport section
//   rentMortgageElement.textContent = retrievedData.rentMort || 'N/A';
//   housingCostsElement.textContent = isNaN(retrievedData.homePaymentAmount) ? 'N/A' : retrievedData.homePaymentAmount;
//   homeinsuranceElement.textContent = isNaN(retrievedData.homeInsCost) ? 'LS' : retrievedData.homeInsCost;
 
//   // Calculate sum of costs
//   const sumOfCosts = calculateSumOfCosts(retrievedData);
//   sumOfCostsElement.textContent = isNaN(sumOfCosts) ? 'N/A' : `$${sumOfCosts}`;
// }

// // Function to calculate sum of costs
// function calculateSumOfCosts(retrievedData) {
//   const housingCosts = parseFloat(retrievedData.homeCost) || 0;
//   const homeInsuranceCosts = parseFloat(retrievedData.homeinsCost) || 0;

//   return vehicleCosts + homeCost + homeinsCost;
// }

// // Call the function to display values for each Auto and Transport table
// const homeTables = document.querySelectorAll('.home-summary-container');
// home.forEach((table, index) => {
//   const retrievedDataHome = JSON.parse(localStorage.getItem('homeanswers')) || {};
//   console.log('Retrieved Data:', retrievedDataHome);  // Log the retrieved data
//   displayHomeValues(retrievedDataHome, table);
// });

