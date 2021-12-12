(function() {
  // 鼠标点击顶部导航项时页面滑动到相应位置
  let topNavA = topNav.querySelectorAll('#topNav>ul>li>a');
  for (let a of topNavA) {
    a.onclick = function (e) {
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
      let id = setInterval(() => {
        if (i === n) {
          window.clearInterval(id);
          return
        }
        i++;
        window.scrollTo(0, currentTop + distance * i);
      }, duration)
    }
  }
})()