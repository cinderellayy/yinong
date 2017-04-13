(function  () {
  // 排产管理
  $('.page a').click(function () {
    $(this).addClass('current').siblings().removeClass('current');
  });

  //排产查看
  $('.scheduling-view').click(function () {
     $('.scheduling-view-content').removeClass('hide').addClass('show');
  })
  $('.close-view').click(function () {
    $('.scheduling-view-content').removeClass('show').addClass('hide');
  })

  //排产编辑
  $('.scheduling-edit').click(function () {
    $('.scheduling-edit-content').removeClass('hide').addClass('show');
  })
  $('.close-edit').click(function () {
    $('.scheduling-edit-content').removeClass('show').addClass('hide');
  })
  //添加排产管理
  $('.scheduling-add').click(function () {
    $('.scheduling-add-content').removeClass('hide').addClass('show');
  })
   $('.close-add').click(function () {
    $('.scheduling-add-content').removeClass('show').addClass('hide');
  })
  $('.jidi-address').click(function () {
    $(this).addClass('add-active').siblings().removeClass('add-active');
  })

  //排产计划编辑
  $('.grow-rule').click(function () {
    $(this).addClass('bg-green').siblings().removeClass('bg-green');
  })
  
})()