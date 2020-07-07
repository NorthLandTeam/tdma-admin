/**
定时任务
*/
(function() {
  //开启定时器，每隔三秒执行一次
  var setTimeoutName ;
  var i = 0;
  //检查站控锁定情况
  var setTimeoutForCheckLock = function(){
      //toastr.success("定时器执行第："+(++i)+"次");
      console.log("定时器执行第："+(++i)+"次");
      //轮询后台接口
      $.ajax({
  			type: "POST",
  			url: basePath+"isSystemLocked",//url请求的地址
  			cache: false,  //禁用缓存
  			async: false,
  			dataType: "json",
  			success: function (result) {
          console.log("是否锁定"+result);
          var lockSystem = "lockSystem";
          //获得当前路径
          var nowurl = window.location.href;
  				if(result){
            //判断当前系统是否已经跳转到锁定界面
            //若当前界面不是锁定界面，则跳转
            if(nowurl.indexOf(lockSystem) < 0){
              toastr.error("当前系统已被锁定，2秒后跳转到锁定界面");
              //暂停3秒，后跳转到锁定界面
              setTimeout(function(){
                //跳转到锁定界面
                window.location.replace(basePath+"lockSystem");
              },2000);
            }
  				}else{
            if(nowurl.indexOf(lockSystem) > 0){
              toastr.success("当前系统已被解锁，2秒后跳转到首页");
              //暂停3秒，后跳转到首页
              setTimeout(function(){
                //跳转到首页
                window.location.replace(basePath+"home");
              },2000);
            }
          }
  			}
      });

      //弹出提示


      //跳转到锁定界面

  }

  //设置10秒刷新一次
  setTimeoutName = setInterval(setTimeoutForCheckLock,10000);
})();
