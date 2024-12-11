/*//___________________________________
// Obtener el elemento select por su ID
const lista = document.getElementById('miLista');

// Array con los valores de las opciones
const opciones = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];

// Recorrer el array y crear elementos <option>
opciones.forEach(opcion => {
    const nuevaOpcion = document.createElement('option');
    nuevaOpcion.text = opcion;
    lista.appendChild(nuevaOpcion);
});

// ... (código anterior)

lista.addEventListener('change', () => {
    const opcionSeleccionada = lista.value;
    console.log('Opción seleccionada:', opcionSeleccionada);
});
//___________________________________
*/




function crear_lista(indice){
//________________________________________
// Obtener el elemento select por su ID
const lista = document.createElement('select');

// Array con los valores de las opciones
const opciones = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];

// Recorrer el array y crear elementos <option>
opciones.forEach(opcion => {
    const nuevaOpcion = document.createElement('option');
    nuevaOpcion.text = opcion;
    lista.appendChild(nuevaOpcion);
})
return lista;

};
//_________________________________________









/*//____________________________________________________________
function crearLista(event) {
// Obtener el elemento select por su ID
const lista = document.createElement('select');

// Array con los valores de las opciones
const opciones = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];

// Recorrer el array y crear elementos <option>
opciones.forEach(opcion => {
    const nuevaOpcion = document.createElement('option');
    nuevaOpcion.text = opcion;
    lista.appendChild(nuevaOpcion);
});
*/
//___________________________________________________________
	// Función a ejecutar cuando se hace clic en una celda
    function handleClick(event) {
		
		//const idCelda = event.target.dataset.id;
        console.log('Hiciste clic en la celda:', event.target.textContent);
		event.target.style.backgroundColor = 'red';
		//window.location.href = 'https://identi.io/index.php?cat=23';
		//alert('Hiciste clic en la celda '+ event.target.textContent);
		//alert('Hiciste clic en la celda '+ indice);
        // Aquí puedes agregar tu código para realizar alguna acción, por ejemplo:
        // - Cambiar el color de la celda
        // - Mostrar un mensaje de alerta
        // - Redirigir a otra página
		
		lista.addEventListener('change', () => {
    const opcionSeleccionada = lista.value;
    console.log('Opción seleccionada:', opcionSeleccionada);
});
		
		
		
		
    }

  /*  // Agregar el evento de clic a cada celda
    celdas.forEach(celda => {
        celda.addEventListener('click', handleClick);
    });

*/
function crearfruta(aux){
const lista = document.createElement('select');	
const nuevaOpcion = document.createElement('option');
//nuevaOpcion.value = aux
//nuevaOpcion.text = aux
const opciones = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];


lista.appendChild(opciones);
	
}



function playSound() {
  const audio = new Audio(`okey02.wav`);
  audio.play();
}
//______________________________________________
function reproducirSonido(evento) {
    const celda = evento.target;
    const numeroCelda = celda.textContent; // Obtener el número de la celda (si lo tiene)
   // const audio = new Audio(`sonido${numeroCelda}.mp3`); // Reproducir un sonido diferente según la celda
    const audio = new Audio(`okey02.wav`);
    audio.play();
}
//______________________________________________

/*
const tablero = document.getElementById('tablero');

// Función para crear una celda y asignarle su índice
function crearCelda(indice) {
    const celda = document.createElement('div');
    celda.classList.add('celda');
    celda.textContent = indice;

celdas.forEach(celda => {
    celda.addEventListener('click', reproducirSonido);
}




    return celda;
}

// Crear y agregar las celdas al tablero
let indice = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        const celda = crearCelda(indice);
        tablero.appendChild(celda);
        indice++;
    }
}
*/


const tablero = document.getElementById('tablero');

// Función para crear una celda y asignarle una imagen
function crearCelda(indice) {
	
	let nuevoParrafo = document.createElement("p");
	nuevoParrafo.textContent= indice+10
	
	
    const celda = document.createElement('div');
	const numeroCelda = indice;//celda.textContent;
	//const celda2 = document.createElement('div');
	//celda2.textContent= indice
	//mensajito.textContent= indice
	//celda.appendChild('label');
    celda.classList.add('celda');

    // Reemplaza 'tu-imagen.jpg' con la ruta a tu imagen
    const img = document.createElement('img');
   // img.src = '64x64.jpg';
   img.alt = `Imagen ${indice}`;
	//img.style.display.color='red';
	//img.innerText=10;
	//_________________________________________
	
	const nuevaOpcion = document.createElement('option');
//nuevaOpcion.value = 'nuevaOpcion';
//nuevaOpcion.text = 'Nueva Opcion';
const opciones = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5'];
celda.appendChild(nuevaOpcion);//miLista
	
	//crear_lista(indice);
	
	//_________________________________________________
	celda.appendChild(img);
	celda.appendChild(nuevoParrafo);
    celda.appendChild(crear_lista(indice));
	//celda.textContent = indice;
	//celda.innerHTML=indice
	//event.target.textContent= indice;
	celda.addEventListener('click', playSound);
	celda.addEventListener('click', handleClick);
	 //img.src = '64x64.jpg';
	//miindice=indice
	//event.target.style.backgroundColor = 'yellow';
	//celdas.forEach(celda => {
    //celda.addEventListener('click', reproducirSonido);}

	
	

    return celda;
}

// Crear y agregar las celdas al tablero
//let indice = 0;
for (let i = 0; i < 25; i++) {
    const celda = crearCelda(i);
    tablero.appendChild(celda);//indice++;
	
}

for (let j = 0; j < 5; j++) {
    const fruta = crearfruta(j);
   fruta.appendChild(frutas);//indice++;
	
}
for (let k = 0; k < 25; k++) {
    const list = crear_lista(k);
   list.appendChild(list);//indice++;
	
}

/*
const celdas2 = document.querySelectorAll('td');


  // Agregar el evento de clic a cada celda
    celdas2.forEach(celda2 => {
        celda.addEventListener('click',playSound );
    });
*/







