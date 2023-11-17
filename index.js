$(document).ready(function(){
    var searchInput = $("#searchInput");
    var searchButton = $("#searchButton");
    var results = $("#results");

    searchButton.click(function(){
    $.getJSON("the_district.json" , function(data){
        var saisi = searchInput.val();
        var plat = data.plat;
        var filtrePlats=plat.filter(function(filtre){
            return filtre.libelle.toLowerCase().includes(saisi.toLowerCase());
              
            })
            afficher(filtrePlats);
            function afficher(filtrePlats){
                if (saisi.length === 0)
                {
                    cache = $("#cacher")
                    cache.hide();
                    results.html("Veuillez saisir un nom de plats")
                }
                else
                {
                      cache = $("#cacher")
                    cache.hide();
                    $.each(filtrePlats, function(indice, plat)
                    {
                        
                        var html = `
                        <div class= "row col-2 m-4" >
                        <div class="card" style="w-25 mx-1;">
                            <img src="images_the_district/food/${plat.image}" class="img-fluid cover rounded-start" alt="image categorie">
                            <div class="card-body">
                                <h3 class="card-title text-center">${plat.libelle}</h3>
                                <p>${plat.description}</p>
                                <p>${plat.prix}</p>
                                <button type="button" class="btn btn-primary">Commander</button>
                            </div>
                        </div>
                    </div>
                        ` 

                    results.append(html);
                    })
                }
                    
            }
        });
    });
})