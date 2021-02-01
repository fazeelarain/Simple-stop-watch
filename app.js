
 var min = 0;
 var sec = 0;
 var mili = 0;
 

 var minheading = document.getElementById("min");
 var secheading = document.getElementById("sec");
 var milisecheading = document.getElementById("mili");
 var interval;

 function timer(){
     mili ++
     milisecheading. innerHTML = mili;
     
     if(mili >= 100){
         sec++
         secheading. innerHTML = sec;
         mili = 0;
        
     }else if(sec >= 10){
        min++
        minheading.innerHTML = min;
        sec = 0;

     }

 }

   

function start(){
    interval = setInterval(timer,10)
    document.getElementById("start").disabled = true
    
     
    
}

function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled = false
}

function Reset(){
    stop()
    min = 0; 
    sec = 0;
     mili = 0;
     milisecheading.innerHTML = mili;
     secheading.innerHTML = sec;
     minheading.innerHTML = min;

    
}