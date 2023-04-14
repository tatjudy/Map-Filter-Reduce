let adultUsersContainer = document.querySelector(".adult-users-container ul");
let sumContainer = document.querySelector(".sum-container p");

const users = [
    {
        "name": "Jane Smith",
        "age": 16,
        "email": "jane@example.com"
    },
    {
        "name": "John Doe",
        "age": 27,
        "email": "john@example.com"
    },
    {
        "name": "Mary Poppins",
        "age": 38,
        "email": "poppins@example.com"
    },
];

/***** MAP and FILTER *****/

// Filter the JSON object to only show users over the age of 18
const adultUsers = users.filter(user => user.age > 18);
console.log(adultUsers);
/***** adultUsers returns 2 Objects:
    - John Doe
    - Mary Poppins 
*****/

/*****
  Code to display on the front end
  Insert the function displayAdultUsers to the container in the HTML
  Map through the adultUsers object, and for each (adult) user, call the function displayAdultUsers
*****/
adultUsersContainer.innerHTML = adultUsers.map((user) => displayAdultUsers(user)).join("");

/* Function to map through the adultUsers and create list items */
function displayAdultUsers(adultUsers) {
    return `
    <li>${adultUsers.name}</li>
  `;
}

// MAP and REDUCE

// Create new array of ages
const ages = users.map(user => user.age);

/*
  Reducer Function
    Iterates through the array and returns a single value
    In this example, we iterate through the array with addition
    
    First Iteration: We take the first value (16), of the array and add it to the second (27)
    Second Iteration: Result (16 + 27 = 43) of the previous iteration and add it to the third value (43 + 38 = 81)
*/
const sumOfAges = ages.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

sumContainer.innerHTML = sumOfAges;