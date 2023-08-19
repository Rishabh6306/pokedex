import React from 'react'

function Pokemon({ name, url }) {
  return (
    <div>
      <div>{name}</div>
      <img src={url} alt="img" />
    </div>
  )
}

export default Pokemon
