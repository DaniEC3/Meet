import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { extractLocations, getEvents } from '../api';
import NumberOfEvents from '../components/NumberOfEvents';
import App from '../App';

describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsComponent;
  const mockSetCurrentNOE = jest.fn(); // Create a mock function

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents 
      setCurrentNOE = {mockSetCurrentNOE}
      />);
  });

  test('renders text input', () => {
    const NumEventsBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(NumEventsBox).toBeInTheDocument();
    expect(NumEventsBox).toHaveClass('events-num');
  });

  test('default value of input is 32', () => {
    const inputBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(inputBox).toHaveValue(32);
  });

  test('updates input value when user types', async () => {
    const user = userEvent.setup();
    const inputBox = NumberOfEventsComponent.queryByRole('textbox');
    await user.type(inputBox, '{backspace}{backspace}10');
    expect(inputBox).toHaveValue(10);
  });
});

describe('<NumberOfEvents /> integration', () => {
  test('user changes the value of number of events', async () => {
    const user = userEvent.setup();
    const NumberOfEventsComponent = render(<NumberOfEvents />);
    const NumberOfEvents = NumberOfEventsComponent.container.firstChild;

    const NumberOfEventsDOM = NumberOfEvents.querySelector('#number-of-events');
    const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');

    await user.type(NumberOfEventsInput, "{backspace}{backspace}10");
  
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');  
    
    expect(allRenderedEventItems.length).toBe(10);
  });
});