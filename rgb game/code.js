let blocCouleur = document.getElementById("couleur");
let score = document.getElementById("score");
let reponses = [...document.getElementsByClassName("reponse")];
//operator (...) est utulisé afin d'ajouter un array (reponse) a
// partir du HTMLCollection 
//returned by the document.getElementsByClassName() method
let compteurScore = 0;//  declarer un compteur 
let rgbADeviner;   // rgbdeviner est la variable qui va recevoir le code
// exact de la couleur affiché

const genererEntierPourRgb = () => {//genere le code rgb aléatoiremment
  return Math.floor(Math.random() * 256); // 0 et 255 
};
//La fonction Math.floor(x) renvoie le plus grand entier 
//qui est inférieur ou égal à un nombre x.

const genererRgb = () => {
  let r = genererEntierPourRgb();
  let g = genererEntierPourRgb();
  let b = genererEntierPourRgb();

  return `rgb(${r},${g},${b})`;  // afichage sous forme str example rgb (rrr,ggg,bbb)
};

const initialiser = () => {
  score.textContent = compteurScore;
  let reponseCorrecte = Math.floor(Math.random() * 4); // 0 et 3

  reponses.forEach((rep) => (rep.textContent = genererRgb()));
  rgbADeviner = reponses[reponseCorrecte].textContent;

  blocCouleur.style.backgroundColor = rgbADeviner;
};

const verifierReponse = (e) => {
  let valeurCliquee = e.target.textContent;

  if (valeurCliquee != rgbADeviner) { // cheeck 
    window.alert(`Vous avez perdu ! La réponse était ${rgbADeviner}`);
    compteurScore = 0;
    return initialiser();
  }

  compteurScore++;
  initialiser();
};

reponses.forEach((rep) => {
  rep.addEventListener("click", verifierReponse);// appel de la fonction

});

initialiser();