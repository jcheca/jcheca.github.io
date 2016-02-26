var tabla = document.getElementById("tabla");
var i=0;

for (i in document.location) {	
	if (typeof(document.location[i]) !== "string") value = "no imprimible"; else value = document.location[i];	
	tabla.innerHTML+="<tr><td>"+i+"</td><td> = "+value+"</td></tr>";
}

