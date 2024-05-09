// Ex5: Créer une fonction qui prend en paramètre un nombre de centimes (type number)
// et qui retourne une chaine de caractères correspondant à la somme en euros.
// Par exemple, si on lui passe 100 elle devra retourner "1€", 150 et elle devra retourner "1€50" ect.
// - La fonction prend un parametre un nombre
// - La fonction vérifie que le parametre est bien un nombre, elle renvoi une *Erreur* le cas échéant
// - La fonction renvoi une chaine de caractere correspondant a la somme en euros suffixée du caractere '€'
//
// # Tester la fonction avec les *payloads* suivants
//  - 100
//  - 150
//  - "8000"
//  - "hello"
//  - null
//  - undefined

function centsInEuros(cents) {
    if (typeof cents !== 'number') {
        throw new Error("Erreur c'est pas juste!");
    }
    const euros = Math.floor(cents / 100);
    let resteCentimes = String(cents % 100);

    if (resteCentimes.length < 2) {
        resteCentimes = '0' + resteCentimes;
    }

    return String(euros) + '.' + resteCentimes + '€';
}

console.log(centsInEuros(100));
console.log(centsInEuros(150));

try {
    console.log(centsInEuros('8000'));
} catch (e) {
    console.error(e);
}

try {
    console.log(centsInEuros('hello'));
} catch (e) {
    console.error(e);
}

try {
    console.log(centsInEuros(null));
} catch (e) {
    console.error(e);
}

try {
    console.log(centsInEuros(undefined));
} catch (e) {
    console.error(e);
}
