import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function App() {
  const queryInfo = useQuery('pokemon', () =>
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => res.data.results)
  )
console.log(queryInfo)
  return (
    <div>
    
      {queryInfo.data?.map(data => {
        return(
          <div> 
{data.data}
          </div>
        )
      })}
    </div>
  )
}