/*Programming Primer (in JS)

This is an exercise to practice basic programming principles.

## Instructions

The code of this exercise can be executed via Node.js or in the console tab of your browser's developer tools.

1. Define an `addFavoriteBook(..)` function that receives a single parameter, called `bookName`.

2. If the provided `bookName` string does *NOT* have the word "Great" in it, add it to the `favoriteBooks` array.

	Hints:

	- `someString.includes(anotherString)` will return `true` if `anotherString` is found inside `someString`, or `false` otherwise.

	- Use `!` to negate a boolean value (change `true` to `false` or vice versa).

	- `someArray.push(value)` will add a value to the end of the array.

3. Define a `printFavoriteBooks()` function that receives no parameters.

4. `printFavoriteBooks()` should first print a message like "Favorite Books: ..", and include the number of books in the `favoriteBooks` array.

	Hint:

	- Use the \` back-tick operators for strings that need to include values in them.

	- Use `console.log(..)` to print a message to the screen.

5. Finally, `printFavoriteBooks()` should loop through the `favoriteBooks` array and print out each value.

	Make sure to then call the `printFavoriteBooks()` function at the end of the program.

	Hint: Use the `for ( let .. of .. ) { }` style loop.

    // TODO: define addFavoriteBook(..) function

// TODO: define printFavoriteBooks() function
/*
var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
*/


let favoriteBooks = [];
let notFavoriteBooks = [];

function addFavoriteBook(bookName){
    if(!bookName.includes("Great")){
        favoriteBooks.push(bookName)
    }else {
        notFavoriteBooks.push(bookName)
        
}
}

function printFavoriteBooks(){
     console.log(`Favorite Books: ${favoriteBooks.length}`);
     for (let bookName of favoriteBooks){
        console.log(bookName)
     }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

console.log(favoriteBooks)
console.log(notFavoriteBooks)
printFavoriteBooks()


let test = "juan david"
console.log(test[0])