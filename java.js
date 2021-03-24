function validate() {
    var name = document.getElementById("fname");
    var mobile = document.getElementById("fmobile");
    var email = document.getElementById("femail");
    
    var x = email.value.indexOf("@");
    var y = email.value.lastIndexOf(".");
    if(name.value.trim() == "" || mobile.value.trim() == "" || email.value.trim() == "") {
        window.alert("Please enter the required field");
    }
    else if(name.value.length < 3) {
        window.alert("Name should be of minimum 3 length");
    }
    else if(mobile.value.length != 10) {
        window.alert("Enter valid mobile number");
    }
    else if(x < 1 || (y - x < 2)) {
        window.alert("Enter valid email");
    }
    
}