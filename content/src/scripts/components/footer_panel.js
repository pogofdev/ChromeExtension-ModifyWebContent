import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FooterPanel extends Component {
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
            <div className="stickyFooter">fdsfd</div>
        );
    }
};

export default FooterPanel;