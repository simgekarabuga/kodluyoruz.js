let firsName = prompt("Lütfen Adınızı Giriniz:")
let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} ${firsName}

`;
function time(){
    let date= new Date;

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second =date.getSeconds();


    let day = ["Pazar","pazartesi", "Salı","Çarşamba" ,"Perşembe","Cuma","Cumartesi",]
    let dayName = day[date.getDay()] 
    let clock=document.querySelector("#clock");
    clock.innerHTML = `${hour}: ${minute}: ${second} ${dayName}`;
}
setInterval(time,50)