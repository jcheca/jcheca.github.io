function generarTablaHTML(valor){

	var tabla = document.getElementById("tabla");
	var i=0;

	for (i in valor) {	
		if (typeof(valor[i]) !== "string") value = "no imprimible"; else value = valor[i];	
		tipo = typeof(valor[i]);
		tabla.innerHTML+="<tr><td>"+i+"</td><td> = "+value+"</td><td>"+tipo+"</td></tr>";
	}

}

