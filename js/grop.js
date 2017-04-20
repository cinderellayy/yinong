var tools = {
  init: function() {
    $('.tab-head').bind('click', function () {
      tools.tab(this);
    });

    $('.to-grow-message').click(function() {
      $(this).parent().siblings('.grow-message,.arrow-grow').removeClass('hide');
    });
    
    $('.close-grow').click(function() {
      $(this).parent('.grow-message').addClass('hide');
      $(this).parent('.grow-message').siblings('.arrow-grow').addClass('hide')
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
