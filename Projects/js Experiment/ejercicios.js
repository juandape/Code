function multyply (num1, num2){
    return num1 * num2
}

console.log(multyply(4, 6))


function yell(val){
    return "¡" + val.toUpperCase() + "!"
}

console.log(yell("juemadre"))

function longerThan(array1, array2){
    if(array1.length > array2.length){
        return "array1 is longer than array2"
    } else{
        return "array2 is longer than array1"
    }
}

console.log(longerThan([1,2,5], [6,7,8,9]))

//ARROW FUNCTIONS

const divide  = (x,y) => x / y
console.log(divide(50,2))

const whisper = (val2) => val2.toLowerCase()
console.log(whisper("JUEMADRE..."))

const shorterThan = (ar1, ar2) => ar1.length < ar2.length
console.log(shorterThan([1,2,3,4], [3,4,5]))

const firstName = "Juan"
const lastName = "Peña"

if(firstName.length > lastName.length){
    console.log(firstName + " is longer than " + lastName )
}else if(firstName.length < lastName.length){
    console.log(lastName + " is longer than " + firstName)
}else{
    console.log(firstName + " is equal to " + lastName)
}

function isEmpty(array){
    if(array.length === 0){
        console.log("the array is empty");
    }
    console.log("The array length is: " + array.length)
}

isEmpty([])
isEmpty([1,2,3,4,5,6])

const arra = [1,2,3,4,5]

for(let n of arra){
    console.log(n)
}
console.log("-------------")

let spices = [
    {name: "Emma", nickname: "Baby"}, 
    {name: "Geri", nickname: "Ginger"}, 
    {name: "Mel B", nickname: "Scary"}, 
    {name: "Mel C", nickname: "Sporty"}, 
    {name: "Victoria", nickname: "Posh"}
]

console.log(spices.length)
for(let sp of spices){
    console.log(sp)
}
console.log(" map-------------")
//uso de map en array spices
const names = spices.map(spice => spice.name)
console.log(names)
console.log("filter-------------")
//uso de fiter en array spices
//nombre incluya "Mel"
const mels = spices.filter(s => s.name.includes("Mel"))
console.log(mels)
console.log("-------------")
//nickname termine en "y"
const endInY = spices.filter(eiy => eiy.nickname.endsWith("y") )
console.log(endInY)
console.log("spread-------------")
//spread se usan ... para unir los dos arrays en uno nuevo
const oldB = ["square","dot"]
const newB = ["cocktails", "circle", "brand"]
const burnB = [...oldB, ...newB]
console.log(burnB)
console.log(...burnB) //imprime elementos del array