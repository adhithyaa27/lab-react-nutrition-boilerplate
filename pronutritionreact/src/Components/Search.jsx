import React from 'react'

function Search(props) {
    let {setSearch} = props
  return (
    <>
        <h1>Search</h1>
        <input type='text' placeholder='Search for food' onChange={(e)=>{setSearch(e.target.value)}}></input>
    </>
  )
}

export default Search