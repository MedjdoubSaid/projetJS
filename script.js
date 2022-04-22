 console.log('connecté !');
//  je sélectionne et  je stocke
//  je sélectionne les viniettes

const vignettes = document.querySelectorAll('.small');
console.log(vignettes);

// je sélectionne image grand format
const fullImag = document.getElementById('full');
console.log(fullImag);

vignettes.forEach((item)=>{
    console.log('ce message apparait pour chaque item du tableau');

    item.addEventListener('click',function(){
        //console.log(item,'vignette cliquée');
        // je récupère le chemin d'accès de cette image
        let imgSource = item.getAttribute('src');
        console.log(imgSource);
        // j'attribue la nouvelle url à l'image grand format 
        fullImag.setAttribute('src',imgSource);

    })
});
let panier = 0;
// je sélectionne et stocke le bouton btn-add
const btn = document.querySelector('.btn-add');
console.log(btn);

// je sélectione la DIV panier-container
const panierContainer = document.querySelector('.panier-container');
// j'affiche le contenu
panierContainer.innerText = "Vou avez" + " " + panier +  "un produit dans votre panier";
// j'affiche le contenu

// j'incrémente le panier
btn.addEventListener('click',function(){
    console.log('bouton cliqué');
    // j'ajoute 1 au compteur
    panier = panier + 1 ;
    console.log(panier);
    if(panier < 2) {
        panierContainer.innerText = "Vou avez" + " " + panier + " " + "produit dans votre panier";
    }else{
        panierContainer.innerText = "Vou avez" + " " + panier +  " " + "produits dans votre panier";
    }
    
});



////////////////////////////////////////////////////////////////////////////////
/* console.log('connecté'); 
// Je sélectionne l'image grand format
const fullImg = document.getElementById('full'); 
console.log(fullImg); 

// Je sélectionne les vignettes
const vignettes = document.querySelectorAll('.small'); 
console.log(vignettes); 

// Je sélectionne le bouton
const btn = document.querySelector('.btn-add'); 
console.log(btn); 

// J'initialise le panier
let panier = 0; 

// Je sélectionne la DIV panier-container
const panierContainer = document.querySelector('.panier-container'); 

vignettes.forEach((item)=>{
    console.log('ce message apparaît pour chaque item du tableau');

    item.addEventListener('click', function(){
        // console.log(item, 'vignette cliquée'); 
        let imgSource = item.getAttribute('src'); 
        console.log(imgSource); 
        // J'attribue la nouvelle url à l'image grand format
        fullImg.setAttribute('src', imgSource);
    }); 
}); // fermeture de la forEach


btn.addEventListener('click', function(){
    console.log('bouton cliqué'); 
    // J'ajoute 1 au compteur
    panier = panier + 1 ; 
    console.log(panier); 
    // J'affiche le contenu
    if( panier < 2) {
        panierContainer.innerText = "Vous avez" + " " + panier + " " + "produit dans votre panier"; 
    }else{
        panierContainer.innerText = "Vous avez" + " " + panier + " " + "produits dans votre panier"; 
    }



}); 




 */