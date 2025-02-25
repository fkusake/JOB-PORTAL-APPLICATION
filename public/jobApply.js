

// JOB Apply DOM :
let jobapplybtn = document.querySelector(".jobapplybtn");

let jobapplypopup = document.querySelector(".jobapplypopup");

jobapplybtn.addEventListener("click",()=>{
    jobapplypopup.style.display = "block";
})



const closePop1 = document.querySelector(".closePop1");

closePop1.addEventListener("click",()=>{
    jobapplypopup.style.display = "none";
})