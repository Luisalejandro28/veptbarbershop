const btnleft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");
const slider = document.querySelector("#slider");
const sliderSection = document.querySelectorAll(".slider-section");

btnleft.addEventListener("click", e => moveToLeft());
btnright.addEventListener("click", e => moveToRight());

setInterval(() => {
    moveToRight()
}, 10000);

let opercaion = 0;
    counter = 0;
    withImg = 100 / sliderSection.length;

function moveToLeft(){
    counter--;
    if(counter < 0){
        counter = sliderSection.length-1;
        opercaion = withImg * (sliderSection.length - 1);
        slider.style.transform = `translate(-${opercaion}%)`
        slider.style.transition = "none"
        return;
    }
    opercaion = opercaion - withImg;
    slider.style.transform = `translate(-${opercaion}%)`
    slider.style.transition = "all ease .7s"
}
function moveToRight(){
    if(counter >= sliderSection.length-1){
        opercaion = 0;
        counter = 0;
        slider.style.transform = `translate(-${opercaion}%)`
        slider.style.transition = "none"
        return;
    }
    counter++;
    opercaion = opercaion + withImg;
    slider.style.transform = `translate(-${opercaion}%)`
    slider.style.transition = "all ease .7s"
}


//Funcionalidad Barra de Navegacion

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
    if(navMenu.classList.contains( "nav-menu_visible")){
        navToggle.setAttribute("aria-label", "fechar menu");}
        else{
            navToggle.setAttribute("aria-label", "abrir menu");
        }      
})