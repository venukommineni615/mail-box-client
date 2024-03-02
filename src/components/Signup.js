import React, {useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Signup = () => {
    const email=useRef('')
    const password=useRef('')
    const confirm=useRef('')
    const signUp=async(event)=>{
        event.preventDefault()
        if(password.current.value!==confirm.current.value){
            alert('Both password and confirm password has to be same')
            return
        }
        try {
           const res= await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvGr_vhwe96V8dEGs6PyUeEJAUK7KToXY`,{
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
            console.log('user has successfully signed up')
        }
       } catch (error) {
        alert(error)
       }
    }
  return (
    <div className='d-flex flex-column justify-content-center p-4'>
    <Form className='bg-warning-subtle bg-gradient p-4 rounded border border-1 shadow w-25 mx-auto border-warning' onSubmit={signUp}>
    <h3 className='text-center'>Sign Up</h3>
    <Form.Group className="my-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control ref={email} type="email" placeholder="Enter email" required/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control ref={password} type="password" placeholder="Password" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="confirmPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control ref={confirm} type="password" placeholder="Confirm Password" required />
    </Form.Group>
   
    <Button variant="warning" type="submit" className='shadow rounded  fw-semibold'>
      Submit
    </Button>
  </Form>
  <p className='bg-warning-subtle border d-inline-block p-2 border-1 rounded border-warning my-4 mx-auto'>Have an account ? <Link to='/' className='text-decoration-none'>Login</Link></p>
    </div>
  )
}

export default Signup