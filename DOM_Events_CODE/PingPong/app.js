let p1 = 0;
let p2 = 0;
let game1 = 0;
let game2 = 0;
let status = "normal";
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1Plus = document.querySelector("#p1Plus");
const p2Plus = document.querySelector("#p2Plus");
const p1Game = document.querySelector("#p1Game");
const p2Game = document.querySelector("#p2Game");

p1Plus.addEventListener('click', function(e){
    p1++;
    p1Score.innerText = p1;
    if (p1 === 11){
        game1 = game1 + 1;
        p1Game.innerText = game1;
        gameDone();
    };
    if (p1 === p2 === 10){
        duce();
    }
});

p2Plus.addEventListener('click', function(e){
    p2++;
    p2Score.innerText = p2;
    console.log(p2);
    if (p2 === 11){
        game2 = game2 + 1;
        p2Game.innerText = game2;
        gameDone();
    };
    console.log(game2);
});

gameDone = () => {
    p1 = 0;
    p1Score.innerText = p1;
    p2 = 0;
    p2Score.innerText = p2;
};

