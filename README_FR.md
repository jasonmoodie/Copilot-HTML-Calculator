# Calculatrice Bleue Mignonne
*Note : Cette traduction française a été créée avec GitHub Copilot.* 🤖

Une calculatrice charmante avec un visage animé qui réagit à vos calculs ! Cette calculatrice présente un design bleu mignon avec des yeux qui clignent et des animations de bouche.

Dans cet atelier, vous apprendrez à utiliser GitHub Copilot pour améliorer une calculatrice HTML, avec peu ou pas d'expérience en programmation requise. Grâce à des exercices guidés et à l'assistance alimentée par l'IA, vous ajouterez des fonctions mathématiques et découvrirez comment GitHub Copilot peut accélérer votre flux de travail de développement.

![Calculatrice Bleue Mignonne](./assets/cute-calculator.png)


## Table des Matières
- [Fonctionnalités Actuelles](#fonctionnalités-actuelles)
- [Comment Utiliser](#comment-utiliser)
- [Ajout de Fonctions Mathématiques](#ajout-de-fonctions-mathématiques)
    - [1. Exercice Principal : Ajouter un Bouton Pi (π)](#1-exercice-principal--ajouter-un-bouton-pi-π)
    - [2. Utiliser le Mode Agent pour Toutes les Fonctions Avancées 🤖](#2-utiliser-le-mode-agent-pour-toutes-les-fonctions-avancées-🤖)
- [Structure des Fichiers](#structure-des-fichiers)
- [Idées de Personnalisation Avancées](#idées-de-personnalisation-avancées)
- [Gestion des Erreurs](#gestion-des-erreurs)


## Fonctionnalités Actuelles

- Opérations arithmétiques de base (+, -, ×, ÷)
- Fonction d'effacement
- Support du clavier
- Visage animé avec des yeux qui clignent et des mouvements de bouche
- Design responsive
- Gestion des erreurs pour la division par zéro

## Comment Utiliser

1. Ouvrez `MyCalculator/index.html` dans votre navigateur web
2. Cliquez sur les boutons ou utilisez votre clavier pour effectuer des calculs
3. Regardez le visage de la calculatrice s'animer pendant que vous travaillez !

### Raccourcis Clavier
- Nombres : 0-9
- Opérations : +, -, *, /
- Calculer : Entrée ou =
- Effacer : Échap, C, ou c

## Ajout de Fonctions Mathématiques

La calculatrice est conçue pour être facilement extensible. Ci-dessous se trouvent des instructions détaillées pour ajouter un bouton Pi, exposant, racine carrée et fonctions au carré.

### 1. Exercice Principal : Ajouter un Bouton Pi (π)

#### Étape 1 : Ajouter le Bouton HTML
Dans `MyCalculator/index.html`, trouvez le bouton vide avec le commentaire `<!--add pi button-->` et ajoutez le code suivant en utilisant GitHub Copilot :

```html
 <!--add pi button-->
<button class="btn number" data-value="π">π</button>
```

#### Étape 2 : Ajouter la Méthode d'Entrée Pi
Dans `MyCalculator/script.js`, trouvez le commentaire `// Add pi input support to 5 decimal places` et la nouvelle méthode à la classe Calculator :

```javascript
    // Add pi input support to 5 decimal places
    inputPi() {
    this.displayValue = Math.PI.toFixed(5).toString();
    this.waitingForOperand = false;
    }
```

#### Étape 3 : Mettre à Jour JavaScript pour Gérer Pi
Dans `MyCalculator/script.js`, modifiez le commentaire `// Add support for pi` dans la méthode `handleInput` pour gérer la valeur π. Ajoutez la condition après la vérification de nombre existante :

```javascript
handleInput(value) {
    if (this.isNumber(value)) {
        this.inputNumber(value);
    // Add support for pi
    } else if (value === 'π') {
        this.inputPi();
    } else if (this.isOperator(value)) {
        this.inputOperator(value);
    } else if (value === '=') {
        this.calculate();
    } else if (value === 'clear') {
        this.clear();
    }
    this.updateDisplay();
    this.animateFace();
}
```

#### Étape 4 : Ouvrir la Calculatrice HTML et Tester
Pour vérifier que le bouton Pi fonctionne, ouvrez `MyCalculator/index.html` dans votre navigateur et cliquez sur le bouton π. L'affichage devrait montrer `3.14159`. Testez des calculs comme `π + 2` pour vous assurer qu'il fonctionne correctement.

---
### 2. Utiliser le Mode Agent pour Toutes les Fonctions Avancées 🤖
Vous pouvez également utiliser le mode agent de GitHub Copilot pour implémenter toutes les fonctions avancées en une fois :

1. Ouvrez le panneau de chat GitHub Copilot et réglez-le sur le mode "Agent".
2. Fournissez des instructions pour ajouter l'exposant (x^y), la racine carrée (√) et le carré (x²) :
   ```
   Ajouter des fonctions mathématiques avancées à la calculatrice : exposant (x^y), racine carrée (√) et carré (x²).
   
   Pas obligatoire, mais vous pourriez avoir besoin d'ajouter ce qui suit à votre prompt pour vous assurer que tous les changements sont effectués :
   - Ajouter des boutons pour chaque fonction dans les emplacements de boutons vides
   - Exposant : Bouton étiqueté "x^y" avec data-value="^", mettre à jour la méthode isOperator, ajouter un cas dans performCalculation
   - Racine carrée : Bouton avec le symbole "√", ajouter la méthode inputSquareRoot avec gestion d'erreur pour les nombres négatifs
   - Carré : Bouton étiqueté "x²", ajouter la méthode inputSquared utilisant Math.pow()
   - Mettre à jour la méthode handleInput pour gérer toutes les nouvelles opérations
   - Assurer un style et une fonctionnalité appropriés
   ```
3. L'agent implémentera tous les changements pour que vous les examiniez. Testez la calculatrice minutieusement et affinez votre prompt du mode agent selon les besoins.
4. Une fois satisfait, sauvegardez les changements et testez les nouvelles fonctions dans votre navigateur.

## Fichiers Modifiés Complets

Après avoir implémenté tous les changements, la disposition de vos boutons ressemblera à ceci :

```
C  7  8  9
÷  4  5  6
×  1  2  3
+  0  π  =
-  √  x² x^y
```

## Structure des Fichiers

```
├── README.md               # Ce fichier
├── assets/                 # Ressources d'images
│   └── cute-calculator.png # Capture d'écran de la calculatrice
└── MyCalculator/           # Fichiers de l'application calculatrice
    ├── index.html          # Structure HTML principale
    ├── script.js           # Logique de la calculatrice et animations
    └── style.css           # Style et design mignon
    └── LICENSE.txt         # Informations de licence
```

## Idées de Personnalisation Avancées

- **Fonctions trigonométriques** : Ajouter des boutons sin, cos, tan
- **Logarithmes** : Ajouter des fonctions log, ln
- **Fonctions mémoire** : Ajouter M+, M-, MR, MC
- **Notation scientifique** : Affichage amélioré pour les très grands/petits nombres
- **Historique** : Garder une trace des calculs précédents
- **Thèmes** : Ajouter différents schémas de couleurs

## Gestion des Erreurs

La calculatrice inclut une gestion d'erreur de base :
- La division par zéro retourne 0
- La racine carrée de nombres négatifs affiche "Error"
- Les grands nombres sont affichés en notation scientifique

## Compatibilité Navigateur

Cette calculatrice fonctionne dans tous les navigateurs modernes qui supportent :
- Classes ES6
- CSS Grid/Flexbox
- Écouteurs d'Événements DOM

Profitez de votre calculatrice mignonne améliorée ! 🧮✨
