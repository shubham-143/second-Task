import "./Desktop.css"
const Desktop = () => {
    return (
        <div className="container p-2 moti" >
            <div className="row">
                <div>
                    <h1 style={{ textAlign: "center", color: "white", fontSize: "125px" }}>One Task <br />at a Time</h1>
                    <h5 style={{ textAlign: "center", color: "white" }}>Celebrate the joy of accomplishment with an<br /> app designed to track your progress, motivate <br /> your efforts, and celebrate your successes.</h5>
                    
                    <div style={{ textAlign: "center" }}>
                    <button  className="rounded-3"style={{width:'115px',height:'39px'}} >Get for free</button >
                    </div>
                    <img style={{position:"absolute",left:310,top:300}} className="lund" src="./cursor.png"></img>
                    <img style={{position:"absolute",right:280,top:195,width:'185px'}} className="lundpudi"src="./message.png"></img>
                </div>

            </div>

        </div>



    )
}
export default Desktop;