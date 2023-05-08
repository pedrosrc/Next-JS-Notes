export async function User() {

   const response = await fetch('https://api.github.com/users/pedrosrc', {
      next:{
         revalidate: 30
      }
   })
   const user = await response.json()

    return (
       <div>
         <h1>User</h1>

         <h4>{user.login}</h4>
       </div>
    )
}