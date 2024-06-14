document.addEventListener("DOMContentLoaded", (event) => {
  recupLink();
});
function recupLink() {
  // récupération de l'élément google grace a son ID
  let lien = document.getElementById("google");
  // récupération des attributs de google grace à .getAttribute
  let attrHref = lien.getAttribute('href');
  let attrHreflang = lien.getAttribute('hreflang');
  let attrRel = lien.getAttribute('rel');
  let attrTarget = lien.getAttribute('target');
  let attrType = lien.getAttribute('type');
  
  // Récupération de l'attribut href du nouveau lien et modification par le site de l'IT Akademy
  let nouveauLien = document.getElementById("newlink").href = "https://www.it-akademy.fr/";

  console.log(attrHref, attrHreflang, attrRel, attrTarget, attrType);
  console.log(nouveauLien);
}
