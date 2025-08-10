import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { AlertTriangleIcon, HomeIcon } from 'lucide-react';

export function ErrorBoundary() {
  const error = useRouteError();

  let errorMessage: string;
  let errorStatus: string | number = 'Error';

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || 'An unexpected error occurred';
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = 'An unexpected error occurred';
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangleIcon className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {errorStatus === 404 ? 'Page Not Found' : 'Something went wrong'}
          </h1>
          <p className="text-gray-600 mb-6">
            {errorStatus === 404 
              ? "Sorry, we couldn't find the page you're looking for."
              : errorMessage
            }
          </p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Go Home</span>
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
