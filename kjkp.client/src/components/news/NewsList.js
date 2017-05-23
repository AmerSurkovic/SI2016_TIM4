import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import NewsService from '../../services/NewsService';


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
    );

}


export class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
        this.getNews = this.getNews.bind(this);
    }

    componentDidMount() {
        this.getNews();
    }

    getNews() {
        var component = this;
        NewsService.getAllNews()
            .then(response => { return response.json(); })
            .then(json => {
                component.setState({
                    news: json
                });
            }).catch(error => {
                alert(error);
            });
    }

    render() {
        var newsView = this.state.news.map((newsItem) => (<NewsItem key={newsItem.id} item={newsItem} />));
        console.log(newsView);
        return (
            <div>
                <Col md={8} mdOffset={2}>
                    <Panel header="Pregled obavijesti" bsStyle="info">
                        {newsView}
                    </Panel>
                </Col>
            </div>
        );
    }
}
