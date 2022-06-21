function shoeTips(spanId, tips) {
	var span = document.getElementById(spanId);
	span.innerHTML = tips;
}
function hint() {
	var value = document.getElementById("value").value;
	var hint = document.getElementById("hint");
	if(value.length < 6) {
		hint.innerHTML = "用户名太短";
		return false;
	} else {
		hint.innerHTML = "用户名合格";
		return true;
	}
}
function hint_hide() {
	var hint = document.getElementById("hint");
	hint.innerHTML = "";
}

function checkPass() {
	var value = document.getElementById("pass_value").value;
	var hint = document.getElementById("pass_hint");
	if(value.length < 6) {
		hint.innerHTML = "密码太短";
		return false;
	} else {
		hint.innerHTML = "密码格式合格";
		return true;
	}
}
function pass_hide() {
	var hint = document.getElementById("pass_hint");
	hint.innerHTML = "";
}

function checkPassPass() {
	var papavalue = document.getElementById("passpass_value").value;
	var value = document.getElementById("pass_value").value;
	var papahint = document.getElementById("passpass_hint");
	if(papavalue != value) {
		papahint.innerHTML = "两次密码不一致";
		return false;
	} else {
		papahint.innerHTML = "";
		return true;
	}
}
function passpass_hide() {
	var papahint = document.getElementById("passpass_hint");
	papahint.innerHTML = "";
}
