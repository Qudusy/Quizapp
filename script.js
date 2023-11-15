        const questions = [
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                correctAnswer: 1
            },
            {
                question: "A noun is name of any person animal, place or thing.",
                options: ["Yes", "No", "Maybe", "i don't know"],
                correctAnswer: 0
            }
            //add more questions here
        ];

        let currentQuestionIndex = 0;
        let score = 0;

        const questionElement = document.getElementById("question");
        const optionsElements = document.querySelectorAll("input[type='radio']");
        const nextButton = document.getElementById("next-button");
        const resultContainer = document.getElementById("result-container");
        const scoreElement = document.getElementById("score");

        function loadQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;

            optionsElements.forEach((option, index) => {
                option.nextElementSibling.textContent = `Option ${String.fromCharCode(65 + index)}: ${currentQuestion.options[index]}`;
                option.value = index;
            });
        }

        function checkAnswer(selectedOption) {
            const currentQuestion = questions[currentQuestionIndex];
            if (selectedOption === currentQuestion.correctAnswer) {
                score++;
            }
        }

        function showResult() {
            resultContainer.style.display = "block";
            resultContainer.scrollIntoView({ behavior: "smooth" });
            scoreElement.textContent = `${score} / ${questions.length}`;
        }

        nextButton.addEventListener("click", () => {
            const selectedOption = Array.from(optionsElements).find(option => option.checked);
            if (selectedOption !== undefined) {
                checkAnswer(parseInt(selectedOption.value));
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showResult();
            }
        });

        loadQuestion();