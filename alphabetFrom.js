// Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.


// Exemples d’utilisation :
// $> python exo.py n
// nopqrstuvwxyz
// $>


// Attention : votre programme devra utiliser une boucle.



const a = 97;
const z = 122;
let letterChoose = "a";
console.log(letterChoose);
let letterToLowerCase = letterChoose.toLowerCase();
console.log(letterToLowerCase);
let myLetter = letterToLowerCase.charCodeAt();
console.log(myLetter);
let allAlphabet = "";

for(let i=myLetter + 1; i<=z; i++) {
  allAlphabet += String.fromCharCode(i)
};

console.log(allAlphabet);