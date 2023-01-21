import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountrys, fetchCountry, searchCountry } from '../redux/features/countrysSlice'
import { v4 as uuidv4 } from 'uuid'
import Country from './Country'
import SearchInput from './SearchInput'

const CountrysList = () => {

    const dispatch = useDispatch()
    const {countrys, loading, searchedCountry } = useSelector((state) => ({...state.app}))
    const [modifiedCountrys, setModifiedCountrys] = useState([])
    
    const [query, setQuery] = useState('')    

    function handleSubmit(e){
      e.preventDefault()   
    }

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
    <div className='bg-[#202c37]'>
        <SearchInput setQuery={setQuery} handleSubmit={handleSubmit}/>
        <div className='w-full grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 md:px-[100px]'>
            {modifiedCountrys.map((item) => {
                const {id, region, name, flag, population,capitalCity} = item
                return (
                <Country modifiedCountrys={modifiedCountrys} key={id} region={region} name={name} id={id} flag={flag} population={population} capitalCity={capitalCity} />
                )
            })}
        </div>  
      
    </div>
  )
}

export default CountrysList