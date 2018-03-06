
const myAssingment =document.getElementById('myAssingment');
let myAnswer = document.getElementById('myAnswer');
let rightAnswer;


function makeSum(){
console.log("Executing Function: makeSum")

let number1 = Math.floor(Math.random()*9)+ 1;
let number2 = Math.floor(Math.random()*9)+ 1;
rightAnswer = number1 * number2;
myAssingment.innerHTML = number1 + " x " + number2 + " = " + "?";
}



function keyPressed(){
console.log("Executing Function: keyPressed")

myAnswer.addEventListener('keydown',(event)=>{
//  console.log('Key Detected: ' + event.keyCode)
    if(event.keyCode == 13){
      console.log(myAnswer.value);
      if(rightAnswer == myAnswer.value)
      {
        console.log('correct')
        waiting();
      }
      else if(rightAnswer != myAnswer.value)
      {
        console.log("ARE YOU RETARDED?")
        myAnswer.value = "wrong";
      }
      else{
        console.log('oops')
      }
    }
});

}

function waiting(){
console.log("Executing Function: waiting")
myAnswer.value = "";
makeSum();
}

makeSum();
keyPressed();
