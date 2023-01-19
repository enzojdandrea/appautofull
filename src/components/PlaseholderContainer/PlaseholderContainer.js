import Plaseholder from "../Placeholder/Plaseholder"
const PlaseholderContainer = ({ condition }) => {
    if (condition === 'multi') {
        return (
            <div className="container text-center">
                <h3>Cargando...</h3>
                <div className="row">
                    <Plaseholder />
                    <Plaseholder />
                    <Plaseholder />
                </div>
                <div className="row">
                    <Plaseholder />
                    <Plaseholder />
                    <Plaseholder />
                </div>                                  
            </div>
        )
    } else {
        return (
            <div className="container text-center">
                <h3>Cargando...</h3>
                <div className="row">
                    <Plaseholder />
                </div>
            </div >
        )
    }
}


export default PlaseholderContainer