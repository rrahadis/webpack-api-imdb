class DataSource {
    static searchHero(keyword) {
        return fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=2078a789`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.Search) {
                return Promise.resolve(responseJson.Search);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }

    static searchHeroID(valueID) {
        return fetch(`http://www.omdbapi.com/?i=${valueID}&apikey=2078a789`)
        .then(response => {
            return response.json();
        })
    }
}

export default DataSource;
