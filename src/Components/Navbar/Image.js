const Image = () => {
    return (
        <div className="container p-4" style={{ backgroundColor: "black" }}>
            <div className="row">
                <div className="col">
                    <p style={{ textAlign: "center", color: 'white' }}>Trusted by the world’s most innovative teams</p>

                    <div className="col" style={{textAlign:"center"}}>
                        <img className="img-fluid p-4" src="./acme.png" alt="data"></img>
                        <img className="img-fluid p-4" src="./quantum.png" alt="data"></img>
                        <img className="img-fluid p-4" src="./echo.png" alt="data"></img>
                        <img className="img-fluid p-4" src="./celestia.png" alt="data"></img>
                        <img className="img-fluid p-4" src="./pulse.png" alt="data"></img>
                        <img className="img-fluid p-4" src="./apex.png" alt="data"></img>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Image;