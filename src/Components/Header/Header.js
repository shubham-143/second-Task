const Header=()=>{
    return(
        <div className="container p-2" style={{backgroundColor:"black"}}>
            <div className="row">
                
                <div className="col">
                    
                 <img className="img-fluid"src="./logosaas.png"alt="data"></img><span className="me-2" style={{color:"white"}}>made by</span>
                 <img  className="img-fluid me-2"src="./piguin.png"alt="data"></img><span style={{color:"white"}}>Framer</span>

                 
                </div>
                
                <div className="col-2 m-7"style={{textAlign:'end'}}>
                  <button className="rounded-3"style={{width:'115px',height:'39px'}}>Get for free</button>
                </div>
                
                
                
            </div>
            

        </div>
    )
}
export default Header;