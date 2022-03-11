//背景轮播图
$.backstretch([
    './images/wuhan.jpg',
    './images/beijing.jpg',
    './images/banner_1.jpg',
    './images/banner_2.jpg',
    './images/banner_3.jpg'
], {
    fade: 3000, // 动画时长
    duration: 2000 // 切换延时
});


//获取所有的照片按钮
let box = document.querySelectorAll(".box-btn");
//获取照片div标签
let pic = document.querySelectorAll(".box-pic");
//获取照片背景遮罩
let zhe = document.querySelectorAll(".zhe");
//获取关闭照片按钮
let btn = document.querySelectorAll(".shut");

//打开图片效果
for (let i = 0; i < box.length; i++){
    (function (a) {
        box[a].onclick = function () {
            pic[a].style.cssText =
             `
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            z-index: 99;
            `
            zhe[a].style.cssText =
            `
            position: fixed;
            top: 0;
            left: 0;
            z-index: 98;
            width: 100vw;
            height: 100vh;
            background-color: #000;
            opacity: .5;
            `
            btn[a].style.cssText =
            `
            position: absolute;
            top: 150px;
            right: 400px;
            `
        }
        btn[a].onclick = function () {
            pic[a].style.cssText =`display:none`
        }
    })(i)
}