import { ArticleMeta } from '@/types/article';

export const meta: ArticleMeta = {
  title: 'Top UI Inspiration Websites',
  slug: 'top-ui-inspiration-websites',
  description:
    "If you're a Front End Developer looking for some top UI inspiration websites this post is for you. These are the websites that I go to first when building out a new side project.",
  publishDate: '2016-12-12',
  tags: ['design', 'ui', 'inspiration'],
};

export default function TopUiInspirationWebsites() {
  return (
    <article>
      <p>
        If you&apos;re a Front End Developer looking for some top UI inspiration websites
        this post is for you.
      </p>
      <p>Today we are sharing our top websites for design inspiration and ideas.</p>
      <blockquote>
        &ldquo;What a good artist understands is that nothing comes from nowhere. All
        creative work builds on what came before. Nothing is completely original.&rdquo; ―
        Austin Kleon
      </blockquote>

      <h2>Website 1: Dribbble</h2>
      <img src="/images/articles/dribbble.png" alt="Dribbble homepage screenshot" />
      <p>
        Dribbble is a fantastic website that showcases designers work from all over the
        world. It also comes with a great search that allows you to easily find resources
        and inspiration as to how other designers have tackled real world problems.
      </p>
      <p>
        I would also recommend that you follow your favourite designers to see more of
        their work on your timeline in the future.
      </p>
      <p>
        Homepage: <a href="https://dribbble.com/">Dribbble.com</a>
      </p>

      <h2>Website 2: Mobbin</h2>
      <img src="/images/articles/mobbin.png" alt="Mobbin homepage screenshot" />
      <p>
        Mobbin is a fantastic resource for mobile and web design patterns. It contains
        thousands of screenshots from real apps, organised by screen type and user flow.
      </p>
      <p>
        This makes it incredibly easy to see how other companies have solved common UX
        problems like onboarding, settings, or checkout flows.
      </p>
      <p>
        Homepage: <a href="https://mobbin.com/">Mobbin.com</a>
      </p>

      <h2>Website 3: UpLabs</h2>
      <img src="/images/articles/uplabs.png" alt="UpLabs homepage screenshot" />
      <p>
        Another website for design inspiration is UpLabs. They specifically lead the way
        when it comes to inspiration you can actually interact with, they have a useful
        notification that displays when a specific upload is interactive.
      </p>
      <p>
        This takes it up a notch when separating the difference between a &ldquo;designed
        interface&rdquo; and something that is actually functional to the end user on the
        front end.
      </p>
      <p>
        Homepage: <a href="https://www.uplabs.com/">Uplabs.com</a>
      </p>

      <h2>Website 4: Figma Community</h2>
      <img
        src="/images/articles/figma-community.png"
        alt="Figma Community homepage screenshot"
      />
      <p>
        The Figma Community has become one of the best resources for design inspiration
        and free UI kits. You can find complete design systems, icon sets, and templates
        that you can duplicate and use in your own projects.
      </p>
      <p>
        This is especially useful if you&apos;re learning Figma or want to see how
        experienced designers structure their files.
      </p>
      <p>
        Homepage: <a href="https://www.figma.com/community">Figma Community</a>
      </p>

      <h2>Website 5: UI Patterns</h2>
      <img src="/images/articles/ui-patterns.png" alt="UI Patterns homepage screenshot" />
      <p>
        Last but not least is UI Patterns, a fantastic website showcasing when to and when
        not to use a specific component/element within an application. The good thing
        about UI Patterns is that there are detailed specific use cases across the board.
      </p>
      <p>
        Let&apos;s say you&apos;re looking for a way to implement a notification system on
        your website, UI Patterns will give you a detailed description as to why use a
        specific element e.g to draw attention to important updates or why not to use such
        as not notifying users about technical operations that do not require user
        involvement.
      </p>
      <p>
        Homepage: <a href="https://ui-patterns.com/">UIPatterns</a>
      </p>
    </article>
  );
}
