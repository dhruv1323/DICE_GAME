var ran= Math.random()*6;
var x= Math.floor(ran) +1;


var abc = "images/dice"  + x + ".png";

document.querySelectorAll("img")[0].setAttribute("src",abc);


var ran1= Math.random()*6;
var x1= Math.floor(ran1) +1;


var abc1= "images/dice" + x1 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",abc1);



if(x>x1){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

else if(x<x1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}