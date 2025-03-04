function checkAnswers() {
  let correctAnswers = {
    q1: "1865",
    q2: "Republican",
    q3: "1921",
    q4: "Heart Attack",
  };

  let score = 0;
  let form = document.getElementById("quizForm");

  for (let i = 1; i <= 4; i++) {
    let question = form.querySelector('input[name="q' + i + '"]:checked');
    if (question && question.value === correctAnswers["q" + i]) {
      score++;
    }
  }

  let result = document.getElementById("result");
  if (score === 4) {
    result.innerHTML =
      "You got all the answers right! Your score is " + score + "/4.";
  } else {
    result.innerHTML = "You got " + score + " out of 4 correct.";
  }
}

function showRandomQuote() {
  const quotes = [
    "I have no trouble with my enemies. I can take care of my enemies all right. But my friends, my Goddamn friends, they’re the ones who keep me walking the floor at nights!",
    "America's present need is not heroics, but healing; not nostrums, but normalcy.",
    "I am not fit for this office and should never have been here.",
    "Inherent rights are from God, and the tragedies of the world originate in their attempted denial.",
    "We must have a citizenship less concerned about what the government can do for it and more anxious about what it can do for the nation.",
    "Our most dangerous tendency is to expect too much of government, and at the same time do for it too little.",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
}
