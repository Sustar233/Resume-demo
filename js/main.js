
// 当页面滑动时固定顶部导航栏
window.onscroll = function(e) {
    if (window.scrollY > 0) {
      topNavBar.classList.add('sticky');
    } else {
      topNavBar.classList.remove('sticky');
    }
  }

// 鼠标移入顶部导航项时给li添加active样式
let topNav = document.getElementById('topNav');
let topNavlis = topNav.querySelectorAll('#topNav>ul>li')
for (let menuli of topNavlis) {
    menuli.addEventListener("mouseover", function(e) {
        menuli.classList.add('active');
    });
    menuli.addEventListener("mouseout", function(e) {
        menuli.classList.remove('active')
    });
}

// 鼠标点击顶部导航项时页面滑动到相应位置
let topNavA = topNav.querySelectorAll('#topNav>ul>li>a');
for (let a of topNavA) {
    a.onclick = function(e) {
        // 阻止默认行为
        e.preventDefault();
        // a.href会输出浏览器处理后的完整绝对路径
        let href = a.getAttribute('href');
        let ele = document.querySelector(href);
        // 获取元素距离页面顶端的距离
        let top = ele.offsetTop;
        // 视窗移动到元素位置
        window.scrollTo(0, top - 80);
    }
}