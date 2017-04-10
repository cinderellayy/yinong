/**
 * @description 伙办功能相关
 * @author yuying
 * @date   2017-2-6
 */
var myApp = angular.module('yinong', []);

//参数配置:路由控制/表单提交
myApp.config(['$httpProvider', function($httpProvider) {


  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  $httpProvider.defaults.headers.common['Accept'] = 'application/json';

  /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */
  var param = function(obj) {
    var query = '',
      name,
      value,
      fullSubName,
      subName,
      subValue,
      innerObj,
      i;

    for (name in obj) {
      value = obj[name];

      if (value instanceof Array) {
        for (i = 0; i < value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      } else if (value instanceof Object) {
        for (subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      } else if (value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  };

  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = function(data) {
    if (angular.isObject(data) && String(data)) {
      var d2 = {};
      angular.copy(data, d2);
      return param(d2);
    } else {
      return data;
    }
  };
}]);

//指令：阻止冒泡
myApp.directive('stopEvent', function() {
  return {
    link: function(scope, element, attr) {
      element.bind(attr.stopEvent, function(e) {
        e.stopPropagation();
      });
    }
  };
});

//服务：收藏
myApp.provider('like', function(){   
  var like = function($event,state){
    if (state == '1') {
      $($event.target).attr('ng-show','false');
      $($event.target).siblings('.islike').attr('ng-show','true');
      $($event.target).removeAttr('ng-show').addClass('hide').removeClass('show');
      $($event.target).siblings('.islike').removeAttr('ng-show').removeClass('hide ng-hide').addClass('show');
    } else {
      $($event.target).removeAttr('ng-show').addClass('hide').removeClass('show');
      $($event.target).siblings('.nolike').removeAttr('ng-show').removeClass('hide ng-hide').addClass('show');
    }
  }
  this.$get = function(){   
    return like;  
  };  
}); 

//首页
myApp.controller('index', ['$scope', '$http',  '$rootScope', function($scope, $http, $rootScope) {
  //相关数据
  $scope.init = function() {
   $scope.houseType = [{ num: "写字楼" }, { num: "商铺" }, { num: "公寓" }];
   $scope.price = [{ value: 0, num: "小于1" },{ value: 1, num: "1-3" }, { value: 2, num: "3-5" }, { value: 4, num: "5-10" }, { value: 4, num: "10以上" }];
   $scope.prices = [{num:"小于6000"},{num:"6000-8000"},{num:"8000-10000"},{num:"10000-13000"},{num:"13000-15000"},{num:"15000-20000"},{num:"20000以上"}];
   $scope.mianji = [{ value: 0, num: "小于100m²" },{ value: 1, num: "100-200m²" }, { value: 2, num: "200-300m²" }, { value: 3, num: "300-500m²" },{ value: 5, num: "1000m²以上" }];
   $scope.zhuangxiu = [{ value: 0, num: "毛坯" }, { value: 1, num: "简装修" }, { value: 2, num: "精装修" }, { value: 3, num: "吊白网" },{ value: 4, num: "遗留装修" }];
   $scope.chooseAddress = $.cookie('address') || "长春"; //首页地点筛选
   }
  //退回上一页面
  $scope.back = function(id) {
    history.back();
    if(id == 'deleteEdit') {
      $.cookie('editId','');
      $.cookie('editEntrustId','');
    }
  }


}]);


/**解析URL参数值*/
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

//去掉手机端alert默认显示网址
window.alert = function(name) {
  var iframe = document.createElement("IFRAME");
  iframe.style.display = "none";
  iframe.setAttribute("src", 'data:text/plain,');
  document.documentElement.appendChild(iframe);
  window.frames[0].window.alert(name);
  iframe.parentNode.removeChild(iframe);
}



 

    