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
  //图表相关
  var chart = Highcharts.chart('container', {
    xAxis: {
       categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        labels:{ 
        step:2 //刻度间隔
    } 
    },
     yAxis:{  
      title: {  
            text: ''  
        },  
      tickPixelInterval:10 
    },  
    title: {  
      text: ''//标题为空  
    },  
    credits: {  
        enabled: false//右下角图表版权信息不显示  
    },
    legend: {  
      enabled: false//右下角图表版权信息不显示  
    },  
    series: [{
        data: [12, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 594.1, 95.6, 54.4]
    }]
});

})()