// Creer une fonction qui additionne tout les nombres d'un tableau du nombre précédent
const tab = [4, 5, 4, 62, 3, 48];

function addNumberBefore(tab) {
    let sum = 0;
    return tab.map((number) => (sum += number));
}

const finalTabAdded = addNumberBefore(tab);

console.log(finalTabAdded);
