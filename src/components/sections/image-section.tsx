import profile from '@/assets/profilealt.jpg';

export function ImageSection() {
  return (
    <section className="pb-20">
      <div className="max-w-none tablet:px-2.5 [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-2xl [&_img]:transform-none tablet:[&_img]:rotate-3">
        <img src={profile} alt="Tom Blaymire" />
      </div>
    </section>
  );
}
