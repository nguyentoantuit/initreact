import React, { Component } from 'react';
import InputPreview from '../components/InputPreview';
import { connect } from 'react-redux';
import { setMessage } from '../actions/message';

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
            </div>
        );
    }
}

export default connect(state => state)(App);