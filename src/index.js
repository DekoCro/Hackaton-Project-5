import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './index.html';
import Flights from './components/Flights'

export default class App extends Component {

    render() {
        return (
            <div>
                <Flights />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));
