var btn = document.getElementById("btn").value;
btn.addEventListener("click", function(){
    alerte ("f");
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var adresse = document.getElementById("adr").value;
  

    if (nom.value ==="") {
        document.getElementById("mes1").innerHTML=("Ce champ est obligatoire")
    }
});
