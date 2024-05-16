function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If divisible by 100 and not divisible by 400, it's not a leap year
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Test the function
let year = 2024;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
