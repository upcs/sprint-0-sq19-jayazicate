function calculate(){
	var x = parseInt(document.getElementById("x").value);
	var y = parseInt(document.getElementById("y").value);
	var z = sum(x, y);
	document.getElementById("output").innerHTML = 'The sum is '+z;
}