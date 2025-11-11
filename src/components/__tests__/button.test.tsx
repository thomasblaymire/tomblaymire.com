import { describe, it, expect, vi } from 'vitest';
import { renderWithProviders, userEvent } from '@/test/test-utils';
import { Button } from '../button';

describe('Button', () => {
  it('should render children', () => {
    const { getByText } = renderWithProviders(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    const { getByText } = renderWithProviders(
      <Button onClick={handleClick}>Click me</Button>
    );
    
    await user.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    const { getByText } = renderWithProviders(
      <Button onClick={handleClick} disabled>Click me</Button>
    );
    
    await user.click(getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should apply primary color by default', () => {
    const { getByText } = renderWithProviders(<Button>Click me</Button>);
    const button = getByText('Click me');
    expect(button).toHaveClass('text-white');
  });

  it('should apply secondary color when specified', () => {
    const { getByText } = renderWithProviders(
      <Button color="secondary">Click me</Button>
    );
    const button = getByText('Click me');
    expect(button).toHaveClass('text-black');
  });

  it('should apply base color when specified', () => {
    const { getByText } = renderWithProviders(
      <Button color="base">Click me</Button>
    );
    const button = getByText('Click me');
    expect(button).toHaveClass('bg-[rgba(39,39,42,0.9)]');
  });

  it('should apply custom className', () => {
    const { getByText } = renderWithProviders(
      <Button className="custom-class">Click me</Button>
    );
    const button = getByText('Click me');
    expect(button).toHaveClass('custom-class');
  });

  it('should have disabled state styling when disabled', () => {
    const { getByText } = renderWithProviders(
      <Button disabled>Click me</Button>
    );
    const button = getByText('Click me');
    expect(button).toHaveClass('cursor-not-allowed');
    expect(button).toBeDisabled();
  });
});
