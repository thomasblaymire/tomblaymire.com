import { useId } from 'react';

import { Button } from '@/components/button';
import { Card } from '@/components/card';

export function Subscribe() {
  const emailInputId = useId();

  return (
    <Card>
      <form>
        <h2 id="subscribe-heading">Stay Up To Date</h2>
        <p>Get notified when I publish something new, and unsubscribe at any time.</p>
        <div className="mt-[2.5rem] flex flex-wrap gap-4 [&_input]:bg-[rgba(63,63,70,0.15)] [&_input]:text-[rgb(228,228,231)] [&_input]:border [&_input]:rounded-md [&_input]:border-[rgb(63,63,70)] [&_input]:leading-[1.5rem] [&_input]:text-[1.5rem] [&_input]:pt-[calc(1rem-1px)] [&_input]:pb-[calc(1rem-1px)] [&_input]:pl-6 [&_input]:pr-3 [&_input]:appearance-none [&_input]:flex-auto [&_input]:min-w-0">
          <label htmlFor={emailInputId} className="sr-only">
            Email address
          </label>
          <input
            id={emailInputId}
            type="email"
            placeholder="Email address"
            autoComplete="email"
            required
          />
          <Button
            type="submit"
            className="text-[rgb(39,39,42)] dark:text-[rgb(244,244,245)] bg-[rgb(63,63,70)] leading-[1.5rem] text-[1.5rem] font-semibold px-3 py-2 rounded-md gap-2 flex justify-center items-center hover:bg-[rgb(82,82,91)]"
          >
            Join
          </Button>
        </div>
      </form>
    </Card>
  );
}
