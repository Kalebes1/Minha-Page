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