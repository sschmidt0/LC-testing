import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { usePromiseTracker } from 'react-promise-tracker';

jest.mock('react-promise-tracker');
(usePromiseTracker as jest.Mock).mockReturnValue({ promiseInProgress: true });

describe('Spinner component', () => {
  it('should render correctly when promiseInProgress from usePromiseTracker hook is true', () => {
    render(<SpinnerComponent />);

    expect(
      within(screen.getByRole('presentation')).getByLabelText(/loading/i)
    ).toBeInTheDocument();
  });
});
