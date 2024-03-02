import { render,screen} from '@testing-library/react'
import Login from './Login'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
describe('Login component',()=>{

    test('Login button',()=>{
        render(<MemoryRouter><Login></Login></MemoryRouter>);
        const ele=screen.getByText('Login',{selector:'button'})
        expect(ele).toBeInTheDocument()
    })
    test('verifying input field',()=>{
        render(<MemoryRouter><Login></Login></MemoryRouter>);
        const ele=screen.getAllByRole('textbox')
        expect(ele[0]).toBeInTheDocument()
    })
    test('verifying whether the fetch api is getting called',()=>{
        render(<MemoryRouter><Login></Login></MemoryRouter>);
        global.fetch=jest.fn()
        const loginButton=screen.getByText('Login',{selector:'button'})
        userEvent.click(loginButton)
        expect(global.fetch).toHaveBeenCalled()
    })
    test('Verifying the input value',()=>{
        render(<MemoryRouter><Login></Login></MemoryRouter>);
      
        const email=screen.getByLabelText('Email address')
        userEvent.type(email,'test@gmail.com')
        expect(email).toHaveValue('test@gmail.com')
    })
    test('Verifying the type of password input field',()=>{
        render(<MemoryRouter><Login></Login></MemoryRouter>);
      
        const email=screen.getByLabelText('Password')
       
        expect(email).toHaveAttribute('type','password')
    })
})