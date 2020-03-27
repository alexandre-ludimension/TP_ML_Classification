
// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let gClassifier;

// A variable to hold the image we want to classify
let gImage;

function preload() {
  gClassifier = ml5.imageClassifier('MobileNet');
  gImage = loadImage('img/hat.png');
}
function modeleCharge()
{
  //le modèle est chargé, on peut traiter la donnée
  // il faut classifier

}

function setup() {
 // il faut initialiser le canvas & dessiner l'image
 createCanvas(800,800);
 gClassifier.classify(gImage, classification_done);
 image(gImage,0,0);
}


// A appeler à la fin de la classification 
function classification_done(error, results) {
  // cas d'erreur
  if (error) {
    console.error(error);
  }else{
    console.log(results);
    createDiv(`Label: ${result[0].label}`);
    createDiv(`Confidence: ${nf(result[0].confidence,0,2)}`);
  }
  
// afficher le résultat en texte en rouge dessous l'image

}