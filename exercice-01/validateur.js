"use strict";
// Nom Prénom : Rivera Alonzo Luis Felipe
// classe : I.FDA-P2A
// Objectif du projet : utiliser bootstrap et faire un validateur de mot de passe
// Date : 14.10.2026

//btn
const bouton = document.getElementById("btn");

//recup mdp
const motDePasse = document.getElementById("exampleInputPassword1");

// initialisationr
let errorCaractere = document.getElementById("caractere");
let errorMajuscule = document.getElementById("majuscule");
let errorMinuscule = document.getElementById("minuscule");
let errorChiffre = document.getElementById("chiffre");
let errorSpecial = document.getElementById("special");
let errorGlobal = document.getElementById("errorGlobal");
let success = document.getElementById("success");

//au click
bouton.addEventListener("click", (event) => {
    event.preventDefault();

    //recup mdp
    const motDePasse = document.getElementById("exampleInputPassword1");

    //déclaration
    let caractere = false;
    let majuscule = false;
    let minuscule = false;
    let chiffre = false;
    let hasSpecial = false;

    //fonction
    function validerMotDePasse(motDePasse) {
        //au moins 8 caractères
        if (motDePasse.length >= 8) {
            //console.error("au moins 8 caractères");
            caractere = true;
        }

        //une majuscule
        for (let i = 0; i < motDePasse.length; i++) {
            //Si vous trouvez une majuscule ( "A" – "Z" )
            if (motDePasse[i] >= "A" && motDePasse[i] <= "Z") {
                majuscule = true;
            }
        }

        //une minuscule
        for (let i = 0; i < motDePasse.length; i++) {
            //Si vous trouvez une majuscule ( "a" – "z" )
            if (motDePasse[i] >= "a" && motDePasse[i] <= "z") {
                minuscule = true;
            }
        }

        //un chiffre
        for (let i = 0; i < motDePasse.length; i++) {
            //Si vous trouvez un chiffre ( [0-9] )
            if (motDePasse[i] >= [0] && motDePasse[i] <= [9]) {
                chiffre = true;
            }
        }

        //un caractère spécial (!@#$%^&*)
        const caracteresSpeciaux = "!@#$%^&*";
        for (const char of caracteresSpeciaux) {
            if (motDePasse.includes(char)) {
                hasSpecial = true;
            }
        }
    }

    validerMotDePasse(motDePasse.value);

    //verife
    if (caractere == false) {
        errorCaractere.className = "alert alert-danger"
        errorCaractere.textContent = "Le mot de passe doit avoir au moins 8 caractere"
    }
    if (majuscule == false) {
        errorMajuscule.className = "alert alert-danger";
        errorMajuscule.textContent = "Le mot de passe doit avoir au moins une majuscule";
    }
    if (minuscule == false) {
        errorMinuscule.className = "alert alert-danger";
        errorMinuscule.textContent = "Le mot de passe doit avoir au moins une minuscule";
    }
    if (chiffre == false) {
        errorChiffre.className = "alert alert-danger";
        errorChiffre.textContent = "Le mot de passe doit avoir au moins un chiffre";
    }
    if (hasSpecial == false) {
        errorSpecial.className = "alert alert-danger";
        errorSpecial.textContent = "Le mot de passe doit avoir au moins un caractère special";
    }

    //valide ou invalide
    if (caractere == false || majuscule == false || minuscule == false || chiffre == false || hasSpecial == false) {
        errorGlobal.className = "alert alert-danger";
        errorGlobal.textContent = "Le mot de passe est invalide";
    }
    else {
        errorCaractere.textContent = ""
        errorMajuscule.textContent = "";
        errorMinuscule.textContent = "";
        errorChiffre.textContent = "";
        errorSpecial.textContent = "";
        success.className = "alert alert-success";
        success.textContent = "Le mot de passe est valide";
        errorGlobal.className = "alert alert-success";
        errorGlobal.textContent = "Le mot de passe est valide";
    }
})