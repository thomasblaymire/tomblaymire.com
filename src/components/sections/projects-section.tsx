import { Project } from '@/components/project';
import { personalProjects, workExperiences } from '@/content/work';

export function ProjectsSection(): JSX.Element {
  const projects = [...workExperiences, ...personalProjects];
  return (
    <section className="pb-16 [&_ul]:grid [&_ul]:grid-cols-1 [&_ul]:gap-x-16 [&_ul]:gap-y-16 tablet:[&_ul]:grid-cols-2 laptop:[&_ul]:grid-cols-3 laptop:[&_ul]:gap-y-32 [&_li]:flex [&_li]:items-start [&_li]:flex-col [&_li]:relative [&_h2]:text-[1.5rem] [&_h2]:leading-[1.75rem] [&_h2]:font-semibold [&_h2]:mt-[2rem] [&_h2]:text-[rgb(244,244,245)] dark:[&_h2]:text-[rgb(244,244,245)] [&_p]:mt-6 [&_p]:text-[1.5rem] [&_p]:leading-[2.3rem] [&_p]:text-[rgb(82,82,91)] dark:[&_p]:text-[rgb(161,161,170)] [&_p]:z-10 [&_p]:relative [&_svg]:w-[50px]">
      <ul>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </ul>
    </section>
  );
}
