import React from 'react'
import { Link } from 'react-router-dom'

const Country = ({name, id, modifiedCountrys, capitalCity, flag, population, region}) => {
  return (
    
    <Link to={`/country/${name}`}>      
      <div className='w-[350px] rounded-md my-8 mx-auto shadow'>
          <div className='h-[40%]'>
            <img src={flag} alt={name} className='rounded-t-md w-full'/>
          </div>
          <div className='w-full px-2 py-8 bg-[#2b3945] text-[#ffffff] rounded-b-md'>
            <h2 className='font-bold text-xl'>{name}</h2>
            <p className='my-2 text-xl'><span className='font-[600]'>Population</span>: {population}</p>
            <p className='my-2 text-xl'><span className='font-[600]'>Region:</span> {region}</p>
            <p className='my-2 text-xl'><span className='font-[600]'>Capital</span>: {capitalCity}</p>
          </div>
      </div>
    </Link>
  )
}

export default Country