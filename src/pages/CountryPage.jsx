import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountry } from '../redux/features/countrysSlice'

const CountryPage = ({modifiedCountrys}) => {
  const {name} = useParams()
  const dispatch = useDispatch()

  const [selectedCountry, setSelectedCountry] = useState(null)

  const {country} = useSelector((state) => ({...state.app}))

  useEffect(() => {
    dispatch(fetchCountry({name}))
  }, [])


  // useEffect(() => {
  //   if(country){
  //     return {
  //         name: country.name.common,
  //         flag: country.flags.png,
  //         population: country.population,
  //         capitalCity: country.capital,
  //         region: country.region 
  //     }
  //   } 
  // }, [])
  console.log(country)

  return (
    <div className='w-full h-full p-2'>            
        my country is {name}
    </div>
  )
}

export default CountryPage