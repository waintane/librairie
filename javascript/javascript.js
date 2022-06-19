let nombreDeLivre = document.querySelector(".nombre-de-livre p:last-child");
let nombreDeLivreLus = document.querySelector(".nombre-de-livre-lus p:last-child");
let nombreDeLivreNonLus = document.querySelector(".nombre-de-livre-non-lus p:last-child");

let titreLivre = document.querySelector("#titre");
let Auteur = document.querySelector("#auteur");
let nombreDePage = document.querySelector("#page");
let lus = document.querySelector("#checkbox")

let boutonFerme = document.querySelector(".ferme");
let ajouterLivre = document.querySelector(".ajout-livre button");

let livres = 0;
let livreLus = 0;
let livreNonLus =0;

let visible = false;

function validate(){
    if(lus.checked === true){
        lus.value = true;
    }else if(lus.checked === false){
        lus.value = false;
    }
}

ajouterLivre.addEventListener("click", ()=>{

    if(visible === false){
        visible = true;
        document.querySelector(".form").style.visibility = "visible";
    }else{
        visible = false;
        document.querySelector(".form").style.visibility = "hidden";
    }

})
boutonFerme.addEventListener("click",   ()=>{
    if(visible === true){
        visible = false;
        document.querySelector(".form").style.visibility = "hidden";
    }
})
