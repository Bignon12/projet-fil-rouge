
$(document).ready(function(){

$("#mes1").hide();
$("#mes2").hide();
$("#mes3").hide();
$("#mes4").hide();

    function verif()
{
    var envoi = true;
    // Récupére la valeur saisie dans le champ input #prenom
    var lenom = $("#nom").val();
    var leprenom = $("#prenom").val();
    var email = $("#email").val();
    var tel = $("#tel").val();

    if (lenom === "")
    {
        envoi = false;
        $("#mes1").show();
    }
    else { 
        $("#mes1").hide();
    };

    if (leprenom === "")
    {
        envoi = false;
        $("#mes2").show();
    }
    else { 
        $("#mes2").hide();
    };

    if (email === "")
    {
        envoi = false;
        $("#mes3").show();
    }
    else { 
        $("#mes3").hide();
    };

    if (tel === "")
    {
        envoi = false;
        $("#mes4").show();
    }
    else { 
        $("#mes4").hide();
    };



    // +++ Ici contrôles pour d'autres champ +++

    // Si envoi est toujours à true, on peut soumettre le formulaire

    if (envoi == true)
    {
        document.forms["myform2"].submit();
    }
    else
    {
        return false;
    }
};

$("#btn_envoyer").click(function(e)
{
    // On doit bloquer l'èvènement par défaut avec l'instruction ci-dessous
    // 'e' est un objet nommé librement représentant l'évènement
    e.preventDefault();
    // Appel de la fonction verif()
    verif();

});
});
