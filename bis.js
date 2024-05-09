// Creer une fonction qui supprime tout les 4 d'un tableau de nombre
// Creer une fonction qui supprime tout les chiffres impairs d'un tableau de nombre
// Creer une fonction qui additionne tout les nombres d'un tableau de 88 (tous les nb+88)
// Creer une fonction qui additionne tout les nombres d'un tableau du nombre précédent

// Aide toi de la fonction "map"
// Aide toi de la fonction "filter" => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const tab = [4, 5, 4, 62, 3, 48];

function deleteAllFours(tab) {
    return tab.filter((number) => number !== 4);
}

const tabSansQuatre = deleteAllFours(tab);

console.log(tabSansQuatre);
