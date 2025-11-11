import { renderHook } from '@testing-library/react';
import { useRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { useOnClickOutside } from '../useOnClickOutside';

describe('useOnClickOutside', () => {
  it('should call handler when clicking outside the element', () => {
    const handler = vi.fn();
    const ref = { current: document.createElement('div') };

    renderHook(() => useOnClickOutside(ref, handler));

    // Click outside (on document body)
    const event = new MouseEvent('mousedown', { bubbles: true });
    document.dispatchEvent(event);

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(event);
  });

  it('should not call handler when clicking inside the element', () => {
    const handler = vi.fn();
    const ref = { current: document.createElement('div') };
    document.body.appendChild(ref.current);

    renderHook(() => useOnClickOutside(ref, handler));

    // Click inside the element
    const event = new MouseEvent('mousedown', { bubbles: true });
    ref.current.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();

    document.body.removeChild(ref.current);
  });

  it('should not call handler when ref is null', () => {
    const handler = vi.fn();
    const ref = { current: null };

    renderHook(() => useOnClickOutside(ref, handler));

    const event = new MouseEvent('mousedown', { bubbles: true });
    document.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it('should handle touch events', () => {
    const handler = vi.fn();
    const ref = { current: document.createElement('div') };

    renderHook(() => useOnClickOutside(ref, handler));

    // Touch outside
    const event = new TouchEvent('touchstart', { bubbles: true });
    document.dispatchEvent(event);

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(event);
  });

  it('should remove event listeners on unmount', () => {
    const handler = vi.fn();
    const ref = { current: document.createElement('div') };
    const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');

    const { unmount } = renderHook(() => useOnClickOutside(ref, handler));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'mousedown',
      expect.any(Function),
    );
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'touchstart',
      expect.any(Function),
    );

    removeEventListenerSpy.mockRestore();
  });

  it('should update handler when it changes', () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();
    const ref = { current: document.createElement('div') };

    const { rerender } = renderHook(({ handler }) => useOnClickOutside(ref, handler), {
      initialProps: { handler: handler1 },
    });

    // Click with first handler
    const event1 = new MouseEvent('mousedown', { bubbles: true });
    document.dispatchEvent(event1);

    expect(handler1).toHaveBeenCalledTimes(1);
    expect(handler2).not.toHaveBeenCalled();

    // Update handler
    rerender({ handler: handler2 });

    // Click with second handler
    const event2 = new MouseEvent('mousedown', { bubbles: true });
    document.dispatchEvent(event2);

    expect(handler1).toHaveBeenCalledTimes(1); // Still 1
    expect(handler2).toHaveBeenCalledTimes(1);
  });

  it('should not call handler when clicking on a child element', () => {
    const handler = vi.fn();
    const ref = { current: document.createElement('div') };
    const child = document.createElement('button');
    ref.current.appendChild(child);
    document.body.appendChild(ref.current);

    renderHook(() => useOnClickOutside(ref, handler));

    // Click on child element
    const event = new MouseEvent('mousedown', { bubbles: true });
    child.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();

    document.body.removeChild(ref.current);
  });
});
