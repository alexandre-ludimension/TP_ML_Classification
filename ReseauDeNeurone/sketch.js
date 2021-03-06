
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
    inputs: ['r', 'g', 'b'], // 3 entrées chiffre couleurs RGB
    outputs: ['couleur'], // 2 sorties
    task: 'classification',
    debug: true
  }
  // création du réseau de neurone avec ML5.
  gBrain = ml5.neuralNetwork(lOptions);

  // ajout de données d'apprentissage
  gBrain.addData([0,0,0], ['foncé']);
  gBrain.addData([255,255,255], ['clair']);
  gBrain.addData([147,51,198], ['foncé']);
  gBrain.addData([141,252,122], ['clair']);
  gBrain.addData([248,241,7], ['clair']);
  gBrain.addData([3,128,252],['foncé']);
  gBrain.addData([255,0,0],['foncé']);
  gBrain.addData([155,100,100],['foncé']);
  gBrain.addData([129,130,125],['foncé']);
  gBrain.addData([102,96,159],['foncé']);
  gBrain.addData([239,244,11],['clair']);
  gBrain.addData([0,255,172],['clair']);
  gBrain.addData([26,230,199],['clair']);
  gBrain.addData([14,241,207],['clair']);
  gBrain.addData([79,209,46],['foncé']);
  
  
  
  // Ajoutez des données par la suite
  
  // Normalisation des données (entre 0 et 1) et apprentissage.
  gBrain.normalizeData();
  gBrain.train({epochs: 100}, finishedTraining);
  // Avec connection callback asynchrone quand l'apprentissage est terminé.

}

// fonction appelé par l'input color au changement de couleur
function changeColor(pEvent) 
{
  gColor = (pEvent.target.value);
  console.log("HEX: " + gColor);

  // Convertir en RGB ?
  r = parseInt(gColor.substring(1,3),16);
  g = parseInt(gColor.substring(3,5),16);
  b = parseInt(gColor.substring(5,7),16);


  console.log("r: "+r+" g: "+g+" b: "+b);

 


  //console.log(lResult);
  // on demande au réseau de neurone de faire la classification, et de nous indiquer le label le plus probable.
  // asynchrone encore, en appelant notre fonction gotResult
  let lColors = {r,g,b};
  gBrain.classify(lColors, gotResult);

}

// Sert juste à nous indiquer que l'apprentissage est terminé.
function finishedTraining()
{
  console.log("Training done");
}

// Fonction appelé après classification
function gotResult(pError, pResults)
{
  // Cas d'erreur
  if (pError) 
  {
    console.error(pError);
    return;
  }

  // si clair texte foncé
  // sinon l'inverse
  console.log(pResults);
  gExample.style.color = pResults[0].label === "foncé" ? "white": "black";
  // changer la couleur de fond
  gExample.style.background = gColor;
  //

}