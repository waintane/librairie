/* data */
let nombreDeLivre = document.querySelector(".nombre-de-livre p:last-child");
let nombreDeLivreLus = document.querySelector(".nombre-de-livre-lus p:last-child");
let nombreDeLivreNonLus = document.querySelector(".nombre-de-livre-non-lus p:last-child");

/*input*/
let titreLivre = document.querySelector("#titre");
let auteur = document.querySelector("#auteur");
let nombreDePage = document.querySelector("#page");
let lus = document.querySelector("#checkbox")
/*bouton*/
let boutonFerme = document.querySelector(".ferme");
let ouvrirAjouterLivre = document.querySelector(".ajout-livre button");
let ajouterLivre = document.querySelector("#add");

let livres = 1;
let livreLus = 1;
let livreNonLus =0;

nombreDeLivre.innerHTML = livres;
nombreDeLivreLus.innerHTML = livreLus;
nombreDeLivreNonLus.innerHTML = livreNonLus;

let visible = false;

/* check if checked */
function validate(){
    if(lus.checked === true){
        lus.value = true;
    }else if(lus.checked === false){
        lus.value = false;
    }
}

/* event listeners */
ouvrirAjouterLivre.addEventListener("click", ()=>{

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

ajouterLivre.addEventListener("click", ()=>{
    if(titreLivre.value.length >= 2 && auteur.value.length >= 2){
        nouveauLivre(titreLivre.value,auteur.value,nombreDePage.value,lus.value);
    }
})

/* function */

function nouveauLivre(titreLivre,auteur,nombreDePage,lus){
    const livre = new CreateBook(titreLivre,auteur,nombreDePage,lus);
    createContainer(livre);
}

function CreateBook(titreLivre,auteur,nombreDePage,lus){

    this.titre = titreLivre;
    this.auteur = auteur;
    this.nombreDePage = nombreDePage;
    this.lus = lus;

}
function createContainer(livre){

    let container = document.createElement("div");
    let titreContainer = document.createElement("p");
    let auteurContainer = document.createElement("p");
    let nombreDePageContainer = document.createElement("p");
    let lusContainer = document.createElement("p");

    titreContainer.innerHTML = "Titre : " + livre.titre;
    auteurContainer.innerHTML = "Auteur : " + livre.auteur;
    nombreDePageContainer.innerHTML = "Nombre de page : " + livre.nombreDePage;
    lusContainer.innerHTML = "lus : " + livre.lus;

    container.appendChild(titreContainer);
    container.appendChild(auteurContainer);
    container.appendChild(nombreDePageContainer);
    container.appendChild(lusContainer);

    container.classList.add("container");
    document.querySelector(".display-de-la-liste").appendChild(container);

    updateData();
    clear();

    
}
function clear(){
    console.log("mom")
    titreLivre.value = "";
    auteur.value = "";
    nombreDePage.value = "";
    lus.value = "";
}

function updateData(){
    if (lus.value == true){
        livreLus ++;
        nombreDeLivreLus.innerHTML = livreLus;
        console.log("bro");
    }
    else if(lus.value == false){
        livreNonLus ++;
        nombreDeLivreNonLus.innerHTML = livreNonLus;
        console.log("bro2");
    }
    livres ++;

    console.log(lus.value);
    nombreDeLivre.innerHTML = livres;
    
    
}