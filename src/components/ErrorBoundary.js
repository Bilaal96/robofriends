import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1 id="App-loading" className="f2 tc">Ooops, something went wrong</h1>;
        }
        return this.props.children

    }
}

export default ErrorBoundary;