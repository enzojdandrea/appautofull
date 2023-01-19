const Plaseholder = () => {
    return (
        <div className="card col" aria-hidden="true">
            <img src="../images/Loandingimg.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-7 text-bg-secondary"></span>
                    <span className="placeholder col-8 text-bg-secondary"></span>
                </p>
            </div>
        </div>
    )
}

export default Plaseholder