import React from 'react'
import _app from './Pages/App';
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom'
//import initialData from './initialData';

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


// About Stale Time And Initial Data
// const email = 'Sincere@april.biz'

// function MyPosts() {
//   const userQuery = useQuery(
//     'user',
//     async () => {
//       await new Promise(resolve => setTimeout(resolve, 1000))
//       return axios
//         .get(`https://jsonplaceholder.typicode.com/users?email=${email}`)
//         .then(res => res.data[0])
//     },
//     {
//       initialData: initialData,
//       initialStale:true,
//     }
//   )


//   return userQuery.isLoading ? (
//     'Loading user...'
//   ) : (
//     <div>
//       <pre>{JSON.stringify(userQuery.data, null, 2)}</pre>
//       {userQuery.isFetching ? 'Updating...' : null}
//     </div>
//   )

// }


// function Posts() {
//   const postsQuery = useQuery(
//     'posts',
//     async () => {
//       await new Promise(resolve => setTimeout(resolve, 1000))
//       return axios
//         .get('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.data)
//     },
//     {
//       cacheTime: 10000,
//     }
//   )

//   return (
//     <div>
//       <h1>Posts {postsQuery.isFetching ? '...' : null}</h1>
//       <div>
//         {postsQuery.isLoading ? (
//           'Loading posts...'
//         ) : (
//           <ul>
//             {postsQuery.data.map(post => {
//               return (
//                 <li key={post.id}>
//                   <Link to={`/${post.id}`}>{post.title}</Link>
//                 </li>
//               )
//             })}
//           </ul>
//         )}
//       </div>
//     </div>
//   )
// }

// function Post() {
//   const { postId } = useParams()

//   const postQuery = useQuery(['post', postId], async () => {
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     return axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//       .then(res => res.data)
//   })

//   return (
//     <div>
//       <Link to="/">Back</Link>
//       <br />
//       <br />
//       {postQuery.isLoading ? (
//         'Loading...'
//       ) : (
//         <>
//           {postQuery.data.title}
//           <br />
//           <br />
//           {postQuery.isFetching ? 'Updating...' : null}
//         </>
//       )}
//     </div>
//   )
//   //
// }


export default function App() {



  return (
    <div><_app /></div>
    // <Router>
    //   <Routes>
    //     <Route path="/:postId" element={<Post />}>

    //     </Route>
    //     <Route path="/" element={<Posts />}>

    //     </Route>
    //   </Routes>
    //   <ReactQueryDevtools />
    // </Router>
  )
}





