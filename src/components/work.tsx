import { Card } from '@/components/card';
import { WorkExperienceItem, workExperiences } from '@/content/work';

interface WorkItemProps {
  item: WorkExperienceItem;
}

const WorkItem = ({ item }: WorkItemProps): JSX.Element => {
  const { image, name, jobTitle, dateFrom, dateTo } = item;
  return (
    <li className="flex gap-6 [&:not(:first-child)]:mt-[2.25rem]">
      <div className="w-[4.2rem] h-[4.2rem] flex-shrink-0 flex items-center justify-center">
        <img
          src={image}
          alt={`${name} logo`}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <dl className="flex flex-auto flex-col min-w-0">
        <dt className="sr-only">Company</dt>
        <dd className="text-[1.35rem] leading-[1.5rem] text-[rgb(244,244,245)] dark:text-[rgb(244,244,245)] truncate">
          {name}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-[rgb(161,161,170)] text-[1.3rem] font-normal leading-[1.5rem] truncate">
          {jobTitle}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="text-[rgb(161,161,170)] text-[1.3rem] font-normal leading-[1.5rem]"
          aria-label={`${dateFrom} until ${dateTo}`}
        >
          <time dateTime={dateFrom}>{dateFrom}</time> <span aria-hidden="true">—</span>{' '}
          <time dateTime={dateTo}>{dateTo}</time>
        </dd>
      </dl>
    </li>
  );
};

export function Work() {
  return (
    <div className="mt-14">
      <Card>
        <>
          <h2>Work</h2>
          <ol className="mt-[2.5rem]">
            {workExperiences.map((item, index) => (
              <WorkItem key={index} item={item} />
            ))}
          </ol>
        </>
      </Card>
    </div>
  );
}
