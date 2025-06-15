// Call the JavaScript i have created in the HTML file
document.getElementById("WE").innerHTML = ("I love coding");
document.getElementById("AS").innerHTML = ("Hellow Everyone");
// Creating a variable 
var text1 = "Kulungile babhemu!!!!!!";
var text2 = "Zisazokhala Kakhulu futhi!!!!!";
text3 = " Nizothi ngasho!!!!"
// changing the statement i have created for the heading and paragraph
document.getElementById("WE").innerHTML = (text1);
document.getElementById("AS").innerHTML = (text2 + text3);

var numA = 7;
var numB = 10;

document.getElementById("AS2").innerHTML = ("The answer is : " + numA * numB);
document.getElementById("AS2").innerHTML = (numA + " X " + numB + " = " + numA * numB);
// 
// 
// 
// 
// JavaScript conditions
var UserPassword = "007";
 var actualPassword = "006";

 if(UserPassword ==actualPassword){
    document.getElementById("output").innerHTML = ("Correct password");
 }
 else{
    document.getElementById("output").innerHTML = ("Your password is incorrect");
 }
 // 
// 
// 
// 
// Functions
function swap(){
    if(document.getElementById("heading").innerHTML == 'JavaScript'){
        document.getElementById("heading").innerHTML = 'Is Awesome'}
         else{
    document.getElementById("heading").innerHTML = 'JavaScript';
  }
}
// 
// 
// 
// Addition
addNumbers (5, 7);
function addNumbers(num1, num2){
    document.getElementById("addition").innerHTML = num1 + num2 ;
    return num1 + num2;
}
// 
// 
// 
// Declaring a variable
someFunction();
function someFunction(){
    var someVariable = 100;
    document.getElementById("outputText").innerHTML = someVariable;
}