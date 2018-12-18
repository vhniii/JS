const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const newGame = document.querySelector('.newGame');
const label = document.querySelector('label');


document.getElementById('newGame').style.display = "none";

let guessCount = 1;
let randomNumber = Math.floor(Math.random() * 100) + 1;

const checkGuess = () => {
    
    let userGuess = Number(guessField.value)
    
    if (guessCount === 1) {
        
        guesses.textContent = 'Eelnevad pakkumised: '
        
    }
    
    
    guesses.textContent += `${userGuess} `;
    
    
    // Kui kasutaja pakub õige numbri
    
    if(userGuess === randomNumber){
       
       lastResult.textContent = 'Palju õnne sa võitsid!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.style.visibility = 'hidden';
        
    // Kui kasutaja pakub pakub kümme korda valesti.   
    } else if (guessCount === 10){
               
        lastResult.textContent = 'Mäng sai läbi!';
//        guessField.disabled = true;
//        guessSubmit.disabled = true;
        guessField.style.visibility = 'hidden';
        guessSubmit.style.visibility = 'hidden';
        label.style.visibility = 'hidden';
        document.getElementById('newGame').style.display = "block";
    
               
    // Kas number on suurem või väiksem           
    } else {
              
        lastResult.textContent = 'Pakkusid valesti!'; 
        lastResult.style.backgroundColor = "red";
        
        
        // Kui number on liiga väike
        if(userGuess < randomNumber) {
           
            lowOrHigh.textContent = ' Viimane pakkumine oli liiga madal!';
            
            
        // Kui number on liiga suur
        } else if (userGuess > randomNumber) {
            
            
            lowOrHigh.textContent = ' Viimane pakkumine oli liiga kõrge!';
            
        }
        
        
    }
    
        
    guessCount++;
    guessField.value = '';
    guessField.focus();
    
};

guessSubmit.addEventListener('click', checkGuess);