function analyzeSentence(sentence) {
    // Initialize counters
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Loop through each character of the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        // Increment sentence length for each character
        sentenceLength++;

        // Check if the character is a space
        if (char === ' ') {
            // Increment word count for each space
            wordCount++;
        }

        // Check if the character is a vowel (case-insensitive)
        if ('aeiouAEIOU'.includes(char)) {
            // Increment vowel count for each vowel
            vowelCount++;
        }
    }

    // Increment word count by 1 to account for the last word
    wordCount++;

    // Display the results
    console.log("Length of the sentence:", sentenceLength);
    console.log("Number of words in the sentence:", wordCount);
    console.log("Number of vowels in the sentence:", vowelCount);
}

// Example usage:
let sentence = "This is an example sentence.";
analyzeSentence(sentence);
jnlno