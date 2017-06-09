import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import NewsService from '../../services/NewsService';
import AccountService from '../../services/AccountService';

var rb = ReactBootstrap;
var FormGroup = rb.FormGroup;
var ControlLabel = rb.ControlLabel;
var FormControl = rb.FormControl;

var Button = ReactBootstrap.Button;
var Col = ReactBootstrap.Col;
var Panel = ReactBootstrap.Panel;
var Row = ReactBootstrap.Row;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var ListGroup = ReactBootstrap.ListGroup;

function NewsItem(props) {

    let _key = props.item.id;
    let sadrzaj = props.item.tekst;
    let naslov = props.item.naziv;
    let lokacije = props.item.lokacije;
    let timestamp = props.item.vrijemeObjave;

    var formatDate = function (timestamp) {
        var date = new Date(timestamp);
        var datevalues = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
        ];
        //alert(datevalues);
        return datevalues;
    };

    var date = formatDate(timestamp);
    var authenticated = false;
    var role = "";

    var DeleteButton = <a/>;

    if (AccountService.getAuthInfo() != null) {
      var auth = AccountService.getAuthInfo();

      authenticated = true;
      role = auth.role;

    }


    return (
        <div>
            <Panel header={naslov}>
                <ListGroup>
                    <ListGroupItem key={1}>{sadrzaj}</ListGroupItem>
                    <ListGroupItem key={2}>
                        <Row>
                            <Col md={1}>
                                Lokacije:
                            </Col>
                            <Col md={5}>
                                {
                                    lokacije.map((lokacija) => (<div>{lokacija}</div>))
                                }
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem key={3}>
                        <b>Datum postavljanja: {date[2]}.{date[1]}.{date[0]} u {date[3]}h {date[4]}min</b>
                    </ListGroupItem>

                    {(authenticated && role == "ROLE_ADMIN") ?
                        <ListGroupItem>
                            <Button bsStyle="danger">Ukloni obavijest</Button>
                            <Button bsStyle="warning">Izmijeni obavijest</Button>
                        </ListGroupItem>
                        : ""
                    }

                </ListGroup>
            </Panel>
        </div>
    );

}


export class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            locations: []
        };
        this.getNews = this.getNews.bind(this);
        this.getLocations = this.getLocations.bind(this);
    }

    componentDidMount() {
        this.getNews(0);
        this.getLocations();
    }

    getLocations() {
        var component = this;
        NewsService.getAllLocations()
            .then(response => {
                return response.json();
            }).then(json => {

                component.setState({
                    locations: json
                });
            }).catch(error => {
                alert(error);
            });
    }

    getNews(id) {
        var component = this;
        NewsService.getAllNews(id)
            .then(response => { return response.json(); })
            .then(json => {
                component.setState({
                    news: json
                });
            }).catch(error => {
                alert(error);
            });
    }

    onLocationSelected(event) {
        this.getNews(event.target.value);
    }

    render() {
        var newsView = this.state.news.map((newsItem) => (<NewsItem key={newsItem.id} item={newsItem} />));
        var locations = this.state.locations.map((location) => (<option value={location.id}>{location.naziv}</option>));
        return (
            <div>
                <Col md={8} mdOffset={2}>
                    <form>
                        <FormGroup>
                            <ControlLabel>Filtriraj po lokaciji</ControlLabel>
                            <FormControl onChange={this.onLocationSelected.bind(this)} componentClass="select" placeholder="select">
                                <option value="">Odabir lokacije</option>
                                {locations}
                            </FormControl>
                        </FormGroup>
                    </form>
                    <Panel header="Pregled obavijesti" bsStyle="info">
                        {newsView}
                    </Panel>
                </Col>
            </div>
        );
    }
}
