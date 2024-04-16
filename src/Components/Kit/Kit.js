import './Kit.css'
const Kit = () => {
    return (
        <div className="container p-2 pop"  >
            <div className="row text-center">
                <p>
                    <span style={{ color: "black" }}className='d-none d-sm-inline'>This page is included in a free SaaS Website Kit.</span>
                    <span style={{  color: "black" }}>View the complete Kit</span>
                    <img className="img-fluid " src='./icons.png' alt='data'></img>
                </p>


            </div>

        </div>
    )
}
export default Kit;