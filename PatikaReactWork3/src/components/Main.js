import React from 'react'
import {useWeather} from '../context/WeatherContext'
const Main = () => {
    const {cityWeather}=useWeather();
    const weekDays=['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'];
    let a=0;
    let minTempSt=0;
    let maxTempSt=0;
    let isFirst=true;
    if(cityWeather.length!==0){
        a=Math.trunc(cityWeather[0].dt/8640);
        minTempSt=parseInt((cityWeather[0].main.temp_min )*100)/100;
        maxTempSt=parseInt((cityWeather[0].main.temp_max )*100)/100;

    }
    return (
        <div>
            {
                cityWeather.length!==0 &&
                cityWeather.map((weahter)=>
                    {
                        if(Math.trunc(weahter.dt/8640)<a){ 
                            minTempSt=Math.min(minTempSt,parseInt((weahter.main.temp_min )*100)/100);
                            maxTempSt=Math.max(maxTempSt,parseInt((weahter.main.temp_max)*100)/100);
                            isFirst=false;
                            return;
                        }
                        a=Math.trunc(weahter.dt/8640)+10;
                        let day=weekDays[(Math.round(weahter.dt / (24*3600))+2) % 7];
                        let minTemp=minTempSt;
                        let maxTemp= maxTempSt;
                        minTempSt=parseInt((weahter.main.temp_min )*100)/100;
                        maxTempSt= parseInt((weahter.main.temp_max)*100)/100;
                        let imgSrc="http://openweathermap.org/img/wn/"+weahter.weather[0].icon.replace('n','d')+"@2x.png";
                        let weatherDate=weahter.dt_txt.split(" ")[0];
                        return (
                            <div  style={{width:'100px',marginLeft:'20px',padding:'15px 30px 20px 20px',display:'inline-block',
                                marginRight:'60px',border:isFirst? '1px solid rgb(220, 220, 220)':'none'}}  key={weahter.dt}>
                                <h3 style={{width:'100px',margin:'0px',padding:'5px',textAlign:'center'}}>{day}</h3>
                                <h5 style={{width:'100px',margin:'0px',padding:'0px 5px ',textAlign:'center',opacity:'0.4'}}>{weatherDate}</h5>
                                <img style={{width:'100px',padding:'5px'}} src={imgSrc+""} alt="hava durumu photo" />
                                <div style={{marginLeft:'3px'}}>
                                    <p style={{float:'left',margin:'0'}}>{maxTemp}°</p>
                                    <p style={{float:'right',margin:'0 -8px 0 0',opacity:0.4}}>{minTemp}°</p>
                                </div>
                            </div>
                        )
                        
                    }
                    
                )
               
            }
        </div>
    )
}

export default Main
