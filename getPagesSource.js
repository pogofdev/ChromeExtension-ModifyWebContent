/**
 * Created by poiso on 25/05/2017.
 */
// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                html += node.outerHTML;
                break;
            case Node.TEXT_NODE:
                html += node.nodeValue;
                break;
            case Node.CDATA_SECTION_NODE:
                html += '<![CDATA[' + node.nodeValue + ']]>';
                break;
            case Node.COMMENT_NODE:
                html += '<!--' + node.nodeValue + '-->';
                break;
            case Node.DOCUMENT_TYPE_NODE:
                // (X)HTML documents are identified by public identifiers
                html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
                break;
        }
        node = node.nextSibling;
    }
    return html;
}

// document.body.innerHTML = document.body.innerHTML.replace(/颜色分类/g,"Thể loại màu:");
// document.body.innerHTML = document.body.innerHTML.replace(/尺寸/g,"Kích thước:");
// document.body.innerHTML = document.body.innerHTML.replace(/月销量/g,"Luong hang ban trong mot thang:");
// document.body.innerHTML = document.body.innerHTML.replace(/数量/g,"Số lượng:");
function translateTauKhuaToViewnamese(element) {
    console.log("assdfd");
    switch (element.innerHTML) {
        case "颜色分类":
            element.innerHTML = "Thể loại màu:";
        case "尺寸":
            element.innerHTML = "Kích thước:";
        case "月销量":
            element.innerHTML = "Luong hang ban trong mot thang:";
        case "数量":
            element.innerHTML = "Số lượng:";
    }
}

var node = document.querySelectorAll('.tb-metatit');//static node
Array.prototype.slice.call(node).map(translateTauKhuaToViewnamese);// turn it into an array then loop through them and check the name



chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document.querySelector('.tm-price').innerHTML="<span class='tm-price'>" +
            "<font>99.00</font>" +
        "</span> <span>200 ngan dong</span>")
});