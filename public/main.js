// Nav bar DOM :
const dropdown = document.querySelector(".a4");

const loginLinks = document.querySelectorAll(".a5")

dropdown.addEventListener("click",(event)=>{
    event.preventDefault();

    if(dropdown.classList.contains("gray")){
        dropdown.classList.remove("gray");
        dropdown.classList.add("white");
    }else{
        dropdown.classList.remove("white");
        dropdown.classList.add("gray");   
    }
})


loginLinks.forEach((current)=>{
    current.addEventListener("click",(event)=>{
        // event.preventDefault();
        if(dropdown.classList.contains("gray")){
            dropdown.classList.remove("gray");
            dropdown.classList.add("white");
        }else{
            dropdown.classList.remove("white");
            dropdown.classList.add("gray");   
        }
    })
})
// End

// POP DOM :

const pop1btn = document.querySelector(".popupsbut1");

const popDiv = document.querySelector(".popupDiv");

pop1btn.addEventListener("click",()=>{
    popDiv.style.display = "block";
})

const pop1Login = document.querySelector(".pop1login");

const pop2 = document.querySelector(".popupDiv2");

pop1Login.addEventListener("click",()=>{
    popDiv.style.display = "none";
    pop2.style.display = "block";
})


const closePop1 = document.querySelector(".closePop1");

closePop1.addEventListener("click",()=>{
    popDiv.style.display = "none";
})

const closePop2 = document.querySelector(".closePop2");

closePop2.addEventListener("click",()=>{
    pop2.style.display = "none";
})
// End

