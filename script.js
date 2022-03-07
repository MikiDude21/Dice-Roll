// alert("the scrpit works");
let P1Rand = Math.floor(Math.random()*6+1);
console.log(P1Rand);
let P2Rand = Math.floor(Math.random()*6+1);
console.log(P2Rand);

switch(P1Rand){
    case 1:
        document.querySelector(".p1image").src="images/dice1.png";
        break;
    case 2:
        document.querySelector(".p1image").src="images/dice2.png";
        break
    case 3:
        document.querySelector(".p1image").src="images/dice3.png";
        break;
    case 4:
        document.querySelector(".p1image").src="images/dice4.png";
        break;
    case 5:
        document.querySelector(".p1image").src="images/dice5.png";
        break;
    case 6:
        document.querySelector(".p1image").src="images/dice6.png";
        break;
        
}
switch(P2Rand){
    case 1:
        document.querySelector(".p2image").src="images/dice1.png";
        break;
    case 2:
        document.querySelector(".p2image").src="images/dice2.png";
        break
    case 3:
        document.querySelector(".p2image").src="images/dice3.png";
        break;
    case 4:
        document.querySelector(".p2image").src="images/dice4.png";
        break;
    case 5:
        document.querySelector(".p2image").src="images/dice5.png";
        break;
    case 6:
        document.querySelector(".p2image").src="images/dice6.png";
        break;
        
}

if(P1Rand>P2Rand){
    console.log("Player One Wins");
    document.querySelector("h1").textContent=("🚩Player One Wins");
}
else if(P1Rand<P2Rand){
    console.log("Player 2 wins");
    document.querySelector("h1").textContent=("Player two Wins🚩");
    }
else if(P1Rand===P2Rand){
    console.log("Its a Draw");
    document.querySelector("h1").textContent=("Its a Draw 🤝");

}