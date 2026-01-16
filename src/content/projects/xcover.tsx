export default function CoverGeniusProject() {
  return (
    <>
      <p>
        My first role since moving to Australia was for an insurtech startup called Cover
        Genius. Here I worked as a key member of the team building their primary cover
        application called{' '}
        <a href="https://www.xcover.com/en" target="_blank" rel="noopener noreferrer">
          Xcover
        </a>
        .
      </p>

      <p>
        The site was primarily used for customers to get a new cover quote, track their
        quote alongside making any claims in one place. I had the opportunity to build
        core parts of the site including UI components, authentication, state management
        alongside analytics tracking and how we managed deployments.
      </p>

      <p>
        I also had the opportunity to work on the primary{' '}
        <a href="https://covergenius.com/" target="_blank" rel="noopener noreferrer">
          Cover Genius
        </a>{' '}
        re-write and CMS integration alongside design and UX team members.
      </p>

      <img
        src="/images/projects/xcover-ddef7340db0d74138563032c8247c28e.png"
        alt="XCover homepage"
      />

      <h2>Tech Stack</h2>

      <p>
        The Xcover application was built with a modern front end technology stack
        including:
      </p>
      <ul>
        <li>React 16</li>
        <li>Redux</li>
        <li>Styled Components</li>
        <li>Jest</li>
        <li>Enzyme</li>
        <li>Reactstrap</li>
        <li>Django</li>
        <li>Formik &amp; Yup</li>
        <li>Amazon Cognito</li>
        <li>Sentry</li>
        <li>Grafana</li>
      </ul>

      <h2>Xcover.com</h2>

      <p>
        Upon starting my role at Cover Genius I was tasked with working as part of a small
        3 man team building the primary frontend for the Xcover website. This included
        creating React components for navigation, responsive design, testing and
        performance optimizations.
      </p>

      <p>Some of the key areas built included:</p>
      <ul>
        <li>Homepage re-development</li>
        <li>Navigation (including mobile)</li>
        <li>Backend API integrations</li>
        <li>Modals, overlays popups</li>
        <li>Hooks for data fetching</li>
        <li>JWT and session storage</li>
        <li>Authentication pages (login, logout, signup, reset)</li>
        <li>Policy retrieval</li>
        <li>Loading messages, error states and timeouts</li>
        <li>Utility functions</li>
      </ul>

      <img src="/images/projects/xcover-login.png" alt="XCover login" />

      <h2>Quote &amp; Bind</h2>

      <p>
        Another area I worked on was called Quote and Bind. This feature enabled customers
        to easily fill in information and get a quote online for their insurance cover,
        once approved they could then enter their personal details and card information to
        make payment and then retrieve a confirmation email.
      </p>

      <p>
        The feature was built using multiple different routes alongside{' '}
        <a href="https://formik.org/" target="_blank" rel="noopener noreferrer">
          Formik
        </a>{' '}
        building up a quote and storing the application logic in state. The form side was
        object based allowing us as developers to easily add new fields if required
        alongside our object schema validation with{' '}
        <a
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </a>
        .
      </p>

      <p>
        Visually the feature was built using our UI component library that used{' '}
        <a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer">
          storybook
        </a>{' '}
        alongside new custom element creation with{' '}
        <a
          href="https://styled-components.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          styled components
        </a>{' '}
        alongside multiple region / language support with{' '}
        <a
          href="https://www.npmjs.com/package/react-intl"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-intl
        </a>
        .
      </p>

      <img
        src="/images/projects/xcover-quote-aecead82fbce3fd15c2061ac95e416dc.jpeg"
        alt="XCover quote and bind"
      />

      <h2>Policies</h2>

      <p>
        During my time at Cover Genius I also developed the primary policies page. This
        could be accessed via the user dashboard or directly via a Booking ID that was
        generated when they purchased an insurance policy.
      </p>

      <p>
        The feature was built closely with backend data provided via a REST API and
        featured lazy-loading, CSS grid, error and loading states alongside analytics and
        A/B testing.
      </p>

      <img
        src="/images/projects/xcover-policy-ea91d27b9c606d4672ec72b42a4ee696.jpeg"
        alt="XCover policy"
      />
    </>
  );
}
