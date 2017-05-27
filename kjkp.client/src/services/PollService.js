import AccountService from "./AccountService";

var url = 'http://localhost:8080/';

var PollService = new function () {

    this.postPoll = (name, date, date7, questions) => {

        var header = {};
        var auth = AccountService.getAuthInfo();

        if (auth != null) {
            header = new Headers({
                'Content-Type': 'application/json; charset=utf8',
                'Authorization': auth.token
            });
            return fetch(url + '/anketa/kreirajanketu', {
                method: 'POST',
                headers: header,
                body: JSON.stringify({
                    opis: name,
                    vrijeme_aktivacije: date,
                    vrijeme_deaktivacije: date7,
                    pitanja: questions
                })
            });

        }
        else {
            alert('You must be logged in to create a poll!');
        }

    }
}


export default PollService;
