let isReady = confirm("你准备好了吗？");
if (isReady) {
    let myName = prompt("请输入你的名字: ", "Tom");
    let myAge = prompt("请输入你的年龄：", "18");
    
    // 函数表达式，只在函数变量可见的范围内有效
    let sayHi = (myAge >= 18) ? 
        (name) => showMessage(`Welcome, ${name}!`) : 
        (name) => showMessage(`Sorry, ${name}!`);
    sayHi(myName);
}

// 声明性函数，可以在本文件作用域内的任何地方调用
function showMessage(message) {
    alert(message);
}