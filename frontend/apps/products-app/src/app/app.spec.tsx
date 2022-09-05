import { screen, render, cleanup, renderHook, act } from '@testing-library/react';

import App from './app';

describe('App', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    
    const { baseElement } = render(<App />);
    
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    
    const { getByText } = render(<App />);
    
    expect(getByText(/REACTJS CSV IMPORT EXAMPLE/gi)).toBeTruthy();
  });
});
