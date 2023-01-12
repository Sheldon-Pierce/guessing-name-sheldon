'use strict';

let question1answer = 'Yes';
let question2answer = 'No';
let question3answer = 'No';
let question4answer = 'No';
let question5answer = 'Yes';
let question6answer = 26;
let listedAnswers = ['bowling ball', ' bubbles ', 'rocks ', ' feathers ', ' animals '];
let question7answer = [listedAnswers[1], listedAnswers[3],];
let userName= prompt('Hello, what is your name?');
let totalAttempts = 0;
let correctAnswers = 0;
let totalTries = correctAnswers += totalAttempts;

setTimeout(greeting, 1000);

function greeting() {
  alert(`Hello ${userName}!`);
}

function goodbye() {
  alert(`Thank you for coming ${userName}!`);
}

$('#q1').click(function(){
  let answer = prompt('Is my name Sheldon?');
  while(answer.toLowerCase() !== question1answer.toLowerCase()){
    alert('You have the wrong answer! Try again!');
    totalAttempts++;
    $('#counter').text(`Wrong Attempts: ${totalAttempts}`);
    answer = prompt(`Is my name Sheldon? Wrong Attempts: ${totalAttempts}`);
  }
  //   console.log("You are correct!")
  correctAnswers++;
  alert('That\'s correct!');
  $('#percent').text(`Correct Answers: ${correctAnswers}`);
});

$('#q2').click(function(){
  let answer = prompt('Did I play baseball in highschool?');
  while(answer.toLowerCase() !== question2answer.toLowerCase()){
    totalAttempts++;
    alert('You have the wrong answer! Try again!');
    answer = prompt(`Did I play baseball in highschool? Wrong Attempts: ${totalAttempts}`);
    $('#counter').text(`Wrong Attempts: ${totalAttempts}`);
  }
  //   console.log("You are correct!")
  correctAnswers++;
  alert('That\'s correct!');
  $('#percent').text(`Correct Answers: ${correctAnswers}`);
});

$('#q3').click(function(){
  let answer = prompt('Did I go to college in Montana?');
  while(answer.toLowerCase() !== question3answer.toLowerCase()){
    totalAttempts++;
    alert('You have the wrong answer! Try again!');
    answer = prompt(`Did I go to college in Montana? Wrong Attempts: ${totalAttempts}`);
    $('#counter').text(`Wrong Attempts: ${totalAttempts}`);
  }
  //   console.log("You are correct!")
  correctAnswers++;
  alert('That\'s correct!');
  $('#percent').text(`Correct Answers: ${correctAnswers}`);
});

$('#q4').click(function(){
  let answer = prompt('Was I previously a Mechanical Engineer?');
  while(answer.toLowerCase() !== question4answer.toLowerCase()){
    totalAttempts++;
    alert('You have the wrong answer! Try again!');
    answer = prompt(`Was I previously a Mechanical Engineer? Wrong Attempts: ${totalAttempts}`);
    $('#counter').text(`Wrong Attempts: ${totalAttempts}`);
  }
  //   console.log("You are correct!")
  correctAnswers++;
  alert('That\'s correct!');
  $('#percent').text(`Correct Answers: ${correctAnswers}`);
});

$('#q5').click(function(){
  let answer = prompt('Is my current goal to become a Software Developer?');
  while(answer.toLowerCase() !== question5answer.toLowerCase()){
    totalAttempts++;
    alert('You have the wrong answer! Try again!');
    answer = prompt(`Is my current goal to become a Software Developer? Wrong Attempts: ${totalAttempts}`);
    $('#counter').text(`Wrong Attempts: ${totalAttempts}`);
  }
  //   console.log("You are correct!")
  correctAnswers++;
  alert('That\'s correct!');
  $('#percent').text(`Correct Answers: ${correctAnswers}`);
});

$('#q6').click(function(){
  let answer = prompt('How old am I? (Numeric value) (4 Attempts remaining)');
  while(answer !== question6answer) {
    for (let count = 3; count > 0; count--) {
      if(answer < 26){
        totalAttempts++;
        alert(`Your guess of ${answer} is too low! Try again!`);
        answer = prompt(`How old am I? ${count} attempts remaining! Wrong Attempts: ${totalAttempts}`);
        $('#counter').text(`Wrong Attempts: ${totalAttempts}`);
      }
      else if(answer > 26){
        totalAttempts++;
        alert(`Your guess of ${answer} is too high! Try again!`);
        answer = prompt(`How old am I? ${count} attempts remaining! Wrong Attempts: ${totalAttempts}`);
        $('#counter').text(`Wrong Attempts: ${totalAttempts}`);
      }
    }
    if(answer == question6answer){
      correctAnswers++;
      alert('That\'s correct!');
      $('#percent').text(`Correct Answers: ${correctAnswers}`);
      break;
    } else {
      totalAttempts++;
      alert('You have run out of attempts! Correct answer is 26!');
      $('#counter').text(`Wrong Attempts: ${totalAttempts}`);
      break;
    }
  }
  // if(answer == question6answer){
  //   correctAnswers++;
  //   alert('That\'s correct!');
  //   $('#percent').text(`Correct Answers: ${correctAnswers}`);
  }
);


$('#q7').click(function(){
  let answer = prompt(`There are 2 possible answers to this questions! 
Your options are ${listedAnswers} !
Please enter a number between 1 - 6 for your choice!
Question: Someone yells 'Hey! Watch out behind you, ______ is headed your way!
Which of the listed options would be most ideal?
  `);
  while(listedAnswers[answer - 1] !== question7answer[0] || question7answer[1]) {
    for (let count = 5; count > 0; count--) {
      if(listedAnswers[answer - 1] === question7answer[0]){
        // console.log(listedAnswers[answer - 1]);
        // console.log(question7answer[0]);
        correctAnswers++;
        alert('That\'s correct!');
        alert(`You got ${correctAnswers} answers correct in ${totalAttempts} tries!`);
        $('#percent').text(`Correct Answers: ${correctAnswers}`);
        break;
      }
      else if(listedAnswers[answer - 1] === question7answer[1]){
        // console.log(listedAnswers[answer - 1]);
        // console.log(question7answer[1]);
        correctAnswers++;
        alert('That\'s correct!');
        alert(`You got ${correctAnswers} answers correct in ${totalTries} tries!`);
        $('#percent').text(`Correct Answers: ${correctAnswers}`);
        break;
      } else {
        totalAttempts++;
        answer = prompt(`That is wrong please try again! Attempts Remaining: ${count} tries`);
      }
    }
    break;
  }
});

