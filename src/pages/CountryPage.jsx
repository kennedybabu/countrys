import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountry } from '../redux/features/countrysSlice'

const CountryPage = ({modifiedCountrys}) => {
  const {name} = useParams()
  const dispatch = useDispatch()

  const [selectedCountry, setSelectedCountry] = useState(null)

  const {country} = useSelector((state) => ({...state.app}))

  useEffect(() => {
    dispatch(fetchCountry({name}))
  }, [name]) 


  // useEffect(() => {
  //   if(country){
  //     return{
  //       name: country[0].name.common,
  //       population: country[0].population
  //     }
  //   }
  // }, [])

  return (
    <div className='w-full country-page p-2'>   
        <Link to='/'>back</Link>         
         {/* <div className='w-[250px] rounded-md h-[300px] my-4 mx-auto shadow'>
          <img src={country[0].flags.png} alt={name} className='h-[45%] rounded-t-md w-full'/>
          <div className='w-full h-full px-2 py-4'>
            <h2 className='font-bold text-xl'>{name}</h2>
            <p><span>Population</span>: {country[0].population}</p>
            <p>Region: {country[0].region}</p>
            <small><span className='font-bold'>Capital</span>: {country[0].capital}</small>
          </div>
      </div> */}
      <img src={country[0]?.['flags']?.['png']} alt={name} className='h-[45%] rounded-t-md w-full'/>
      {/* <p>{country[0].name.common}</p>
      <p>{country[0].capital}</p>
      <p>{country[0].population}</p> */}
      <p>{country[0]?.['name']?.['common']}</p>
      <p>{country[0]?.['capital']}</p>
      <p>{country[0]?.['population']}</p>
    </div>
  )
}

export default CountryPage