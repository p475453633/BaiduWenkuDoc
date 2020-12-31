// 方式1：JS 插件的方式
// 获取文本内容
function getAllTextContent(){
    var textNodeList = document.querySelectorAll("div.ie-fix");
    var textList = [];
    textNodeList.forEach((node) => {textList.push(node.textContent)});
    var textAll = textList.join("\r");
    console.log(textAll);
}

// 删除禁止复制
function removeCopyEventlistener(){
    window.addEventListener("copy", function (event) {
        event.stopPropagation();
    }, true);
    undefined
    window.addEventListener("keydown", function (event) {
        event.stopPropagation();
    }, true);
}

window.onload = function(){
    getAllTextContent();
    removeCopyEventlistener()
}