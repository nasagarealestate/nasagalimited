import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { LoadingSpinner } from '../components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));

// Wrapper component for lazy loading with Suspense
function LazyPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  );
}

// Route configuration following best practices
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <LazyPageWrapper>
            <HomePage />
          </LazyPageWrapper>
        ),
      },
      {
        path: 'about',
        element: (
          <LazyPageWrapper>
            <AboutPage />
          </LazyPageWrapper>
        ),
      },
    ],
  },
];

// Create router with configuration
export const router = createBrowserRouter(routes);

// Export route paths as constants to avoid typos
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
} as const;

// Type for route paths
export type RoutePath = typeof ROUTES[keyof typeof ROUTES];
