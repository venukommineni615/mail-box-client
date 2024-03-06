import React from 'react';
import { render, screen } from '@testing-library/react';
import MailCard from './MailCard';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../store';
import { useDispatch } from 'react-redux';
test('clicks the custom button', () => {
const dispatch=useDispatch()
const user=useSelector(jest.fn().mockReturnValue('test@gmail.com'))
dispatch=jest.fn()
  render(<Provider store={store}><MailCard mail={{id:'id',subject:'subject',editorContent:'content'}} /></Provider>);
  const button = screen.getByTestId('button-with-delete-svg');
  expect(button).toBeInTheDocument();
});
