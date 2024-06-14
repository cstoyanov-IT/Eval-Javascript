document.addEventListener("DOMContentLoaded", (event) => {
  modifStyle();
});

function modifStyle() {
  const liens = document.querySelectorAll("a");
  const strongs = document.querySelectorAll("strong");

  // Création d'une boucle forEach pour pouvoir changer agir et changer le style de chaque élément strong sur mouseover et mouseout des liens
  liens.forEach((lien) => {
    //Changement du style, couleur bleue des strong lors du passage sur le lien
    lien.addEventListener("mouseover", function() {
      strongs.forEach((strong) => {
        strong.style.color = "blue";
      });
    });
    // puis rétablissement du style lors du mouseout
    lien.addEventListener("mouseout", function() {
      strongs.forEach((strong) => {
        strong.style.color = "black";
      });
    });
  });
}
