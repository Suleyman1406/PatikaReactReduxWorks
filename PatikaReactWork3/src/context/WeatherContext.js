import {useContext,createContext,useState,useEffect} from 'react'
import axios, { Axios } from 'axios';
import { useCities } from './CitiesContext';
const WeatherContext =createContext();

export const WeatherProvider =({children})=>{
    const {selectedCity}=useCities();
    const [cityWeather,setCityWeather]=useState([]);
    const apiKey='9b63f5da7c5dfbe5c8256ac6b6b16295';
    useEffect(()=>{
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&units=metric&cnt=60&lang=tr&appid=${apiKey}`)
        .then(res=>{setCityWeather(res.data.list)})
    },[selectedCity])
    const values={
       cityWeather,
       setCityWeather
    }   
    return(
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}
export const useWeather=()=>useContext(WeatherContext);
