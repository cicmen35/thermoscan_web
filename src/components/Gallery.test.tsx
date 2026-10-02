import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Gallery from './Gallery';

describe('Gallery lightbox', () => {
  it('opens, navigates, and closes from the keyboard', async () => {
    const user = userEvent.setup();
    render(<Gallery />);

    await user.click(screen.getAllByRole('button', { name: /Otvoriť snímok/ })[0]);
    expect(screen.getByRole('dialog')).toBeVisible();

    await user.keyboard('{ArrowRight}');
    expect(screen.getByText('2 / 7')).toBeVisible();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
