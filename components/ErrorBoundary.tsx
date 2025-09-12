import React, { ReactNode } from 'react';

interface ErrorFallbackProps {
  error?: Error;
  resetError?: () => void;
}

function ErrorFallback({ error, resetError }: ErrorFallbackProps): React.ReactElement {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 m-4">
      <div className="flex items-center mb-4">
        <svg className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">
          Something went wrong
        </h3>
      </div>
      
      <p className="text-red-700 dark:text-red-300 mb-4">
        We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
      </p>
      
      <div className="flex gap-3">
        {resetError && (
          <button
            onClick={resetError}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            Try Again
          </button>
        )}
        <button
          onClick={() => window.location.reload()}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          Refresh Page
        </button>
      </div>
      
      {error && (
        <details className="mt-4">
          <summary className="cursor-pointer text-red-600 dark:text-red-400 font-medium">
            Error Details
          </summary>
          <pre className="mt-2 text-xs text-red-800 dark:text-red-200 bg-red-100 dark:bg-red-900/40 p-3 rounded overflow-auto">
            {error.message}\n{error.stack}
          </pre>
        </details>
      )}
    </div>
  );
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

// Simple error boundary wrapper for functional components
function ErrorBoundary({ children, fallback }: ErrorBoundaryProps): React.ReactElement {
  return (
    <React.Suspense fallback={<div className="animate-pulse p-4">Loading...</div>}>
      {children}
    </React.Suspense>
  );
}

// Hook for error handling in functional components
export function useErrorHandler() {
  const handleError = (error: Error, context?: string) => {
    console.error(`Error ${context ? `in ${context}` : ''}:`, error);
    
    // In a real app, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, { context });
  };

  return { handleError };
}

export { ErrorFallback };
export default ErrorBoundary;