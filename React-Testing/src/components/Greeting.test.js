import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe('Greeting Component',() => {
    test('renders Hello as a text',() => {
    
        //Arrange
        render(<Greeting/>);
    
        //Act
        //...nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello world',{exact:false});
    
        expect(helloWorldElement).toBeInTheDocument();
    });


    test('renders good to see you if button was not clicked', () => {

        render(<Greeting/>);

        const outputElement = screen.getByText('good to see you',{exact:false});
    
        expect(outputElement).toBeInTheDocument();
    });

    test('renders Changed if button was clicked', () => {
        //arraneg
        render(<Greeting/>);

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //assert
        const outputElement = screen.getByText('Changed',{exact:false});
    
        expect(outputElement).toBeInTheDocument();
    })

    test('removes good to see you if button was clicked ', () => {
        //arranging
        render(<Greeting/>);

        //act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //assert
        const outputElement = screen.queryByText('good to see you',{exact:false});
    
        expect(outputElement).toBeNull();
    })
})


