import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'

const Login
    = () => {
        const [un,setUn] =useState('');
        const [pass,setPass] =useState('');
        const[error,setError]=useState(false);
        const navigate=useNavigate();
        
        const readusername = (event) => {
            event.preventDefault()
            setUn(event.target.value);
         


        }

        const readpassword = (event) => {
            event.preventDefault()
            setPass(event.target.value);


        }

        const readalldata =(event) => {
            event.preventDefault();
            if(un.trim ()==='' || pass.trim ()==='')
            {
            setError(true)
            return true;
            }
            else
            {
            setError(false)
          navigate('/home')
            
            }
        } 

        return (
            <div >
                <form className='name'>
                    <h1 className='aa'>Sign-IN</h1>

                    Username<input type="text" onChange={readusername}/><br /><br />
                    Password<input type="password" onChange={readpassword} /><br /><br />
                    <button className='aa' onClick={readalldata}>Login</button><br/><br/>
                    {error && 'Error Occurs'}
                </form>
            </div>
        )
    }

export default Login
