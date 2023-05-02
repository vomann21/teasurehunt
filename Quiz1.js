let input=document.querySelector('input')
let btn = document.querySelector('button')
let body = document.querySelector('.quiz1')
localStorage.attempts=JSON.stringify(0);
let max_attempts=50;
let att;
localStorage.setItem("max_attempts",max_attempts);
if (localStorage.getItem('attempts')) // check if button click exists in storage and assign it to your variable
    {
        att = parseInt(localStorage.attempts);
    }
btn.onclick = function(){

    let answerString = input.value.toString().toLowerCase();
    answerString=answerString.replaceAll(' ','');
    att=parseInt(localStorage.attempts)+1;
    localStorage.attempts=att;
    if(answerString.length == 0){
        alert('Enter the valid answer');
    }
    else if(answerString=='lifeofpie'.toLowerCase().trim()){
         console.log(answerString);
         body.innerHTML=`<div class="success">
                             <h1>You Cleared the First Quiz</h1>
                             <p>To enter into next round <span>Click the button</span></p>
                              <button onclick="location.href='//127.0.0.1:5500/Quiz2.html'">Next</button>
                        </div>`
    }
}