
/* ===
Exemple utilisation ML5 pour adaptation text <-> couleur de fond

=== */

// Définition de quelques variables globales
// le réseau de neurone
let gBrain;
// liens vers les inputs HTML
gInput = document.querySelector("input")
gExample = document.querySelector("#example")
// connection à l'évènement "changement de couleur" de l'input color, via la fonction changeColor
gInput.addEventListener("input", changeColor);
// couleur choisie
let gColor;


function setup() // fonction p5 appelé juste après le chargement de la page. Pratique. C'est la seule utilisation de p5 dans ce TP, on aurait pu s'en passer.
{
  // Configuration des options du réseau de neurone
  const lOptions =
  {
    inputs: ['r', 'g', 'b'],
    outputs: ['clair', 'foncé'],
    task: 'classification',
    debug: true
  }
  // création du réseau de neurone avec ML5.
  gBrain = ml5.neuralNetwork(lOptions);
  //Ajout de données d'apprentissage.
  gBrain.addData([0, 0, 0], ['foncé']);
  gBrain.addData([255, 255, 255], ['clair']);
  gBrain.addData([147, 51, 198], ['foncé']);
  gBrain.addData([141, 252, 122], ['clair']);
  // gBrain.addData([141, 252, 122], ['clair']);
  // +++++++++


  // Normalisation des données (entre 0 et 1) et apprentissage.
  gBrain.normalizeData();
  gBrain.train(finishedTraining);
  // Avec connection callback asynchrone quand l'apprentissage est terminé.

}

// fonction appelé par l'input color au changement de couleur
function changeColor(pEvent) {
  gColor = (pEvent.target.value);
  console.log("HEX: " + gColor);

  //Convertir en RGB ?
  r = parseInt(gColor.substring(1, 3), 16);
  g = parseInt(gColor.substring(3, 5), 16);
  b = parseInt(gColor.substring(5, 7), 16);


  console.log("r: " + r + " g: " + g + " b: " + b);

  gExample.style.background = gColor;

  console.log(lResult);
  // on demande au réseau de neurone de faire la classification, et de nous indiquer le label le plus probable.
  // asynchrone encore, en appelant notre fonction gotResult
  let lColors = { r, g, b };
  gBrain.classify(lColors, gotResult);
}

// Sert juste à nous indiquer que l'apprentissage est terminé.
function finishedTraining() {
  console.log("Training done");
}

// Fonction appelé après classification
function gotResult(pError, pResults) {
  // Cas d'erreur
  if (pError) {
    console.error(pError);
    return;
  }



  //Si clair, texte foncé
  //Sinon l'inverse
  console.log(pResults);
  gExample.style.color = pResults[0].label === "foncé" ? "white" : "black";

  gExample.style.background = gColor;
}