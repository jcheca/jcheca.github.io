$(function(){ 

    // Variables Locales: Cronómetro e histórico
	localStorage.c = (localStorage.c || "0.0");
	localStorage.d = (localStorage.d || "");

    // Objetos JS/Zepto
	var t, cl = $('#crono');
	var r = $('#registro');
	var x = $('#inicializar');

    // Restaurar Datos Anteriores en la primera llamada.
    inicio();

    // Controles
    function inicio(){mostrar(); r.html(localStorage.d)};
	function incr(){ localStorage.c = +localStorage.c + 0.01;};
	function mostrar(){cl.html((+localStorage.c).toFixed(2));};
	function arrancar(){t=setInterval(function(){incr();mostrar()},10);};
	function parar(){
					  localStorage.d = localStorage.d + (+localStorage.c).toFixed(2) + " - ";		              
					  r.html(localStorage.d);
					  clearInterval(t); 
		              t=undefined;
		             };
	function cambiar(){if (!t) arrancar(); else parar();};

    // Eventos controlados por PC o por Dispositivos Táctiles.
	if ("ontouchstart" in document.documentElement)
	{	
  		// Es un dispositivo táctil.
  		$('#cuerpo').on('tap', cambiar);
		$('#cuerpo').on('swipe', function(){if (!t) {cl.html("0.0");r.html('');}});
	}
	else
	{
  		// No es un dispositivo táctil.
  	 	$('#cambiar').on('click', cambiar);
		$('#inicializar').on('click', function(){if (!t) {localStorage.c="0.0";localStorage.d="";mostrar();r.html('');}});
	} 

});