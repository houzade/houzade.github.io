// Mettre un style Special
document.getElementById("boutonValider").addEventListener("click", afficherBienvenue);

function afficherBienvenue() {
  var myperso = document.getElementById("myperso").value;
  document.getElementById("zoneMessage").textContent = "Le personnage le plus fort pour vous est " + myperso + " , malheuresement Son Goku est meilleur !";

    
}
function choix(color){
     document.body.style.background = color;
     document.getElementById("resultat").textContent=color;

}
