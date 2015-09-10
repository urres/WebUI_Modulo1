
var numero = prompt("Por favor ingrese un numero entero");
var mensaje = "";

if (numero != null && String(parseInt(numero)) != "NaN") {
	if(numero%2 === 0){
		mensaje="El numero " + numero + " es par";
	}else{
		mensaje="El numero " + numero + " es impar";
	};
    
}else{
	mensaje="Usted no ha ingresado un numero.";
}
document.getElementById("pMensaje").innerHTML = mensaje;
