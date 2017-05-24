import AccountService from './AccountService';
var baseURL = 'http://localhost:8080/';

var header = {};

var auth = AccountService.getAuthInfo();
if (auth != null) {
    header = new Headers({
        'Content-Type': 'application/json; charset=utf8',
        'Authorization': auth.token
    });
}
else {
    header = new Headers({
        'Content-Type': 'application/json; charset=utf8'
    });
}


var NewsService = new function () {

    this.getAllLocations = () => {
        return fetch(baseURL + "lokacija/all");
    }

    this.getAllNews = (id) => {
        if (id != 0) {
            return fetch(baseURL + "obavijest/filtriraj/" + id);
        }
        return fetch(baseURL + "obavijest/sve");
    };

    this.create = (newsItem) => {
        return fetch(baseURL + "obavijest/dodaj", {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                naziv: newsItem.title,
                tekst: newsItem.content,
                lokacije: newsItem.locations
            })
        });
    }

}

export default NewsService;
