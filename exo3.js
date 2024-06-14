document.addEventListener("DOMContentLoaded", (event) => {
  modifStyle();
});

function modifStyle() {
  //Récupération des deux éléments paragraphe et bouton pour application de modification.
  const paragraphe = document.querySelector("#text");
  const button = document.querySelector("#jsstyle");
    //Changement du style, couleur bleue, fontSize, fontFamily du paragraphe lors du passage sur le lien
    button.addEventListener("click", () => {
        paragraphe.style.color = "blue";
        paragraphe.style.fontSize = "14pt";
        paragraphe.style.fontFamily = "Comic Sans MS";
      });
}
