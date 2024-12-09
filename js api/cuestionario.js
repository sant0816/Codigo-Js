let questions = [];

// Función para cargar las preguntas desde la API
async function loadQuestions() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/cesarmcuellar/CuestionarioWeb/refs/heads/main/cuestionario.json');

    
        if (!response.ok) {
            throw new Error('Error al cargar las preguntas: ' + response.statusText);
        }

        const data = await response.json();

        // Imprimir los datos para verificar su estructura
        console.log(data);

        // Verificar si data es un objeto y tiene las propiedades correctas
        if (typeof data === 'object' && data !== null) {
            
            questions = [
                ...data.multiple_choice_questions.map(q => ({
                    pregunta: q.question,
                    tipo: 'multiple',
                    respuestas: q.options,
                    correcta: q.correct_answer
                })),
                ...data.true_false_questions.map(q => ({
                    pregunta: q.question,
                    tipo: 'verdadero_falso',
                    respuestas: ['Verdadero', 'Falso'],
                    correcta: q.correct_answer ? 'Verdadero' : 'Falso'
                }))
            ];
            displayQuestions();
        } else {
            throw new Error('Los datos no son un objeto válido');
        }
    } catch (error) {
        console.error(error);
        const questionsContainer = document.getElementById('questions-container');
        questionsContainer.innerHTML = '<p>Error al cargar las preguntas. Intenta de nuevo más tarde.</p>';
    }
}


function displayQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';  

    
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    
    shuffledQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('h3');
        questionTitle.innerText = `${index + 1}. ${question.pregunta}`;
        questionDiv.appendChild(questionTitle);

        if (question.tipo === 'multiple') {
            question.respuestas.forEach((respuesta) => {
                const answerLabel = document.createElement('label');
                answerLabel.innerHTML = `
                    <input type="radio" name="question${index}" value="${respuesta}" /> ${respuesta}
                `;
                questionDiv.appendChild(answerLabel);
            });
        } else if (question.tipo === 'verdadero_falso') {
            question.respuestas.forEach((respuesta) => {
                const answerLabel = document.createElement('label');
                answerLabel.innerHTML = `
                    <input type="radio" name="question${index}" value="${respuesta}" /> ${respuesta}
                `;
                questionDiv.appendChild(answerLabel);
            });
        }

        questionsContainer.appendChild(questionDiv);
    });
}

// obtener el resultado del cuestionario
function getResult() {
    let correctAnswers = 0;


    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.correcta) {
            correctAnswers++;
        }
    });

    // Mostrar el resultado
    const percentage = (correctAnswers / questions.length) * 100;
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Tu resultado es: ${correctAnswers} de ${questions.length} respuestas correctas (${percentage.toFixed(2)}%)`;
    resultDiv.style.display = 'block'; // Mostrar el resultado
}


document.getElementById('submit-btn').addEventListener('click', getResult);


window.onload = loadQuestions;
