import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './index.html';
import Flights from './components/Flights';
import Select from './components/Select';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: null,
            to: null, 
            direct: false
        }
    }
    handleSelect = (from, to, direct) => {
        this.setState({
            from : from,
            to: to,
            direct: direct
        })
    }


    render() {
        return (
            <div>
                <Select  onSelect={this.handleSelect} />
                {this.state.from && this.state.to && <Flights from={this.state.from} to={this.state.to}  direct={this.state.direct} />}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
