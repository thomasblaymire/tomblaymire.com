import { cn } from '../helpers/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'p-6 tablet:p-10 border rounded-2xl border-[rgba(63,63,70,0.4)]',
        '[&_h2]:text-[rgb(39,39,42)] dark:[&_h2]:text-[rgb(244,244,245)] [&_h2]:font-semibold [&_h2]:leading-6 [&_h2]:text-[1.5rem] [&_h2]:flex',
        '[&_p]:text-[rgb(82,82,91)] dark:[&_p]:text-[rgb(161,161,170)] [&_p]:leading-[2.2rem] [&_p]:text-[1.4rem] [&_p]:flex [&_p]:mt-4',
        className,
      )}
    >
      {children}
    </div>
  );
}
