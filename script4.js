document.getElementById("boutonValider").addEventListener("click", afficherBienvenue);

function afficherBienvenue() {
  var mymanga = document.getElementById("mymanga").value;
  document.getElementById("zoneMessage").textContent = "Votre manga est favori " + mymanga + " , très bon choix !";

}
function informations(symboles) {
  if (symboles == "rien") {
    document.getElementById("infosymbole").classList.remove("special");
    document.getElementById("infoSymbole").textContent="";
  }
  else {
    document.getElementById("infoSymbole").classList.add("special");
    if (symboles == "Son goku") {
    document.getElementById("infoSymbole").textContent="Son Goku, de son nom de naissance Carot, Kakarot, est un personnage de fiction japonais créé par Akira Toriyama et le principal héros du manga Dragon Ball. Il apparaît pour la première fois le 20 novembre 1984 dans le Weekly Shōnen Jump.";
    }
    if (symboles == "Kinto-Un") {
    document.getElementById("infoSymbole").textContent="Kinto-un est un objet fictif qu'utilise Sun Wukong dans un roman chinois de la fin du XVIᵉ siècle, La Pérégrination vers l'Ouest de Wu Cheng'en. C'est un petit nuage qui peut être utilisé comme tapis volant. Seuls ceux ayant le « cœur pur » peuvent tenir dessus ; les autres passent au travers. ";
    }
    if (symboles == "Kamehameha") {
    document.getElementById("infoSymbole").textContent="Le Kamé Hamé Ha, également connu sous le nom de Kaméhaméha, est une technique fictive créée par Akira Toriyama dans le manga Dragon Ball en 1984. C'est la technique de combat la plus célèbre de l'œuvre, et l'attaque signature de son protagoniste, Son Gokû.";
    }
  }

}
