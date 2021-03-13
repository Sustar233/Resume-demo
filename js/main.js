
// 当页面滑动时固定顶部导航栏
window.onscroll = function(e) {
    if (window.scrollY > 0) {
      topNavBar.classList.add('sticky');
    } else {
      topNavBar.classList.remove('sticky');
    }
  }

  // 页面到相应区域时对应顶部导航项高亮
let topNav = document.getElementById('topNav');
let dataTops = document.querySelectorAll("[data-top]");
let topNavlis = topNav.querySelectorAll('#topNav>ul>li');
let act = 0;
topNavlis[act].classList.add('active');
let checkTop = function() {
  for (let i = 0; i < dataTops.length; i++) {
    // 如果 滚动位置 - 该项距离顶部位置 < 滚动位置 - 被标记项离顶部位置，则修改标记项（修改成距离最近的
    if ( Math.abs(window.scrollY - dataTops[i].offsetTop) < Math.abs(window.scrollY - dataTops[act].offsetTop)) {
      topNavlis[act].classList.remove('active');
      act = i;
    }
    topNavlis[act].classList.add('active');
  } 
}
window.addEventListener("scroll", checkTop);

// 鼠标移入顶部导航项时给li添加active和showSubmenu样式
for (let i = 0; i < topNavlis.length; i++) {
  topNavlis[i].addEventListener("mouseover", function(e) {
    // 先移除所有其他li的active
    for (let i = 0; i < topNavlis.length; i++) {
      topNavlis[i].classList.remove('active');
    }
    // 再为当前鼠标选中元素添加active
    topNavlis[i].classList.add('active');
    topNavlis[i].classList.add('showSubmenu');
  });
  topNavlis[i].addEventListener("mouseout", function(e) {
    topNavlis[i].classList.remove('showSubmenu');
    // 当鼠标离开的不是高亮的li时
    if ( i !== act ) {
      // 先将应有active（对应位置）的li添加回active
      checkTop()
      // 再将次li的active移除
      topNavlis[i].classList.remove('active');
    }
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

        let n = 30 // 一共动多少次
        let duration = 500 / n // 多少时间动一次
        let currentTop = window.scrollY; // 当前滚动位置
        let targetTop = top - 80;  // 目标位置
        let distance = (targetTop - currentTop) / n; //单次移动距离/一段
        let i = 0;
        let id = setInterval( ()=> {
          if (i===n) {
            window.clearInterval(id);
            return
          }
          i++;
          window.scrollTo(0, currentTop + distance * i);
        }, duration)
    }
}

