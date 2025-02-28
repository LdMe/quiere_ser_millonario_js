const preguntas = [// array de preguntas, cada pregunta tiene 4 respuestas posibles y nos dice la posición de la correcta
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuestas: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        correcta: 1
    },
    {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        respuestas: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Jorge Luis Borges"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
        respuestas: ["Hierro", "Oxígeno", "Silicio", "Aluminio"],
        correcta: 1
    },
    {
        pregunta: "¿Qué año marcó el inicio de la Segunda Guerra Mundial?",
        respuestas: ["1936", "1939", "1941", "1945"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respuestas: ["Saturno", "Júpiter", "Neptuno", "Urano"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál de estas películas fue dirigida por Christopher Nolan?",
        respuestas: ["Pulp Fiction", "El Señor de los Anillos", "Inception", "Titanic"],
        correcta: 2
    },
    {
        pregunta: "¿Quién pintó 'La última cena'?",
        respuestas: ["Miguel Ángel", "Leonardo da Vinci", "Rafael", "Caravaggio"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el país con mayor cantidad de hablantes de español?",
        respuestas: ["España", "México", "Argentina", "Colombia"],
        correcta: 1
    },
    {
        pregunta: "¿Qué científica descubrió la radiactividad junto a su esposo Pierre?",
        respuestas: ["Rosalind Franklin", "Marie Curie", "Jane Goodall", "Dorothy Hodgkin"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el idioma más hablado del mundo?",
        respuestas: ["Inglés", "Español", "Chino mandarín", "Árabe"],
        correcta: 2
    }
];

let preguntaActual = 0;

function crearPregunta() {
    const pregunta = preguntas[preguntaActual];
    const seccionPregunta = document.getElementById("preguntas");
    seccionPregunta.innerHTML = ""; // vaciamos la sección para quitar la pregunta anterior
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.pregunta;
    seccionPregunta.appendChild(h2);
    crearRespuestas(pregunta);
}
function crearRespuestas(pregunta){
    // creamos los botones de las respuestas
    // para mayor comodidad, crearemos un array donde guardaremos los botones
    const respuestas = [];
    for(let i = 0; i < pregunta.respuestas.length; i++){
        const respuesta = document.createElement("button"); // creamos el botón
        respuesta.textContent = pregunta.respuestas[i]; // le añadimos el texto
        respuesta.classList.add("respuesta"); // le añadimos la clase
        respuesta.addEventListener("click", function() { // añadimos el listener para ver si es la correcta
            if(i === pregunta.correcta){ // si la posición de la respuesta coincide con la correcta
                respuesta.classList.add("correcta"); // le ponemos la clase correcta
                setTimeout(()=>{ alert("Respuesta correcta!");},500); // mostramos un mensaje dentro de medio segundo
               
                preguntaActual++; // pasamos a la siguiente pregunta
                setTimeout(crearPregunta, 3000); //  creamos la siguiente pregunta en 3 segundos (3000 milisegundos)
            }else{
                respuesta.classList.add("incorrecta"); // le ponemos la clase incorrecta
                setTimeout(()=>{ alert("Respuesta incorrecta!");},500); // mostramos un mensaje dentro de medio segundo
                preguntaActual = 0; // volvemos a la primera pregunta
                setTimeout(crearPregunta, 3000); //  creamos la siguiente pregunta en 3 segundos (3000 milisegundos)
            }
        })
        respuestas.push(respuesta);
    }

    // añadimos las respuestas a la pantalla
    const seccionRespuestas  = document.getElementById("respuestas");
    seccionRespuestas.innerHTML = ""; // vaciamos la sección para quitar las respuestas anteriores
    for(let i = 0; i < respuestas.length; i++){ // para cada respuesta, la ponemos en la sección
        seccionRespuestas.appendChild(respuestas[i]);
    }


}

crearPregunta(preguntas,preguntaActual);