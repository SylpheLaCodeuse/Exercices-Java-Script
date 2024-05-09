// Creer une fonction qui additionne tout les nombres d'un tableau de 88 (tous les nb+88)
const tab = [4, 5, 4, 62, 3, 48];

function addNumberEightyEight(tab) {
    return tab.map((number) => number + 88);
}

const tabPlusEightyEight = addNumberEightyEight(tab);

console.log(tabPlusEightyEight);
