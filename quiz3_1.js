let input = document.querySelector("input");
let butn = document.querySelector("button");
let bdy = document.querySelector("body");
butn.onclick = function(){
    let answer = input.value;
    if(answer == 4)
    {
           bdy.innerHTML=`<div class="success1">
           <h1>You Cleared the Third Quiz</h1>
           <p>To enter into next round <span>Click the image</span></p>
           <img onclick="location.href='//127.0.0.1:5500/Quiz4.html'" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_p5mpDymCPX1Dmw7P-mSR-D_UrepKUPX8Mat0JfpojFR1MP1c4mXJSutX6NSGXxTYzg&usqp=CAU">
      </div>`
    }
    else{
        alert("Wrong Answer")
    }
}