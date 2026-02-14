import { Card } from '@/components/card';
import { socials } from '@/content/pages/about';

export function Socials() {
  return (
    <Card className="p-0 m-0 border-0">
      <div className="flex tablet:mt-10">
        <ul className="w-full">
          {socials.map(({ text, icon, alt, link }, index) => (
            <li
              key={index}
              className="flex not-first:mt-8 last:mt-12 last:pt-12 last:border-t last:border-[rgba(63,63,70,0.4)] [&_img]:hover:brightness-[0.98] [&_img]:hover:contrast-[0.9] [&_img]:hover:filter-[invert(52%)_sepia(76%)_saturate(475%)_hue-rotate(124deg)_brightness(98%)_contrast(90%)]"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[rgb(82,82,91)] dark:text-[rgb(228,228,231)] text-[1.25rem] hover:text-[rgb(20,184,166)] dark:hover:text-[rgb(20,184,166)] [&_img]:w-10 [&_img]:h-10"
              >
                <img src={icon} alt={alt} />
                <span className="ml-8 text-[1.25rem] font-semibold">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
