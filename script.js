const buttons = document.querySelectorAll(".btn");
console.log(buttons);
const output =document.querySelector(".output");

output.innerHTML = document.getElementById("content1").innerHTML;

buttons.forEach(function (btn, index){
    btn.addEventListener("click", function(){
        buttons.forEach(function (b){
            b.classList.remove("active");
        });
        btn.classList.add("active");
        const contentId= "content" + (index + 1);
        output.innerHTML = document.getElementById(contentId).innerHTML;
    });
});




    