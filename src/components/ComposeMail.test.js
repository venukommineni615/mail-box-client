
import { render,screen} from '@testing-library/react'
import ComposeMail from './ComposeMail'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
describe('Compose Mail component',()=>{
    beforeEach(() => {
        const localStorageMock = {
          getItem: jest.fn(() => 'tests@gmail.com'),
          setItem: jest.fn(),
          removeItem: jest.fn(),
          clear: jest.fn(),
        };
        global.localStorage = localStorageMock;
      });
    test('Mail send button',()=>{
        global.localStorage.getItem.mockReturnValueOnce('tests@gmail.com');
        render(<MemoryRouter><ComposeMail></ComposeMail></MemoryRouter>);
        const ele=screen.getByText('Send',{selector:'button'})
        expect(ele).toBeInTheDocument()
    })
    test('verifying input field',()=>{
        render(<MemoryRouter><ComposeMail></ComposeMail></MemoryRouter>);
        global.localStorage.getItem.mockReturnValueOnce('tests@gmail.com');
        const ele=screen.getAllByRole('textbox')
        expect(ele[0]).toBeInTheDocument()
    })
    test('verifying whether the fetch api is getting called',()=>{
        render(<MemoryRouter><ComposeMail></ComposeMail></MemoryRouter>);
        global.localStorage.getItem.mockReturnValueOnce('tests@gmail.com');
        const sendBtn=screen.getByText('Send',{selector:'button'})
        userEvent.click(sendBtn)
        expect(global.fetch).toHaveBeenCalled()
    })
    test('Verifying the input value',()=>{
        render(<MemoryRouter><ComposeMail></ComposeMail></MemoryRouter>);
        localStorage.getItem.mockReturnValueOnce('tests@gmail.com');
        const email=screen.getByPlaceholderText('Email')
        userEvent.type(email,'test@gmail.com')
        expect(email).toHaveValue('test@gmail.com')
    })
    test('Verifying the type of subject input field',()=>{
        render(<MemoryRouter><ComposeMail></ComposeMail></MemoryRouter>);
        localStorage.getItem.mockReturnValueOnce('tests@gmail.com');
        
        const subject=screen.getByPlaceholderText('Subject')
        
        expect(subject).toHaveAttribute('type','text')
    })
})
