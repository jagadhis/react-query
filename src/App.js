import React from 'react'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios'
 
function Rick() {
  const queryInfo = useQuery('Rick', async() =>{
    await new Promise(resolve => setTimeout(resolve,5000))
    return axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => res.data.results)
  })
  console.log(queryInfo)
  return queryInfo.isLoading ? (
    "Loading ..." 
  ): queryInfo.isError?(
    queryInfo.error.message):(
    <div>

      {queryInfo.data?.map(data => {
        return (
          <div>
            <p>{data.id}</p>
            <p>{data.origin.name}</p>
            <p>{data.gender}</p>
            <p>{data.species}</p>
            <p>{data.image}</p>
            <p>{data.name}</p>
            <p>{data.status}</p>
          </div>
        )
      })}
    </div>
  )
}

export default function App(){
  return(
    <div>
      <Rick/>
     
    <ReactQueryDevtools />
    </div>
  )
}