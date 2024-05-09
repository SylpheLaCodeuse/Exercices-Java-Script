const stupid = [];
//mon tableau qui est vide
//-note à moi-même : si je le rempli, je ne dois pas oublier les ""-

function testTab() {
    console.log('You made it !');
}
//ma fonction

function executeIfArrayEmpty(array, callback) {
    if (Array.isArray(array))
        if (array.length === 0) {
            //vérifie que le tableau est bien un tableau
            // vérifie que le premier paramètre est un tableau vide
            if (typeof callback === 'function') {
                //vérifie que le deuxième paramètre est une fonction
                callback();
            } else {
                console.error("c'est pas une fonction !");
            }
            //si la fonction n'en est pas une
        } else {
            console.error("c'est pas vide !");
        }
    //si le tableau n'est pas vide
    else {
        console.error("Ce n'est pas un tableau !");
    }
    //si le tableau n'en est pas un
}

executeIfArrayEmpty(stupid, testTab);
