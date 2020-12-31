# 获取百度文库文本的方法执行步骤
* 使用软件：Chrome

* 可选方式1：
    * 安装Chrome的JS插件：参考https://my.oschina.net/hetiangui/blog/135744
    * 步骤如下：![image-20201231145658719](TyporaPic/README/image-20201231145658719.png)
    
    ![img](http://static.oschina.net/uploads/space/2013/0605/135100_ZKtL_1024047.png)
    
    ![img](http://static.oschina.net/uploads/space/2013/0605/135131_PodM_1024047.png)
    
* 可选方式2：

    ```js
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
    ```

    