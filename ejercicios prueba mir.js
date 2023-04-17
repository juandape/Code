// Number of Likes
// Write a function called `likes` that receives a number and returns a string using the format K for thousands and M for millions.
// If the number is less than 1000 return the same number as a string.

function likes(number){
    if(number <= 999){
        return number.toString()
    }
    else if(number >= 1000 && number <= 9999){
       const number2 = number.toString()
       return number2[0]+"K"
    }
    else if(number >= 10000 && number <= 99999){
            const number3 = number.toString()
            return number3[0]+number3[1]+"K"
    }
    else if(number >= 100000 && number <= 999999){
        const number4 = number.toString()
       return number4[0]+number4[1]+number4[2]+"K"
    }
    else if(number >= 1000000){
        const number5 = number.toString()
       return number5[0]+number5[1]+"M"
    }

}

    console.log(likes(983)); // "983"
    console.log(likes(1900)); // "1K"
    console.log(likes(54000)); // "54K"
    console.log(likes(120800)); // "120K"
    console.log(likes(25222444)); // "25M"

// Average Price
// Write a function called `averagePrice` that receives an array of
// products as an argument and returns the average price of all products:

const products1 = [
  { name: "rice", price: 10 },
  { name: "panela", price: 5 },
  { name: "pasta", price: 16 },
  { name: "eggs", price: 9 },
];

const products2 = [
  { name: "rice", price: 10 },
  { name: "panela", price: 20 },
  { name: "pasta", price: 13 },
  { name: "eggs", price: 37 },
  { name: "potatos", price: 5 },
];

function averagePrice(array) {
  let prom = 0;
  let totalPr = 0;
  for (let i in array) {
    prom += array[i].price;
    totalPr = parseInt(i) + 1;
  }
  return ` average price ${prom / totalPr}`;
}

console.log(averagePrice(products1)); // 10
console.log(averagePrice(products2)); // 17
