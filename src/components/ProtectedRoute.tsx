import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export function ProtectedRoute({ 
  children, 
  redirectTo = '/login' 
}: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  
  // Show loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>
  }
  
  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to={redirectTo} replace />
  }
  
  // Render children if authenticated
  return <>{children}</>
}