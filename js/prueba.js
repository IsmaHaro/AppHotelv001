/*
  Comentario en bloque
  Este es un ejercicio
 */
//numero1 = prompt("Dame el primer numero");
//numero2 = prompt("Dame el numero 2");

 // Este es el numero 1
//console.log(numero1);
//console.log(numero2);

// EJERCICIO MOSTRAR LA SUMA DE LOS 2 NUMEROS}
//console.log(parseFloat(numero1) + parseFloat(numero2));

var coches = ["mustang", "jetta", "audi a8"];

console.log(coches[0]);

function recorrerArreglo(arr){
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

recorrerArreglo(coches);

var camionetas = ["Tiguan", "Explorer", "CRX7"];

recorrerArreglo(camionetas);


var coche = {
	nombre: "Mustang",
	modelo: 2008,
	color: "Rojo",
	arrancar: function(){
		console.log("Run run...");
	}
};

var cochesNuevos = [
	{
		nombre: "Mustang",
		modelo: 2008,
		costo: 120000,
		color: "Rojo"
	},
	{
		nombre: "Jetta",
		modelo: 2018,
		costo: 320000,
		color: "Negro"	
	},
	{
		nombre: "Audi R8",
		modelo: 2010,
		costo: 510000,
		color: "Blanco"
	}
];

function recorrerArregloNuevo(arr){
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i].nombre + " $" + Intl.NumberFormat("en").format(arr[i].costo));
	}
}


recorrerArregloNuevo(cochesNuevos);


/*
 * EJERCICIO
 * Hacer una funcion que sume el precio total de los coches 
 */
 function precioTotal(coches){
 	var total = 0;
 	for(var i = 0; i < coches.length; i++){
		total += coches[i].costo;
	}

	return total;
 }

// DOM - DOCUMENT OBJECT MODEL

// SINTAXIS JAVASCRIPT PURO
// document.getElementById("email-inicio").value = precioTotal(cochesNuevos); 

// SINTAXIS CON jQUERY
$("#email-inicio").val(precioTotal(cochesNuevos));