//reference the button
let myButton = document.getElementById('submit-btn');

//reference the input field 
let inputField = document.getElementById('input');

//clear old data 
function clear() {
    console.log('old data cleared'); 
    vowelCounter = 0;
}

//store user input
function storeInput() {
    var input = document.getElementById("input").value;
    document.getElementById("placeholder").innerText = input;
    console.log(input.length);
    check(input);
    document.getElementById("placeholder").innerText = 'Your input: ' + '"' + input + '"' + ', vowel count: ' + vowelCounter;
    clear();
}

//button to trigger function
myButton.addEventListener('click', storeInput) 

//trigger function with Enter key 
inputField.addEventListener('keydown', function(key) {
    if(key.code === 'Enter') {
        key.preventDefault();
        storeInput();
    }
});

//define vowels and vowel counter
let vowels = ['a', 'e', 'i', 'o', 'u']; 
let vowelCounter = 0; 

//check and count vowels 
function check(input) {
    for(let vowel of input) {
        console.log(vowel);
        if (vowels.includes(vowel)) {
            vowelCounter++;
        }
    }
    console.log('vowel count: ' + vowelCounter);
}