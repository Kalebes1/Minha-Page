let number = document.querySelector(".number")
let counter = 0;
setInterval(()=>{
    if(counter == 80){
        clearInterval();
    }else{
        counter +=1;
        number.innerHTML = counter + "%"
    }
    
},25)