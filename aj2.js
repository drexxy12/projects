function analyzeSentence(sentence) {
    let length = 0;
    let numWords = 0;
    let numVowels = 0;

    const vowels = "aeiouAEIOU";
    const sentenceLength = sentence.length;

    for (let i = 0; i < sentenceLength; i++) {
        let char = sentence[i];
        length++;

        if (char === ' ') {
            numWords++;
        }

        if (vowels.includes(char)) {
            numVowels++;
        }
    }

    // Last word doesn't end with a space
    numWords++;

    return [length, numWords, numVowels];
}

// Example usage:
const inputSentence = "This is a sample sentence.";
const [length, numWords, numVowels] = analyzeSentence(inputSentence);

console.log("Length of the sentence:", length);
console.log("Number of words in the sentence:", numWords);
console.log("Number of vowels in the sentence:", numVowels);
