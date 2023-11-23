// Pulled Data from local storage
// Write this for each key 
const autoandtransport = JSON.parse(localStorage.getItem('autoandtransportanswers',));
const home = JSON.parse(localStorage.getItem('homeanswers',));
const retrievedData = JSON.parse(localStorage.getItem('autoandtransportanswers',));
const retrievedData = JSON.parse(localStorage.getItem('autoandtransportanswers',));
const retrievedData = JSON.parse(localStorage.getItem('autoandtransportanswers',));
const retrievedData = JSON.parse(localStorage.getItem('autoandtransportanswers',));
const retrievedData = JSON.parse(localStorage.getItem('autoandtransportanswers',));
const retrievedData = JSON.parse(localStorage.getItem('autoandtransportanswers',));
const retrievedData = JSON.parse(localStorage.getItem('autoandtransportanswers',));


console.log(retrievedData)
console.log(autoandtransport)

// // Pulled values only from object in local storage
const values = Object.values(retrievedData);
// console.log(values);



// // Create Function
function displayValues(retrievedData) {
    const summaryContainer = document.getElementById('table.autandtransport');
    const summaryContainer = document.getElementById('table.home');
    const summaryContainer = document.getElementById('table');
    const summaryContainer = document.getElementById('table');
    const summaryContainer = document.getElementById('table');
    const summaryContainer = document.getElementById('table');
    const summaryContainer = document.getElementById('table');
    const summaryContainer = document.getElementById('table');
    const summaryContainer = document.getElementById('table');

    // Create Heading
    let content = '<p>Auto and Transport</p>';

    // Add values 
    content += values.join(', ') 

    // Update the content of the summary container
    summaryContainer.innerHTML = content;
}
// Call the function to display values
displayValues(retrievedData);
