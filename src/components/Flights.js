import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


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
        console.log(this.state.items)
        if(this.state.isLoaded){
            let flights = [];
            this.state.items.forEach(item => {
                flights.push(
                    <div className="card-body" key={item.id}>
                    <h1>{item.price}</h1>
                    </div>
                )
            });
            content = flights;           
        }else {
            content = "Loading!";
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}