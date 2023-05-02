let input = document.querySelector(".clue");
let cluebut = document.querySelector(".bclue");
let fclue = document.querySelector(".fclue");
let bdy = document.querySelector("body");
let realbtn = document.querySelector(".realbtn");
let realinput = document.querySelector(".realinput");
cluebut.onclick = function(){
    let answer = input.value.toString().toLowerCase();
    answer=answer.replaceAll(' ','');
    if(answer == 'shadow')
    {
           fclue.innerHTML=`<div>
                <img src="https://ichef.bbci.co.uk/news/624/mcs/media/images/77056000/jpg/_77056064_waiting-in-line.jpg">
              </div>`
    }
    else{
        alert("Wrong Answer")
    }
}

realbtn.onclick = function(){
    let answer = realinput.value.toString().toLowerCase();
    answer=answer.replaceAll(' ','');
    if(answer == 'queue')
    {
           bdy.innerHTML=`<div class="success">
           <h1>You Cleared the Fifth Quiz</h1>
           <p>To enter into next round <span>Click the image</span></p>
           <img onclick="location.href='//127.0.0.1:5500/quiz6.html'" src="https://i.etsystatic.com/12773587/r/il/fee571/3766825724/il_fullxfull.3766825724_exip.jpg">
      </div>`
    }
    else{
        alert("Wrong Answer")
    }
}