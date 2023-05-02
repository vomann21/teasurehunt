let input=document.querySelector('input')
let btn = document.querySelector('button')
let body = document.querySelector('.quiz2')
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
    else if(answerString=='summary'.toLowerCase().trim()){
         console.log(answerString);
         body.innerHTML=`<div class="success">
                             <h1>You Cleared the Second Quiz</h1>
                             <p>To enter into next round <span>Click the image</span></p>
                             <img onclick="location.href='//127.0.0.1:5500/Quiz3.html'" src="https://res.cloudinary.com/teepublic/image/private/s--V0i6dGrT--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1597244792/production/designs/13009242_0.jpg">
                        </div>`
    }
}