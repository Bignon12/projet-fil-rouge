$(document).ready(function () {
    $.getJSON("the_district.json", function (data) {
        var plt = data.plat
        console.log(plt);
        var afiche = $("#affichPlt");
        console.log(afiche);

        for (var i = 0; i <= plt.length; i++) {
            var tab = plt[i];
            console.log(tab);
            var afichage = `
        <div class= "row col-2 m-4" >
            <div class="card" style="width: 20rem;">
                <img src="images_the_district/food/${tab.image}" class="img-fluid cover rounded-start" alt="image categorie">
                <div class="card-body">
                    <h3 class="card-title text-center">${tab.libelle}</h3>
                    <p>${tab.description}</p>
                    <p>${tab.prix}</p>
                    <button type="button" class="btn btn-primary">Commander</button>
                </div>
            </div>
        </div>
          
           `
            afiche.append(afichage);
        };
    });
});
