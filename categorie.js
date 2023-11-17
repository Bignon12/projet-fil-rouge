$(document).ready(function(){
    $.getJSON("the_district.json", function(data){
        var affiche = $("#cat");
        var donnee = data.categorie;
      
        for (var i=0; i<donnee.length; i++){
            var cat = donnee[i];
            console.log(cat);
            var affichage = `
            
            <div class= "row col-2 m-5" >
            <div class="card" style="width: 25rem;">
                <img src="images_the_district/category/${cat.image}" class="img-fluid cover rounded-start" alt="image categorie">
                <div class="card-body">
                    <h3 class="card-title text-center">${cat.libelle}</h3>
                    <p>${cat.description}</p>
                    <button type="button" class="btn btn-primary">Commander</button>
                </div>
            </div>
        </div>      
            `
            affiche.append(affichage);
        }
    })
    });