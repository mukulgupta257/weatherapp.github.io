let apiinfo={
    'key' : 'eca249bb11e04b68504348cdfac19dae'
}
const updateweather=_=>{
    cleardetails();
    city=document.getElementById('cityname').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+apiinfo.key)
    .then(res=>res.json()).then(data=>{
        console.log(data)
        document.getElementById('location').innerText='Location :'+' '+data.name;
        document.getElementById('temp').innerText='Temperature :'+data.main.temp+'C';
        document.getElementById('feelslike').innerText='Feels like :'+data.main.feels_like+'C';
        document.getElementById('min_temp').innerText='Min temp :'+data.main.temp_min+'C';
        document.getElementById('max_temp').innerText='Max temp :'+data.main.temp_max+'C';
        document.getElementById('speed_wind').innerText='Wind Speed :'+data.wind.speed
    })
}

const cleardetails=_=>{
    document.getElementById('location').innerText='Location :'
    document.getElementById('temp').innerText='Temperature :'
    document.getElementById('feelslike').innerText='Feels like :'
    document.getElementById('min_temp').innerText='Min temp :'
    document.getElementById('max_temp').innerText='Max temp :'
    document.getElementById('speed_wind').innerText='Wind Speed :'
}


//event listner for all details 
document.getElementById('search').addEventListener('click',updateweather)
document.getElementById('cityname').addEventListener('keyup',updateweather)