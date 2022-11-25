    let startBtn = document.querySelector("#startbtn");
    let stopBtn = document.querySelector("#stopbtn");
    let carImg = document.querySelector("#carimg")
    let timing;
    let i = 0;

    startBtn.addEventListener("click",function(){
        timing = setInterval(function(){
            if(i==1100){
                clearInterval(timing);
                i=0;
            }
            else{
                i+= 10;
                carImg.style.marginLeft=i+'px';
            }
        },100)

    })

    stopBtn.addEventListener("click",function(){
        clearInterval(timing);
 
    })