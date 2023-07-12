'use strict'

let userName = prompt("What is your name?");
alert(`Welcome ${userName} to my website! I know this is sudden, but get ready because I'm about to ask you a series of questions.`);


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
  } else if (userChoice == "no" || userChoice == "n") {
    // console.log(noResponses[i]);
    alert(noResponses[i]);
  }

}


//number guessing game
userNum = prompt(`Hey ${userName}, thank you so much for answering my questions! We aren't done yet. Now let's play a little number guessing game. 
Try to guess a number between 1 and 10. You have 4 guesses. Good luck! `);

