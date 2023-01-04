const Plaseholder =()=>{
    return (
        <>
                <div class="card" aria-hidden="true">
                    <img src="./images/Loandingimg.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7 text-bg-secondary"></span>
                            <span class="placeholder col-4 text-bg-secondary"></span>
                            <span class="placeholder col-4 text-bg-secondary"></span>
                            <span class="placeholder col-6 text-bg-secondary"></span>
                            <span class="placeholder col-8 text-bg-secondary"></span>
                        </p>
                        <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                    </div>
                </div>
            </>
    )
}

export default Plaseholder