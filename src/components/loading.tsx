import spinner from '@/assets/loading.svg';

import { cn } from '../helpers/cn';

interface LoadingProps {
  position?: string;
  width?: string;
  height?: string;
}

export const Loading = ({ position, width, height }: LoadingProps): JSX.Element => (
  <div
    className={cn(
      position === 'center' && 'absolute left-0 right-0 mx-auto text-center',
      '[&_svg]:text-white',
    )}
    style={{ width, height }}
    role="status"
    aria-live="polite"
  >
    <img src={spinner} alt="" aria-hidden="true" />
    <span className="sr-only">Loading content, please wait...</span>
  </div>
);
