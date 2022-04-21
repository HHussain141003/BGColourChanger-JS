// Hex value will be generated with this constant
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// These constant variables contian the classes from hex.html
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// This Event registers a click and then runs a function
btn.addEventListener('click', function(){

    // Gets a random value of Hex array 6 times, the hexColor puts a '#' prefix.
    let hexColor = '#';
    for(let i = 0;i<6;i++){
        hexColor += hex[getRandomNumber()]
    }

    // assigns the value of hexColor to the background colour and the color span.
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor

})

// This function generates a random number from 0 to 1 and then multiplies it by
// the length of the Hex array, which is 16 and then rounds it down to the integer
// with the Math.Floor() function
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}