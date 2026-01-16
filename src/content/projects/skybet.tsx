export default function SkyBetProject() {
  return (
    <>
      <p>
        I had a fantastic experience working as a Software Engineer at Sky Betting &amp;
        Gaming. Here I worked within the bet placement squad in the tech tribe alongside
        test, product, ux and design to rebuild the betslip used by millions of customers.
      </p>

      <p>
        Highlights include creating a quick betslip to allow customers to place bets
        anywhere throughout the application, re-writing the entire betslip to use modern
        front end technologies alongside price change preferences and odds settings
        interfaces.
      </p>

      <img
        src="/images/projects/sbgMain-2ae455947e7455d819f7c73a0a4c48bb.png"
        alt="Sky Bet main"
      />

      <h2>Tech Stack</h2>

      <p>
        At Sky Bet we used a modern well tested tech stack with a focus on performance and
        platform uptime due to the sheer amount of simultaneous users at peak times such
        as The Grand National and Premier League Football. Some of the key technologies I
        worked with included:
      </p>
      <ul>
        <li>JavaScript ES6</li>
        <li>React</li>
        <li>Mobx</li>
        <li>Immer</li>
        <li>PHP</li>
        <li>Akamai CDN</li>
        <li>New Relic</li>
        <li>Jenkins CI</li>
        <li>Webpack</li>
      </ul>

      <h2>Betslip Rebuild</h2>

      <p>
        I started my time in the team during the core betslip rebuild, this was a large
        effort as it encompassed re-writing components from the legacy PHP application to
        use latest React along with dealing with complex application logic for storing
        multiple different types of bets, price calculation and cashout values.
      </p>

      <img
        src="/images/projects/inplay-17c7c10278561f44de449ae35118f267.png"
        alt="Sky Bet in-play"
      />

      <h2>Quick Betslip</h2>

      <p>
        One of the primary areas I built from scratch at Sky Bet was the quick betslip.
        The UX included a small tab element at the bottom of the mobile view where a user
        could easily add and remove and place a bet from all in one place without going to
        the betslip.
      </p>

      <p>
        The feature was built using{' '}
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          React
        </a>{' '}
        with state management in{' '}
        <a
          href="https://mobx.js.org/README.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mobx
        </a>{' '}
        and included a collapse/expand animation and encompassed many of the features /
        calculations that the primary betslip included alongside feature flagging, error
        handling and full analytics for BI teams.
      </p>

      <img
        src="/images/projects/features-9d12c08dd58b28255fd24574713bfc86__1_.svg"
        alt="Sky Bet mobile"
      />

      <h2>Price Change Re-write</h2>

      <p>
        Another core feature I got to work on within the team was an update to our price
        change preferences. These were previously hidden inside of the user settings page
        and often were hard to find and update.
      </p>

      <p>
        We therefore created a new interface with a multi selection that allowed a user to
        select where they would like their odds to go directional wise along side what
        their bet preferences were such as each way.
      </p>

      <p>
        The modal was built using React and UI elements added to our reusable component
        library alongside snapshot testing and unit testing with{' '}
        <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
          Jest
        </a>{' '}
        and{' '}
        <a
          href="https://enzymejs.github.io/enzyme/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enzyme
        </a>
        .
      </p>
    </>
  );
}
