import React from 'react'

const Country = ({name, capitalCity, flag, population}) => {
  return (
    <div>
        <p>{name}</p>
        <small>{capitalCity}</small>
        <img src={flag} alt={name} />
        <p>{population}</p>
    </div>
  )
}

export default Country