function toggleAnswer(questionElement) {
    const answerElement = questionElement.nextElementSibling;
    if (answerElement.style.display === "block") {
        answerElement.style.display = "none";
    } else {
        answerElement.style.display = "block";
    }
}
