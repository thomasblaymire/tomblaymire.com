import { Navigation } from '@/components/navigation';
import { navLinks } from '@/content/pages/links';
import { device } from '@/helpers/device';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function FooterSection() {
  const isTablet = useMediaQuery(device.tablet);
  return (
    <section className="pb-32 mt-40 border-t pt-20 border-[rgba(63,63,70,0.4)] flex items-center justify-between">
      {isTablet ? <Navigation items={navLinks} type="basic" /> : null}
      <div className="col-span-full mt-24 text-lg text-gray-500 dark:text-slate-500 md:mt-44 [&_p]:text-[rgb(113,113,122)] [&_p]:leading-[1.5rem] [&_p]:text-[1.4rem]">
        <p>{`© Tom Blaymire ${new Date().getFullYear()}`}. All rights reserved.</p>
      </div>
    </section>
  );
}
