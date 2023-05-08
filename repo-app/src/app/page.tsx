import { Suspense } from "react"
import {Repo} from "@/components/Repo"
import { User } from "@/components/User"
import { useRouter } from "next/navigation"

export default async function Home() {

   //const router = useRouter()

   return (
       <div>
         <h1>Hello</h1>
         {/* @ts-expect-error Async Server Component */}
         <User/>

         <Suspense fallback={<p>Carregando repositorios...</p>}>
            
            {/* @ts-expect-error Async Server Component */}
            <Repo/>
         </Suspense>
       </div>
    )
}