let navBar = document.querySelector(".header__nav_bar");
let bar = document.querySelector(".fa-bars");
let timesBar = document.querySelector(".fa-times");


if(bar){
    bar.addEventListener("click", function(){
        navBar.classList.add("show_icon");
    })
    if(timesBar){
        timesBar.addEventListener("click", function(){
        navBar.classList.remove("show_icon");
            
        })
    }
}

