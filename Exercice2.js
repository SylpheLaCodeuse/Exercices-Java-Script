const stupid = [];
//mon tableau qui est vide
//-note à moi-même : si je le rempli, je ne dois pas oublier les ""-

function testTab() {
    console.log('You made it !');
}
//ma fonction

function executeIfArrayEmpty(array, callback) {
    if (Array.isArray(array)) {
        //vérifie que le tableau est bien un tableau
        if (array.length === 0) {
            // vérifie que le premier paramètre est un tableau vide
            if (typeof callback === 'function') {
                //vérifie que le deuxième paramètre est une fonction
                return callback();
            }
        }
    }

    console.error("Ce n'est pas un tableau !");
}

executeIfArrayEmpty([], testTab);
