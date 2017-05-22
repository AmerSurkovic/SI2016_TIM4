var baseURL = 'http://localhost:8080/';

import AccountService from './AccountService';

var NewsService = new function () {

    this.getAllLocations = () => {
        return fetch(baseURL + "lokacija/all");
    }

    this.getAllNews = () => {
        return fetch(baseURL + "obavijest/sve");
    };

}

export default NewsService;
