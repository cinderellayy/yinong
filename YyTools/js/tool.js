var tools = {
  init: function() {
    $('.tab-head').bind('click', function () {
      tools.tab(this);
    })
  },
  tabs: function () {
    var tab = document.getElementById("tab");
    var tabs = tab.getElementsByClassName("tab-head");
    var contents = tab.getElementsByClassName("tab-cont");
    console.log('tabs,contents',tabs,contents);
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].onclick = function() { change(this); }
    }
    function change(obj) {
      for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i].getAttribute("class");
        var tabContent = contents[i].getAttribute("class");
        if (tabs[i] == obj) {
          tab = tab.concat(" active-tab");
          tabContent = tabContent.replace("hide","show");
          tabs[i].setAttribute("class", tab);
          contents[i].setAttribute("class", tabContent);
        } else {

          tab = tab.replace("active-tab", "");
          tabContent = tabContent.replace("show", "hide");
          tabs[i].setAttribute("class", tab);
          contents[i].setAttribute("class", tabContent);
        }
      }
    }
  },
  tab: function (a) {
    var tab = $(a).parent().parent(".tab");
    var content = tab.children(".tab-cont").eq($(a).index());
    $(a).addClass("active-tab").siblings().removeClass("active-tab");
    content.removeClass("hide").addClass("show").siblings(".tab-cont").removeClass("show").addClass("hide");
  }
}

tools.init();
