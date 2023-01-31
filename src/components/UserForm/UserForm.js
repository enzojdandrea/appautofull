import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"

const UserForm = () => {
    const { addUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [datos, setDatos] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        // console.log('Name: '+datos.name.length+' Phone: '+datos.phone.length+' Email: '+datos.email.length)
        event.preventDefault()
        addUser(datos)
        navigate('/checkout')
    }

    return (
        <div>
            <h2 className="text-center">Formulario de Compra</h2>
            <form className="container text-center" onSubmit={enviarDatos}>
                <input type="text" placeholder="Nombre" className="form-control m-3" onChange={handleInputChange} name="name"></input>
                <input type="text" placeholder="Telefono" className="form-control m-3" onChange={handleInputChange} name="phone"></input>
                <input type="text" placeholder="E-Mail" className="form-control m-3" onChange={handleInputChange} name="email"></input>
                {(datos.name.length > 0) && (datos.phone.length > 0) && (datos.email.length > 0)
                    ? <button type="submit" className="btn btn-primary">Enviar</button>
                    : <h4>Completar Todos los Datos</h4>
                }

            </form>
        </div>
    )
}
export default UserForm