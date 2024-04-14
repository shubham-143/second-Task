const Instant = () => {
  return (
    <div className="container p-4" style={{ backgroundColor: "black", position: "relative" }}>
      <div className="row">
        <div className="col" style={{ textAlign: 'center' }}>
          <br />
          <br />
          <br />
          <h1 style={{ color: '#FFFFFF' }}>Get instant access</h1>
          <p style={{ color: '#FFFFFF' }}>Celebrate the joy of accomplishment with an app designed<br /> to track your progress and motivate your efforts.</p>
          <br />
          <input type="text" placeholder="name@email.com"></input>
          <button className=" rounded-3 ">Get Access</button>
        </div>
      </div>

      <img  style ={{ position: "absolute", left: '15%', top: '12%', width: '15%' }} className="img-fluid d-none d-sm-block" src="./emojistar 1.png" alt="data"></img>

      <img  style={{ position: "absolute", left: '70%', top: '47%', width: '15%' }} className="img-fluid  d-none d-sm-block" src="./helix2 1.png" alt="data"></img>
    </div>
  )
}

export default Instant;
