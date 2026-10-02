import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import axe from 'axe-core';
import App from './App';

describe('App accessibility', () => {
  it('has no automatically detectable critical accessibility violations', async () => {
    const { container } = render(<App />);
    const results = await axe.run(container, {
      iframes: false,
      rules: {
        'color-contrast': { enabled: false },
        'region': { enabled: false },
      },
    });
    const seriousViolations = results.violations.filter(
      ({ impact }) => impact === 'critical' || impact === 'serious',
    );

    expect(seriousViolations).toEqual([]);
  });
});
