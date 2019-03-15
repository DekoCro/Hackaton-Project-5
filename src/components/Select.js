import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {DateTime} from 'luxon';
import Flights from './Flights';

export default class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: null,
            to: null,
            direct: false
        }
    }

    handleFrom = (event) => {
        console.log(event.target.value);
        this.setState({
            from : event.target.value
        })
        this.props.onSelect(event.target.value, this.state.to)
    }

    handleTo = (event) => {
        console.log(event.target.value);
        this.setState({
            to : event.target.value
        })
    }

    handleDirect = () => {
        this.setState({
            direct: !this.state.direct
        })
    }

    handleSubmit = () => {
        this.props.onSelect(this.state.from, this.state.to, this.state.direct)
    }
    
    render() {
        return(
            <div>
                <label htmlFor="">Select your departure city:</label>
                <select id="depart" name="depart" onChange={this.handleFrom}>
                    <option value="select">Departure City</option>
                    <option value="PRG">Prague</option>
                    <option value="BER">Berlin</option>
                    <option value="WAW">Warsaw</option>
                    <option value="PED">Pardubice</option>
                </select>
                <br />
                <label htmlFor="">Select your destionation:</label>
                <select id="arrival" name="arrival" onChange={this.handleTo}>
                    <option value="select">Destination</option>
                    <option value="VAL">Valencia</option>
                    <option value="BCN">Barcelona</option>
                    <option value="MAD">Madrid</option>
                    <option value="MIL">Milano</option>
                    <option value="ATH">Athens</option>
                </select>
                <br />
                <input type="checkbox" value="direct" id="direct" onClick={this.handleDirect} /> Direct flights only <br />
                <button value="search" type="submit" onClick={this.handleSubmit}>Search for flights:</button>

            </div>
        )
    }
}