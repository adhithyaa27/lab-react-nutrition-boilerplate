import FoodBox from './Components/FoodBox'
import Search from './Components/Search'
import './App.css'
import { useState } from 'react'
import FoodData from '../resources/FoodData'

function App() {
  const[search , setSearch] = useState("")
  const filteredData = FoodData.filter((element)=>{
    return element.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
  
      <Search setSearch = {setSearch}/>
      {
        filteredData.length <= 0 ? (<h1>No Result Found</h1>) : 
        (filteredData.map((ele, i)=>(
          <FoodBox key={i} element={ele} index={i}/>
        ))
        )
      }
    </>
  )
}

export default App
