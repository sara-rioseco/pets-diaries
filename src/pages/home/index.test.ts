/* eslint-disable @typescript-eslint/no-unused-vars */
import Home from './index';
import { onNavigate } from '../../app';

describe('Home', () => {
  test('must be a function', () => {
    expect(typeof Home).toBe('function');
  });
  test('must return a div element', () => {
    Home(onNavigate)
    expect(onNavigate).toHaveBeenCalled();
  })
})