
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

  // création du réseau de neurone avec ML5.
  gBrain = ml5.neuralNetwork(lOptions);
  


  
  // Normalisation des données (entre 0 et 1) et apprentissage.
  // Avec connection callback asynchrone quand l'apprentissage est terminé.

}

// fonction appelé par l'input color au changement de couleur
function changeColor(pEvent) 
{
  gColor = (pEvent.target.value);
  console.log("HEX: " + gColor);



  console.log("r: "+r+" g: "+g+" b: "+b);



  console.log(lResult);
  // on demande au réseau de neurone de faire la classification, et de nous indiquer le label le plus probable.
  // asynchrone encore, en appelant notre fonction gotResult

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

}