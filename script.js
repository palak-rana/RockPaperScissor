$(document).ready(function(){
    $(".cross-x").click(function(){
        $(".hide").hide(1000);
    });
});
$(document).ready(function(){
    $(".rules").click(function(){
        $(".hide").show(1000);
    });
});
let user=document.querySelectorAll(".user");
let computer=document.querySelectorAll(".computer");
let youpicked=document.querySelector(".info-your");
let pcpicked=document.querySelector(".info-pc");
let userpaper=document.querySelector(".paper");
let userscissor=document.querySelector(".scissors");
let pcpaper=document.querySelector(".paper1");
let pcscissor=document.querySelector(".scissors1");
let line1=document.querySelector(".line1");
let line2=document.querySelector(".line2");
let line3=document.querySelector(".line3");
let win=document.querySelector(".win");
let winner=document.querySelector(".winner");
let rules=document.querySelector(".rules");
let replay=document.querySelector(".replay");
let play=document.querySelector(".play-again");
let newline=document.querySelector(".newline");
var random = Math.floor(Math.random()*3);

let user_score=JSON.parse(localStorage.getItem("user_score"));
let user_score1=document.getElementById("user_score");

let user_count=0;
if(user_score){
    user_score1.innerText=user_score;
}

let computer_score=JSON.parse(localStorage.getItem("computer_score"));
let computer_score1=document.getElementById("computer_score");
let computer_count=0;
if(computer_score){
    computer_score1.innerText=computer_score;
}

user.forEach((element,index) => {
    element.addEventListener("click",()=>{
        youpicked.style.opacity="1";
        line1.style.display="none";
        line2.style.display="none";
        line3.style.display="none";
        user.forEach(item => {
            item.style.display="none";
        });
        element.style.display="flex";
        element.classList.add("left");
        userpaper.classList.add("userpaper1");
        userscissor.classList.add("userscissor1");
        setTimeout(() => {
            pcpicked.style.opacity="1";
            pcpaper.classList.add("pcpaper1");
            pcscissor.classList.add("pcscissor1");
            setTimeout(() => {
                computer[random].style.display='block';
                computer[random].classList.add("right");
                
            }, 1000);
        }, 500);
        setTimeout(() => {
            if(index==0 && random==0 || index==1 && random==1 || index==2 && random==2){
                win.style.display="grid";
                winner.innerText="TIE UP";
                newline.style.display="none";
                replay.style.display="block";
                   
            }
            else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1 ){
                win.style.display="grid";
                winner.innerText="YOU WIN";
                newline.innerText="AGAINST PC";
                rules.classList.add("hurray");
                element.classList.add("shadow");
                user_count=user_score;
                user_count++;
                user_score1.innerText=user_count;
                localStorage.setItem("user_score",JSON.stringify(user_count));
            }
            else{
                win.style.display="grid";
                winner.innerText="YOU LOST";
                newline.innerText="AGAINST PC";
                computer[random].classList.add("shadow");
                computer_count=computer_score;
                computer_count++;
                computer_score1.innerText=computer_count;
                localStorage.setItem("computer_score",JSON.stringify(computer_count));
            }
        }, 1500);
    })
});
play.addEventListener("click",()=>{
    window.location.reload();
});
replay.addEventListener("click",()=>{
    window.location.reload();
 }) 
