/**
jquery 获取表单json ，jquery为表单赋值json扩展
https://www.cnblogs.com/wenming205/p/7620265.html
*/
$.extend({
  setForm :function(frm,jsonValue) {
    var obj=$(frm);
    $.each(jsonValue, function (name, ival) {
        console.log('setForm-name:'+name+'-value='+ival);
        //input
        var $oinput = obj.find("input[name=" + name + "]");

        if ($oinput.attr("type")== "radio" || $oinput.attr("type")== "checkbox"){
             $oinput.each(function(){
                 if(Object.prototype.toString.apply(ival) == '[object Array]'){// 是复选框，并且是数组
                      for(var i=0;i<ival.length;i++){
                          if($(this).val()==ival[i])
                             $(this).attr("checked", "checked");
                      }
                 }else{
                     if($(this).val()==ival)
                        $(this).attr("checked", "checked");
                 }
             });
        }else if($oinput.attr("type")== "textarea"){// 多行文本框
            obj.find("[name="+name+"]").html(ival);
        }else{
             obj.find("[name="+name+"]").val(ival);
             if(obj.find("[name="+name+"]").is("select")){
               console.log('select-'+name+'-value='+ival);
               obj.find("[name="+name+"]").val(ival).trigger("change");
             }
        }

        /*
        else{
          //select
          var $oselect = obj.find("select[name=" + name + "]");
          if($oselect != null){
            $oselect.find('option[value='+ival+']').atrr('selected','selected');
            console.log('select'+name+'value='+ival);
            $oselect.val(ival).trigger("change");
            console.log('select'+name+'value='+ival+'end');
          }
        }*/

    });
  },
  getFormJson:function(frm) {
    var o = {};
    var a = $(frm).serializeArray();

    $.each(a, function() {
      /*
        if (this.name == "password") {
            //this.value = $.md5(this.value) //md5操作
    　　　　　　　　　　this.value=this.value;
    }*/
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [ o[this.name] ];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
  }
});
