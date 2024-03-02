import { render,screen} from '@testing-library/react'
import Signup from './Signup'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
describe('sign up component',()=>{

    test('sign button',()=>{
        render(<MemoryRouter><Signup></Signup></MemoryRouter>);
        const ele=screen.getByRole('button')
        expect(ele).toBeInTheDocument()
    })
    test('verifying input field',()=>{
        render(<MemoryRouter><Signup></Signup></MemoryRouter>);
        const ele=screen.getAllByRole('textbox')
        expect(ele[0]).toBeInTheDocument()
    })
    test('verifying whether the fetch api is getting called',()=>{
        render(<MemoryRouter><Signup></Signup></MemoryRouter>);
        global.fetch=jest.fn()
        const signupButton=screen.getByRole('button')
        userEvent.click(signupButton)
        expect(global.fetch).toHaveBeenCalled()
    })
    test('Verifying the input value',()=>{
        render(<MemoryRouter><Signup></Signup></MemoryRouter>);
      
        const email=screen.getByLabelText('Email address')
        userEvent.type(email,'test@gmail.com')
        expect(email).toHaveValue('test@gmail.com')
    })
    test('Verifying the type of password input field',()=>{
        render(<MemoryRouter><Signup></Signup></MemoryRouter>);
      
        const email=screen.getByLabelText('Password')
       
        expect(email).toHaveAttribute('type','password')
    })
})