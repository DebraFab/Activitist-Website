var factList = [
"Almost half of humnity is living on less than $5.50 a day.",/*0*/
"Today 2.2 billion children – 1 out of every 5 – will not be allowed to go to school.",/*1*/
"In the US, Black workers are less likely than white workers to be employed in a job that is consistent with their level of education.",/*2*/
"Around the world about 1.6 billion people live in substandard housing and 100 million are homeless.",/*3*/
"International Around the world, nearly 800 million people remain chronically undernourished.",/*4*/
"Global Every year, nearly 11 million children around the world die before reaching their 5th birthday, most from preventable causes.",/*5*/
"Global $16 billion a year in aid would send all children to school in low income countries.",/*6*/
"Low-income and minority Americans tend to live and work in areas disproportionately exposed to pollution"/*7*/];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click",displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}