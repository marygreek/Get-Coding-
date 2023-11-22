// Pulled Data from local storage
const retrievedData = JSON.parse(localStorage.getItem('autoandtransportanswers',));
console.log(retrievedData);

// // Pulled values only from object in local storage
const values = Object.values(retrievedData);
console.log(values);

// // Create Function
function displayValues(retrievedData) {
    const summaryContainer = document.getElementById('summary-container');

    // Create Heading
    let content = '<p>Auto and Transport</p>';

    // Add values 
    content += values.join(', ') 

    // Update the content of the summary container
    summaryContainer.innerHTML = content;
}
// Call the function to display values
displayValues(retrievedData);
