import { formatDate } from '@/helpers/date';

import { cn } from '../helpers/cn';

interface TimeProps {
  dateTime: string;
  className?: string;
}

export function Time({ dateTime, className }: TimeProps): JSX.Element {
  const formattedDate = formatDate(dateTime);
  return (
    <time
      dateTime={formattedDate}
      className={cn(
        'relative flex items-center pl-[1.5rem] mb-8 text-[1.4rem] leading-[1.5rem]',
        'text-[rgb(113,113,122)] order-[-9999]',
        className,
      )}
    >
      <span className="absolute left-0 top-0 bottom-0 flex items-center">
        <span className="w-[0.2rem] h-full flex items-center bg-[rgb(113,113,122)] rounded-full" />
      </span>
      {formattedDate}
    </time>
  );
}
