let userName= document.getElementById("userName");
let Password=document.getElementById("Password");



// Login
function validateUsername(callback){
    if(userName.value=="admin"){
        return callback();
    }else{
      alert("Username/Password Mismatch!!!");
        return false;
    }
  }
  
  function validatePassword(){
    if(Password.value == "12345"){
        return true;  
    }
   else{
      alert("Username/Password Mismatch!!!");
       return false;
   } 
  }
  
  // Todo

function ajax(){
 var xhttp=new XMLHttpRequest();
 xhttp.onreadystatechange=function(){
  if(this.readyState== 4&&this.status==200){
      var data= JSON.parse(this.responseText);
      console.log(this.responseText)
      var tableData="";
    for(var i =0; i<data.length; i++){
        var currentData = data[i];
          tableData += `<tr><td></td><td><input type="checkbox"  ${checkboxx(currentData.completed)} ></td><td> ${currentData.title}</td></tr>`
       };
      document.getElementById("myTable").innerHTML=tableData;
     };
     };  
     function checkboxx(val){
console.log(val)  ;
if(val){return "disabled"} else {return null ;}
};
    var count =0;
     $('body').on('change','input[type=checkbox]',function(e){
         console.log("check box is checked");
         var count = $("[type='checkbox']:checked").length;
         var promise= new Promise(function(resolve) {
           if(count==5){
             resolve("You have completed 5 task succesfully");
           } 
          });
          promise.then(function(value){
             alert(value);
          });
         });
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}


