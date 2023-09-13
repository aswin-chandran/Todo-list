function validate() {
  var uname = document.getElementById("email").value;
  var pwd = document.getElementById("pwd").value;
  var msg = document.getElementById("msg");
  var pmsg = document.getElementById("pmsg");


  if (uname == "" || pwd == "") {
    alert("Enter Email id and password");
    return false;
    
  } else if (uname=='admin'&& pwd=='12345') {
    alert('login successful');
    return true;
  } 

else {
    alert('username and password is invalid')
    return false;
  }
}
