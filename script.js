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

function crearPregunta(preguntas,preguntaActual) {
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
    const respuesta1 = document.createElement("button");
    const respuesta2 = document.createElement("button");
    const respuesta3 = document.createElement("button");
    const respuesta4 = document.createElement("button");

    // damos los textos a las respuestas
    respuesta1.textContent = pregunta.respuestas[0];
    respuesta2.textContent = pregunta.respuestas[1];
    respuesta3.textContent = pregunta.respuestas[2];
    respuesta4.textContent = pregunta.respuestas[3];

    // damos las clases a las respuestas
    respuesta1.classList.add("respuesta");
    respuesta2.classList.add("respuesta");
    respuesta3.classList.add("respuesta");
    respuesta4.classList.add("respuesta");

    // añadimos las respuestas a la pantalla
    const seccionRespuestas  = document.getElementById("respuestas");
    seccionRespuestas.innerHTML = ""; // vaciamos la sección para quitar las respuestas anteriores
    seccionRespuestas.appendChild(respuesta1);
    seccionRespuestas.appendChild(respuesta2);
    seccionRespuestas.appendChild(respuesta3);
    seccionRespuestas.appendChild(respuesta4);

}

crearPregunta(preguntas,preguntaActual);