const payload = "J'adore les moules";
const payload2 = "J'adore aussi les escaliers";

function findLetterOccurences(str) {
    const letters = {};

    for (const value of str) {
        if (typeof letters[value] !== 'number') {
            letters[value] = 1;
        } else {
            letters[value] = letters[value] + 1;
        }
    }

    return letters;
}

console.log(findLetterOccurences(payload));
console.log(findLetterOccurences(payload2));
