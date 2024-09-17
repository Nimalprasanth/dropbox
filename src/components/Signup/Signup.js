import './Signup.css'


function Signup (){
    return(
        <div className='Sin'>
            <form>
                <h1 className='S1'>SignUp</h1>
                <input className='S2' type="text" name="" placeholder="Username"></input><br/>
                <input className='S3' type="email" name="" placeholder="Email"></input><br/>
                <input className='S4' type="password" name="" placeholder="password"></input><br/>
                <input className='S5' type="password" name="" placeholder="Confirm password"></input><br/>
                <button className='S6' type="submit">SignUp</button>

            </form>

        </div>

    )
}
export default Signup;