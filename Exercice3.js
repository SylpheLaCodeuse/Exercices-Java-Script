const tableau = [2, 4, "jambon", 8, null, 10]
//mon tableau

function AddPairNumbers(tableau) {
    let somme = 0;
        for(let numbers of tableau) {

        if (numbers % 2 === 0) {
    somme += numbers;
            } 
        }
//ma fonction qui n'additionne que les nombres pairs

if (Array.isArray(tableau));
//vérifie que le tableau est bien un tableau

if (typeof tableau === 'number');
//vérifie que les valeurs sont des nombres

    return somme;
//renvoie la somme
    }

console.log(AddPairNumbers(tableau));
