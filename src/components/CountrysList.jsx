import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountrys } from '../redux/features/countrysSlice'


const CountrysList = () => {

    const dispatch = useDispatch()
    const {countrys, loading } = useSelector((state) => ({...state.app}))
    

    useEffect(() => {
        dispatch(fetchCountrys())
    }, [])


    useEffect(() => {
        if(countrys){
            console.log('got something')
        } else {
            console.log('nothing')
        }
    },[countrys])

  return (
    <div>
        <p>render the countrs here</p>
    </div>
  )
}

export default CountrysList