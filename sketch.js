
// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let gClassifier;

// A variable to hold the image we want to classify
let gImage;

function preload() {
  gClassifier = ml5.imageClassifier('MobileNet', modeleCharge);
  gImage = loadImage('img/hat.png');
}
function modeleCharge()
{
  //le modèle est chargé, on peut traiter la donnée
  // il faut classifier
  gClassifier.classify(gImage, classification_done)

}

function setup() 
{
 // il faut initialiser le canvas & dessiner l'image
 createCanvas(600, 600);
 background(128);
 image(gImage, 0, 0, 200, 200);
}

// A appeler à la fin de la classification 
function classification_done(error, results) {
  // cas d'erreur
  if (error) {
    console.error(error);
  }
  console.log(results);
  
// afficher le résultat en texte en rouge dessous l'image

}