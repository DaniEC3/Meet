import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { extractLocations, getEvents } from '../api';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
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
    // const [eventCount, setEventCount] = useState(32);
    expect(inputBox).toHaveValue(10);
  });


});