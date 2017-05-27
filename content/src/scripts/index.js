import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import  { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import App from './components/app/App';
import { translateChineseToVietnamese } from './GlobalLization'


/*************************************
 *  SETUP
 *************************************/
//insert a div tag on the top of the body
const anchor = document.createElement('div');
anchor.id = 'rcr-anchor';
document.body.insertBefore(anchor, document.body.childNodes[0]);

//setup redux proxy store
const proxyStore = new Store({portName: 'portName'});


/**************************************
 *  INJECTING
 **************************************/
//translate Chinese to Vietnamese
const node = document.querySelectorAll('.tb-metatit');//static node
translateChineseToVietnamese(node);


render(
    <Provider store={proxyStore}>
        <App/>
    </Provider>
    , document.getElementById('rcr-anchor')
);

render(
    <Provider store={proxyStore}>
        <App/>
    </Provider>
    , document.getElementById('J_LinkBasket').parentNode
);



var button = $('<button class="btn btn-default btn-lg">$' + "Gio hang Cua ban"
    + '</button>');

// handle click event
$(button).on('click', function(event) {
    event.preventDefault();
         alert(chrome.tabs.getCurrent((tab) => {return tab.url}));
   // console.log(chrome.tabs);
    // chrome.tabs.getSelected(function (tab) {
    //     console.log(tab.url);
    //
    // });


});

//$("#J_LinkBasket").replaceWith(button);
// document.getElementById('J_LinkBasket').appendChild(button);




//render(<App/>, document.getElementById('J_LinkBasket'));
