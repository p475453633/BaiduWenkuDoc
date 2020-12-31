// 方式2： Chrome Console面板直接执行JS代码
// 1.打开Chrome，进入到需要获取文本的页面（注意：如果有未完继续页需要先全部打开）
// 2.快捷键按F12或者右击chrome中空白位置打开"检查"
// 3.选择console面板
// 4.复制粘贴下面代码到console面板，然后回车enter即可获取所有文本
(function getAllTextContent(){
    var textNodeList = document.querySelectorAll("div.ie-fix");
    var textList = [];
    textNodeList.forEach((node) => {textList.push(node.textContent)});
    var textAll = textList.join("\r");
    console.log(textAll);
})()