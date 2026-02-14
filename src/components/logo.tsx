import logo from '../assets/me.png';
import { cn } from '../helpers/cn';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn(className)}>
      <img src={logo} alt="Tom Blaymire" className="w-24" />
    </div>
  );
}
