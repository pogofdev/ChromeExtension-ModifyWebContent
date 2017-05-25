import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

import App from './components/app/App';

const anchor = document.createElement('div');
anchor.id = 'rcr-anchor';

document.body.insertBefore(anchor, document.body.childNodes[0]);

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
        alert("Gio hang da duoc them vo");
});

$("#J_LinkBasket").replaceWith(button);
// document.getElementById('J_LinkBasket').appendChild(button);




//render(<App/>, document.getElementById('J_LinkBasket'));
