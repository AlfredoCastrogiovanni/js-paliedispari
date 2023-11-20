
// ODD OR EVEN
const oddOrEvenButton = document.getElementById("oddOrEven"); 

oddOrEvenButton.addEventListener("click", function () {
    let userNumberChoice;
    let userChoice;
    
    do {
        userNumberChoice = parseInt(prompt("Inserisci un numero tra 1 e 5: "));
    } while(userNumberChoice < 1 || userNumberChoice > 5);
    
    do {
        userChoice = prompt("Inserisci pari o dispari: ").trim().toLowerCase();
    } while(userChoice != "pari" && userChoice != "dispari");
    
    const aiNumber = generateRandomNumber(1,5);
    const result = oddOrEven(aiNumber + userNumberChoice);
    
    if(userChoice == "pari" && result === true) {
        alert("Hai vinto!");
    } else if(userChoice == "dispari" && result === false) {
        alert("Hai vinto!");
    } else {
        alert("Hai perso!")
    }
});

// PALINDROME
const palindromeButton = document.getElementById("palindrome");

palindromeButton.addEventListener("click", function () {
    const userWord = prompt("Inserisci la parola: ").toLowerCase().trim();
    ispalindrome(userWord) ? alert("La parola inserita è palindroma") : alert("La parola inserita non è palindroma");
});


// ==================== FUNCTIONS ====================

function generateRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

function oddOrEven(a) {
    return a % 2 == 0 ? true : false;
}

function ispalindrome(word) {
    let j = word.length - 1;
    for(let i=0; i< word.length; i++) {
        if(word[i] != word[j]) {
            return false;
        }
        j--;
    }
    return true;
}
