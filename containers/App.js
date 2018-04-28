import React, { Component } from 'react';
import InputPreview from '../components/InputPreview';
import { connect } from 'react-redux';
import { setMessage } from '../actions/message';
import { Link } from 'react-router-dom';

class App extends Component {

    _onchange = (value) => {
        this.props.dispatch(setMessage(value));
    }

    render() {
        return (
            <div>
                <p>This is my new react app</p>
                <InputPreview
                    value={this.props.messageReducer.message}
                    onChange={this._onchange}
                />
                <Link to="/about">
                    <button>Go to About</button>
                </Link>
            </div>
        );
    }
}

export default connect(state => state)(App);