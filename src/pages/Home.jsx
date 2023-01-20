import React from 'react'
import CountrysList from '../components/CountrysList'
import SearchInput from '../components/SearchInput'


const Home = () => {
  return (
    <div>
        <SearchInput />
        <CountrysList />
    </div>
  )
}

export default Home