import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Mail from "./Mail";
test('verifying the back button',()=>{
    render(<Provider store={store}><Mail></Mail></Provider>)
    const backButton=screen.getByText('Back')
    expect(backButton).toBeInTheDocument()
})