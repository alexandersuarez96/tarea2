$(document).ready(function() {
	//obtenemos el valor de los input
	
	$('#adicionar').click(function() {
		
		
	  var nombre = document.getElementById("nombre").value;
	  
	  var edad = document.getElementById("edad").value;
	  var i = 1; //contador para asignar id al boton que borrara la fila
	  var fila = '<tr id="row' + i + '"><td>' + nombre + '</td><td>'   + edad ; //esto seria lo que contendria la fila
	
	  i++;
	
	  $('#mytable tr:first').after(fila);
		$("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
		var nFilas = $("#mytable tr").length;
		$("#adicionados").append(nFilas - 1);
		//le resto 1 para no contar la fila del header
	
		document.getElementById("edad").value = "";
		document.getElementById("nombre").value = "";
		document.getElementById("nombre").focus();
	  });

	});