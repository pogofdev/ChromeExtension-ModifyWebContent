import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import  { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import App from './components/app/App';

/*************************************
 *  SETUP
 *************************************/
//insert a div tag on the top of the body
const anchor = document.createElement('div');
anchor.id = 'rcr-anchor';
document.body.insertBefore(anchor, document.body.childNodes[0]);

//setup redux proxy store
const proxyStore = new Store({portName: 'portName'});
render(
    <Provider store={proxyStore}>
        <App/>
    </Provider>
    , document.getElementById('rcr-anchor')
);


function translateTauKhuaToViewnamese(element) {
    console.log(element.innerHTML);
    switch (element.innerHTML) {
        case "颜色分类":
            element.innerHTML = "Thể loại màu:";
            break;
        case "尺寸":
            element.innerHTML = "Kích thước:";
            break;
        case "月销量":
            element.innerHTML = "Luong hang ban trong mot thang:";
            break;
        case "数量":
            element.innerHTML = "Số lượng:";
            break;
    }
}

const node = document.querySelectorAll('.tb-metatit');//static node
Array.prototype.slice.call(node).map(translateTauKhuaToViewnamese);// turn it into an array then loop through them and check the name
var button = $('<button class="btn btn-default btn-lg">$' + "Gio hang Cua ban"
    + '</button>');

// handle click event
$(button).on('click', function(event) {
    event.preventDefault();
        // alert(chrome.tabs.getCurrent((tab) => {return tab.url}));
    console.log(chrome.tabs);
    // chrome.tabs.getSelected(function (tab) {
    //     console.log(tab.url);
    //
    // });


});

$("#J_LinkBasket").replaceWith(button);
// document.getElementById('J_LinkBasket').appendChild(button);




//render(<App/>, document.getElementById('J_LinkBasket'));
