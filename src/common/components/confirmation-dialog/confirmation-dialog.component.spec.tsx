import * as React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import {
  ConfirmationDialogComponent,
  Props,
} from './confirmation-dialog.component';

describe('Confirmation Dialog component', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      children: <div>children</div>,
      isOpen: true,
      labels: { acceptButton: 'accept', closeButton: 'close' },
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'some title',
    };
  });

  it('should not render when isOpen is false', () => {
    props.isOpen = false;
    render(<ConfirmationDialogComponent {...props} />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render successfully when isOpen is true', () => {
    render(<ConfirmationDialogComponent {...props} />);

    const dialog = screen.getByRole('dialog');
    const buttonQuantity = within(dialog).getAllByRole('button').length;

    expect(dialog).toBeInTheDocument();
    expect(screen.getByText(props.title as string)).toBeInTheDocument();
    expect(buttonQuantity).toBe(2);
  });

  it('should call onAccept when accept button is clicked', () => {
    render(<ConfirmationDialogComponent {...props} />);

    const acceptButton = screen.getByRole('button', { name: /accept/i });

    expect(acceptButton).toBeInTheDocument();

    fireEvent.click(acceptButton);
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onAccept).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when close button is clicked', () => {
    render(<ConfirmationDialogComponent {...props} />);

    const closeButton = screen.getByRole('button', { name: /close/i });

    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(props.onClose).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalledTimes(1);
  });
});
