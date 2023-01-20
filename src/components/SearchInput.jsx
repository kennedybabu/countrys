import React, {useRef} from 'react'
import {BiSearch} from "react-icons/bi"


const SearchInput = () => {
    const ref = useRef()

    
  return (
    <div className='w-full h-100px p-2'>
        <form className='w-full px-4 flex items-center justify-center'>
          <div className='w-full flex items-center border p-2 rounded-md shadow'>
            <BiSearch className='mr-4'/>
            <input className='' type='text' name='query' id='query' placeholder='search country...'/>
          </div>
        </form>
    </div>
  )
}

export default SearchInput