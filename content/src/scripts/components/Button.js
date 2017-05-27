import React, { Component } from 'react';

const Button = (props) => {
    return (
        <button
            className="button button-blue"
            onclick={props.onClick}
        >
            {props.title}
        </button>
    );
};

export default Button;