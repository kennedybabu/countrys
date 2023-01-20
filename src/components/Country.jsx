import React from 'react'
import { Link } from 'react-router-dom'

const Country = ({name, id, modifiedCountrys, capitalCity, flag, population, region}) => {
  return (
    
    <Link to={`/country/${name}`}>      
      <div className='w-[250px] rounded-md h-[300px] my-4 mx-auto shadow'>
          <img src={flag} alt={name} className='h-[45%] rounded-t-md w-full'/>
          <div className='w-full h-full px-2 py-4'>
            <h2 className='font-bold text-xl'>{name}</h2>
            <p><span>Population</span>: {population}</p>
            <p>Region: {region}</p>
            <small><span className='font-bold'>Capital</span>: {capitalCity}</small>
          </div>
      </div>
    </Link>
  )
}

export default Country