import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Contact from './Contact';

async function completeRequiredFields() {
  const user = userEvent.setup();
  await user.type(screen.getByLabelText('Meno *'), 'Ján');
  await user.type(screen.getByLabelText('Priezvisko *'), 'Novák');
  await user.type(screen.getByLabelText('E-mail *'), 'jan@example.sk');
  await user.selectOptions(screen.getByLabelText('Typ objektu *'), 'Rodinný dom');
  await user.type(screen.getByLabelText('Lokalita *'), 'Nitra');
  return user;
}

describe('Contact form', () => {
  it('submits valid data to Web3Forms and reports success', async () => {
    vi.stubEnv('VITE_WEB3FORMS_ACCESS_KEY', 'test-key');
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    render(<Contact />);
    const user = await completeRequiredFields();

    await user.click(screen.getByRole('button', { name: 'Odoslať správu' }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledOnce());
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.web3forms.com/submit',
      expect.objectContaining({ method: 'POST' }),
    );
    expect(await screen.findByText('Ďakujeme. Váš dopyt bol úspešne odoslaný.')).toBeVisible();
  });

  it('shows a configuration error when the access key is missing', async () => {
    vi.stubEnv('VITE_WEB3FORMS_ACCESS_KEY', '');
    render(<Contact />);
    const user = await completeRequiredFields();

    await user.click(screen.getByRole('button', { name: 'Odoslať správu' }));

    expect(await screen.findByRole('alert')).toHaveTextContent('nie je nakonfigurovaný');
  });
});
