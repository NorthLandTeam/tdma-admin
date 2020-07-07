/*
一些公用的用于验证数据格式的方法
*/
//验证mac地址
function validateMac(macAddress){
	var reg = /^[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}$/;
	console.log("validateMac");
	if(!reg.test(macAddress)){
		console.log("无效的mac地址");
    return false;
	}else{
    console.log("有效的mac地址");
    return true;
  }
}
//验证IP地址
function validateIp(ipAddress){
  var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
	console.log("validateIp");
	if(!reg.test(ipAddress)){
    console.log("无效的IP地址");
    return false;
	}else{
    console.log("有效的IP地址");
    return true;
  }
}
//验证空口地址
function validateSat(satStr){
  var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
	console.log("validateSat");
	if(!reg.test(satStr)){
    console.log("无效的空口地址");
    return false;
	}else{
    console.log("有效的空口地址");
    return true;
  }
}
//验证SN号
function validateSN(snStr){
  var reg = /^\d{6}$/;
	console.log("validateSN");
	if(!reg.test(snStr)){
    console.log("无效的SN号");
    return false;
	}else{
    console.log("有效的SN号");
    return true;
  }
}
