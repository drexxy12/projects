function calculateTicketPrice(age) {
    let ticketPrice;

    if (age <= 12) {
        ticketPrice = 10;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = 15;
    } else {
        ticketPrice = 20;
    }

    return ticketPrice;
}

// Prompt the user to enter their age
let age = parseInt(prompt("Please enter your age:"));

// Calculate the ticket price based on the user's age
let price = calculateTicketPrice(age);

// Display the ticket price
console.log("The price of the movie ticket for age " + age + " is $" + price);
