
import { render,screen} from '@testing-library/react'
import ComposeMail from './ComposeMail'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
describe('Compose Mail component',()=>{

    test('Mail send button',()=>{
        render(<MemoryRouter><ComposeMail></ComposeMail></MemoryRouter>);
        const ele=screen.getByText('Send',{selector:'button'})
        expect(ele).toBeInTheDocument()
    })
    test('verifying input field',()=>{
        render(<MemoryRouter><ComposeMail></ComposeMail></MemoryRouter>);
        const ele=screen.getAllByRole('textbox')
        expect(ele[0]).toBeInTheDocument()
    })
    test('verifying whether the fetch api is getting called',()=>{
        render(<MemoryRouter><ComposeMail></ComposeMail></MemoryRouter>);
        global.fetch=jest.fn()
        const sendBtn=screen.getByText('Send',{selector:'button'})
        userEvent.click(sendBtn)
        expect(global.fetch).toHaveBeenCalled()
    })
    test('Verifying the input value',()=>{
        render(<MemoryRouter><ComposeMail></ComposeMail></MemoryRouter>);
      
        const email=screen.getByPlaceholderText('Email')
        userEvent.type(email,'test@gmail.com')
        expect(email).toHaveValue('test@gmail.com')
    })
    test('Verifying the type of subject input field',()=>{
        render(<MemoryRouter><ComposeMail></ComposeMail></MemoryRouter>);
      
        const subject=screen.getByPlaceholderText('Subject')
       
        expect(subject).toHaveAttribute('type','text')
    })
})