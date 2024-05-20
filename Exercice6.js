function censure(chaineDeCaracteres, motsBannis) {
    if (!Array.isArray(motsBannis)) {
        throw new Error('Erreur!');
    }
    for (const word of motsBannis) {
        const regex = new RegExp(word, 'gi');
        chaineDeCaracteres = chaineDeCaracteres.replace(regex, '*'.repeat(word.length));
    }

    return chaineDeCaracteres;
}

console.log(censure('Tu es un gros naze qui pu la mort', ['naze', 'mort']));
console.log(censure("T'es moche et ca me trou les origamis", ['moche', 'origamis'], 'x'));
console.log(censure("Jamais je n'aurais cru que tu pouvais être si con", ['Jamais'], 254789954));
console.log(censure('Je suis un texte sans mot bannis', []));
