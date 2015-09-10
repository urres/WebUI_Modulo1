
var numero = prompt("Por favor ingrese un numero entero");
var mensaje = "";
var strNumero= "";

//1732 -> true

if (EsNumeroEntero(numero)) {
	if(numero >=0){
		mensaje= String(numero%1000)[0]=="7";
	}else{
		mensaje= String(numero%1000)[1]=="7";
	}
	
}else{
	mensaje="Usted no ha ingresado un numero.";
}
document.getElementById("pMensaje").innerHTML = mensaje;

function EsNumeroEntero(numero){
	return numero != null && String(parseInt(numero)) != "NaN";
}