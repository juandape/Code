const letters = document.querySelectorAll(".cuadro")
const loadingDiv = document.querySelector(".info-bar")
const ANSWER_LENGHT = 5
const ROUNDS = 6


async function init(){//funcion con espera
let currentGuess = '';
let currentRow = 0;
let isLoading = true


const res = await fetch("https://words.dev-apis.com/word-of-the-day")  //si le añado al final "https://words.dev-apis.com/word-of-the-day?random=1" me da una palabra dif cada vez sino una al dia
const resObj = await res.json()
const word = resObj.word.toUpperCase()
const wordParts = word.split("")
let done = false
setLoading(false)
isLoading = false

console.log(word)


function addLetter (letter){//agraga las letras al orprimirlas en el teclado
    if(currentGuess.length < ANSWER_LENGHT){
        //agrega letra al final
        currentGuess += letter;
    } else {
        //reemplaza la ultima letra
        currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter
    }

    letters[ANSWER_LENGHT * currentRow + currentGuess.length - 1].innerText = letter
}

async function commit(){
    if(currentGuess.length != ANSWER_LENGHT){
        //no haga nada
        return
    }


//validar palabra
isLoading = true
setLoading(true)
const res = await fetch("https://words.dev-apis.com/validate-word", {
    method: "POST",
    body: JSON.stringify({word: currentGuess})
})

const resObj = await res.json()
const validWord = resObj.validWord
// las dos lineas de arriba se pueden hacer asi: const {validWord} = resObj  

isLoading = false
setLoading (false)

if(!validWord){
    markInvalidWord()
    return
}

const guessParts = currentGuess.split("")//split divide el sting en arrays individuales
const map = makeMap(wordParts)


for (let i = 0; i < ANSWER_LENGHT; i++){
    //marca como correct
    if (guessParts[i] === wordParts[i]){
        letters [currentRow * ANSWER_LENGHT + i].classList.add("correct")
        map[guessParts[i]]--
    }
}

for (let i = 0; i < ANSWER_LENGHT; i++){
    if (guessParts[i] === wordParts[i]){
        //no hacer nada, ya lo hicimos
    } else if (wordParts.includes(guessParts[i]) && map[guessParts[i]] > 0)
    // marcar close
    {
        letters [currentRow * ANSWER_LENGHT + i].classList.add("close")
        map[guessParts[i]]--
    } else {
        letters [currentRow * ANSWER_LENGHT + i].classList.add("wrong")
    }
}
currentRow++
//verificar si gano
if (currentGuess === word){
    alert ("You Win!!")
    document.querySelector (".juego").classList.add("winner")
    done = true
    return
}
//verificar si perdio
else if (currentRow === ROUNDS){
    alert (`You Lose, the word was ${word}`)
    done = true
}

currentGuess = ''
}

function backspace(){
    currentGuess = currentGuess.substring(0, currentGuess.length - 1)
    letters[ANSWER_LENGHT * currentRow + currentGuess.length].innerText = ""
}

function markInvalidWord(){
    //alert ("Not a valid word!!")

    for (let i = 0; i<ANSWER_LENGHT; i++){
        letters [currentRow * ANSWER_LENGHT + i].classList.remove("invalid")

        setTimeout(function(){
            letters [currentRow * ANSWER_LENGHT + i].classList.add("invalid")
        }, 10)
    }
}

document.addEventListener('keydown', function handleKeyPress (event){//activa backspace y enter
    if (done || isLoading){
        // no haga nada
        return
    }
    
    const action = event.key; //activa el teclado
    
if (action === 'Enter'){
    commit()
} else if(action === 'Backspace'){
    backspace()
} else if(isLetter(action)) {
    addLetter(action.toUpperCase())
} else{
    //no haga nada
}

} ) 
}

function isLetter(letter) { //Use this function to test is a string is a single alphabetical string is a letter
    return /^[a-zA-Z]$/.test(letter);
  }


function setLoading(isLoading){
    loadingDiv.classList.toggle('show', isLoading)
}
function makeMap (array){
    const obj = {}
    for (let i = 0; i < array.length; i++){
        const letter = array[i]
        if(obj[letter]){
            obj[letter]++
        }else {
            obj[letter] = 1
        }
    }
    return obj
}


init()

