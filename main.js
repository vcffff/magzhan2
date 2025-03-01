function sendRequest() {
    let input = document.getElementById("userInput").value;
    document.getElementById("response").innerHTML = "Ответ API: " +"data1:{<br>"+ input+"}";
}


document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        let answer = button.nextElementSibling
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const plans = document.querySelectorAll(".plan");

    function checkVisibility() {
        plans.forEach(plan => {
            const rect = plan.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                plan.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

let modal=document.querySelector('.modal')
document.querySelectorAll("button").forEach(button => {
    if (button.textContent.includes("Попробовать")) {
        button.addEventListener("click", () => {
            modal.style.display = "flex";
            setTimeout(() => modal.classList.add("show"), 1); 
        });
    }
});
let closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 300);
});


let pay=document.querySelector('.pay-btn')
pay.addEventListener('click',function(){setTimeout(()=>{alert('payment was successfully undertaken!')},3000)})




const burger = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
