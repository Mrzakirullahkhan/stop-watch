const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const milliseconds = document.querySelector('#miliseconds')
const seconds = document.querySelector('#second');
let setinterval;


let milsec = 0;
let sec = 0;

const time = () =>{
    milsec++;
    if(milsec<9){
        milliseconds.innerHTML = "0"+milsec;
    }
     if(milsec>9){
        milliseconds.innerHTML=milsec;

    }
     if(milsec>99){
        sec++;
        seconds.innerHTML = "0"+sec;
        milsec = 0;
        milliseconds.innerHTML = "0"+0;

    }
     if(sec>9){
        seconds.innerHTML =sec;

    }
}

// for start button 
start.addEventListener('click',()=>{
    setinterval = setInterval(time,10)
})


// for stop btn
stop.addEventListener('click',()=>{
    clearInterval(setinterval)

})

// for reset btn
reset.addEventListener('click',()=>{
    clearInterval(setinterval)
    milliseconds.innerHTML="00"
    seconds.innerHTML="00"
})