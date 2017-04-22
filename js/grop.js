var tools = {
  init: function() {
    $('.tab-head').bind('click', function () {
      tools.tab(this);
    });

    $('.to-grow-message').click(function() {
    
      var x = $(this).parent().parent('.grow-content');
      var height = x[0].offsetTop;
      $('.grow-message').css({
          "top":height+110
      })
     
      $('.grow-message').removeClass('hide');
      $('.arrow-grow').addClass('hide');
      $(this).parent().siblings('.arrow-grow').removeClass('hide');
    });
    
    $('.close-grow').click(function() {
      $('.grow-message').addClass('hide');
      $('.arrow-grow').addClass('hide');
    });

    //添加排产管理
    $('.scheduling-add').click(function () {
      $('.scheduling-add-content').removeClass('hide').addClass('show');
    });
     $('.close-add').click(function () {
      $('.scheduling-add-content').removeClass('show').addClass('hide');
    });

     //导出种植信息
    $('.scheduling-upload').click(function () {
      $('.scheduling-upload-content').removeClass('hide').addClass('show');
    });
     $('.close-upload').click(function () {
      $('.scheduling-upload-content').removeClass('show').addClass('hide');
    });

    //删除
  $(".grow-delete").click(function(e) {
    if (confirm("删除后不可恢复,是否确认删除?")) {
    }
  });

  },
  tab: function (a) {
    var tab = $(a).parent().parent(".tab");
    var content = tab.children(".tab-cont").eq($(a).index());
    $(a).addClass("bg-green").siblings().removeClass("bg-green");
    content.removeClass("hide").addClass("show").siblings(".tab-cont").removeClass("show").addClass("hide");
  }
}

tools.init();
