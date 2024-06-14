document.addEventListener("DOMContentLoaded", (event) => {
  startList();
});

function startList() {
  // Récupérer les éléments li 
    let listeLi = document.querySelectorAll('#connectes .popup-mot');
    let popup = document.getElementById('popup');
    let titreH2 = popup.querySelector('h2');
    let boutonFermerPopup = document.getElementById('close');
    
    // Ajouter l'événement click sur les li
    listeLi.forEach(li => {
        li.addEventListener('click', () => {
            let name = li.getAttribute('data-popup');
            // Afficher la popup
            popup.style.display = 'block';
            // Changer le texte de la balise h2
            titreH2.textContent = name;
            // Modifier l'image
            popup.querySelector(".photo").src = name + ".png";
            popup.querySelector(".photo").alt = name;
        });
    });
    
    // Ajouter l'événement click sur le bouton pour fermer la popup
    boutonFermerPopup.addEventListener('click', () => {
        // Display none sur popup
        popup.style.display = 'none';
});
}
