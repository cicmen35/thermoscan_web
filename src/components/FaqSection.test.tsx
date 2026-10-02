import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import FaqSection from './FaqSection';

describe('FAQ', () => {
  it('reports its expanded state', async () => {
    const user = userEvent.setup();
    render(<FaqSection />);
    const question = screen.getByRole('button', {
      name: 'Kedy je najvhodnejší čas na termovízne meranie?',
    });

    expect(question).toHaveAttribute('aria-expanded', 'false');
    await user.click(question);
    expect(question).toHaveAttribute('aria-expanded', 'true');
  });
});
