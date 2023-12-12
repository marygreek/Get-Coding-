// Auto and Transport
const autoandtransport = JSON.parse(localStorage.getItem('autoandtransportanswers'));
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


// Home
// Retrieve data from local storage using the key 'homeanswers'
const homeData = JSON.parse(localStorage.getItem('homeanswers'));
// Function to display values for Home section
function displayHomeValues(retrievedData, container) {
  console.log('Displaying values:', retrievedData);  // Log the retrieved data

  const rentOrMortgageElement = container.querySelector('.home-rent-mortgage');
  const housingCostsElement = container.querySelector('.home-housing-costs');
  const insuranceCostsElement = container.querySelector('.home-insurance-costs');
  const sumOfCostsElement = container.querySelector('.home-sum-of-costs');

  // Set values for Home section
  rentOrMortgageElement.textContent = retrievedData.rentMort || 'N/A';
  housingCostsElement.textContent = isNaN(retrievedData.homePaymentAmount) ? 'N/A' : retrievedData.homePaymentAmount;
  insuranceCostsElement.textContent = isNaN(retrievedData.homeInsCost) ? 'N/A' : retrievedData.homeInsCost;

  // Calculate sum of costs
  const sumOfCosts = calculateHomeSumOfCosts(retrievedData);
  sumOfCostsElement.textContent = isNaN(sumOfCosts) ? 'N/A' : `$${sumOfCosts}`;
}

// Function to calculate sum of costs for Home section
function calculateHomeSumOfCosts(retrievedData) {
  const rentOrMortgage = parseFloat(retrievedData.rentOrMortgage) || 0;
  const housingCosts = parseFloat(retrievedData.housingCosts) || 0;
  const insuranceCosts = parseFloat(retrievedData.homeInsCost) || 0;

  return rentOrMortgage + housingCosts + insuranceCosts;
}

// Call the function to display values for each Home table
const homeTables = document.querySelectorAll('.Home-summary-container');
homeTables.forEach((table, index) => {
  const retrievedDataHome = JSON.parse(localStorage.getItem('homeanswers')) || {};
  console.log('Retrieved Data:', retrievedDataHome);  // Log the retrieved data
  displayHomeValues(retrievedDataHome, table);
});

// Bills and Utilities
// Retrieve data from local storage using the key 'billsandutilitiesanswers'
const billsandutilities = JSON.parse(localStorage.getItem('Billsandutilitiesanswers'));

// Bills and Utilities
// Function to display values for Bills and Utilities section
function displayBillsAndUtilitiesValues(retrievedData, container) {
  console.log('Retrieved Data from Local Storage:', retrievedData);

  const streamingServiceCostsElement = container.querySelector('.billsandutilities-streaming-service-costs');
  const utilityCostsElement = container.querySelector('.billsandutilities-utility-costs');
  const phoneCostsElement = container.querySelector('.billsandutilities-phone-costs');
  const haveRecurringCostsElement = container.querySelector('.billsandutilities-have-recurring-costs');
  const recurringCostsElement = container.querySelector('.billsandutilities-recurring-costs');
  const sumOfCostsElement = container.querySelector('.billsandutilities-sum-of-costs');

  // Set values for Bills and Utilities section
  streamingServiceCostsElement.textContent = isNaN(retrievedData.streamingServicecost) ? 'N/A' : retrievedData.streamingServicecost;
  utilityCostsElement.textContent = isNaN(retrievedData.utilitiesCost) ? 'N/A' : retrievedData.utilitiesCost;
  phoneCostsElement.textContent = isNaN(retrievedData.phoneCost) ? 'N/A' : retrievedData.phoneCost;
  haveRecurringCostsElement.textContent = retrievedData.otherBills || 'N/A';
  recurringCostsElement.textContent = isNaN(retrievedData.otherBillscost) ? 'N/A' : retrievedData.otherBillscost;

  // Calculate sum of costs
  const sumOfCosts = calculateBillsAndUtilitiesSumOfCosts(retrievedData);
  sumOfCostsElement.textContent = isNaN(sumOfCosts) ? 'N/A' : `$${sumOfCosts}`;
}

// Function to calculate sum of costs for Bills and Utilities section
function calculateBillsAndUtilitiesSumOfCosts(retrievedData) {
  const streamingServiceCosts = parseFloat(retrievedData.streamingServicecost) || 0;
  const utilityCosts = parseFloat(retrievedData.utilitiesCost) || 0;
  const phoneCosts = parseFloat(retrievedData.phoneCost) || 0;
  const recurringCosts = parseFloat(retrievedData.otherBillscost) || 0;

  return streamingServiceCosts + utilityCosts + phoneCosts + recurringCosts;
}

// Call the function to display values for each Bills and Utilities table. 
const billsAndUtilitiesTables = document.querySelectorAll('.billandutilities-summary-container');
billsAndUtilitiesTables.forEach((table, index) => {
  const retrievedDataBillsandUtilites = JSON.parse(localStorage.getItem('Billsandutilitiesanswers')) || {};
  console.log('Retrieved Data:', retrievedDataBillsandUtilites);  // Log the retrieved data
  displayBillsAndUtilitiesValues(retrievedDataBillsandUtilites, table);
});

// Fees and Charges
// Retrieve data from local storage using the key 'Feesandchargesanswers'
const feesAndChargesData = JSON.parse(localStorage.getItem('Feesandchargesanswers'));

// Function to display values for Fees and Charges section
function displayFeesAndChargesValues(retrievedData, container) {
  console.log('Displaying values:', retrievedData);  // Log the retrieved data

  const feesAndChargesElement = container.querySelector('.feesandcharges-fees-charges');
  const feesAndChargesCostsElement = container.querySelector('.feesandcharges-fees-charges-costs');
  const sumOfCostsElement = container.querySelector('.feesandcharges-sum-of-costs');

  // Set values for Fees and Charges section
  feesAndChargesElement.textContent = retrievedData.feesAndcharges || 'N/A';
  feesAndChargesCostsElement.textContent = isNaN(retrievedData.feesAndchargescost) ? 'N/A' : `$${retrievedData.feesAndchargescost}`;

  // Calculate sum of costs
  const sumOfCosts = calculateFeesAndChargesSumOfCosts(retrievedData);
  sumOfCostsElement.textContent = isNaN(sumOfCosts) ? 'N/A' : `$${sumOfCosts}`;
}

// Function to calculate sum of costs for Fees and Charges section
function calculateFeesAndChargesSumOfCosts(retrievedData) {
  const feesAndChargesCosts = parseFloat(retrievedData.feesAndchargescost) || 0;

  return feesAndChargesCosts;
}

// Call the function to display values for each Fees and Charges table
const feesAndChargesTables = document.querySelectorAll('.feesancharges-summary-container');
feesAndChargesTables.forEach((table, index) => {
  const retrievedDataFeesAndCharges = JSON.parse(localStorage.getItem('Feesandchargesanswers')) || {};
  console.log('Retrieved Data:', retrievedDataFeesAndCharges);  // Log the retrieved data
  displayFeesAndChargesValues(retrievedDataFeesAndCharges, table);
});

// Transfers
// Retrieve data from local storage using the key 'Transfersanswers'
const transfersData = JSON.parse(localStorage.getItem('Transfersanswers'));

// Function to display values for Transfers section
function displayTransfersValues(retrievedData, container) {
  console.log('Displaying values:', retrievedData);  // Log the retrieved data

  const haveTransfersElement = container.querySelector('.transfers-have-transfers');
  const transfersCostsElement = container.querySelector('.transfers-transfers-costs');
  const sumOfCostsElement = container.querySelector('.transfers-sum-of-costs');

  // Set values for Transfers section
  haveTransfersElement.textContent = retrievedData.transfers ? 'Yes' : 'No';
  transfersCostsElement.textContent = isNaN(retrievedData.transferCost) ? 'N/A' : `$${retrievedData.transferCost}`;

  // Calculate sum of costs
  const sumOfCosts = calculateTransfersSumOfCosts(retrievedData);
  sumOfCostsElement.textContent = isNaN(sumOfCosts) ? 'N/A' : `$${sumOfCosts}`;
}

// Function to calculate sum of costs for Transfers section
function calculateTransfersSumOfCosts(retrievedData) {
  const transfersCosts = parseFloat(retrievedData.transferCost) || 0;

  return transfersCosts;
}

// Call the function to display values for each Transfers table
const transfersTables = document.querySelectorAll('.Transfers-container');
transfersTables.forEach((table, index) => {
  const retrievedDataTransfers = JSON.parse(localStorage.getItem('Transfersanswers')) || {};
  console.log('Retrieved Data:', retrievedDataTransfers);  // Log the retrieved data
  displayTransfersValues(retrievedDataTransfers, table);
});

// Food and Dining
// Retrieve data from local storage using the key 'Foodanddininganswers'
const foodAndDiningData = JSON.parse(localStorage.getItem('Foodanddininganswers'));

// Function to display values for Food and Dining section
function displayFoodAndDiningValues(retrievedData, container) {
  console.log('Displaying values:', retrievedData);  // Log the retrieved data

  const havePetElement = container.querySelector('.foodanddining-have-pet');
  const petCostsElement = container.querySelector('.foodanddining-pet-costs');
  const groceryCostsElement = container.querySelector('.foodanddining-grocery-costs');
  const diningCostsElement = container.querySelector('.foodanddining-dining-costs');
  const sumOfCostsElement = container.querySelector('.foodanddining-sum-of-costs');

  // Set values for Food and Dining section
  havePetElement.textContent = retrievedData.pets ? 'Yes' : 'No';
  petCostsElement.textContent = isNaN(retrievedData.petcost) ? 'N/A' : `$${retrievedData.petcost}`;
  groceryCostsElement.textContent = isNaN(retrievedData.groceryCost) ? 'N/A' : `$${retrievedData.groceryCost}`;
  diningCostsElement.textContent = isNaN(retrievedData.diningBudget) ? 'N/A' : `$${retrievedData.diningBudget}`;

  // Calculate sum of costs
  const sumOfCosts = calculateFoodAndDiningSumOfCosts(retrievedData);
  sumOfCostsElement.textContent = isNaN(sumOfCosts) ? 'N/A' : `$${sumOfCosts}`;
}

// Function to calculate sum of costs for Food and Dining section
function calculateFoodAndDiningSumOfCosts(retrievedData) {
  const petCosts = parseFloat(retrievedData.petcost) || 0;
  const groceryCosts = parseFloat(retrievedData.groceryCost) || 0;
  const diningCosts = parseFloat(retrievedData.diningBudget) || 0;

  return petCosts + groceryCosts + diningCosts;
}

// Call the function to display values for each Food and Dining table
const foodAndDiningTables = document.querySelectorAll('.foodanddining-summary-container');
foodAndDiningTables.forEach((table, index) => {
  const retrievedDataFoodAndDining = JSON.parse(localStorage.getItem('Foodanddininganswers')) || {};
  console.log('Retrieved Data:', retrievedDataFoodAndDining);  // Log the retrieved data
  displayFoodAndDiningValues(retrievedDataFoodAndDining, table);
});

// Personal Care
// Retrieve data from local storage using the key 'Personalcareanswers'
const personalCareData = JSON.parse(localStorage.getItem('Personalcareanswers'));

// Function to display values for Personal Care section
function displayPersonalCareValues(retrievedData, container) {
  console.log('Displaying values:', retrievedData);  // Log the retrieved data

  const havePersonalCareCostsElement = container.querySelector('.personalcare-have-costs');
  const personalCareCostsElement = container.querySelector('.personalcare-personal-costs');
  const sumOfCostsElement = container.querySelector('.personalcare-sum-of-costs');

  // Set values for Personal Care section
  havePersonalCareCostsElement.textContent = retrievedData.personalCarepmts ? 'Yes' : 'No';
  personalCareCostsElement.textContent = isNaN(retrievedData.personalCarecost) ? 'N/A' : `$${retrievedData.personalCarecost}`;

  // Calculate sum of costs
  const sumOfCosts = calculatePersonalCareSumOfCosts(retrievedData);
  sumOfCostsElement.textContent = isNaN(sumOfCosts) ? 'N/A' : `$${sumOfCosts}`;
}

// Function to calculate sum of costs for Personal Care section
function calculatePersonalCareSumOfCosts(retrievedData) {
  const personalCareCosts = parseFloat(retrievedData.personalCarecost) || 0;

  return personalCareCosts;
}

// Call the function to display values for each Personal Care table
const personalCareTables = document.querySelectorAll('.personalcare-summary-container');
personalCareTables.forEach((table, index) => {
  const retrievedDataPersonalCare = JSON.parse(localStorage.getItem('Personalcareanswers')) || {};
  console.log('Retrieved Data:', retrievedDataPersonalCare);  // Log the retrieved data
  displayPersonalCareValues(retrievedDataPersonalCare, table);
});

// Work Income 
// Retrieve data from local storage using the key 'Workincomeanswers'
const workIncomeData = JSON.parse(localStorage.getItem('Workincomeanswers'));

// Function to display values for Work Income section
function displayWorkIncomeValues(retrievedData, container) {
  console.log('Displaying work income values:', retrievedData);  // Log the retrieved data

  const employedElement = container.querySelector('.workincome-employment-income');
  const employmentPayElement = container.querySelector('.workincome-employement-income-pay');
  const sumOfCostsElement = container.querySelector('.workincome-sum-of-costs');

  // Set values for Work Income section
  employedElement.textContent = retrievedData.Employed ? 'Yes' : 'No';
  employmentPayElement.textContent = isNaN(retrievedData.employmentPay) ? 'N/A' : `$${retrievedData.employmentPay}`;

  // Calculate sum of costs
  const sumOfCosts = calculateWorkIncomeSumOfCosts(retrievedData);
  sumOfCostsElement.textContent = isNaN(sumOfCosts) ? 'N/A' : `$${sumOfCosts}`;
}

// Function to calculate sum of costs for Work Income section
function calculateWorkIncomeSumOfCosts(retrievedData) {
  const employmentPay = parseFloat(retrievedData.employmentPay) || 0;

  return employmentPay;
}

// Call the function to display values for the Work Income table
const workIncomeTables = document.querySelectorAll('.workincome-summary-container');
workIncomeTables.forEach((table, index) => {
  const retrievedDataWorkIncome = JSON.parse(localStorage.getItem('Workincomeanswers')) || {};
  console.log('Retrieved Work Income Data:', retrievedDataWorkIncome);  // Log the retrieved data
  displayWorkIncomeValues(retrievedDataWorkIncome, table);
});

// Misc Income 
// Misc Income
// Retrieve data from local storage using the key 'Miscincomeanswers'
const miscIncomeData = JSON.parse(localStorage.getItem('Miscincomeanswers'));

// Function to display values for Misc Income section
function displayMiscIncomeValues(retrievedData, container) {
  console.log('Displaying misc income values:', retrievedData);  // Log the retrieved data

  const miscIncomeElement = container.querySelector('.miscincome-misc-income');
  const miscIncomePayElement = container.querySelector('.miscincome-micsincome-pay');
  const sumOfCostsElement = container.querySelector('.miscincome-sum-of-costs');

  // Set values for Misc Income section
  miscIncomeElement.textContent = retrievedData.miscIncome ? 'Yes' : 'No';
  miscIncomePayElement.textContent = isNaN(retrievedData.miscIncomepay) ? 'N/A' : `$${retrievedData.miscIncomepay}`;

  // Calculate sum of costs
  const sumOfCosts = calculateMiscIncomeSumOfCosts(retrievedData);
  sumOfCostsElement.textContent = isNaN(sumOfCosts) ? 'N/A' : `$${sumOfCosts}`;
}

// Function to calculate sum of costs for Misc Income section
function calculateMiscIncomeSumOfCosts(retrievedData) {
  const miscIncomePay = parseFloat(retrievedData.miscIncomepay) || 0;

  return miscIncomePay;
}

// Call the function to display values for the Misc Income table
const miscIncomeTables = document.querySelectorAll('.miscincome-summary-container');
miscIncomeTables.forEach((table, index) => {
  const retrievedDataMiscIncome = JSON.parse(localStorage.getItem('Miscincomeanswers')) || {};
  console.log('Retrieved Misc Income Data:', retrievedDataMiscIncome);  // Log the retrieved data
  displayMiscIncomeValues(retrievedDataMiscIncome, table);
});

// Function to calculate and update total expenses
function calculateAndUpdateTotalExpenses() {
  const autoAndTransportData = JSON.parse(localStorage.getItem('autoandtransportanswers')) || {};
  const homeData = JSON.parse(localStorage.getItem('homeanswers')) || {};
  const billsAndUtilitiesData = JSON.parse(localStorage.getItem('Billsandutilitiesanswers')) || {};
  const feesAndChargesData = JSON.parse(localStorage.getItem('Feesandchargesanswers')) || {};
  const transfersData = JSON.parse(localStorage.getItem('Transfersanswers')) || {};
  const foodAndDiningData = JSON.parse(localStorage.getItem('Foodanddininganswers')) || {};
  const personalCareData = JSON.parse(localStorage.getItem('Personalcareanswers')) || {};

  // Calculate sum of expenses from each category
  const sumOfExpenses =
    calculateSumOfCosts(autoAndTransportData) +
    calculateHomeSumOfCosts(homeData) +
    calculateBillsAndUtilitiesSumOfCosts(billsAndUtilitiesData) +
    calculateFeesAndChargesSumOfCosts(feesAndChargesData) +
    calculateTransfersSumOfCosts(transfersData) +
    calculateFoodAndDiningSumOfCosts(foodAndDiningData) +
    calculatePersonalCareSumOfCosts(personalCareData);

  // Save the total expenses in local storage
  localStorage.setItem('totalExpenses', sumOfExpenses);

  return sumOfExpenses;
}

// Function to calculate and update total income
function calculateAndUpdateTotalIncome() {
  const workIncomeData = JSON.parse(localStorage.getItem('Workincomeanswers')) || {};
  const miscIncomeData = JSON.parse(localStorage.getItem('Miscincomeanswers')) || {};

  // Calculate sum of income from each category
  const sumOfIncome =
    calculateWorkIncomeSumOfCosts(workIncomeData) +
    calculateMiscIncomeSumOfCosts(miscIncomeData);

  // Save the total income in local storage
  localStorage.setItem('totalIncome', sumOfIncome);

  return sumOfIncome;
}

// Call the functions to calculate and update total expenses and total income
const totalExpenses = calculateAndUpdateTotalExpenses();
const totalIncome = calculateAndUpdateTotalIncome();

// Function to update the Budget Summary
function updateBudgetSummary() {
  // Retrieve data from local storage
  const expenses = parseFloat(localStorage.getItem('totalExpenses')) || 0;
  const income = parseFloat(localStorage.getItem('totalIncome')) || 0;

  // Calculate Under/Over Budget
  const underOverBudget = income - expenses;

  // Display values in the Budget Summary table
  const expensesElement = document.querySelector('.budgetsummary-expenses');
  const incomeElement = document.querySelector('.budgetsummary-income');
  const underOverElement = document.querySelector('.budgetsummary-under-over');

  expensesElement.textContent = `$${expenses.toFixed(2)}`;
  incomeElement.textContent = `$${income.toFixed(2)}`;
  underOverElement.textContent = `$${underOverBudget.toFixed(2)}`;

  // You can also add additional styling based on whether it's over or under budget
  if (underOverBudget >= 0) {
    underOverElement.style.color = 'green'; // or any other styling you prefer
  } else {
    underOverElement.style.color = 'red'; // or any other styling you prefer
  }
}

// Call the function to update the Budget Summary
updateBudgetSummary();
