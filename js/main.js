(function  () {
  // 排产管理
  $('.page a').click(function () {
    $(this).addClass('current').siblings().removeClass('current');
  })
})()