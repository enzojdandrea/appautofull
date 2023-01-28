import { useContext,useState } from "react"
import { UserContext } from "../../context/UserContext"
import { Link } from "react-router-dom"
const UserForm =()=>{
    const {setUser} = useContext(UserContext)
    return(
        <div className="container">
            <input className="form-control form-control-lg" type="text" placeholder="Nombre" aria-label=".form-control-lg example"/>
            <input className="form-control form-control-lg" type="text" placeholder="Telefono" aria-label=".form-control-lg example"/>
            <input className="form-control form-control-lg" type="text" placeholder="Correo" aria-label=".form-control-lg example"/>
            {/* <Link to='/checkout'><button onClick={()=>setUser(userData)}>Finalizar Formulario</button></Link> */}
            <button>Finalizar Formulario</button>
        </div>
    )

}
export default UserForm