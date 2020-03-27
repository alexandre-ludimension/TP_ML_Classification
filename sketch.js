
// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let gClassifier;

// A variable to hold the image we want to classify
let gImage;

function preload() {
  gClassifier = ml5.imageClassifier('MobileNet', modeleCharge);
  gImage = loadImage('img/snake.jpg');
}
function modeleCharge()
{
  //le modèle est chargé, on peut traiter la donnée
  // il faut classifier
  gClassifier.classify(gImage, classification_done);
}

function setup() {
 // il faut initialiser le canvas & dessiner l'image
 createCanvas(400, 300);
 image(gImage, 0, 0,400,300);
}

// A appeler à la fin de la classification 
function classification_done(error, results) {
  // cas d'erreur
  if (error) {
    console.error(error);
  }
  
// afficher le résultat en texte en rouge dessous l'image
  for (let i=0; i<3; i++)
  {
    createDiv('<p><strong>Classe:</strong> ' + results[i].label +"<br/>" +
              '<strong>Confiance:</strong> ' + Math.round(results[i].confidence*100)+"%</p>");
  }
}