
function validate() {

	if(!checkEmail())
		document.getElementById("email").style.color = "red";
	else
		document.getElementById("email").style.color = "green";

	if(!checkPassword())
		document.getElementById("password").style.color = "red";
	else
		document.getElementById("password").style.color = "green";
    
    if(checkPassword() && checkEmail()) {
        alert("LOGIN SUCCESSFULL!!!!");
        return false;
    }
	
};

function checkEmail() {
	var email = document.info.email.value;
	var re = /\S+@\S+\.\S+\S/;
	if(!re.test(email)) {
		document.getElementById("email").style.color = "red";
		return false;
	}
	document.getElementById("email").style.color = "green";
	document.getElementById("email").style.color = "green";
	return true;
}

function checkPassword() {
	var password = document.info.password.value;
	if(password.length < 8) {
		document.getElementById("password").style.color = "red";
		return false;
	}
	document.getElementById("password").style.color = "green";
	return true;
}
