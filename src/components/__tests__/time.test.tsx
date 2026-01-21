import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/test/test-utils';

import { Time } from '../time';

describe('Time', () => {
  it('should display a formatted date', () => {
    const { getByText } = renderWithProviders(<Time dateTime="2024-01-15" />);

    expect(getByText(/Mon Jan 15 2024/)).toBeInTheDocument();
  });

  it('should render a time element with datetime attribute', () => {
    const { container } = renderWithProviders(<Time dateTime="2024-06-20" />);

    const timeElement = container.querySelector('time');
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute('datetime');
  });

  it('should display the date in a readable format', () => {
    const { getByText } = renderWithProviders(<Time dateTime="2024-12-25" />);

    expect(getByText(/Wed Dec 25 2024/)).toBeInTheDocument();
  });
});
