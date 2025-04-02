let userScore=0;
let compScore=0;
let usernum=document.querySelector("#user_number");
let compnum=document.querySelector("#comp_number");
let countuser=0;
let countcomp=0;
let msg=document.querySelector(".message");
let choices=document.querySelectorAll(".image");//storing all the choices
//function to generate computer's choice
const compChoice=()=>{
    let arr=["rock","paper","scissor"];
    let randomNum=Math.floor(Math.random()*3);
    return arr[randomNum];
}

//draw function
const drawGame=()=>{
    msg.innerText="the game is draw!";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}

//function to show winner
const showWinner=(userWin)=>{
    if(userWin==true)
    {
        countuser++;
        usernum.innerText=countuser;
        msg.innerText="you won the game!";
       msg.style.backgroundColor="green";
    }
    else{
        countcomp++;
        compnum.innerText=countcomp;
       msg.innerText="you lost the game!";
       msg.style.backgroundColor="red";
    }
}

//playGame function
const playGame=(user)=>{
    //print user's choice and computer's choice
    let comp=compChoice();
    //draw condition
    let userWin=true;
    if(user===comp) 
    {
        drawGame();
    }
    //other conditions => now check when the user will win and loose as per the choice
    else{
        if(user==="rock") //if user chooses rock and computer one of the remaining choices
        { //scissor/paper
            userWin=comp==="scissor"?true:false;
        }
        else if(user==="scissor")
        {
            userWin=comp==="paper"?true:false;
        }
        else if(user==="paper"){
            userWin=comp==="rock"?true:false;
        }
        showWinner(userWin);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       let ch=choice.getAttribute("id");
       playGame(ch);//user's choice
    });
});

