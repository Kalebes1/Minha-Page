let number = document.querySelectorAll(".number")
let counter = 0;
setInterval(()=>{
    if(counter == 100){
        clearInterval();
    }else{
        counter +=1;
        number.innerHTML = counter + "%"
    }
    
},20)