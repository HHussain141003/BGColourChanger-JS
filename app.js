const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// These variables get the classes from the index.html file
const btn = document.getElementById('btn');
const color = document.querySelector('.color')

// When the Button is clicked a local variable generates a random number and it is used to get
// an index value from the constant variable "colors", which is later used to change the values
// of the background colour in the style library and then the it changes the value of the span
// in the index.html to the array value generated from the randomNumber variable
btn.addEventListener('click', function(){
    const randomNumber = genRandomNum();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    colour.textContent = colors[randomNumber];

})

function genRandomNum(){
    return Math.floor(Math.random() * colors.length);
}