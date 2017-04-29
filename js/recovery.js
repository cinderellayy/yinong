$('a.show-option').click(function(evt)
  {
    evt.preventDefault();
    $(this).siblings('.options').slideToggle();
  });

  //删除
  $(".scheduling-delete").click(function(e) {
    if (confirm("删除后不可恢复,是否确认删除?")) {
    }
  });

  //清除所有条件
  $(".delete-all-condition").click(function(e) {
    if (confirm("删除后不可恢复,是否确认删除?")) {
    }
  });
  
  //option选择添加方式跳转
  function s_click(obj) {
    var num = 0;
    for (var i = 0; i < obj.options.length; i++) {
        if (obj.options[i].selected == true) {
            num++;
        }
    }
    if (num == 1) {
        var url = obj.options[obj.selectedIndex].value;
        window.open(url); //这里修改打开连接方式
    }
  }

  //添加行按大棚编辑
  $(document).on('click', '.add-row', function  () {
    var newTr = "<tr><td></td><td></td><td><select class='select-160 w80'><option>一等品</option><option>二等品</option><option>三等品</option></select></td><td><input type='text' class='select-160 w80'></td><td><input type='text' class='select-160 w80'></td><td><input type='text' class='select-160 w80'></td><td><input type='text' class='select-160 w80'></td><td class='color-green'><span class='delete-row'><img src='../images/tu_37.png' height='19' width='24' style='vertical-align: sub'></span></td></tr>";
    var insert = $(this).parent('td').parent('tr');
    $(newTr).insertAfter(insert);
  });
 //添加行按大棚添加
  $(document).on('click', '.add-dapeng-row', function  () {
      var newTr = "<tr><td></td><td></td><td></td><td></td><td><select class='select-160 w80'><option>一等品</option><option>二等品</option><option>三等品</option></select></td><td><input type='text' class='select-160 w80'></td><td><input type='text' class='select-160 w80'></td><td><input type='text' class='select-160 w80'></td><td><input type='text' class='select-160 w80'></td><td class='color-green'><span class='delete-row'><img src='../images/tu_37.png' height='19' width='24' style='vertical-align: sub'></span></td></tr>";
    var insert = $(this).parent('td').parent('tr');
    $(newTr).insertAfter(insert);
  });

  //添加行按作物
  $(document).on('click', '.add-zuowu-row', function  () {
    var newTr = "<tr><td></td><td></td><td><select class='select-160'><option>一等品</option><option>二等品</option><option>三等品</option></select></td><td><input type='text' class='select-160'></td><td class='color-green'><span class='delete-row'><img src='../images/tu_37.png' height='19' width='24' style='vertical-align: sub'></span></td></tr>";
    var insert = $(this).parent('td').parent('tr');
    $(newTr).insertAfter(insert);
  });


 //删除行
  $(document).on('click', '.delete-row', function  () {
    var insert = $(this).parent('td').parent('tr');
   insert.remove();
  });
