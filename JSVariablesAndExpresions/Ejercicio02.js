var numero = prompt("Por favor ingrese un numero entero");
var mensaje = "";

if (numero != null && String(parseInt(numero)) != "NaN") {
	if(numero%7 === 0 &&  numero%5 === 0){
		mensaje="El numero es divisible por 7 y por 5.";
	}else if(numero%7 !== 0){
		mensaje="El numero no es divisible por 7.";
	}else if(numero%5 !== 0){
		mensaje="El numero no es divisible por 5.";
	};
    
}else{
	mensaje="Usted no ha ingresado un numero.";
}
document.getElementById("pMensaje").innerHTML = mensaje;