'use strict';

alert('Hi, welcome! Lets play a guessing game so you can learn more about me! Please answer the following questions with a yes or no answer');

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
console.log('yes or no:', universituy);

if (university.toLowerCase()=== "yes"){
    alert("Yes, you are correct. I graduated from her batchelors from K-State.");
}

if (states.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. Annie has lived in California, Kansas, Georgia and Washington.");
} 

var french = prompt('Is Annie learning French?');
console.log('yes or no', french);

if (french.toLowerCase()=== "yes"){
    alert("Yes, you are correct. For the past two years I have been learning french.");
}

if (french.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. For the past two years I have been learning french.");
} 

var volunteer = promp('Does Annie like to volunteer?');
console.log('yes or no', volunteer);

if (voulenteer.toLowerCase()=== "yes"){
    alert("Yes, you are correct. I have voulenteered in different organizations since I was 15.");
}

if (voulenteer.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. I have voulenteered in different organizations since I was 15.");
} 
