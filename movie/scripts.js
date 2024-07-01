document.getElementById('search-button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-input').value;
    if (searchQuery) {
        fetchMovies(searchQuery);
    }
});

async function fetchMovies(query) {
    const apiKey = '5d288b01'; // Replace with your actual OMDb API key
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
    const data = await response.json();
    displayMovies(data.Search);
}

function displayMovies(movies) {
    const movieResults = document.getElementById('movie-results');
    movieResults.innerHTML = '';
    if (movies) {
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
                <h2>${movie.Title}</h2>
                <p>${movie.Year}</p>
            `;
            movieResults.appendChild(movieItem);
        });
    } else {
        movieResults.innerHTML = '<p>No movies found</p>';
    }
}
