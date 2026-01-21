import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/test/test-utils';

import { ErrorMessage } from '../error-message';

describe('ErrorMessage', () => {
  it('should display the error message', () => {
    const error = new Error('Something went wrong');
    const { getByRole, getByText } = renderWithProviders(<ErrorMessage error={error} />);

    expect(getByRole('alert')).toBeInTheDocument();
    expect(getByText('There was an error:')).toBeInTheDocument();
    expect(getByText('Something went wrong')).toBeInTheDocument();
  });

  it('should display different error messages', () => {
    const error = new Error('Network request failed');
    const { getByText } = renderWithProviders(<ErrorMessage error={error} />);

    expect(getByText('Network request failed')).toBeInTheDocument();
  });

  it('should be accessible with alert role', () => {
    const error = new Error('Test error');
    const { getByRole } = renderWithProviders(<ErrorMessage error={error} />);

    const alert = getByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});
