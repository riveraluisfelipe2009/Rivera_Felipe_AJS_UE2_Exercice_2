"use strict";
// Nom Prénom : Rivera Alonzo Luis Felipe
// classe : I.FDA-P2A
// Objectif du projet : jeu de devinette avec Math.random et bootstrap
// Date : 14.10.2026

//fonction
function genererNombreAleatoire(min, max) {
    let nombreAleatoire = Math.floor(Math.random(min, max) * 100) + 1;

    return nombreAleatoire;
}

//initialisation
const bouton = document.getElementById("btn");
let saisie = document.getElementById("nombre");
let cent = document.getElementById("100");
let plusPetit = document.getElementById("Pluspetit");
let plusGrand = document.getElementById("plusGrand");
let fail = document.getElementById("fail");
let success = document.getElementById("success");

//fonction et boucle pour les essais
function devinette() {

    let essai = 10;
    let nombreAleatoire = genererNombreAleatoire(1, 100);
    let saisie = "";
    let nombre = 0;

    // reinitialiser erreur
    cent.textContent = "";
    cent.className = "";
    plusPetit.textContent = "";
    plusPetit.className = "";
    plusGrand.textContent = "";
    plusGrand.className = "";
    fail.textContent = "";
    fail.className = "";
    success.textContent = "";
    success.className = "";

    while (essai >= 0) {
        // reinitialiser erreur
        // cent.textContent = "";
        // cent.className = "";
        // plusPetit.textContent = "";
        // plusPetit.className = "";
        // plusGrand.textContent = "";
        // plusGrand.className = "";
        // fail.textContent = "";
        // fail.className = "";
        // success.textContent = "";
        // success.className = "";

        //saisie
        saisie = document.getElementById("nombre");
        saisie = Number(saisie.value);

        //entre 1 et 100 sinon redemandez
        if (nombre < 1 && nombre > 100) {
            cent.className = "alert alert-danger";
            cent.textContent = "Le nombre doit être entre 1 et 100";

            saisie = document.getElementById("nombre");
            saisie = Number(saisie.value);
        }

        // si le nombre à trouver est plus grand ou plus petit
        if (nombre > nombreAleatoire) {
            plusPetit.className = "alert alert-danger";
            plusPetit.textContent = "Le nombre est plus petit";
        }
        else if (nombre < nombreAleatoire) {
            plusGrand.className = "alert alert-danger";
            plusGrand.textContent = "Le nombre est plus grand";
        }

        if (nombre == nombreAleatoire) {
            success.className = "alert alert-success";
            success.textContent = "Félicitation, vous avez réussi !";
            break;
        }

        //message d'encouragement
        if (essai == 3) {
            alert("Courage, il ne vous reste que 3 essaie");
        }

        essai--;
    }

    //Terminez partie quand nombre est trouvé ou quand les 10 essais sont épuisés

    if (nombre != nombreAleatoire) {
        fail.className = "alert alert-danger";
        fail.textContent = "Dommage, le nombre était " + nombreAleatoire;
    }



    ///////////////////////////
    // DEUXIEME ESSAIE
    let choix = confirm("Voulez vous recommencez ?");

    if (choix) {
        //fonction
        function genererNombreAleatoire(min, max) {
            let nombreAleatoire = Math.floor(Math.random(min, max) * 100) + 1;

            return nombreAleatoire;
        }

        const nombreAleatoire = genererNombreAleatoire(1, 100);
        let saisie = "";
        let nombre = 0;

        //boucle pour les essais
        let essai = 10;
        while (essai >= 0) {
            //saisie
            saisie = document.getElementById("nombre");
            saisie = Number(saisie);

            //entre 1 et 100 sinon redemandez
            if (nombre < 1 && nombre > 100) {
                alert(" la saisie est un nombre entre 1 et 100");

                saisie = document.getElementById("nombre");
                saisie = Number(saisie);
            }

            // si le nombre à trouver est plus grand ou plus petit
            if (nombre > nombreAleatoire) {
                plusPetit.className = "alert alert-danger";
                plusPetit.textContent = "Le nombre est plus petit";
            }
            else if (nombre < nombreAleatoire) {
                plusGrand.className = "alert alert-danger";
                plusGrand.textContent = "Le nombre est plus grand";
            }

            if (nombre == nombreAleatoire) {
                success.className = "alert alert-success";
                success.textContent = "Félicitation, vous avez réussi !";
                break;
            }

            //message d'encouragement
            if (essai == 3) {
                alert("Courage, il ne vous reste que 3 essaie");
            }

            essai--;
        }

        //Terminez partie quand nombre est trouvé ou quand les 10 essais sont épuisés

        if (nombre != nombreAleatoire) {
            fail.className = "alert alert-danger";
            fail.textContent = "Dommage, le nombre était " + nombreAleatoire;
        }
    } else {
        alert("bien joué");
    }
}

// event au click
bouton.addEventListener("click", devinette);