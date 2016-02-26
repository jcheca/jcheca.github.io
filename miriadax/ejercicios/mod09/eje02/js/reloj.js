function x2(n, i, x1, r) { return x1 + r*Math.sin(2*Math.PI*n/i);};
function y2(n, i, y1, r) { return y1 - r*Math.cos(2*Math.PI*n/i);};

// OnReady
$(function(){

	function mostrar_hora( ) {

		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		var c = d.getMilliseconds();

		$('#tex').html(h + ":" + m + ":" + s);
		$('#seg').attr('x2', x2(s,60,80,50)).attr('y2', y2(s,60,80,50));
		$('#min').attr('x2', x2(m,60,80,40)).attr('y2', y2(m,60,80,40));
		$('#hor').attr('x2', x2(h,12,80,30)).attr('y2', y2(h,12,80,30));
		$('#cro').attr('x2', x2(c,1000,80,5)).attr('y2', y2(c,1000,100,5));

		

	}

	setInterval(function(){ mostrar_hora(); }, 100);
	mostrar_hora();

});
