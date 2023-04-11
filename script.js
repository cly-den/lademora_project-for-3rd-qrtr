function button(){
	var username, password;
	username = document.getElementById("username").value;
	password = document.getElementById("password").value;
	document.getElementById("notif").style="color:red";
	if(username==""&&password==""){
		document.getElementById('notif').innerHTML="Please enter your username and password.";
		console.log("Login error.")
	}else if(username!=""&&password==""){
		document.getElementById('notif').innerHTML="Please enter your password.";
		console.log("Login error.")
	}else if(username==""&&password!=""){
		document.getElementById('notif').innerHTML="Please enter your username.";
		console.log("Login error.")
	}else if(username!=""&&password!=""){
		document.getElementById("notif").style="color:green";
		document.getElementById('notif').innerHTML="You have successfully logged in.";
	}
}
