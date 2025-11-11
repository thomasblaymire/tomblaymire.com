# Testing Guide

This project uses **Vitest** and **React Testing Library** for unit and component testing.

## Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Test Structure

Tests are colocated with the code they test in `__tests__` directories:

```
src/
├── components/
│   ├── button.tsx
│   └── __tests__/
│       └── button.test.tsx
├── helpers/
│   ├── cn.ts
│   └── __tests__/
│       └── cn.test.ts
└── test/
    ├── setup.ts          # Global test setup
    └── test-utils.tsx    # Custom render functions
```

## Writing Tests

### Component Tests

```typescript
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
});
```

### Utility Function Tests

```typescript
import { describe, it, expect } from 'vitest';
import { cn } from '../cn';

describe('cn utility', () => {
  it('should merge class names', () => {
    const result = cn('px-2 py-1', 'bg-blue-500');
    expect(result).toBe('px-2 py-1 bg-blue-500');
  });
});
```

## Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the component does, not how it does it
2. **Use Semantic Queries**: Prefer `getByRole`, `getByLabelText`, `getByText` over `getByTestId`
3. **Test User Interactions**: Use `@testing-library/user-event` for realistic user interactions
4. **Keep Tests Simple**: One assertion per test when possible
5. **Mock External Dependencies**: Use `vi.fn()` for mocking functions and modules

## Coverage

Coverage reports are generated in the `coverage/` directory. Aim for:

- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
