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
            to: null
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

    handleSubmit = () => {
        this.props.onSelect(this.state.from, this.state.to)
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
               <label htmlFor="">Select your arrival city:</label><br />
               <select id="arrival" name="arrival" onChange={this.handleTo}>
                <option value="select">Arrival City</option>
                  <option value="VAL">Valencia</option>
                  <option value="BCN">Barcelona</option>
                  <option value="MAD">Madrid</option>
                  <option value="MIL">Milano</option>
                  <option value="ATH">Athens</option>
               </select>
               <button value="search" type="submit" onClick={this.handleSubmit}>Search</button>
           </div>
        )
    }
}