window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var soles = parseFloat(document.getElementById("soles").value);
		var tc = parseFloat(document.getElementById("tc").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>El resultado es " + conversion(soles,tc) + "</p>";
	});

	function conversion(soles, tc) {
		return (soles/tc).toFixed(2);
	}
});