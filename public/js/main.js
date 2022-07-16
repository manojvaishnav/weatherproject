const city  = document.getElementById('search');
const submit  = document.getElementById('searchbtn');
const time = document.getElementById('time');
const msg  = document.getElementById('msg');
const img  = document.getElementById('img');
const tempdata  = document.getElementById('tempdata');
const  cnd = document.getElementById('condition');
const  windspeeddata = document.getElementById('windspeed');
const humiditydata  = document.getElementById('humidity');
const  visibilitydata = document.getElementById('visibility');
const  preasuredata= document.getElementById('preasure');

const getinfo = async(event) =>{
    event.preventDefault();
    let cityval = city.value;
   

   if(cityval === ""){
    msg.innerText = "please enter city name";
   }
   else{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=434859a191adb0fa2eb2db0d5503d1fe`;
    const response = await fetch(url);
    const data = await response.json();
    const arrdata = [data];
    const temp = arrdata[0].main.temp;
    const condition = arrdata[0].weather[0].main;
    const humidity = arrdata[0].main.humidity;
    const preasure = arrdata[0].main.pressure;
    const windspeed = arrdata[0].wind.speed;
    const visibility = arrdata[0].visibility;
    
    tempdata.innerHTML = `${temp}°C`;
    cnd.innerHTML = `${condition}`;

    if(condition=="Clouds"){
        img.innerHTML = "<i class='fa-solid fa-cloud' style='color: #e1e7e8; '></i>";
    }
    else if(condition=="Sunny"){
       img.innerHTML="<i class='fa-solid fa-sun' style='color: #eccc68; '></i>"; 
    }
    else if(condition=="Rainy"){
        img.innerHTML="<i class='fa-solid fa-cloud-rain' style='color: #15d3f5; '></i'"; 
    }
    else{
       img.innerHTML="<i class='fa-solid fa-sun' style='color: #eccc68; '></i>"; 
    }

    humiditydata.innerHTML = `${humidity}`;
    preasuredata.innerHTML = `${preasure} mb`;
    windspeeddata.innerHTML = `${windspeed} KM/H`;
    visibilitydata.innerHTML = `${visibility}`;
    }catch{
        msg.innerHTML = 'please enter city name properly';
    }
    
   }


}

submit.addEventListener('click',getinfo);


const getTime = () => {
    let t = new Date();
    let hh = t.getHours();
    let mm = t.getMinutes();
    let newt = '';
    if (hh > 12) {
        if (mm < 10) {
            mm = `0${mm}`;
            hh = `${hh - 12}`;
            newt = `${hh}:${mm}PM`;
            // console.log(`${hh}:${mm}PM`);
        }
        else {
            mm = `${mm}`;
            hh = `${hh - 12}`;
            newt = `${hh}:${mm}PM`;
            // console.log(`${hh}:${mm}PM`);
        }
    }
    else {
        if (mm < 10) {
            mm = `0${mm}`;
            hh = `${hh}`;
            newt = `${hh}:${mm}AM`;
            // console.log(`${hh}:${mm}AM`);
        }
        else {
            mm = `${mm}`;
            hh = `${hh}`;
            newt = `${hh}:${mm}AM`;
            // console.log(`${hh}:${mm}AM`);
        }
    }

    time.innerHTML = `${newt}`;
}
getTime();