function checkAnswers() {
  // Correct answers
  var correctAnswers = {
    q1: "1865",
    q2: "Republican",
    q3: "1921",
    q4: "Heart Attack",
  };

  var score = 0;
  var form = document.getElementById("quizForm");

  // Check answers for each question
  for (var i = 1; i <= 4; i++) {
    var question = form.querySelector('input[name="q' + i + '"]:checked');
    if (question && question.value === correctAnswers["q" + i]) {
      score++;
    }
  }

  // Show result
  var result = document.getElementById("result");
  if (score === 4) {
    result.innerHTML =
      "You got all the answers right! Your score is " + score + "/4.";
  } else {
    result.innerHTML = "You got " + score + " out of 4 correct.";
  }
}
