
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




