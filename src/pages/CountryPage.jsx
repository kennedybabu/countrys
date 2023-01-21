import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountry } from '../redux/features/countrysSlice'
import {IoIosArrowRoundBack} from "react-icons/io"


const CountryPage = ({modifiedCountrys}) => {
  const {name} = useParams()
  const dispatch = useDispatch()

  const [selectedCountry, setSelectedCountry] = useState(null)

  const {country} = useSelector((state) => ({...state.app}))

  useEffect(() => {
    dispatch(fetchCountry({name}))
    setSelectedCountry(country)
  }, [name])


  return (
    <div className='w-full country-page p-2 bg-[#202c37] px-5 md:px-[100px]'>   	
        <Link to='/'>
          <button className='px-4 py-2 w-[100px] my-4 shadow-md text-[#ffffff] bg-[#2b3945] flex items-center'><IoIosArrowRoundBack className='mr-2'/>back</button>
        </Link>   
        <div className='w-full h-full mt-8 flex flex-col md:flex-row  '>
          <div className='w-full h-[250px] md:h-[400px]'>
            <img src={country[0]?.['flags']?.['png']} alt={name} className='h-full w-full'/>  
          </div>
          <div className='w-full text-[#ffffff] pt-14 md:pt-0 md:pl-[50px]'>
            <h1 className='text-2xl font-bold'>{country[0]?.['name']?.['common']}</h1>
            <p className='my-2'><span className='font-bold'>Populaton: </span>{country[0]?.['population']}</p>
            <p className='my-2'><span className='font-bold'>Region: </span>{country[0]?.['region']}</p>
            <p className='my-2'><span className='font-bold'>Sub Region: </span>{country[0]?.['subregion']}</p>
            <p className='my-2'><span className='font-bold'>Capital: </span>{country[0]?.['capital']}</p>
          </div>
        </div>    
    </div>
  )
}

export default CountryPage