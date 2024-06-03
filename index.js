var val1=Math.random();
var val2=Math.random();

val1=Math.floor(val1*6)+1;
val2=Math.floor(val2*6)+1;

if(val1==1){
    document.querySelector(".die1 .c1").classList.remove("invisible");
}
if(val1==2){
    document.querySelector(".die1 .c2").classList.remove("invisible");
}
if(val1==3){
    document.querySelector(".die1 .c3").classList.remove("invisible");
}
if(val1===4){
    document.querySelector(".die1 .c4").classList.remove("invisible");
}
if(val1===5){
    document.querySelector(".die1 .c1").classList.remove("invisible");
    document.querySelector(".die1 .c4").classList.remove("invisible");
}
if(val1===6){
    document.querySelector(".die1 .c6").classList.remove("invisible");
}

if(val2==1){
    document.querySelector(".die2 .c1").classList.remove("invisible");
}
if(val2==2){
    document.querySelector(".die2 .c2").classList.remove("invisible");
}
if(val2==3){
    document.querySelector(".die2 .c3").classList.remove("invisible");
}
if(val2===4){
    document.querySelector(".die2 .c4").classList.remove("invisible");
}
if(val2===5){
    document.querySelector(".die2 .c1").classList.remove("invisible");
    document.querySelector(".die2 .c4").classList.remove("invisible");
}
if(val2===6){
    document.querySelector(".die2 .c6").classList.remove("invisible");
}

if(val2>val1){
    document.querySelector("h1").innerHTML="Player 2 Wins !";
}
if(val2==val1){
    document.querySelector("h1").innerHTML="It's a Tie !";
}

