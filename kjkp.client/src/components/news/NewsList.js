import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import NewsService from '../../services/NewsService';

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