// Define an asynchronous function to fetch data from a remote API
async function getMyStuffFromOverThere() {
    // Use the Fetch API to send a GET request to the specified URL
    // The 'await' keyword pauses the execution until the response is received
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    // Log the full HTTP response object to the console for inspection
    console.log("HTTP Response:", response);

    // Extract the JSON data from the response body
    // The 'await' keyword pauses execution until the JSON data is fully parsed
    const json = await response.json();

    // Log the parsed JSON data to the console
    console.log("JSON Data:", json);
}

// Call the function to execute the fetch request
getMyStuffFromOverThere();
