const questions = [
    { question: "What is HTML?", answer: "Markup Language" },
    { question: "What is CSS?", answer: "Styling Sheets" },
    // More questions
];

let currentQuestionIndex = 0;

document.getElementById('next').addEventListener('click', function() {
    if(currentQuestionIndex < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestionIndex].question;
        currentQuestionIndex++;
    } else {
        alert("You've completed the quiz!");
    }
});
