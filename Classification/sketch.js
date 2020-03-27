
// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let gClassifier;

// A variable to hold the image we want to classify
let gImage;

function preload() {
  gClassifier = ml5.imageClassifier('MobileNet', modeleCharge);
  gImage = loadImage('img/Chicken_Catz.jpg');
}
function modeleCharge()
{
  //le modèle est chargé, on peut traiter la donnée
  // il faut classifier
  gClassifier.classify(gImage, 3, classification_done);
}

function setup() {
 // il faut initialiser le canvas & dessiner l'image
 createCanvas(windowWidth, windowHeight);
 image(gImage, 0, 0);
 modeleCharge();
}

// A appeler à la fin de la classification 
function classification_done(error, results) {
  // cas d'erreur
  if (error) {
    console.error(error);
  }else{
    let lTextSize = 20;
    fill(255,0,0);
    textSize(lTextSize);
    text('Objet trouvé = ' + results[0].label, 0, height-500);
    text('Confidence = ' + results[0].confidence, 0, height-470);
    text('Objet trouvé = ' + results[1].label, 0, height-400);
    text('Confidence = ' + results[1].confidence, 0, height-370);
    text('Objet trouvé = ' + results[2].label, 0, height-300);
    text('Confidence = ' + results[2].confidence, 0, height-270);
    console.log(results);
  }
  
// afficher le résultat en texte en rouge dessous l'image

}