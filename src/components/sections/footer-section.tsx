import { Navigation } from '@/components/navigation';
import { navLinks } from '@/content/pages/links';
import { device } from '@/helpers/device';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function FooterSection() {
  const isTablet = useMediaQuery(device.tablet);
  return (
    <section className="pb-14 mt-40 border-t pt-14 border-[rgba(63,63,70,0.4)] flex items-center justify-between">
      {isTablet ? <Navigation items={navLinks} type="basic" /> : null}
      <p className="text-[rgb(113,113,122)] dark:text-[rgb(161,161,170)] leading-[1.5rem] text-[1.4rem]">
        {`© Tom Blaymire ${new Date().getFullYear()}`}. All rights reserved.
      </p>
    </section>
  );
}
