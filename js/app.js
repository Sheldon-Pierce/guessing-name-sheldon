'use strict';

let question1answer = 'Yes';
let question2answer = 'No';
let question3answer = 'No';
let question4answer = 'Yes';
let question5answer = 'Yes';
let userName= prompt('Hello, what is your name?');

setTimeout(greeting, 1000);

function greeting() {
  alert(`Hello ${userName}!`);
}

setTimeout(goodbye, 30000);

function goodbye() {
  alert(`Thank you for coming ${userName}!`);
}

$('#q1').click(function(){
  let answer = prompt('Is my name Sheldon?');
  while(answer.toLowerCase() !== question1answer.toLowerCase()){
    alert('You have the wrong answer! Try again!');
    let answer2 = prompt('Is my name Sheldon?');
    answer = answer2;
  }
  alert("That's correct!")
});

$('#q2').click(function(){
  let answer = prompt('Did I play baseball in highschool?');
  while(answer.toLowerCase() !== question2answer.toLowerCase()){
    alert('You have the wrong answer! Try again!');
    let answer2 = prompt('Did I play baseball in highschool?');
    answer = answer2;
  }
  alert("That's correct!")
});

$('#q3').click(function(){
  let answer = prompt('Did I go to college in Montana?');
  while(answer.toLowerCase() !== question3answer.toLowerCase()){
    alert('You have the wrong answer! Try again!');
    let answer2 = prompt('Did I go to college in Montana?');
    answer = answer2;
  }
  alert("That's correct!")
});

$('#q4').click(function(){
  let answer = prompt('Was I previously a Mechanical Engineer?');
  while(answer.toLowerCase() !== question4answer.toLowerCase()){
    alert('You have the wrong answer! Try again!');
    let answer2 = prompt('Was I previously a Mechanical Engineer?');
    answer = answer2;
  }
  alert("That's correct!")
});

$('#q5').click(function(){
  let answer = prompt('Is my current goal to become a Software Developer?');
  while(answer.toLowerCase() !== question5answer.toLowerCase()){
    alert('You have the wrong answer! Try again!');
    let answer2 = prompt('Is my current goal to become a Software Developer?');
    answer = answer2;
  }
  alert("That's correct!")
});

