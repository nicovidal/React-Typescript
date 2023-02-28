import { useState } from "react"



interface User{
    uid:string;
    name:string;
}
/* 
const tempUser : User={
    uid:'XYZ131',
    name:'hola'
}
 */


export const Usuario = () => {

    const [user, setUser] = useState<User>(/*tempUser {
        uid:'',
        name:'',//se puede definir igualmente aqui los datos
    } */);

    const login=()=>{
        setUser({
            uid:'ABC123',
            name:'Nicolas Vidal'
        })
    }




  return (
    <div className="mt-5">
        <h3>Usuario:useState</h3>
        <button className="btn btn-outline-primary" onClick={login}>
            Login

        </button>
        {
            (!user)
            ?<pre>No hay usuario</pre>
            :<pre>{JSON.stringify(user)}</pre>
        }
   
    </div>
  )
}
