let input = document.querySelector("input");
let butn = document.querySelector("button");
let bdy = document.querySelector("body");
butn.onclick = function(){
    let answer = input.value.toString().toLowerCase();
    answer=answer.replaceAll(' ','');
    if(answer == "father")
    {
           bdy.innerHTML=`<div class="success1">
           <h1>You Cleared the Fourth Quiz</h1>
           <p>To enter into next round <span>Click the image</span></p>
           <img onclick="location.href='//127.0.0.1:5500/Quiz5.html'" src="https://m.media-amazon.com/images/I/51+Z+hJx40L.jpg">
      </div>`
    }
    else{
        alert("Wrong Answer")
    }
}