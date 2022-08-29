import React from 'react'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
//import axios from 'axios'



//Commented For Trying New Concepts

// function useRick(){
//   return useQuery("Rick",async()=>{
//     await new Promise(resolve => setTimeout(resolve,1000))
//     return axios
//       .get('https://rickandmortyapi.com/api/character')
//       .then(res => res.data.results)
  
//   })
// }

// function Count(){
//   const queryInfo = useRick();
  
//   return <h3>You are looking at {queryInfo.data?.length}</h3>
// }
// function Rick() {
// const queryInfo = useRick();
//   return queryInfo.isLoading ? (
//     "Loading ..." 
//   ): queryInfo.isError?(
//     queryInfo.error.message):(
//     <div>

//       {queryInfo.data?.map(data => {
//         return (
//           <div>
//             <p>{data.id}</p>
//             <p>{data.origin.name}</p>
//             <p>{data.gender}</p>
//             <p>{data.species}</p>
//             <p>{data.image}</p>
//             <p>{data.name}</p>
//             <p>{data.status}</p>
//           </div>
//         )
//       })}
//        <br />
//       {queryInfo.isFetching ? 'Updating...' : null}
//     </div>
//   )
// }

// function Monty() {
//   const queryInfo = useQuery('Monty', async () => {
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     return axios
//       .get('https://rickandmortyapi.com/api/character/?page=20')
//       .then(res => res.data.results)
//   })

//   return queryInfo.isLoading ? (
//     'Loading...'
//   ) : queryInfo.isError ? (
//     queryInfo.error.message
//   ) : (
//     <div>
//       {queryInfo.data.map(data => {
//         return( <div>
//            <p>{data.id}</p>
//             <p>{data.origin.name}</p>
//             <p>{data.gender}</p>
//             <p>{data.species}</p>
//             <p>{data.image}</p>
//             <p>{data.name}</p>
//             <p>{data.status}</p>
//         </div> )
//       })}
//       <br />
//       {queryInfo.isFetching ? 'Updating...' : null}
//     </div>
//   )
// }

export default function App(){
  const [id,setId] = React.useState('')
    return(
      <div>
      
       <input value={id} onChange={e=> setId(e.target.value)} />
       <RickSearch id={id} />
       
      <ReactQueryDevtools />
      </div>
    )
  }

//Commented For Next concepts  

// function RickSearch({id}){
//   const queryInfo = useQuery(['id',id],()=>{

//     const controller = new AbortController();
//     const signal = controller.signal

//     const promise = new Promise(resolve => setTimeout(resolve,1000))
//     .then(()=>{
//       return fetch(`https://rickandmortyapi.com/api/character/${id}`,{
//         method:'get',
//         signal,
//       })
//     })
  
//     .then(res=>res.json())

//     promise.cancel = () =>{
//       controller.abort()
//     }
//     return promise
//   },
//   {
 
//     enabled: true,  //enabled should be given in boolean
//   })
//   console.log(queryInfo);
  
  
//   return queryInfo.isLoading ? (
//     'Loading...'
//   ):queryInfo.isError?(
//     queryInfo.error.message
//   ):(
//     <div>
//      {queryInfo.data?.results?.id ? (
//         <p>{queryInfo.data.results.id} </p>
//       ) : (
//         'id not found.'
//       )}
//       <br />
//       {queryInfo.isFetching ? 'Updating...' : null}
//     </div>
//   )
// }



