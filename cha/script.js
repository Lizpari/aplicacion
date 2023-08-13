function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const preguntas = [
    
    {
        pregunta: "En el dorama Crash Landing on You, ¿Yoon Se-ri era de:?",
        respuestas: ["Corea del Sur" , "Corea del Norte"],
        correcta: 0
    },
    {
        pregunta: "En Boys Over Flowers, ¿Con quién se queda Jan Di?",
        respuestas: ["Jun Pyo" , "Ji Hoo"],
        correcta: 0
    },
    {
        pregunta: "En tu eres mi destino, después de que se casen en el barco se casan una segunda vez, ¿Por qué lo hacen?",
        respuestas: ["Los obligan" , "Por amor"],
        correcta: 0
    },
    {
        pregunta: "En Romance of Tiger and Rose, en el final ¿Qué sucede?",
        respuestas: ["Se separan para siempre" , "Se vuelven a encontrar"],
        correcta: 1
    },
    {
        pregunta: "En Mi novia es un alíen, ¿con que animal se escondía el amigo de Xiaoqi Chai?",
        respuestas: ["Tortuga" , "Caracol"],
        correcta: 0
    },
    {
        pregunta: "En True Beauty, ¿Quién tenía hermana?",
        respuestas: ["Su-ho" , "Seo-joon"],
        correcta: 1
    },
    {
        pregunta: "En It's Okay to Not Be Okay, ¿A que le tenía miedo el hermano de Moon Gang-tae?",
        respuestas: ["Abejas" , "Mariposas"],
        correcta: 1
    },
    {
        pregunta: "En Shooting Star, ¿Por qué en el principio Gong Tae‑sung molestaba a Oh Han‑byul?",
        respuestas: ["Estaba enamorado" , "La odiaba"],
        correcta: 1
    },
    {
        pregunta: "En Tale of the nine tailed, ¿Por qué murió el perrito de Lee Rang?",
        respuestas: ["Por un incendio" , "Por una caída"],
        correcta: 0
    },
    {
        pregunta: "En Fatalidad a tu servicio, ¿Por qué a Ji-na guardaba distancia con Hyun-gyu?",
        respuestas: ["Porque en la secundaria le hacía bullying" , "Porque eran novios"],
        correcta: 1
    },
    {
        pregunta: "En Bulgasal: Immortal Souls, ¿Por qué Min Si-ho no podía tener hijos?",
        respuestas: ["Por una maldición puesta por Eul Tae" , "Por una maldición puesta por Dan Hwal"],
        correcta: 1
    },
    {
        pregunta: "En Oh mi emperador, ¿Qué deseo le pidió FeiFei a Bei Tang Yi, esto después de salvarlo?",
        respuestas: ["Bañarse con él" , "Casarse con él"],
        correcta: 0
    },
    {
        pregunta: "En A Business Proposal, ¿Cómo se conocen Ha-ri y Tae-moo?",
        respuestas: ["Por una cita a ciegas" , "Por un choque en el trabajo"],
        correcta: 0
    },
    {
        pregunta: "En Tale of the nine tailed, ¿Por qué Lee Rang odia a Lee Yeon?",
        respuestas: ["Porque le quito a su novia" , "Porque lo quiso matar"],
        correcta: 1
    },
    {
        pregunta: "En escalera al cielo, ¿A Han Jung Suh le sirvio la donación de ojos de Tae Hwa?",
        respuestas: ["Si" , "No"],
        correcta: 1
    },
    {
        pregunta: "En Hasta el Fin de la Luna, ¿Quién era Tantai Jin antes rencarnar?",
        respuestas: ["El dios de la muerte" , "El dios de la guerra"],
        correcta: 1
    },
    {
        pregunta: "En Mi amor de las estrellas, Antes de que Do Min-joon vuelva a su lugar natal, ¿Se despide de Song-yi?",
        respuestas: ["Si" , "No"],
        correcta: 0
    },
    {
        pregunta: "En Eres extraordinaria, Haru tenia algo en su mano, ¿Qué era?",
        respuestas: ["Una cicatriz" , "Un anillo"],
        correcta: 0
    },
    {
        pregunta: "En Estamos muertos, cuando Seo Hyo Ryung se cae, ¿Ji-min la ayuda?",
        respuestas: ["Si" , "No"],
        correcta: 1
    },
    {
        pregunta: "En Dulce hogar, ¿Quién “creo” la enfermedad?",
        respuestas: ["El esposo de Seo Yi-kyeong" , "El hermano de Seo Yi-kyeong"],
        correcta: 0
    },
    
    

];

shuffleArray(preguntas);

const preguntasContainer = document.getElementById("preguntas-container");
const verRespuestasBtn = document.getElementById("verRespuestas");
const puntajeContainer = document.getElementById("puntaje");

preguntas.forEach((pregunta, index) => {
    const preguntaElement = document.createElement("div");
    preguntaElement.classList.add("pregunta");
    preguntaElement.innerHTML = `<p>${index + 1}. ${pregunta.pregunta}</p>`;

    shuffleArray(pregunta.respuestas); // Opcional: Mezcla las respuestas
    
    pregunta.respuestas.forEach((respuesta, i) => {
        const respuestaElement = document.createElement("div");
        respuestaElement.classList.add("respuesta");
        respuestaElement.innerHTML = `
            <input type="radio" name="pregunta${index}" value="${i}">
            <label>${respuesta}</label>
        `;
        preguntaElement.appendChild(respuestaElement);
    });

    preguntasContainer.appendChild(preguntaElement);
});

verRespuestasBtn.addEventListener("click", () => {
    const respuestasCorrectas = preguntas.map(pregunta => pregunta.correcta);
    let puntaje = 0;
    
    preguntasContainer.querySelectorAll(".pregunta").forEach((preguntaElement, index) => {
        const opciones = preguntaElement.querySelectorAll("input[type='radio']");
        opciones.forEach(opcion => {
            opcion.disabled = true;
            if (parseInt(opcion.value) === respuestasCorrectas[index]) {
                opcion.nextElementSibling.style.color = "green";
                if (opcion.checked) {
                    puntaje++;
                }
            } else {
                opcion.nextElementSibling.style.color = "red";
            }
        });
    });

    puntajeContainer.textContent = `Puntaje: ${puntaje} / ${preguntas.length}`;
    puntajeContainer.style.display = "block";
});
