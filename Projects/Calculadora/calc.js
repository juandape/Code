let buffer = "0";
let runningTotal = 0;
let previuosOperator;
const screen = document.querySelector(".screen"); //variable para seleccionar class valor

function buttonClick(value) {   //funcion para escribir lo que hay dentro del boton
  if (isNaN(parseInt(value))) {  //define si es numero o simbolo
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender(); //llama la funcion siempre despues del click
}

function handleNumber(number) {  //cambia el buffer por el numero
    if (buffer === "0") {
        buffer = number;
    } else {
        buffer += number; //bufer = bufer + number -> añade el numero al buffer
    }
}

function handleMath(value){
if (buffer === '0'){
    //do nothing
    return;
}

const intBuffer = parseInt(buffer);
if (runningTotal === 0){
    runningTotal = intBuffer
}else{
    flushOperation(intBuffer)
    }
    previuosOperator = value;
    buffer = '0'
}

function flushOperation(intBuffer){
        if(previuosOperator === '+'){
            runningTotal += intBuffer
        } else if (previuosOperator === '-'){
            runningTotal -= intBuffer
        } else if (previuosOperator === '×'){
            runningTotal *= intBuffer
        }else if (previuosOperator === '÷'){
            runningTotal /= intBuffer
        }
    }


function handleSymbol(symbol) {
  switch (symbol){
    case 'C': //devuelve a cero el valor de screen
        buffer = "0";
        break;
    case '=':
        if(previuosOperator === null){
            //necesita numeros para hacer los calculos
            return;
        }
        flushOperation(parseInt(buffer))
        previuosOperator = null
        buffer = "" + runningTotal
        runningTotal = 0
        break;
    case '←':
        if (buffer.length === 1){
            buffer = '0'
        }else{
            buffer = buffer.substring(0, buffer.length - 1)
        }
        break;
    case '+':
    case '-':
    case '÷':
    case '×':
        handleMath(symbol)
        break;
  }
}

function init() {  //funcion para seleccionar lo que hay dentro del boton
  document.querySelector(".calc-buttons");
  addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  });
}

function rerender() {  //cambia el valor del class "screen"
  screen.innerText = buffer;
}

init()