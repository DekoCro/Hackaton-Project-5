import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {DateTime} from 'luxon';


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
        axios.get(`https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=16/03/2019&dateTo=17/03/2019&limit=5&partner=picky`)
        .then(response => {
            this.setState({
                isLoaded:true,
                items: response.data.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        let content = "";
        document.querySelector('.loader').classList.add('hidden');
        console.log(this.state.items)
        if(this.state.isLoaded){
            let flights = [];
            this.state.items.forEach(item => {
                flights.push(
                    <div className="card-body" key={item.id}>
                    <h1>From: {item.cityFrom}</h1>
                    <h4>Departure Time:{DateTime.fromMillis(item.dTime * 1000).toFormat('hh:mm')}</h4>
                    <h1>To: {item.cityTo}</h1>
                    <h4>Arrival Time:{DateTime.fromMillis(item.aTime * 1000).toFormat('hh:mm')}</h4>
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
                {content}
            </div>
        );
    }
}