<<<<<<< HEAD
import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import '../styles/Form.css'
// import { Button } from 'react-bootstrap'
import Axios from 'axios'

function Login() {
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(eyeOff)

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye)
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const login = () => {
    Axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then((response) => {
      if (!response.data.message) {
        setLoginStatus(response.data.message)
        console.log(response)
        
      } else {
        setLoginStatus(response.data[0].message)
        console.log(response)
      }
    })
  }

  return (
    <div
      className='form-body'
      style={{ paddingBottom: '125px', paddingTop: '100px' }}
    >
      <div className='form-container'>
        <div className='title'>Admin Login</div>
        <div className='content'>
          <form action='#'>
            <div className='user-details'>
              <div className='input-box'>
                <span className='details'>User Name</span>
                <input
                  type='text'
                  placeholder='Enter your User Name'
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                  required
                  minLength='3'
                />
              </div>
              <div className='input-box'>
                <span className='details'>Password</span>
                <input
                  type={type}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  placeholder='Enter your Password'
                  required
                  pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                  title='Must contain at least one number and one uppercase and lowercase letter and at least 8 or more character'
                />
                <span onClick={handleToggle}>
                  <Icon icon={icon} size={25} />
                </span>
              </div>

              <div className='input-box'>
                <h1 style={{ fontSize: '12px' }}>
                  <a href='# '>Forget Password?</a>
                </h1>
              </div>

              <div className='input-box'>{loginStatus}</div>

              <button className='button' onClick={login}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
=======
import React, { useState } from 'react';
import {Icon} from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import '../components/CSS/Form.css'

 function Login(){
  const [type, setType]=useState("password")
  const [icon, setIcon]=useState(eyeOff);

  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(eye);      
      setType('text');
    }
    else{
      setIcon(eyeOff); 
      setType('password');
    }
  }
    return (
        <div className='form-body' style={{"paddingBottom":"125px", "paddingTop":"100px"}}>
            <div className='form-container'>
                <div className='title'>Admin Login</div>
                <div className='content'>
                    <form action='#'>
                        <div className='user-details'>
                            <div className='input-box'>
                                <span className='details'>User Name</span>
                                <input type="text" placeholder='Enter your User Name' required minLength="3"/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Password</span>
                                <input type={type}
                                placeholder='Enter your Password' required 
                                pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                                title='Must contain at least one number and one uppercase and lowercase letter and at least 8 or more character'/>
                                <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
                            </div>

                            <div className='input-box'>
                                 <h1 style={{fontSize:"12px"}}><a href='# '>Forget Password?</a></h1>
                            </div>
                             
                            <div class="button">
                               <input type="submit" value="Login"/>
                            </div>
                        </div>
                    </form>
                </div>
               
            </div>
            </div>
    )
}

export default Login;
>>>>>>> 3c5e6cb8acac811c0cb54f367912d9452a40fc2d
