
document.querySelector(".btn").addEventListener("click", calculateLove);

function calculateLove(){
    var percentage = Math.floor(Math.random()*101);
    if(percentage >= 70){
        document.getElementById("head").innerText = percentage + " %" + " Compatible";
    }
    else if(percentage < 70){
        document.getElementById("head").innerText = percentage + " %" + " Compatible";
    }
}