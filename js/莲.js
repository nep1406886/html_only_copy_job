//轮播图
let mainSlideshowLi = document.getElementsByClassName('mainSlideshowLi'); //图片
let leftbtn = document.getElementById('left'); //左按键
let pointLis = document.getElementsByClassName('pointLi'); //点
let rightbtn = document.getElementById('right'); //右按键
let onetime = document.getElementById('onetime'); //轮播图子div
let index = 0;
let time = null;

let displayimg = function() {
    cleardisplay(); //显示函数
    mainSlideshowLi[index].className = 'displayimg mainSlideshowLi';
    pointLis[index].className = 'displayimg pointLi';
};

let cleardisplay = function() { //清除display
    for (let i = 0; i < mainSlideshowLi.length; i++) {

        mainSlideshowLi[i].className = 'mainSlideshowLi';
        pointLis[i].className = 'pointLi';
    }

};

let rightimg = function() { //右键，下一张图片
    index++;
    if (index === 4) {
        index = 0;
    }

    displayimg();
}

rightbtn.addEventListener('click', function() { //左键，上一张图片
    rightimg();
});

let leftimg = function() {
    if (index > 0) {
        index--;
    } else {
        index = 3;
    }
    displayimg();
};
leftbtn.addEventListener('click', function() {
    leftimg();
});

//自动轮播
time = setInterval(function() { //定时器
    rightimg();
    // console.log('11111');
}, 3000);

onetime.onmouseover = () => {
    // console.log('移入');
    clearInterval(time);
};

onetime.onmouseout = function() {
    time = setInterval(function() {
        // console.log('移出去');
        rightimg();
    }, 3000);
};

//小点
for (let i = 0; i < pointLis.length; i++) {
    pointLis[i].addEventListener('click', function() {
        index = i;
        displayimg();
    });
};
//
//
//
//
//
//
//文字出现动画
let mainWord = document.getElementsByClassName('mainword');
let Word = document.getElementsByClassName('word');
let wordAppeared = function() {
    for (let index = 0; index < Word.length; index++) {
        Word[index].style.color = "white";
    }
}
mainWord[0].addEventListener('click', wordAppeared);

//
//
//
//
//浮动导航栏
onscroll = function() {
    var topScroll = document.body.scrollTop + document.documentElement.scrollTop; //滚动的距离,距离顶部的距离
    var nav = document.getElementById("thisfloatnav"); //获取到导航栏id
    if (topScroll >= 150) {

        // console.log(topScroll);
        nav.style.display = "block";
        // nav.style.position = "flxed";

    } else {
        nav.style.display = 'none';
        // nav.style.position = "static";
    };
}