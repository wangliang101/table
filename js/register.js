/* Created by Microsoft on 2016/7/30.*/
$(document).ready(function () {
   function validateForm(){
     if(checkUserName()&&checkPassword()&&checkRepassword()&&checkHobby()&&checkStatus()){
         alert("恭喜您！注册成功！");
     }
}
});

//验证负责人姓名是否填写
function checkMasterName(){
    var name=document.getElementById("master-name").value.trim();
    if(!name){
        document.getElementById("nameInfo").innerHTML="负责人姓名不能为空";
    }else{
        document.getElementById("nameInfo").innerHTML="";
        return true;
    }

}

//验证企业账号是否填写
function checkEnterpriseAccount(){
    var name=document.getElementById("enterprise-account").value.trim();
    if(!name){
        document.getElementById("enterpriseAccountInfo").innerHTML="企业账号不能为空";
    }else{
        document.getElementById("enterpriseAccountInfo").innerHTML="";
        return true;
    }

}

