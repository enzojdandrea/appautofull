import Plaseholder from "../Placeholder/Plaseholder"
const PlaseholderContainer = ({condition}) => {
    if (condition === 'multi') {
        return (
            <div className="container text-center">
                <div className="row m-3">
                    <h3>Cargando...</h3>
                    <Plaseholder />
                    <Plaseholder />
                    <Plaseholder />
                </div>
            </div>
        )}else{
            return(
                <Plaseholder />
            )
        }
    }


export default PlaseholderContainer