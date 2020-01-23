import React from 'react';
import { render } from '@testing-library/react';
import App, { foulTest, hitTest } from './App';

test('App renders without crashing', () => {
  render(<App />);
});

