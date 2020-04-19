// var fname = document.getElementById("fsname").value;
// var lname = document.getElementById("lsname").value;
// var usrname = document.getElementById("username").value;
var mobile = document.getElementById("mobile");
 
var phnerror = document.getElementById("phnerror");

var email = document.getElementById("email");
var mailerror = document.getElementById("mailerror");
var paswrd = document.getElementById("paswrd");
var paswderror = document.getElementById("paswderror");


var strength = document.getElementById("strength");
var strongRegex = /^(?=.{8})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)$/;
var mediumRegex = /^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9])))$/;
var enoughRegex = /^(?=.{6,})$/;


        
    
    function validate(){
    var regexpmail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var regexpmobile = /^([0-9]{3}?)[\ .-]?([0-9]{3})[\ .-]?([0-9]{4})$/;
    var regexppaswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

         if (regexpmobile.test(mobile.value)){
            document.getElementById("phnerror").innerHTML= "valid";
            document.getElementById("phnerror").style.color="green"
        
                if (regexpmail.test(email.value)){            
                    document.getElementById("mailerror").innerHTML= "valid";
                    document.getElementById("mailerror").style.color="green";
                
                     if (regexppaswd.test(paswrd.value)){
                        document.getElementById("paswderror").innerHTML= "valid";
                        document.getElementById("paswderror").style.color="Green";
                        return true;
                    } else{
                        document.getElementById("paswderror").innerHTML="Invalid";
                        document.getElementById("paswderror").style.color="red";
                        paswrd.focus();
                        return false;
                        }
                } else{
                        document.getElementById("mailerror").innerHTML="Enter a valid mail address";
                        document.getElementById("mailerror").style.color="red";
                        return false;
                        }
        } else{
                document.getElementById("phnerror").innerHTML="Please enter a valid number";
                document.getElementById("phnerror").style.color="red";
                return false;
        }


    }


        
    // let regexppaswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8})$/;
    // if (regexppaswd.test(paswrd.value)){
    //         document.getElementById("paswderror").innerHTML= "valid";
            
    //     }else{
    //         document.getElementById("paswderror").innerHTML="Invalid";
            
    //         return false;
            
    //     }
     
        
    // function passwordChanged() {
    //     var strength = document.getElementById("strength");
    //     var strongRegex = /^(?=.{8})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)$/;
    //     var mediumRegex = /^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9])))$/;
    //     var enoughRegex = /^(?=.{6,})$/;
    //     var pwd = document.getElementById("password");
    //     if (pwd.value.length==0) {
    //     strength.innerHTML = "Type Password";
    //     } else if (false == enoughRegex.test(pwd.value)) {
    //     strength.innerHTML = "More Characters";
    //     } else if (strongRegex.test(pwd.value)) {
    //     strength.innerHTML = <span style="color:green">Strong!</span>;
    //     } else if (mediumRegex.test(pwd.value)) {
    //     strength.innerHTML = <span style="color:orange">Medium!</span>;
    //     } else { 
    //     strength.innerHTML = <span style="color:red">Weak!</span>;
    //     }
    //     }