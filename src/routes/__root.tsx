import { createRootRoute, Outlet } from '@tanstack/react-router';

const NotFound = () => (
  <div style={{ textAlign: 'center', marginTop: '4rem' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

export const Route = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: NotFound,
});