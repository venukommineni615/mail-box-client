import React, {useRef, useState} from 'react'
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
    const navigate=useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const email=useRef('')
    const password=useRef('') 
    const login=async(event)=>{
        event.preventDefault()
        try {
           const res= await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBvGr_vhwe96V8dEGs6PyUeEJAUK7KToXY`,{
            method:'POST',
            body:JSON.stringify({
                email:email.current.value,
                password:password.current.value,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
           })
           const data=await res.json()
        if(!res.ok){
            throw new Error(data.error.message)
        }else{
            localStorage.setItem('token',data.idToken)
            localStorage.setItem('email',email.current.value)
            navigate('/home')
        }
       } catch (error) {
        alert(error)
       }
    }
  return (
    <div className='d-flex flex-column justify-content-center p-4'>
    <Form className='bg-warning-subtle bg-gradient p-4 rounded border border-1 shadow w-25 mx-auto border-warning' onSubmit={login}>
    <h3 className='text-center'>Login</h3>
    <Form.Group className="my-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control ref={email} type="email" placeholder="Enter email" required/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <InputGroup >
        <Form.Control
          type={showPassword ? 'text' : 'password'}
         ref={password}
          placeholder="Enter password"
        />
          <Button className='bg-light'  variant="outline-warning" onClick={togglePasswordVisibility}>
            {!showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>

      </InputGroup>
    </Form.Group>
    <Button variant="warning" type="submit" className='shadow rounded  fw-semibold'>
      Login
    </Button>
    <Link className='d-block mt-2'>Forgot password?</Link>
  </Form>
  <p className='bg-warning-subtle border d-inline-block p-2 border-1 rounded border-warning my-4 mx-auto'>Don't have an account ? <Link to='/signup' className='text-decoration-none'>Sign up</Link></p>
    </div>
  )
}

export default Login