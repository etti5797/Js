const wrapper = document.querySelector(".wrapper"); // now we can acess the wrapper
const question = document.querySelector(".question");
const Ybtn = document.querySelector("#yes");
const Nbtn = document.querySelector("#no");
const confirmation = document.querySelector(".confirmation");

const yesAnswerMethod = () => {
    question.style.display = "none";
    confirmation.style.display = "block";
    wrapper.style.height = "400px";
    wrapper.style.width = "660px";
}

const noAnswerMethod = () => {
    Nbtn.style.position = 'absolute';
    
    const xPos = Math.floor(Math.random() * wrapper.clientWidth);
    const yPos = Math.floor(Math.random() * wrapper.clientHeight);

    if(xPos >= wrapper.clientWidth / 2)
    {
        Nbtn.style.left =`${xPos - Nbtn.clientWidth}px`;
    }
    else
    {
        Nbtn.style.left =`${xPos}px`;
    }
   
    if(yPos >= wrapper.clientHeight / 2)
    {
        Nbtn.style.top =`${yPos - Nbtn.clientHeight}px`;
    }
    else
    {
       Nbtn.style.top = `${yPos}px`; 
    }
    
}

Ybtn.addEventListener('click', yesAnswerMethod);
Nbtn.addEventListener('click', noAnswerMethod);

