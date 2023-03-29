const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

console.log("hello world");

const myName = "Juan David";
const myLastName = "Peña";

const sentence = "Hello " + myName + " " + myLastName + " you are so cool!!"
const newSentence = `Hello ${myName} ${myLastName} you are so cool!!`

console.log(sentence);
console.log(newSentence);

const skyIsBlue = true;

if (skyIsBlue){
    console.log("Of course! Is Blue!!")
}
else{
    console.log("Sorry, is not blue!!")
}


if(2=="2"){
    console.log("si es igual")
}
else{
    console.log("no es igual")
}

if(2==="2"){
    console.log("si es igual")
}
else{
    console.log("no es igual")
}

if([]==""){
    console.log("si es igual")
}
else{
    console.log("no es igual")
}

 const character = "🐶"
 const timesToRepeat = 3
let answer = ""
 for (let i = 0; i< timesToRepeat; i++){
    answer = answer + character
 }
 console.log(answer)


 const character1 = "a"
 const timesToRepeat1 = 10
 let answer1 = ""

 for (let i = 0; i< timesToRepeat1; i++){
    answer1 = answer1 + character1
}
console.log(answer1)

 const character2 = "c"
 const timesToRepeat2 = 100
 let answer2 = ""

 for (let i = 0; i< timesToRepeat2; i++){
    answer2 = answer2 + character2
 }
 console.log(answer2)


 function nombre (name){
    console.log(name)
 }

 nombre('juan')

 function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
  myFun();