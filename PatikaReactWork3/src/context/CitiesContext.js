import {useContext,createContext,useState,useEffect} from 'react'
import axios, { Axios } from 'axios';
const CitiesContext =createContext();

export const CitiesProvider =({children})=>{
    const[cityList,setCityList]=useState([]);
    const[selectedCity,setSelectedCity]=useState('Antalya');
    useEffect(()=>{
        axios('https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json')
        .then((res)=>setCityList(res.data))
    },[])

    const values={
        cityList,
        setCityList,
        selectedCity,
        setSelectedCity
    }
    return(
        <CitiesContext.Provider value={values}>{children}</CitiesContext.Provider>
    )
}
export const useCities=()=>useContext(CitiesContext);

