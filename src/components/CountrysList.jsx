import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountrys } from '../redux/features/countrysSlice'
import { v4 as uuidv4 } from 'uuid'
import Country from './Country'

const CountrysList = () => {

    const dispatch = useDispatch()
    const {countrys, loading } = useSelector((state) => ({...state.app}))
    const [modifiedCountrys, setModifiedCountrys] = useState([])
    

    useEffect(() => {
        dispatch(fetchCountrys())
    }, [])


    useEffect(() => {
        if(countrys){
            const newState = countrys.map((item) => {
                return {
                    id: uuidv4(),
                    name: item.name.common,
                    flag: item.flags.png,
                    population: item.population,
                    capitalCity: item.capital,
                    region: item.region   
                }
            })
            setModifiedCountrys(newState)
        } else {
            setModifiedCountrys([])
        }
    },[countrys])

  return (
    <div>
        
        {modifiedCountrys.map((item) => {
            const {id, region, name, flag, population,capitalCity} = item
            return (
               <Country modifiedCountrys={modifiedCountrys} key={id} region={region} name={name} id={id} flag={flag} population={population} capitalCity={capitalCity} />
            )
        })}
    </div>
  )
}

export default CountrysList