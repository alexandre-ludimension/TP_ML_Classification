// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let gClassifier;

// A variable to hold the image we want to classify
let gImage;

function preload() {
  gClassifier = ml5.imageClassifier("MobileNet", modeleCharge);
  gImage = loadImage("img/hat.png");
}

function modeleCharge() {
  
  const classifier = ml5.imageClassifier("MobileNet", modelLoaded);


  function modelLoaded() {
    console.log("Model Loaded!");
  }

  classifier.classify(document.getElementById("image"), (err, results) => {
    console.log(results);
  });
  // il faut classifier
}

function setup() {

  imageCreateCanvas(800,800);
  image(gImage, 400, 400);
  
}

// A appeler à la fin de la classification
function classification_done(error, results) {
  // cas d'erreur
  if (error) {
    console.error(error);
  }
  else {
  console.log(results);
    createDiv('Label: ' + results[0].label);
    createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
  }
  // afficher le résultat en texte en rouge dessous l'image
}
