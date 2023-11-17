 
 $(document).ready(function () {
    $("#searchButton").width(150);
    const champ = $("#searchInput");
    const bouton = $("#searchButton");
    const result = $("#results");
    const key = "f33cd318f5135dba306176c13104506a";

    bouton.click(function () {
        const theme = champ.val().toLowerCase();
        $.getJSON("http://api.themoviedb.org/3/search/movie?api_key=" + key + "&query=" + theme, function (data) {
            const filteredMovies = data.results.filter(movie => movie.title.toLowerCase().includes(theme));
            displayResults(filteredMovies);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.error("Erreur lors du chargement du fichier JSON : " + errorThrown);
        });
    });

    function displayResults(movies) {
        if (movies.length === 0) {
            $("#results").html("Aucun fichier trouvé");
        } else {
            let html = '<div class="list-group">';
            movies.forEach(movie => {
                html += `
                    <div class="bbb list-group-item m-2">
                        <h4 class="mb-1">${movie.title}</h4>
                        <img src="http://image.tmdb.org/t/p/w185${movie.poster_path}" alt="${movie.title} Poster" class="img-fluid">
                        <p>Date de sortie : ${movie.release_date}</p>
                        <p>Note utilisateurs : ${movie.vote_average}</p>
                        <p>${movie.overview}</p>
                    </div>`;
            });
            html += '</div>';
            result.html(html);
        }
    }
});
