import { Navigate } from 'react-router-dom';

// Individual project pages are not currently supported.
// Projects are displayed on the /projects page from local content.
export function Project(): JSX.Element {
  return <Navigate to="/projects" replace />;
}
