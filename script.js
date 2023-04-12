const intro = document.getElementById('intro')
const startBtn = document.getElementById('start-btn')
const submitBtn = document.getElementById('submit')
const quiz = document.getElementById('quiz')

const questionEl = document.getElementById('question')
@@ -18, 6 + 19, 8 @@let score = 0
// startQuiz()

function startQuiz() {
    quiz.style.display = "block";
    intro.style.display = "none";
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    @@ -44, 48 + 47, 67 @@function getSelected() {
        return answer
    }

    submitBtn.addEventListener('click', () => {
        const answer = getSelected()

        if (answer) {
            if (answer === quizData[currentQuiz].correct) {
                score++
            }

            currentQuiz++

            if (currentQuiz < quizData.length) {
                loadQuiz()
            } else {
                quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="location.reload()">Reload</button>
          `
            }
        }
    })


    const quizData = [
        {
            question: "?",
            a: "aaaa",
            b: "bbbb",
            c: "ccc",
            d: "dddd",
            correct: "a",
            question: "What is the HTML tag is used when writing JavaScript code?",
            a: "<javascript>",
            b: "<javaScript>",
            c: "<script>",
            d: "<js>",
            correct: "c",
        },
        {
            question: "?",
            a: "",
            b: "",
            c: "",
            d: "",
            correct: "",
            question: "JavaScript is a ________ Side Scripting Language.",
            a: "Server",
            b: "Browser",
            c: "Far",
            d: "ISP",
            correct: "b",
        },
        {
            question: "?",
            a: "",
            b: "",
            c: "",
            d: "",
            correct: "",
            question: "Which built-in method sorts the elements of an array?",
            a: "changeOrder(order)",
            b: "order()",
            c: "sort()",
            d: "array_sorter",
            correct: "c",
        },
        {
            question: "?",
            a: "",
            b: "",
            c: "",
            d: "",
            correct: "",
            question: "Which of the following function of Array object reverses the order of the elements of an array?",
            a: "reverse()",
            b: "push()",
            c: "reduce()",
            d: "reuseRecycle()",
            correct: "a",
        },
        {
            question: "?",
            a: "",
            b: "",
            c: "",
            d: "",
            correct: "",
            question: "Which of the following is not a reserved word in JavaScript?",
            a: "interface",
            b: "throws",
            c: "program",
            d: "short",
            correct: "c",
        },
    ];