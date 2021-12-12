// 关闭打开网页时的加载动画
(function() {
  window.addEventListener("load", function() {
    let siteWel = document.querySelector(".site-welcome");
    siteWel.className = "site-welcome";
  })
})()