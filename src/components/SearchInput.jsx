import React from 'react'
import {BiSearch} from "react-icons/bi"


const SearchInput = ({setQuery, handleSubmit}) => {

    
  return (
    <div className='w-full h-100px p-2 bg-[#202c37] md:px-[100px]'>
        <form onSubmit={handleSubmit} className='max-w-[450px]  px-4 flex items-center justify-center'>
          <div className='w-full text-[#ffffff] bg-[#2b3945] flex items-center my-4 px-10 py-4 rounded-md outline-none shadow-md'>
            <BiSearch className='mr-4 text-xl'/>
            <input onChange={(e) => setQuery(e.target.value)} className='bg-[#2b3945] w-full border-none outline-none'  type='text' name='query' id='query' placeholder='search country...'/>
          </div>
        </form>
    </div>
  )
}

export default SearchInput