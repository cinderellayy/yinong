$(function(){
  $('a.show-option').click(function(evt)
  {
    evt.preventDefault();
    $(this).siblings('.options').slideToggle();
  });

  $('#date-range').dateRangePicker({})
    .bind('datepicker-change',function(event,obj){
    console.log('change',obj);
  })
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
  
})