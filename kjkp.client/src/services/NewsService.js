import AccountService from './AccountService';
var baseURL = 'http://localhost:8080/';


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

        var header = {};
        var auth = AccountService.getAuthInfo();

        if (auth != null && auth.role == "ROLE_ADMIN") {

            var header = {};
            var auth = AccountService.getAuthInfo();
            header = new Headers({
                'Content-Type': 'application/json; charset=utf8',
                'Authorization': auth.token
            });


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
        else {
            alert("You must be an admin to execute this command.");
        }
    }

}

export default NewsService;
