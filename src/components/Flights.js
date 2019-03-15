import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {DateTime} from 'luxon';
import Select from './Select';

export default class Flights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded:false,
            items: []
        }
    }
    componentDidMount() {
        axios.get(`https://api.skypicker.com/flights?flyFrom=${this.props.from}&to=${this.props.to}&dateFrom=16/03/2019&dateTo=17/03/2019&limit=5&partner=picky`)
        .then(response => {
            if(this.props.direct === false) {
                this.setState({
                    isLoaded: true,
                    items: response.data.data
                })
            } else {
                this.setState({
                    isLoaded: true,
                    items: response.data.data
                })
            }
            
        })
        .catch(error => console.log(error))
    }
    render() {
        let items = this.props.direct ? this.state.items.filter(item => item.route.length === 1) : this.state.item;
        let content = "";
        let msg = "";
        document.querySelector('.loader').classList.add('hidden');
        console.log(this.state.items)
        if(this.state.isLoaded){
            if(!this.state.items.length) {
                msg = "Sorry, no flights avaliable at the moment!";
            } else {
                msg = "List of flights:";
            }
            let flights = [];
            items.forEach(item => {
                flights.push(
                    <div className="card-body" key={item.id}>
                        <h1>From: {item.cityFrom}</h1>
                        <h4>Departure Time: {DateTime.fromMillis(item.dTime * 1000).toFormat('hh:mm')}</h4>
                        <h1>To: {item.cityTo}</h1>
                        <h4>Arrival Time: {DateTime.fromMillis(item.aTime * 1000).toFormat('hh:mm')}</h4>
                        <h3>Flight price: {item.price} Euros</h3>
                    </div>
                )
            });
            content = flights;           
        } else {
            document.querySelector('.loader').classList.remove('hidden');
        }
        return (
            <div>
                <h3 className="avaliable">{msg}</h3>
                {content}
            </div>
        );
    }
}