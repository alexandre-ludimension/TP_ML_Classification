
// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let gClassifier;

// A variable to hold the image we want to classify
let gImage;

function preload() {
  gClassifier = ml5.imageClassifier('MobileNet', modeleCharge);
  gImage = loadImage('img/mug.jpg');
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

  let lTextSize = 20;
  fill(255);
  textSize(lTextSize);
  text('Objet trouvé = ' + results[0].label, 0, height-100);
  text('Confidence = ' + results[0].confidence, 0, height-50);
   
  
// afficher le résultat en texte en rouge dessous l'image

}