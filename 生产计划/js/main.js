(function  () {
  // 排产管理
  $('.page a').click(function () {
    $(this).addClass('current').siblings().removeClass('current');
  });

  //排产管理查看
  $('.scheduling-view').click(function () {
     $('.scheduling-view-content').removeClass('hide').addClass('show');
  })
  $('.close-view').click(function () {
    $('.scheduling-view-content').removeClass('show').addClass('hide');
  })

  //排产管理编辑
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
    // 排产管理确认
   $('.scheduling-done').click(function () {
    $('.scheduling-done-content').removeClass('hide').addClass('show');
  })
   $('.close-done').click(function () {
    $('.scheduling-done-content').removeClass('show').addClass('hide');
  })

  //删除
  $(".scheduling-delete").click(function(e) {
    if (confirm("删除后不可恢复,是否确认删除?")) {
    }
  });

  //排产计划模块
  //排产计划编辑
  $('.grow-rule').click(function () {
    $(this).addClass('bg-green').siblings().removeClass('bg-green');
  })

  //作物产量
  $('.zuowu,.chanliang').click(function () {
    $('.plan-edit').animate({
      width:'300px'
    })
  })
  $('.hide-aside').click(function () {
    $('.plan-edit').animate({
      width:'0'
    })
  })
  
  
  
})()