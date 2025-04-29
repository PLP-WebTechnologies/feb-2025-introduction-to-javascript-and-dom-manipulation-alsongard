const changeTxtBtn = document.getElementById("changeText");
const btnStop = document.getElementById('stop');
const demoPar = document.querySelector('.demo');
const myDemo = document.querySelector('.myDemo');
const watch = document.querySelector(".timeDay");
const body  = document.body;
const stopWatch = setInterval(()=>{
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minute = minute < 10? "0" + minute : minute;
    watch.innerHTML = `TIME: ${hour} : ${minute} : ${seconds}`;
},500)
changeTxtBtn.addEventListener('click', ()=>{
    demoPar.innerHTML = "<p>JavaScript is an interesting Programming Language</p>"
})
const timer = setInterval(()=>{
    myDemo.innerHTML = '<p>Want to know more about Javascript, go to PowerLearningProject.org</p>'
    
},10000) // 10 seconds get displayed
const newTimer = setInterval(()=>{
    myDemo.innerHTML = '<p></p>'
},6000) // remove after 6 seconds
btnStop.addEventListener('click', ()=>{
    clearInterval(timer);
    clearInterval(newTimer);
    clearInterval(stopWatch);
})

const btnBg = document.getElementById('bg');
btnBg.addEventListener('click', ()=>{
    console.log('change bg color');
    body.classList.toggle('new_style');
})