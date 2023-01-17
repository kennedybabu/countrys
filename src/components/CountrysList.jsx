import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountrys } from '../redux/features/countrysSlice'


const CountrysList = () => {

    const dispatch = useDispatch()
    const {countrys, loading } = useSelector((state) => ({...state.app}))
    

    useEffect(() => {
        dispatch(fetchCountrys())
    }, [])

  return (
    <div>
        <p>render the countrs here</p>
    </div>
  )
}

export default CountrysList