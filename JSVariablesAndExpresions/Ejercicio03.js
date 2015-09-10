var base = prompt("Por favor ingrese la base del rectangulo:");
var altura = prompt("Por favor ingrese la altura del rectangulo:");
var mensaje = "";
var area = 0;


if(EsNumeroEntero(base) && EsNumeroEntero(altura)){
	if(base >=0 && altura>=0){
		area = base*altura;
		mensaje = "El area del rectangulo es: " + area;
	}else{
		mensaje = "No se puede calcular el area con valores enteros negativos."
	}

}else if(!EsNumeroEntero(base)){
	mensaje="Usted no ha ingresado un valor correctos para la base.";
}else if(!EsNumeroEntero(altura)){
	mensaje="Usted no ha ingresado un valor correctos para la altura.";
}
document.getElementById("pMensaje").innerHTML = mensaje;


function EsNumeroEntero(numero){
	return numero != null && String(parseInt(numero)) != "NaN";
}


