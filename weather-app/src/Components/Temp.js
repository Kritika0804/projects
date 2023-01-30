import React, { useEffect, useState } from 'react'

function Temp() {

  const [city , setCity] = useState(null);
  const [search , setSearch] = useState("Pune");


  useEffect( () => {


    // for fetching data from api
    const fetchApi = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=020c26430611062a8efac12c1ea7b61d`
        const response = await fetch(url);
        // console.log(response);
        //Now need  to convert it into json format::
        const resJson = await response.json();
        //await is used bcoz in futture either data will get accepted or rejected.
        //console.log(resJson);
        setCity(resJson.main);
    }
    fetchApi(); 
  },[search])
  
  return (
    <div className='main'>
    <div className='box'>
        <div className='inputData'>
            <input
                type='search'
                className='inputfeild'
                onChange={ (event) => {
                    setSearch(event.target.value)
                } }
            />
        </div>

        {!city ? (
            <p>No Data Found</p>
            
            ):(
                <div>
                <div className='info'>
                <h1 className='location'>
                <i className="fa-solid fa-street-view"></i>{search}
                </h1>
                <h1 className='temp'>
                    {city.temp}&deg; Cel
                    
                </h1>
                
                <h3 className='min_max'>
                    Min : {city.temp_min}&deg; Cel | Max : {city.temp_max}&deg; Cel
                </h3>
                </div>
        </div>
            )
            }
      
        

    </div>
    </div>
  )
}

export default Temp
