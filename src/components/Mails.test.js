import { render,screen} from '@testing-library/react'
import Mails from './Mails'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

describe('testing Mails component', ()=>{
    test('verifying the compose email button',()=>{
        render(<MemoryRouter><Mails></Mails></MemoryRouter>)
        const compose=screen.getByText('Compose')
        expect(compose).toBeInTheDocument()
    })
})
