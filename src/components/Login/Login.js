import './Login.css'

const Login =()=>{
     return(
        <div className='Mainlogin'>
           <h1 className='A'>Login</h1>
           <input className='B' type="text" name="" placeholder="Enter Username"></input><br/>
           <input className='C' type="password" name="" placeholder="Enter Password"></input><br/>
           <button className='D'>Login</button>
        </div>
     )
}
export default Login;