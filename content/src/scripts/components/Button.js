import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('click', this.props.onClick);
    }

    comporntWillUnmount() {
        ReactDOM.findDOMNode(this).removeEventListener('click', this.props.onClick);
    }

    render() {
        return(
            <button
                className="btn btn-default btn-lg"
                onclick={this.props.onClick}
            >
                {this.props.title}
            </button>
        );
    }
};

export default Button;