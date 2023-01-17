import React, {useRef} from 'react'


const SearchInput = () => {
    const ref = useRef()

    
  return (
    <div className='w-full h-100px p-2'>
        <form className='w-full flex items-center justify-center'>
            <input className='border p-2' type='text' name='query' id='query' placeholder='search country...'/>
        </form>
    </div>
  )
}

export default SearchInput