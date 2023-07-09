let navicon,visible,nav;
navicon = document.querySelector(".nav-icon");
visible = document.querySelector(".visible");
nav = document.querySelector(".nav");
let i = false;
navicon.addEventListener("click", () => {
    if(i == false){
        visible.style.borderBottom = "none";
        visible.style.borderBottomLeftRadius = "0";
        visible.style.borderBottomRightRadius = "0";
        nav.style.height = "100%"
        nav.style.border = "solid 2px #010101 ";
        nav.style.borderTop = "none";
        i = true;
    }
    else{
        visible.style.borderBottom = "solid 2px #010101 ";
        visible.style.borderBottom = "solid 2px #010101";
        visible.style.borderBottomLeftRadius = "30px";
        visible.style.borderBottomRightRadius = "30px";
        nav.style.height = "0"
        nav.style.border = "none";
        nav.style.borderTop = "none";
        i = false;
    }
})