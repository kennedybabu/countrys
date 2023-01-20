import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { application } from 'express'

const CountryPage = ({modifiedCountrys}) => {
  const {name} = useParams()
  // const {countrys } = useSelector((state) => ({...state.app}))
  // const [selectedCountry,setSelectedCountry] = useState({})

  // useEffect(()=> {
  //   const country = countrys.filter((item) => {
  //     return item.id === id
  //   })
  //   setSelectedCountry(country)
  // },[countrys, id])
  // console.log(countrys)


  return (
    <div className='w-full h-full p-2'>            
        {/* <p>{selectedCountry.name}</p> */}
        my country is {name}
    </div>
  )
}

export default CountryPage