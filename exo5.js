document.addEventListener("DOMContentLoaded", (event) => {
  startList();
});
function startList() {
// Récupérer l'élément liste et creer l'élément li et l'élément a
const liste = document.getElementById('liste');
const nouveauLi = document.createElement('li');
const nouveauA = document.createElement('a');
// Nommer le lien Item 4
const nouveauATexte = document.createTextNode('Item 4');

// Définir le href du lien
nouveauA.href = 'https:it-akademy.fr/';


// Ajouter le texte au lien hypertexte
nouveauA.appendChild(nouveauATexte);

// Ajouter un lien au li
nouveauLi.appendChild(nouveauA);

// Ajouter le li à la liste
liste.appendChild(nouveauLi);


} 
