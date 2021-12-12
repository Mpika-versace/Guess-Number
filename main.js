let guesses=document.querySelector('.guesses');
let guessValue=document.querySelector('.guessValue');
let guessSubmit=document.querySelector('.guessSubmit');
let lowOrHi=document.querySelector('.lowOrHi');
let count=document.querySelector('.count');
let form=document.querySelector("form")
let counter=10;


let randomNumber=Math.floor(Math.random()*100);
console.log(randomNumber)

guessSubmit.addEventListener("click",function(e)
{
    let guessNumber=Number(guesses.value);
    console.log(typeof guessNumber)
    
    e.preventDefault();
    // console.log(guessNumber);
    guessValue.innerText=guesses.value;
    if (typeof guessNumber!=="number") 
    {
        alert("number please")
    }
    else
    {
        if (guessNumber<randomNumber) 
    {
        lowOrHi.innerText=`le nombre ${guessNumber} saisi est petit`;
        lowOrHi.style.color="red";
        counter--;
        count.innerText=counter
    }
    else if (guessNumber>randomNumber) 
    {
        lowOrHi.innerText=`le nombre ${guessNumber} saisi est grand`;
        lowOrHi.style.color="red";
        counter--;
        count.innerText=counter
    }
    else if(guessNumber===randomNumber)
    {
        lowOrHi.innerText=`Bravo vous avez deviner le nombre ${guessNumber}`;
        lowOrHi.style.color="green";
        this.disabled=true;
        guesses.disabled=true;
        replay()

    }
    else
    {
        alert("please number")

    }
    if (counter===0) 
    {
        this.disabled=true;
        guesses.disabled=true;
        lowOrHi.innerText=`Game over`;
        lowOrHi.style.color="red";
        replay()


    }
    }

    
    guesses.value='';
    guesses.focus();
    
});

let replay=()=>
{
    let Button=document.createElement("button");
    Button.innerText='replay'
    form.appendChild(Button)
}