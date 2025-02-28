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

function crearPaginaInicio() {
    // borramos las secciones de preguntas, respuestas y comodines
    const seccionPregunta = document.getElementById("preguntas");
    seccionPregunta.innerHTML = "";
    const seccionRespuestas = document.getElementById("respuestas");
    seccionRespuestas.innerHTML = "";
    const seccionComodines = document.getElementById("comodines");
    seccionComodines.innerHTML = "";

    // buscamos la sección 'menu' para mostrar el botón de comenzar
    const seccionInicio = document.getElementById("menu");
    seccionInicio.innerHTML = "";
    const botonComenzar = document.createElement("button");
    botonComenzar.textContent = "Comenzar";

    botonComenzar.addEventListener("click", () => {
        seccionInicio.innerHTML = ""; // borramos el mensaje de la sección de inicio
        preguntaActual = 0;
        crearPregunta(); // creamos la primera pregunta
        crearComodines(); // creamos los comodines

    });
    seccionInicio.appendChild(botonComenzar);

    document.addEventListener("click",crearAudioInicio);
    
}
function pararAudios(){
    const audios = document.getElementsByClassName("audio");
    for(let i = 0; i < audios.length; i++){
        audios[i].pause();
    }
}
function crearAudioInicio(){
    pararAudios();
    const audio = document.getElementById("audioPlayerInicio");
    audio.play();
}
function crearAudioPreguntas(){
    pararAudios();
    const audio = document.getElementById("audioPlayerPregunta");
    audio.play();
}
function crearAudioRespuestaCorrecta(){
    pararAudios();
    const audio = document.getElementById("audioPlayerRespuestaCorrecta");
   audio.play();
}
function crearAudioRespuestaIncorrecta(){
    pararAudios();
    const audio = document.getElementById("audioPlayerRespuestaIncorrecta");
    audio.play();
}
function crearPaginaFinal() {
    // borramos las secciones de preguntas, respuestas y comodines
    const seccionPregunta = document.getElementById("preguntas");
    seccionPregunta.innerHTML = "";
    const seccionRespuestas = document.getElementById("respuestas");
    seccionRespuestas.innerHTML = "";
    const seccionComodines = document.getElementById("comodines");
    seccionComodines.innerHTML = "";

    // buscamos la sección 'menu' para mostrar la puntuación obtenida
    const seccionFinal = document.getElementById("menu");
    seccionFinal.innerHTML = "";
    const puntuacion = document.createElement("p");
    puntuacion.textContent = `Puntuación: ${preguntaActual * 10}`;
    seccionFinal.appendChild(puntuacion);

    // creamos el botón de volver a jugar
    const botonVolver = document.createElement("button");
    botonVolver.textContent = "Volver a jugar";
    botonVolver.addEventListener("click", () => {
        seccionFinal.innerHTML = ""; // borramos el mensaje de la sección de inicio
        preguntaActual = 0;
        crearPaginaInicio(); // creamos la primera pregunta
    });
    seccionFinal.appendChild(botonVolver);
}

function crearPregunta() {
    const pregunta = preguntas[preguntaActual];
    const seccionPregunta = document.getElementById("preguntas");
    seccionPregunta.innerHTML = ""; // vaciamos la sección para quitar la pregunta anterior
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.pregunta;
    const h3 = document.createElement("h3");
    h3.textContent = "Pregunta " + (preguntaActual + 1) + " de " + preguntas.length;
    seccionPregunta.appendChild(h3);
    seccionPregunta.appendChild(h2);
    crearRespuestas(pregunta);
    crearAudioPreguntas();
}
function crearRespuestas(pregunta) {
    // creamos los botones de las respuestas
    // para mayor comodidad, crearemos un array donde guardaremos los botones
    const respuestas = [];
    for (let i = 0; i < pregunta.respuestas.length; i++) {
        const respuesta = document.createElement("button"); // creamos el botón
        respuesta.textContent = pregunta.respuestas[i]; // le añadimos el texto
        respuesta.classList.add("respuesta"); // le añadimos la clase
        respuesta.setAttribute("id", "respuesta" + i); // le aádimos el id

        respuesta.addEventListener("click", function () { // añadimos el listener para ver si es la correcta
            if (i === pregunta.correcta) { // si la posición de la respuesta coincide con la correcta
                respuesta.classList.add("correcta"); // le ponemos la clase correcta
                preguntaActual++; // pasamos a la siguiente pregunta
                crearAudioRespuestaCorrecta();
                if(preguntaActual  >= preguntas.length) { // si ya no quedan preguntas
                    setTimeout(crearPaginaFinal, 2000); //  creamos la siguiente pregunta en 2 segundos (2000 milisegundos)
                }else{
                    setTimeout(crearPregunta, 2000); //  creamos la siguiente pregunta en 2 segundos (2000 milisegundos)
                }
            } else {
                crearAudioRespuestaIncorrecta();
                respuesta.classList.add("incorrecta"); // le ponemos la clase incorrecta
                setTimeout(crearPaginaFinal, 2000); //  creamos la siguiente pregunta en 2 segundos (2000 milisegundos)
            }
        })
        respuestas.push(respuesta);
    }

    // añadimos las respuestas a la pantalla
    const seccionRespuestas = document.getElementById("respuestas");
    seccionRespuestas.innerHTML = ""; // vaciamos la sección para quitar las respuestas anteriores
    for (let i = 0; i < respuestas.length; i++) { // para cada respuesta, la ponemos en la sección
        seccionRespuestas.appendChild(respuestas[i]);
    }


}

// crear los comodines del juego
function crearComodines(){
    const seccionComodines = document.getElementById("comodines");

    const comodin50 = document.createElement("button");
    comodin50.textContent = "50%";
    seccionComodines.appendChild(comodin50);
    
    const comodinLlamada = document.createElement("button");
    comodinLlamada.innerHTML =`<i class="fa-solid fa-phone"></i>`;
    seccionComodines.appendChild(comodinLlamada);

    const comodinPublico = document.createElement("button");
    comodinPublico.innerHTML = `<i class="fa-solid fa-user-group"></i>`;
    seccionComodines.appendChild(comodinPublico);

    // el comodin del 50% borra dos de las respuestas incorrectas
    comodin50.addEventListener("click", () => {
        const pregunta = preguntas[preguntaActual]; // sacamos la pregunta actual
        const respuestaCorrecta  =pregunta.correcta; // buscamos la respuesta correcta
        let otraRespuesta  = Math.floor(Math.random() * 4); // buscamos una respuesta al azar
        while (otraRespuesta === respuestaCorrecta) { // si la respuesta coincide con la correcta seguimos buscando
            otraRespuesta = Math.floor(Math.random() * 4);
        }
        const botones = document.querySelectorAll(".respuesta"); // buscamos todos los botones de respuesta
        for(let i = 0; i < botones.length; i++){
            const boton = botones[i];
            if(boton.id !== "respuesta" + respuestaCorrecta && boton.id !== "respuesta" + otraRespuesta){ // si el id no coincide con la correcta o la otra elegida
                boton.remove(); // borramos el botón
            }
        }
        comodin50.remove();// borramos el botón del comodin del 50% para no poder volver a usarlo
    });

    // El comodín de la llamada te dirá cuál es la respuesta que tu amigo cree que es correcta
    comodinLlamada.addEventListener("click", () => {
        const pregunta = preguntas[preguntaActual]; // sacamos la pregunta actual
        const respuestaCorrecta  =pregunta.correcta; // buscamos la respuesta correcta
        const probabilidadDeAcierto = 0.6 // nuestro amigo tiene un 60% de probabilidad de acertar
        let respuestaSeleccionada = respuestaCorrecta;
        if(Math.random() > probabilidadDeAcierto){ // si el numero aleatorio es mayor que 0.75
            respuestaSeleccionada = Math.floor(Math.random() * 4); // escogemos una respuesta al azar
        }
        alert("Tu amigo ha escogido la respuesta: "+pregunta.respuestas[respuestaSeleccionada])
        comodinLlamada.remove();
    });

    // El comodín del público te dirá cuales son las respuestas más votadas
    comodinPublico.addEventListener("click", () => {
        const pregunta = preguntas[preguntaActual]; 
        const respuestaCorrecta = pregunta.correcta;
        const totalProbabilidad = 100;
        const probabilidadesRespuestas = new Array(pregunta.respuestas.length).fill(0); // array con las probabilidades de cada respuesta, lo creamos con valores de 0
    
        // Probabilidad base para cada respuesta
        let probabilidadesBase = pregunta.respuestas.map((_, i) => 
            i === respuestaCorrecta ? Math.random() * 50 + 20 : Math.random() * 40 // Correcta: 20-70%, Incorrectas: 0-40%
        );
    
        // Normalizar para que la suma total sea 100%
        let sumaTotal = probabilidadesBase.reduce((acc, p) => acc + p, 0);
        let factorNormalizacion = totalProbabilidad / sumaTotal;
        
        for (let i = 0; i < probabilidadesBase.length; i++) {
            probabilidadesRespuestas[i] = Math.round(probabilidadesBase[i] * factorNormalizacion);
        }
    
        // Ajustar posibles desajustes en la suma por redondeo
        let ajuste = totalProbabilidad - probabilidadesRespuestas.reduce((acc, p) => acc + p, 0);
        if (ajuste !== 0) {
            let indexAjuste = Math.floor(Math.random() * pregunta.respuestas.length);
            probabilidadesRespuestas[indexAjuste] += ajuste;
        }
        // unimos las respuestas para mostrarlas en un solo texto
        const respuestaPublico = probabilidadesRespuestas.map((probabilidad, i) => `${pregunta.respuestas[i]}: ${probabilidad}%`).join(",\n");
        alert("Distribución de votos del público:\n"+ respuestaPublico);
        comodinPublico.remove();
    });
    
    
}

crearPaginaInicio();
