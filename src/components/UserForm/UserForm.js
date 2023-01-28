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
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        // console.log('enviando datos...' + datos.name + ' ' + datos.phone+ ' ' + datos.email)
        // console.log('logitud  '+datos.name.length)
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
                <button type="submit" to='/' className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
export default UserForm