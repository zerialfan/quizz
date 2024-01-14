const respuestas = [];

const preguntas = [
    {
        pregunta: "¿Qué tanto conoce a su pareja?",
        opciones: [
            { texto: "Mucho", valor: 3 },
            { texto: "Normal", valor: 2 },
            { texto: "Poco", valor: 1 }
        ]
    },
    {
        pregunta: "¿Cómo describirías típicamente la forma de manejar los problemas en tu relación?",
        opciones: [
            { texto: "Días sin hablar", valor: 2 },
            { texto: "Conversamos sobre el asunto", valor: 3 },
            { texto: "Suelo pedirle consejos a amigos(as)", valor: 1 }
        ]
    }
];

function cargarPreguntas() {
    const formularioContainer = document.getElementById('formulario-container');

    preguntas.forEach((pregunta, index) => {
        const divPregunta = document.createElement('div');
        divPregunta.classList.add('question');

        const pPregunta = document.createElement('p');
        pPregunta.textContent = `Pregunta ${index + 1}: ${pregunta.pregunta}`;

        const divOpciones = document.createElement('div');
        divOpciones.classList.add('question-container');

        pregunta.opciones.forEach((opcion, i) => {
            const label = document.createElement('label');
            label.htmlFor = `q${index + 1}_opcion${i + 1}`;

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q${index + 1}`;
            radio.id = `q${index + 1}_opcion${i + 1}`;
            radio.value = opcion.valor;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(` ${opcion.texto}`));

            divOpciones.appendChild(label);
            divOpciones.appendChild(document.createElement('br'));
        });

        divPregunta.appendChild(pPregunta);
        divPregunta.appendChild(divOpciones);

        formularioContainer.appendChild(divPregunta);
    });
}

function calcularResultado() {
    const total = respuestas.reduce((sum, value) => sum + value, 0);

    let resultado = "Resultado: ";
    if (total => 2) {
        resultado += "Bajo";
    } else if (total => 3) {
        resultado += "Moderado";
    } else {
        resultado += "Alto";
    }

    // Muestra el resultado en el elemento con id "resultado"
    document.getElementById('resultado').textContent = resultado;
}

// Llamamos a la función para cargar las preguntas al cargar la página
cargarPreguntas();

// Resto del código...
