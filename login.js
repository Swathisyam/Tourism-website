var uname = document.getElementById("uname");
var paswrd = document.getElementById("paswrd");

function validation() 
{
    if (uname.value ==""){
        alert("Please enter the username");
        uname.focus();
        return false;
    }
    else if(paswrd.value ==""){
        alert("Please enter the password");
        paswrd.focus();
        return false;
    }
    // alert("login succesful");
}