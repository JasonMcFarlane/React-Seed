import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <header>
                <h1>{ this.props.data.title }</h1>
            </header>
        )
    }
}

export default Welcome;