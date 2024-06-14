document.addEventListener("DOMContentLoaded", (event) => {
  startCalc();
});

function startCalc() {
  let form = document.getElementById("calculette");
  let erreurs = document.getElementById("erreurs");
  let resultatElement = document.getElementById("resultat");
  let opa = document.getElementById("opa");
  let opb = document.getElementById("opb");
  let operateurs = document.getElementById("operateurs");

  form.addEventListener("submit", (e) => {
    
    // Empèche le rafraichissement de la page

    e.preventDefault();     
    // partie gestion des messages d'erreur
    let erreursMessage = "";

    erreurs.innerHTML = "";
    erreurs.style.display = "none";

    erreursMessage += validerOperandeA();
    erreursMessage += validerOperandeB();
    erreursMessage += validerOperateurs();

    if (erreursMessage != "") {
      erreurs.innerHTML = erreursMessage + "<br><br>";
      erreurs.style.display = "block";
    } else {
      let calculResultat;
      if (operateurs.value === "ad") {
        calculResultat = Number(opa.value) + Number(opb.value);
      } else if (operateurs.value === "so") {
        calculResultat = Number(opa.value) - Number(opb.value);
      } else if (operateurs.value === "mu") {
        calculResultat = Number(opa.value) * Number(opb.value);
      } else if (operateurs.value === "di") {
        if (Number(opb.value) !== 0) {
          calculResultat = Number(opa.value) / Number(opb.value);
        
          // Message d'erreur si on tente une division par 0 ou si l'opération n'est pas reconnue 

        } else {
          erreurs.innerHTML = "<br>La division par zéro n'est pas autorisée";
          erreurs.style.display = "block";
          return; 
        }
      } else {
        erreurs.innerHTML = "<br>Opération non reconnue";
        erreurs.style.display = "block";
        return;       }
      // Affiche le résultat et passe le block en display: block
      resultatElement.innerHTML = "\t" + calculResultat;
      resultatElement.style.display = "block";
    }
  });
}
// fonctions pour vérification message d'erreur
function validerOperandeA() {
  let erreurs = "";
  let opa = document.getElementById("opa");

  if (opa.value === "") {
    erreurs = "<br>Le champ opérande A est obligatoire";
  }

  return erreurs;
}

function validerOperandeB() {
  let erreurs = "";
  let opb = document.getElementById("opb");

  if (opb.value === "") {
    erreurs = "<br>Le champ opérande B est obligatoire";
  }

  return erreurs;
}

function validerOperateurs() {
  let erreurs = "";
  let operateurs = document.getElementById("operateurs");

  if (operateurs.value === "none") {
    erreurs = "<br>Le champ opérateurs est obligatoire";
  }

  return erreurs;
}
