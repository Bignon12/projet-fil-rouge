
$(document).ready(function(){

    $("#msg1").hide();
    $("#msg2").hide();
    $("#msg3").hide();
    $("#msg4").hide();
    $("#msg5").hide();
    
        function verif()
    {
        var envoi = true;
        // Récupére la valeur saisie dans le champ input #prenom
        var lenom = $("#nom").val();
        var leprenom = $("#prenom").val();
        var email = $("#email").val();
        var tel = $("#tel").val();
        var adresse = $("#adr").val();
    
        if (lenom === "")
        {
            envoi = false;
            $("#msg1").show();
        }
        else { 
            $("#msg1").hide();
        };
    
        if (leprenom === "")
        {
            envoi = false;
            $("#msg2").show();
        }
        else { 
            $("#msg2").hide();
        };
    
        if (email === "")
        {
            envoi = false;
            $("#msg3").show();
        }
        else { 
            $("#msg3").hide();
        };
    
        if (tel === "")
        {
            envoi = false;
            $("#msg4").show();
        }
        else { 
            $("#msg4").hide();
        };

        if (adresse === "")
        {
            envoi = false;
            $("#msg5").show();
        }
        else { 
            $("#msg5").hide();
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
    
    $("#btn").click(function(e)
    {
        // On doit bloquer l'èvènement par défaut avec l'instruction ci-dessous
        // 'e' est un objet nommé librement représentant l'évènement
        e.preventDefault();
        // Appel de la fonction verif()
        verif();
    
    });
    });
    