import React, {useState} from 'react'
import classes from './Login.module.css'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={ `${classes.Login} page`} >
      <div className={ classes.LoginForm}>
        <h1>Login</h1>
        <form>
          <div className='mb-3'>
            <label htmlFor='email' className='form-lable text-light'>Email</label>
            <input type="email" className='form-control' id='email' autoComplete='off' placeholder='Enter your Email' value={email}
            onChange={(e)=> setEmail(e.target.value)}/>
          </div>

          <div className='mb-3'>
            <label htmlFor='password' className='form-lable text-light'>Password</label>
            <input type="password" className='form-control' id='password' autoComplete='off' placeholder='Enter your Password'value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
            <div className='text-center text-warning mt-3' style={{cursor:'pointer'}}>Forget Password?</div>
          </div>

          <div className='d-grid'>
            <button type='button' className='btn btn-primary form-control mt-3'>Login</button>


          </div>

        </form>
        <button type='button' className='btn btn-primary form-control mt-3'>Continue with Google</button>
        <p className='text-center text-light mt-3'>Doesn't have an account
        <span className='text-warning' 
        style={{cursor: 'pointer'}}
        onClick={()=> navigate('/register')}> Sing up</span></p>

      </div>
    </div>

   

  )
}

export default Login