

type Item = {
  description: string;
  title: string;
};

type Use = {
  items: Item[];
  name: string;
};

interface TimeLineItemProps {
  items: Item[];
}

interface TimeLineProps {
  use: Use;
}

export function TimeLineItem({ items }: TimeLineItemProps) {
  return (
    <div className="col-span-3 [&_ul]:list-none [&_ul]:m-0 [&_ul]:p-0 [&_li]:flex [&_li]:flex-col [&_li]:items-start [&_li:not(:first-child)]:mt-16">
      <ul>
        {items.map((item: Item, index: number) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TimeLine({ use }: TimeLineProps): JSX.Element {
  const { items } = use;
  return (
    <div className="grid grid-cols-1 gap-y-8 items-baseline max-w-[68rem] tablet:grid-cols-4 [&_h2]:text-[rgb(244,244,245)] [&_h2]:font-semibold [&_h2]:leading-[1.5rem] [&_h2]:m-0">
      <h2>{use.name}</h2>
      <TimeLineItem items={items} />
    </div>
  );
}
