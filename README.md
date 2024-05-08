## Configurer son editeur de code

Il est possible d'assurer un code JavaScript de qualité grace aux outils tels que [Prettier](https://prettier.io/), qui format le code (espacements, points virgules ect).

Avec la bonne configuration, VSCode permet de corriger automatiquement le format au moment de la sauvegarde du fichier `Ctrl + s`.

### Telecharger l'extension

Ouvrir le menu des extensions VSCode (`Ctrl + Shift + x` par defaut) et installer [VS Marketplace: Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Configurer le projet

Creer un dossier `.vscode` à la racine du projet. Ce dossier permet d'y stocker une configuration par projet.

Creer dans ce dossier un fichier `settings.json` et coller les valeurs suivantes

```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
}
```

On indique ici que l'editeur doit se servir de l'extension prettier en tant que formatter par defaut, on ajoute egalement une option pour lancer le formattage du code a la sauvegarde du fichier.

On cree ensuite un fichier `.prettierrc` a la racine du projet et on colle les valeurs suivantes

```json
{
    "printWidth": 110,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4
}
```

Ce sont les regles a appliquer par prettier lors du formattage.
