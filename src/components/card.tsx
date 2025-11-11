import { cn } from '../helpers/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div 
      className={cn(
        'p-[2.5rem] border rounded-[1rem] border-[rgba(63,63,70,0.4)]',
        '[&_h2]:text-[rgb(244,244,245)] [&_h2]:font-semibold [&_h2]:leading-[1.5rem] [&_h2]:text-[1.5rem] [&_h2]:flex',
        '[&_p]:text-text-color [&_p]:leading-[2.2rem] [&_p]:text-[1.4rem] [&_p]:flex [&_p]:mt-4',
        className
      )}
    >
      {children}
    </div>
  );
}
