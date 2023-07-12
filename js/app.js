// 'use strict'

let userName = prompt("What is your name?");
alert(`Welcome ${userName} to my website! I know this is sudden, but get ready because I'm about to ask you a series of questions. You will also get a score depending on how many you get right. Good luck!`);

let userScore = 0;


// 5 questions
const questions = [
  "Have you ever played a sport? (yes/no or y/n)",
  "If a bar of soap falls on the floor, is it dirty? (yes/no or y/n)",
  "Can you speak another language? (yes/no or y/n)",
  "Do you enjoy coding? (yes/no or y/n)",
  "Do even lift? (yes/no or y/n)",
];

for (let i = 0; i < questions.length; i++) {

  let userChoice = prompt(questions[i]);

  const yesResponses = [
    "Nice! I'm a bit of an underwater basket weaver myself.",
    "How can that be? You can't clean it, it's already soap.",
    "Fantastic! Fun fact: Only about 20% of people in the United States speak more than one language.",
    "That was a trick question. Of course your answer is going to be yes.",
    "Been looking for a gym partner. See you 5:00am."
  ];

  const noResponses = [
    "That alright! It's never too late to pick one up.",
    "I agree. It's not like you can wash it, right? Rinse it off, maybe?",
    "That's alright. One language is already hard enough isn't it?",
    "Uncaught ReferenceError: " + userChoice + " is not defined.",
    "Coding takes up more than enough time, doesn't it?"
  ];
  
  if (userChoice == "yes" || userChoice == "y") {
    // console.log(yesResponses[i]);
    alert(yesResponses[i]);
    userScore += 1;
  } else if (userChoice == "no" || userChoice == "n") {
    // console.log(noResponses[i]);
    alert(noResponses[i]);
    userScore += 1;
  } 

}




//number guessing game
alert(`Hey ${userName}, thank you so much for answering my questions! But we're not done! Now let's play a little number guessing game. 
Try to guess a number between 1 and 10. You have 4 guesses. Good luck! `);

let myNum = Math.floor(Math.random() * 10) + 1;

let isCorrect = false;
for (let i = 0; i < 4; i++) {
  let userNum = prompt("Guess a number between 1 and 10");
  if (userNum == myNum) {
    isCorrect = true;
    userScore += 1;
    alert("Congrats! You guessed correctly! The number was " + myNum + ".");
    break;
  } else  if (userNum > myNum) {
    alert("Too high.");
  } else if (userNum < myNum) {
    alert("Too low.");
  }
}

if (!isCorrect) {
  alert(`Uh-Oh! Beter luck next time. The answer was ${myNum}.`);
}


//multiple possibility question
alert(`Thanks for sticking with me so far ${userName}! Buuuuut, we're not quite done. Now I'm going to ask you a question that you have to answer correctly within 6 attempts. The upside though is that are multiple correct answers! Good Luck!`);

const turtles = ["leonardo", "michelangelo", "donatello", "raphael"];

let isRight = false;
for (i = 0; i < 6; i++) {
  let userAnswer = prompt("Name one of the four Teenage Mutant Ninja Turtle brothers.");
  if (userAnswer.toLowerCase() === "donatello" ||
      userAnswer.toLowerCase() === "leonardo" ||
      userAnswer.toLowerCase() === "raphael" ||
      userAnswer.toLowerCase() === "michelangelo") {
    isRight = true;
    userScore += 1;
    alert(`Nice! You are correct, ${userAnswer} is one of the turtle brothers! If you don't know all of them, here's a list of all four: Leonardo, Michelangelo, Donatello, and Raphael.`);
    break;
  } else {
    alert("Sorry, that's not one of them.");
  }
}

if (!isRight) {
  alert("If you didn't know any of them, not a big deal. For future reference the names of all four brothers are: Leonardo, Michelangelo, Donatello, and Raphael.");
}

alert(`Thank you for playing along with all these questions. I hope you enjoyed them. Your final score is ${userScore} out of 7.`);
