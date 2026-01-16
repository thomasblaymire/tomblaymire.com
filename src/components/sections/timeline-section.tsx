import { TimeLine } from '@/components/timeline';
import { uses } from '@/content/pages/uses';

export function TimelineSection() {
  return (
    <>
      {uses.map((use, index) => {
        return (
          <section
            key={index}
            className="mt-20 tablet:pl-6 tablet:border-l tablet:border-[#e5e7eb26] [&_h2]:text-[1.5rem] [&_h2]:leading-[1.75rem] [&_h2]:font-semibold [&_h2]:mt-[2.5rem] [&_h2]:text-[rgb(39,39,42)] dark:[&_h2]:text-[rgb(244,244,245)] [&_h3]:text-[1.3rem] [&_h3]:text-[rgb(244,244,245)] dark:[&_h3]:text-[rgb(244,244,245)] [&_p]:mt-6 [&_p]:text-[1.5rem] [&_p]:leading-[2.3rem] [&_p]:text-[rgb(82,82,91)] dark:[&_p]:text-[rgb(161,161,170)] [&_p]:z-10 [&_p]:relative [&_svg]:w-[50px]"
          >
            <TimeLine use={use} />
          </section>
        );
      })}
    </>
  );
}
