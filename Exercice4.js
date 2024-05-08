const chainedecaracteres = "master des trous du cul";

function lettersoccurences(chainedecaracteres) {

if (typeof chainedecaracteres !== "string") {
    console.error("Le paramètre doit être une chaîne de caractères !");
return;
}

const object = {};

for (let i = 0; i < chainedecaracteres.length; i++) {
    const letter = chainedecaracteres[i];

if (object[letter] === undefined) {
    object[letter] = 1;

} else {
    object[letter]++;
    }
    
}

return object;

}


console.log(lettersoccurences(chainedecaracteres));


