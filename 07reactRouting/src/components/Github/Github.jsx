import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/octocat")
    //     .then(res => res.json())
    //     .then(data =>
    //     {
    //         setData(data);
    //     }
     
    //     )
    // },[])

  return (
    <div className='text-center bg-gray-700 text-white text-5xl'>Github Followes : {data.followers}
    <img src={data.avatar_url} alt='Git pic' width={300}/>
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response =await  fetch("https://api.github.com/users/octocat")
  return response.json();
}