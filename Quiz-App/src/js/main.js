const quizData = [
    {
        question: "Какой язык работает в веб-браузере?",
        a: "C",
        b: "Java",
        c: "JavaScript",
        d: "Python",
        correct: "c",
    },
    {
        question: "Что означает css?",
        a: "Central style sheet",
        b: "Cars SUVs Sailboats",
        c: "Cascading Style Sheets",
        d: "Cascading Simple Sheets",
        correct: "c",
    },
    {
        question: "Что означает HTML?",
        a: "Hyperloop Machine Language",
        b: "Helicopters Terminals Motorboats",
        c: "Hypertext Markdown Language",
        d: "Hypertext Markup Language",
        correct: "d",
    },
    {
        question: "В каком году был запущен JavaScript?",
        a: "1995",
        b: "1994",
        c: "1996",
        d: "Ничего из вышеперечисленного",
        correct: "a",
    },
    {
        question: "Из чего состоит веб-сайт?",
        a: "Из ссылок",
        b: "Из серверов",
        c: "Из одной или нескольких веб-страниц",
        d: "Из сайтов",
        correct: "c",
    },
    {
        question: "Кто занимается разработкой сайтов?",
        a: "Моделлер",
        b: "Программист",
        c: "IT специалист",
        d: "Веб-разработчик",
        correct: "d",
    },
    {
        question: "Что не может находится на веб-странице?",
        a: "Файловая система",
        b: "Картинки",
        c: "Видео",
        d: "Музыка",
        correct: "a",
    },
    {
        question: "Какой первый этап в разработке сайта?",
        a: "Написать ТЗ",
        b: "Определить цель",
        c: "Нарисовать макет",
        d: "Создать сайт",
        correct: "b",
    },
    {
        question: "Что означает WWW?",
        a: "World Whole Web",
        b: "World Wide Web",
        c: "Whole World Web",
        d: "World War Web",
        correct: "b",
    },
    {
        question: "Станицы, которые генерируются по запросу пользователя называются",
        a: "Динамичными",
        b: "Статическими",
        c: "Статичными",
        d: "Динамическими",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz()
{
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers()
{
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected()
{
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked)
        {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer)
    {
        if (answer === quizData[currentQuiz].correct)
        {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length)
        {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Вы ответили правильно на ${score}/${quizData.length} вопросов!</h2>

                <button onclick="location.reload()">Заново</button>
            `
        }
    }
})
