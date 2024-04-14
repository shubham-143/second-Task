import React from 'react';

const Card = () => {
    return (
        <div className="container p-4" style={{backgroundColor:"black"}}>
            <div className="row text-center" >
                <div className='mb-5'>
                    <h1 className='mb-3' style={{color:"white"}}>Everything you need</h1>
                    <p style={{color:"white"}}>Enjoy customizable lists, team work tools, and smart<br/> tracking all in one place. Set tasks, get reminders, and<br/> see your progress simply and quickly.</p>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card rounded-4" style={{ backgroundColor: "#0D0D0D", border: "1px solid #0D0D0D" }}>
                        <div className="text-center">
                            <img src="./Frame 2.png" alt="data" style={{ width: '14%' }} />
                        </div>
                        <div className="card-body">
                            <h5 className="text-center text-white">Integration ecosystem</h5>
                            <p className="text-center text-white">Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card rounded-4" style={{ backgroundColor: "#0D0D0D", border: "1px solid #0D0D0D" }}>
                        <div className="text-center">
                            <img src="./Frame 2.png" alt="data" style={{ width: '14%' }} />
                        </div>
                        <div className="card-body">
                            <h5 className="text-center text-white">Integration ecosystem</h5>
                            <p className="text-center text-white">Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card rounded-4" style={{ backgroundColor: "#0D0D0D", border: "1px solid #0D0D0D" }}>
                        <div className="text-center">
                            <img src="./Frame 2.png" alt="data" style={{ width: '14%' }} />
                        </div>
                        <div className="card-body">
                            <h5 className="text-center text-white">Integration ecosystem</h5>
                            <p className="text-center text-white">Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
