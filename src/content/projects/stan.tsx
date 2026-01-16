export default function StanProject() {
  return (
    <>
      <p>
        I spent my last two years working for{' '}
        <a href="https://stan.com.au/" target="_blank" rel="noopener noreferrer">
          Stan
        </a>{' '}
        who are the third largest streaming service in Australia behind Disney+ and
        Netflix. Here I had the pleasure of working as part of a tightly knit TV squad
        working on various customer facing features, tech improvements and codebase
        refactoring impacting millions of customers.
      </p>

      <p>
        Achievements include the integration of live streaming across multiple TV
        platforms including, LG, Samsung, Hisense, PS5 &amp; Xbox. Building enhanced UI
        flows such as End Of Play Trailer, re-writing the large monorepo, creating
        isolated classes to contain application logic along with updating legacy
        components and debugging tools via a custom built CLI.
      </p>

      <img src="/images/projects/stan-home.png" alt="Stan home sport" />

      <h2>Tech Stack</h2>

      <p>
        It was our aim at Stan to always build features from the ground up and not rely on
        unnecessary third party packages clogging the application and adding to the bundle
        size. Therefore a lot of our helpers were split into different packages such as
        App, UI, Device, Time, Player, History etc that each could easily be initialized,
        they all come together to form our large scale monorepo.
      </p>

      <p>Our tech included:</p>
      <ul>
        <li>Typescript</li>
        <li>Preact X</li>
        <li>Redux</li>
        <li>Linaria (runtime styled-components)</li>
        <li>Webpack 5</li>
        <li>Jest &amp; Enzyme</li>
        <li>Cypress</li>
        <li>Shaka Player</li>
        <li>Kibana &amp; Youbora</li>
        <li>ESLint &amp; Stylelint</li>
        <li>TeamCity</li>
        <li>Suitest (Device debugging)</li>
      </ul>

      <h2>End Of Play Trailer</h2>

      <p>
        During product and UX research it was identified that customers were closing the
        application after they have finished watching a movie or series vs browsing the
        catalogue for something new. We therefore decided to introduce an end of play
        trailer upsell feature that allows Stan to display relevant content that a user
        may enjoy watching next.
      </p>

      <img src="/images/projects/stan-end-of-play-min.png" alt="Stan end of play" />

      <p>
        Development was carried out by myself along with collaboration between product,
        backend, design and test team members. We opted for creating two separate versions
        (animated and a non-animated) to support all platforms whilst providing a premium
        polished service to the newer OLED TVs and Playstation 5.
      </p>

      <p>
        End of play was built primarily using native <strong>JavaScript</strong> as we had
        limited usage of <strong>React</strong> on the player side, the backend was driven
        by our <strong>Rest API</strong> written in <strong>Go</strong>. The feature was
        built with full error handling via <strong>Kibana</strong> and video monitoring
        analytics to track uptake and usage.
      </p>

      <p>
        <strong>CSS</strong> was all custom written along with timings for the display of
        content and animations. The feature was initially released to 10% of users and
        then was fully integrated into the Stan TV platform and is used in production
        today. 🎉
      </p>

      <h2>Live Sport</h2>

      <p>
        One of the big transitions during my time at Stan was a shift from our traditional
        VOD streaming service to live sports with the announcement of Champions League
        &amp; Wimbledon. This projected to increase Stan subscribers by vast amounts and
        resulted in a great tech effort to get integration completed on time.
      </p>

      <img src="/images/projects/stan-sport-min.png" alt="Stan sport" />

      <p>Some of the enhancements I worked on included:</p>
      <ul>
        <li>React UI additions (player badges, promos and feeds)</li>
        <li>Manifest changes to support live streaming</li>
        <li>
          Calculation of time values such as <code>liveStartDate</code>,{' '}
          <code>liveEndDate</code>, <code>startDate</code>
        </li>
        <li>Updating elements based on time including routing to live feeds</li>
        <li>
          Multi-tier overlays for adding the new &apos;sport&apos; subscription to
          accounts
        </li>
        <li>Collaboration between video teams, billing and design</li>
        <li>TV testing, performance monitoring and analytics</li>
      </ul>

      <h2>Release Automation</h2>

      <p>
        Another feature I got the opportunity to work on was the introduction of release
        automation within the Stan team. This was something raised as a pain point for
        tech teams and especially within the TV team as we deployed the most platforms on
        a daily basis.
      </p>

      <p>
        The problem was that in order to release we had to manually bump version numbers,
        manually trigger deploys, automatically send release notification emails along
        with drag all the tickets across the Jira board (whilst monitoring the ongoing
        release) 😅
      </p>

      <p>
        To solve this problem we firstly shifted the way we do commit messages to use{' '}
        <a
          href="https://www.conventionalcommits.org/en/v1.0.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          conventional commits
        </a>
        , this is much cleaner, consistent and also helps with deployments. Then to solve
        the release problem I created a new CLI command that was run directly via the
        terminal called <code>release</code>. This automatically calculated the version
        number, created release notes and published using{' '}
        <a
          href="https://github.com/semantic-release/semantic-release"
          target="_blank"
          rel="noopener noreferrer"
        >
          semantic-release
        </a>
        ,{' '}
        <a
          href="https://www.atlassian.com/software/jira/features/automation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jira automation
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/commitizen/cz-cli"
          target="_blank"
          rel="noopener noreferrer"
        >
          commitizen
        </a>
        . After publish changes were then directly pushed to TeamCity to automatically
        kick off builds to the relevant environments such as test, staging or production.
      </p>

      <h2>CLI Improvements</h2>

      <p>
        One of the main challenges that we faced in the TV team was the ability to easily
        debug using the latest tools such as Chrome debugger and inspector. As we used
        legacy platforms such as old Hisense TVs and PS4 with their own legacy
        chromium/webkit based debuggers it was challenging for us to extract error
        messages and debug ongoing issues.
      </p>

      <p>
        We therefore built our own cli with custom commands for debugging (using{' '}
        <a
          href="https://github.com/liriliri/chii"
          target="_blank"
          rel="noopener noreferrer"
        >
          chii
        </a>
        ). The CLI commands were built in their own isolated CLI package inside of the
        monorepo and allowed us as developers along with testers and product to easily use
        the application with test and staging environments.
      </p>

      <p>Some of our commands included:</p>
      <ul>
        <li>build (build the application with webpack)</li>
        <li>release (perform a release with automation)</li>
        <li>debug (run a chii instance, inspect via TV)</li>
        <li>log (log debug commands)</li>
        <li>
          verify (run{' '}
          <a href="https://stylelint.io/" target="_blank" rel="noopener noreferrer">
            stylelint
          </a>
          ,{' '}
          <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">
            eslint
          </a>{' '}
          and{' '}
          <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">
            prettier
          </a>
          )
        </li>
        <li>install (install a tv package)</li>
        <li>setup (link yarn workspaces)</li>
        <li>update (yarn upgrade interactive)</li>
      </ul>

      <h2>Day To Day</h2>

      <p>
        Day to day work at Stan included various interesting tasks such as collaboration
        with Product, Design, Backend and Video teams to develop features, fix various
        bugs and monitor performance issues and platform errors.
      </p>

      <p>
        Additionally I spent a lot of time converting the legacy side of the codebase to
        be more inline with a modern <strong>JavaScript</strong> codebase such as
        re-writing old code, writing unit tests and converting legacy{' '}
        <strong>React</strong> class based components to be functional along with creating
        re-usable <strong>hooks</strong> for things such as app navigation, fetch,
        windowing and history.
      </p>

      <p>Additional tasks included:</p>
      <ul>
        <li>Debugging issues</li>
        <li>
          Collaborating in sprint planning, tech retro, catchups, and vendor meetings
        </li>
        <li>Feature development</li>
        <li>Monitoring and performance issues</li>
        <li>Testing new features and Customer Service issues</li>
        <li>Working with design and product for new features</li>
        <li>Collaborating on backend planning, to help with UI development.</li>
      </ul>

      <img src="/images/projects/stan-search-min.png" alt="Stan search" />

      <h2>Contractor Role</h2>

      <p>
        After deciding to move back to the UK 🇬🇧 I worked with Stan as a contractor for
        another 6 months to make a big dent in some of the platform improvements we as a
        team identified, these included the some of the following:
      </p>

      <ul>
        <li>Splitting of utilities into separate packages (Time, Device, User)</li>
        <li>
          Updating our TypeScript implementation (globals, enums and type standards)
        </li>
        <li>Feed performance debugging and optimization</li>
        <li>Creating new helpers</li>
        <li>Dynamic imports for vendor based code</li>
        <li>Aliased imports for components and webpack 5 updates</li>
        <li>Additional cli commands for verify and lint</li>
      </ul>
    </>
  );
}
