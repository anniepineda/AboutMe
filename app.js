'use strict';

var user = prompt('Hi, welcome! What is your name?')
console.log('user name is' + user);

alert('Hi there ' + user + ' so you can learn more about me lets play a guessing game! Please answer the following questions with a yes or no answer.');

// 5 questions for user
var states = prompt('Have I lived in more than three states?');
console.log('yes or no:', states);

if (states.toLowerCase()=== "yes"){
    alert("Yes, you are correct. I have lived in California, Kansas, Georgia and Washington.");
}

if (states.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. I have lived in California, Kansas, Georgia and Washington.");
} 

var hobby = prompt('Is my favorite hobby painting?');
console.log('yes or no:', hobby);

if (hobby.toLowerCase()=== "yes"){
    alert("Yes, you are correct. My favorite hobby aisde reading is painting.");
}

if (hobby.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. My favorite hobby, aside reading, is painting. ");
} 

var university = prompt( 'Did I graduate form Kansas State University?');
console.log('yes or no:', university);

if (university.toLowerCase()=== "yes"){
    alert("Yes, you are correct. I graduated from her batchelors from K-State.");
}

if (university.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. I graduated from Kansas State in 2015.");
} 

var french = prompt('Is Annie learning French?');
console.log('yes or no', french);

if (french.toLowerCase()=== "yes"){
    alert("Yes, you are correct. For the past two years I have been learning french.");
}

if (french.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. For the past two years I have been learning french.");
} 

var volunteer = prompt('Does Annie like to volunteer?');
console.log('yes or no', volunteer);

if (volunteer.toLowerCase()=== "yes"){
    alert("Yes, you are correct. I have volunteered in different organizations since I was 15.");
}

if (volunteer.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. I have volunteered in different organizations since I was 15.");
} 
