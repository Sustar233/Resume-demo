
// 当页面滑动时固定顶部导航栏
window.onscroll = function (e) {
  if (window.scrollY > 0) {
    topNavBar.classList.add('sticky');
  } else {
    topNavBar.classList.remove('sticky');
  }

  // 检查离窗口顶部最近的元素并添加特效
  checkTop();
}

// 页面到相应区域时对应顶部导航项高亮
let topNav = document.getElementById('topNav');
let dataTops = document.querySelectorAll("[data-top]");
// 给所有带有date-top属性的元素加上offset类
for (let dataTop of dataTops) {
  dataTop.classList.add('offset');
}
let topNavlis = topNav.querySelectorAll('#topNav>ul>li');
let act = 0;
setTimeout(function () {
  dataTops[act].classList.remove('offset');
}, 1000)
topNavlis[act].classList.add('active');
topNavlis[act].classList.add('animate');
let checkTop = function () {
  for (let i = 0; i < dataTops.length; i++) {
    // 如果 滚动位置 - 该项距离顶部位置 < 滚动位置 - 被标记项离顶部位置，则修改标记项（修改成距离最近的
    if (Math.abs(window.scrollY - dataTops[i].offsetTop) < Math.abs(window.scrollY - dataTops[act].offsetTop)) {
      topNavlis[act].classList.remove('active');
      act = i;
    }
    topNavlis[act].classList.add('active');
    dataTops[act].classList.remove('offset');
  }
}

// 鼠标移入顶部导航项时给li添加active和showSubmenu样式
for (let i = 0; i < topNavlis.length; i++) {
  topNavlis[i].addEventListener("mouseover", function (e) {
    // 先移除所有其他li的active
    for (let i = 0; i < topNavlis.length; i++) {
      topNavlis[i].classList.remove('active');
    }
    // 再为当前鼠标选中元素添加active
    topNavlis[i].classList.add('active');
    topNavlis[i].classList.add('showSubmenu');
  });
  topNavlis[i].addEventListener("mouseout", function (e) {
    topNavlis[i].classList.remove('showSubmenu');
    // 当鼠标离开的不是高亮的li时
    if (i !== act) {
      // 先将应有active（对应位置）的li添加回active
      checkTop()
      // 再将次li的active移除
      topNavlis[i].classList.remove('active');
    }
  });
}

