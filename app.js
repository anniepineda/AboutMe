'use strict';

var user = prompt('Hi, welcome! What is your name?')
console.log('user name is' + user);

alert('Hi there ' + user + ' so you can learn more about me lets play a guessing game! Please answer the following questions with a yes or no answer.');

// Adding 5 questions for user
function one (){
var states = prompt('Have I lived in more than three states?');
console.log('yes or no:', states);

if (states.toLowerCase()=== "yes"){
    alert("Yes, you are correct. I have lived in California, Kansas, Georgia and Washington.");
}

if (states.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. I have lived in California, Kansas, Georgia and Washington.");
} 
}
one(); 

function two (){
var hobby = prompt('Is my favorite hobby painting?');
console.log('yes or no:', hobby);

if (hobby.toLowerCase()=== "yes"){
    alert("Yes, you are correct. My favorite hobby aisde reading is painting.");
}

if (hobby.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. My favorite hobby, aside reading, is painting. ");
} 
}
two();

function three(){
var university = prompt( 'Did I graduate form Kansas State University?');
console.log('yes or no:', university);

if (university.toLowerCase()=== "yes"){
    alert("Yes, you are correct. I graduated from her batchelors from K-State.");
}

if (university.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. I graduated from Kansas State in 2015.");
} 
}
three();

function four (){
var french = prompt('Is Annie learning French?');
console.log('yes or no', french);

if (french.toLowerCase()=== "yes"){
    alert("Yes, you are correct. For the past two years I have been learning french.");
}

if (french.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. For the past two years I have been learning french.");
} 
}
four();

function five(){
var volunteer = prompt('Does Annie like to volunteer?');
console.log('yes or no', volunteer);

if (volunteer.toLowerCase()=== "yes"){
    alert("Yes, you are correct. I have volunteered in different organizations since I was 15.");
}

if (volunteer.toLowerCase()=== "no" ){
    alert("Sorry, you are incorecct. I have volunteered in different organizations since I was 15.");
} 
}
five();

// number options for question 6
function six(){
    var favnum = 5;
    var counter = 4;
    while(counter > 0) {
    var numGuess = promp ('Can you guess my favorite number?');
    var numGuesInt = parseInt(numGuess);
    if (numGuesInt < favnum) {
        alert('Too low');
    }
    else if (numGuessInt > favnum) {
        alert ('Too High')
        counter--;
    }
    else if (numGuessInt === NaN || numGuessInt === null) {
        alert('please enter a ral number')
    }
    else if (numGuessInt === favnum) {
        correctanswer++;
        break;
    }
}
}
six();

// qustion 7
function seven(){
    var designer= ['Tom Ford', 'De La Renta', 'Chanel', 'Valentino'];
    for (var i=5; i>=0; i--){
        var designerInt = prompt ('What is my favorite designer?');
        if (designer.includes(designerInt)){
            alert('Yes!');
            correctanswer++;
            break;
        }
        else {
            alert('No, that is not my favorite designer.')
        }
    }
}
seven();