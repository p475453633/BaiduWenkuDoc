// 方式1：JS 插件的方式
function getAllTextContent(){
    var textNodeList = document.querySelectorAll("div.ie-fix");
    var textList = [];
    textNodeList.forEach((node) => {textList.push(node.textContent)});
    var textAll = textList.join("\r");
    console.log(textAll);
}
window.onload = function(){
    getAllTextContent();
}