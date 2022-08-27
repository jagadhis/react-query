import React from 'react'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios'
 
function Rick() {
  const queryInfo = useQuery('Rick', async() =>{
    await new Promise(resolve => setTimeout(resolve,1000))
    return axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => res.data.results)
  },
  {
    staleTime: Infinity,
  },
  {
    cacheTime: Infinity,
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
       <br />
      {queryInfo.isFetching ? 'Updating...' : null}
    </div>
  )
}

export default function App(){
  const [show, toggle] = React.useReducer(d => !d, true)
  return(
    <div>
        <button onClick={() => toggle()}>{show ? 'Hide' : 'Show'}</button>
      <br />
      <br />
      {show ? <Rick/> : null}
      <Rick/>
     
    <ReactQueryDevtools />
    </div>
  )
}