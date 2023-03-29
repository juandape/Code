//nombre de los jugadores

let player1 = document.querySelector(".p1-name");
let player2 = document.querySelector(".p2-name");
let nombre1 = document.querySelector("#name1");
let nombre2 = document.querySelector("#name2");

function agregar() {
  player1.textContent = nombre1.value;
  nombre1.addEventListener("keypress", function (e) {
    const p1h = document.querySelector(".p1");
    if (e.keyCode === 13) {
      p1h.style.display = "none";
    }
  });
}

function agregar2() {
  player2.textContent = nombre2.value;
  nombre2.addEventListener("keypress", function (e) {
    const p2h = document.querySelector(".p2");
    if (e.keyCode === 13) {
      p2h.style.display = "none";
    }
  });
}

//seleccion cuadros en el juego
const squares = document.querySelectorAll(".square");
// const square = document.querySelector(".square")
const plX = document.querySelector(".p1-symbol").textContent;
const plO = document.querySelector(".p2-symbol").textContent;

// juego por turnos
let turn = true;
for (let i in squares) {
  squares[i].addEventListener("click", function () {
    if (turn === true) {
      squares[i].textContent = plX;
      turn = false;
    } else if (turn === false) {
      squares[i].textContent = plO;
      turn = true;
    }

    setTimeout(function () {
      //ganador
      if (
        squares[0].textContent === plX &&
        squares[1].textContent === plX &&
        squares[2].textContent === plX
      ) {
        alert(`Ganaste ${nombre1.value}, Felicitaciones!!`);
      } else if (
        squares[0].textContent === plX &&
        squares[4].textContent === plX &&
        squares[8].textContent === plX
      ) {
        alert(`Ganaste ${nombre1.value}, Felicitaciones!!`);
      } else if (
        squares[0].textContent === plX &&
        squares[3].textContent === plX &&
        squares[6].textContent === plX
      ) {
        alert(`Ganaste ${nombre1.value}, Felicitaciones!!`);
      } else if (
        squares[6].textContent === plX &&
        squares[7].textContent === plX &&
        squares[8].textContent === plX
      ) {
        alert(`Ganaste ${nombre1.value}, Felicitaciones!!`);
      } else if (
        squares[1].textContent === plX &&
        squares[4].textContent === plX &&
        squares[7].textContent === plX
      ) {
        alert(`Ganaste ${nombre1.value}, Felicitaciones!!`);
      } else if (
        squares[2].textContent === plX &&
        squares[5].textContent === plX &&
        squares[8].textContent === plX
      ) {
        alert(`Ganaste ${nombre1.value}, Felicitaciones!!`);
      } else if (
        squares[3].textContent === plX &&
        squares[4].textContent === plX &&
        squares[5].textContent === plX
      ) {
        alert(`Ganaste ${nombre1.value}, Felicitaciones!!`);
      } else if (
        squares[6].textContent === plX &&
        squares[7].textContent === plX &&
        squares[8].textContent === plX
      ) {
        alert(`Ganaste ${nombre1.value}, Felicitaciones!!`);
      } else if (
        squares[0].textContent === plO &&
        squares[1].textContent === plO &&
        squares[2].textContent === plO
      ) {
        alert(`Ganaste ${nombre2.value}, Felicitaciones!!`);
      } else if (
        squares[0].textContent === plO &&
        squares[4].textContent === plO &&
        squares[8].textContent === plO
      ) {
        alert(`Ganaste ${nombre2.value}, Felicitaciones!!`);
      } else if (
        squares[0].textContent === plO &&
        squares[3].textContent === plO &&
        squares[6].textContent === plO
      ) {
        alert(`Ganaste ${nombre2.value}, Felicitaciones!!`);
      } else if (
        squares[6].textContent === plO &&
        squares[7].textContent === plO &&
        squares[8].textContent === plO
      ) {
        alert(`Ganaste ${nombre2.value}, Felicitaciones!!`);
      } else if (
        squares[1].textContent === plO &&
        squares[4].textContent === plO &&
        squares[7].textContent === plO
      ) {
        alert(`Ganaste ${nombre2.value}, Felicitaciones!!`);
      } else if (
        squares[2].textContent === plO &&
        squares[5].textContent === plO &&
        squares[8].textContent === plO
      ) {
        alert(`Ganaste ${nombre2.value}, Felicitaciones!!`);
      } else if (
        squares[3].textContent === plO &&
        squares[4].textContent === plO &&
        squares[5].textContent === plO
      ) {
        alert(`Ganaste ${nombre2.value}, Felicitaciones!!`);
      } else if (
        squares[6].textContent === plO &&
        squares[7].textContent === plO &&
        squares[8].textContent === plO
      ) {
        alert(`Ganaste ${nombre2.value}, Felicitaciones!!`);
      }
    }, 0);
  });
}

// pendiente :deshabilitar cuadro despues de usarlo
// function noChange(){
//   console.log("pendiente")
// }
