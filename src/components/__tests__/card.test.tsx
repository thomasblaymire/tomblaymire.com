import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '@/test/test-utils';
import { Card } from '../card';

describe('Card', () => {
  it('should render children', () => {
    const { getByText } = renderWithProviders(
      <Card>
        <h2>Test Title</h2>
        <p>Test content</p>
      </Card>
    );
    
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test content')).toBeInTheDocument();
  });

  it('should apply default styling', () => {
    const { container } = renderWithProviders(
      <Card>Content</Card>
    );
    
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('p-[2.5rem]');
    expect(card).toHaveClass('border');
    expect(card).toHaveClass('rounded-[1rem]');
  });

  it('should apply custom className', () => {
    const { container } = renderWithProviders(
      <Card className="custom-class">Content</Card>
    );
    
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('custom-class');
  });

  it('should merge custom className with default styles', () => {
    const { container } = renderWithProviders(
      <Card className="bg-blue-500">Content</Card>
    );
    
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('p-[2.5rem]'); // default style
    expect(card).toHaveClass('bg-blue-500'); // custom style
  });
});
