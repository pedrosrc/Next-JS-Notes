'use client'
import { useState } from "react"

export async function Repo() {

    const [repo, setRepo] = useState<any[]>([])
    //Fazer demorar a renderizacao
    await new Promise(resolve => setTimeout(resolve,2000))

    const response = await fetch('https://api.github.com/users/pedrosrc/repos', {
       next:{
          revalidate: 30
       }
    })
    const repos = await response.json()
    setRepo(repos.data)
    
     return (
        <div>
          <h1>Repos</h1>
          {repos.map((item:any)=>{
            return(
                <article key={item.id}>
                    <p>Name: {item.name}</p>
                </article>
            )
          })}
        </div>
     )
 }