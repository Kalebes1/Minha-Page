
/** OVERLAY
 */
    const overlay = document.querySelector(".overlay");
    window.addEventListener("load",function(){
        overlay.style.display = "none";
    })


/*MENU*/

    function menuToggle(){
        let menuArea = document.getElementById("menu-area");

        if(menuArea.style.width == '50vw'){
            menuArea.style.width = '0px';
        }else{
            menuArea.style.width = '50vw';
            menuArea.style.display = 'flex';
        }
    }

/** SCROLL */

const menuLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');

function getDistanceFromTop(element){
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop;
}
function nativeScroll(distanceFromTop){
    window.scroll({
        top: distanceFromTop,
        behavior: "smooth",
    })
}
function scrollToSection(event){
    event.preventDefault();
    const distanceFromTop = getDistanceFromTop(event.target) - 30;
    nativeScroll(distanceFromTop)
}

menuLinks.forEach((link)=>{
    link.addEventListener("click",scrollToSection);
});




/** Efeito Habilidades*/
var number = document.querySelectorAll(".number")
var counter = 0;
setInterval(()=>{
    if(counter == 100){
        clearInterval();
    }else{
        counter +=1;
        for(let i = 0; i<number.length; i++){
            number[i].innerHTML = counter + "%"
        }
        
    }
    
},20)



/**Slide show */
const btns = document.querySelectorAll('.btn-slide');
const slides = document.querySelectorAll('.video-slide');
const contents = document.querySelectorAll('.portfolio-content');

var slider = function(manual){
    
    btns.forEach((btn)=>{
        btn.classList.remove("active")
    });

    slides.forEach((slide)=>{
        slide.classList.remove("active")
    });
    
    contents.forEach((content)=>{
        content.classList.remove("active")
    });


    btns[manual].classList.add("active")
    slides[manual].classList.add("active")
    contents[manual].classList.add("active")    
}
btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        slider(i);
    })
});




