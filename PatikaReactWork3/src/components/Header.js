import React from 'react'
import { useCities } from '../context/CitiesContext'
const Header = () => {
    const {selectedCity,setSelectedCity,cityList,setCityList}=useCities();
    return (
        <div>
            <select value={selectedCity} onChange={(e)=>setSelectedCity(e.target.value)} 
            style={{width:'150px',margin:'15px',padding:'5px',outline:'gray'}} id="cities">
                {
                    cityList.map((city)=>
                        <option  key={city.id} >{city.name}</option>
                    )
                }
                
            </select>
        </div>
    )
}

export default Header
