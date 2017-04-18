var tools = {
  init: function() {
    $('.tab-head').bind('click', function () {
      tools.tab(this);
    })
  },
  tab: function (a) {
    var tab = $(a).parent().parent(".tab");
    var content = tab.children(".tab-cont").eq($(a).index());
    $(a).addClass("bg-green").siblings().removeClass("bg-green");
    content.removeClass("hide").addClass("show").siblings(".tab-cont").removeClass("show").addClass("hide");
  }
}

tools.init();
