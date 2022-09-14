
function validate() {
	if(!checkName())
		document.getElementById("name").style.color = "red";
	else
		document.getElementById("name").style.color = "green";

	if(!checkEmail())
		document.getElementById("email").style.color = "red";
	else
		document.getElementById("email").style.color = "green";

	if(!checkPassword())
		document.getElementById("password").style.color = "red";
	else
		document.getElementById("password").style.color = "green";
    
    if(checkPassword() && checkEmail() && checkName()) {
        alert("SIGN UP SUCCESSFULL!!!!");
        return false;
    }
	
};

function checkName() {
	var name = document.info.name.value;
	var re = /\d/;
	if(re.test(name) || name.length < 3) {
		document.getElementById("name").style.color = "red";
		return false;
	}
	document.getElementById("name").style.color = "green";
	document.getElementById("name").style.color = "green";
	return true;
}

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
