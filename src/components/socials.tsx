import { Card } from '@/components/card';
import { socials } from '@/content/about';

export function Socials() {
  return (
    <Card className="p-0 m-0 border-0">
      <div className="flex tablet:mt-[2.5rem]">
        <ul className="w-full">
          {socials.map(({ text, icon, alt, link }, index) => (
            <li 
              key={index}
              className="flex [&:not(:first-child)]:mt-8 last:mt-12 last:pt-12 last:border-t last:border-[rgba(63,63,70,0.4)] hover:[&_img]:brightness-[0.98] hover:[&_img]:contrast-[0.9] hover:[&_img]:[filter:invert(52%)_sepia(76%)_saturate(475%)_hue-rotate(124deg)_brightness(98%)_contrast(90%)]"
            >
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-[rgb(228,228,231)] text-[1.25rem] hover:text-[rgb(20,184,166)] [&_img]:w-[2.5rem] [&_img]:h-[2.5rem]"
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
