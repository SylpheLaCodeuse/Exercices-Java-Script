// Creer une fonction qui supprime tout les chiffres impairs d'un tableau de nombre
const tab = [4, 5, 4, 62, 3, 48];

function deleteAllPair(tab) {
    return tab.filter((number) => number % 2 !== 0);
}

const tabSansPair = deleteAllPair(tab);

console.log(tabSansPair);
