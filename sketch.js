
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
  console.log('Model Loaded!');
  // il faut classifier
  gClassifier.classify(gImage, classification_done);
  
}
  


function setup() {
 // il faut initialiser le canvas & dessiner l'image

  createCanvas(800, 800);
  background(0);
  image(gImage,0,0,200,200);

  return modeleCharge();

}

// A appeler à la fin de la classification 
function classification_done(error, results) {
  // cas d'erreur
  if (error) {
    console.error(error);
  }

  
// afficher le résultat en texte en rouge dessous l'image

  console.log(results);
  let label = results[0].className;
  let prob = results[0].probability;
  fill(255,0,0);
  textSize(32);
  text(label,10, height -100);
  createP(label);
  createP(prob);
}