
/** OVERLAY
 */
    const overlay = document.querySelector(".overlay");
    window.addEventListener("load",function(){
        overlay.style.display = "none";
    })


/*MENU*/
    const largura = window.screen.width;

    function menuToggle(){
        let menuArea = document.getElementById("menu-area");

        if(largura < 992 && largura > 576 ){
            if(menuArea.style.width == '50vw'){
                menuArea.style.width = '0px';
            }else{
                menuArea.style.width = '50vw';
                menuArea.style.display = 'flex';
            }
        }else{
            if(menuArea.style.width == '70vw'){
                menuArea.style.width = '0px';
            }else{
                menuArea.style.width = '70vw';
                menuArea.style.display = 'flex';
            }
        }
        

     
    }

/** SCROLL */

const menuLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
const navLink = document.querySelectorAll(".navbar-nav .nav-link")


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


function intervalo(counter){
    setInterval(()=>{
        if(counter == 100){
            clearInterval();
        }else{
            counter +=1;
            for(let i = 0; i<number.length; i++){
                number[i].innerHTML = counter + "%"
            }
        }
    },25)
}

/**
 * 
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
 */

    








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

/**
 * ANIMAÇÕES AO SCROLL
 */

 const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

     
    function animeScroll(){
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
        target.forEach(function(element){
            if((windowTop) > element.offsetTop){
                element.classList.add(animationClass);
                intervalo(100);
            }else{
                element.classList.remove(animationClass);
                intervalo(0);
            }
        })
    }

    animeScroll();
    intervalo(0);

    if(target.length){
        window.addEventListener('scroll',debounce(function(){
            animeScroll()
        }, 200))    
    }

/**
 * ANIMAÇÕES DO SCROLLREVEAL
 */

    window.sr = ScrollReveal({reset: true});
    sr.reveal('.main-section img',{duration:1000})
    sr.reveal('.text-1',{ duration:1000});
    sr.reveal('.name',{ duration:2000});
    sr.reveal('.social-medias',{ duration:3000});

    sr.reveal('.about-me .row',{ easing: 'ease-in' })
    sr.reveal('.about-me .donwload-cv',{duration:2000})
    sr.reveal('.about-me .our-service',{ duration:1000})
    sr.reveal('.about-me .col-md-4',{ duration:2000})
    sr.reveal('.about-me .content',{ duration:1500})

    sr.reveal('.portfolio h1',{ duration:1500})
    sr.reveal('.portfolio .slider',{ duration:2500})

    sr.reveal('.contact h1',{ duration:1500})
    sr.reveal('.contact .row',{ duration:2500})






 
    
   
