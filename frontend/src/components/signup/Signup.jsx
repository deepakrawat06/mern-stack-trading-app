

const Signup = () => {
  return (
    <div className="container  " >
      <div className="row mt-5 p-3 mx-5">
        <div className="col-6 mt-5 p-3">
          <img src="https://signup.zerodha.com/img/landing.46a77378.png" alt="img" style={{width:"90%"}} />
        </div>
        
        <div className="col-3 mt-5 p-3 form-floating">
        <form>
          <h3 >Signup now</h3>
          <p className="text-muted mt-3">Or track your existing application.</p>
          <label htmlFor="mobile"></label>
          <input className="form-control" type="text" name="mobile" id="mobile" placeholder="mobile" required/>
          <p className="text-muted mt-4 " style={{fontSize:"14px"}}>You will recieve an OTP on your number</p>
          <button className="btn btn-primary">continue</button>
          <p>
          <a href="#" style={{fontSize:"14px", color:"rgb(0, 84, 198)", textDecoration:"none"}}>want to open an NRI account?</a>
          </p>
          
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup