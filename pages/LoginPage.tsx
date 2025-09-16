import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { validateQuizSubmission } from '../utils/validation';
import { resetAuthData, checkAuthData } from '../utils/resetAuth';
import { z } from 'zod';

// Validation schema for login form
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
});

const LoginPage: React.FC = () => {
  const { login, isLoading, error, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);

  // Get the intended destination from location state
  const from = location.state?.from?.pathname || '/';

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      if (user.role === 'teacher') {
        navigate('/admin', { replace: true });
      } else {
        navigate(from, { replace: true });
      }
    }
  }, [user, navigate, from]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});

    // Validate form data
    try {
      loginSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.issues.forEach(issue => {
          if (issue.path[0]) {
            errors[issue.path[0] as string] = issue.message;
          }
        });
        setValidationErrors(errors);
        return;
      }
    }

    const success = await login(formData.email, formData.password);
    if (success) {
      // The useEffect will handle the redirect based on user role
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              IGCSE Music Hub
            </h1>
          </Link>
          <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200 mb-2">
            Welcome Back
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Sign in to track your learning progress
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  validationErrors.email
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'border-slate-300 focus:ring-sky-500 focus:border-sky-500 dark:border-slate-600 dark:focus:ring-sky-400'
                } bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400`}
                placeholder="Enter your email"
                disabled={isLoading}
              />
              {validationErrors.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {validationErrors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    validationErrors.password
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                      : 'border-slate-300 focus:ring-sky-500 focus:border-sky-500 dark:border-slate-600 dark:focus:ring-sky-400'
                  } bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400`}
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {validationErrors.password && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {validationErrors.password}
                </p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 font-medium hover:underline"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>

        {/* Demo Account Info */}
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
            Demo Accounts
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
            Try the system with these demo credentials:
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium text-blue-800 dark:text-blue-200 mb-1">Student Account:</p>
              <div className="text-sm font-mono text-blue-600 dark:text-blue-400">
                <p>Email: demo@student.com</p>
                <p>Password: demo123</p>
              </div>
            </div>
            
            <div>
              <p className="text-xs font-medium text-blue-800 dark:text-blue-200 mb-1">Teacher Account:</p>
              <div className="text-sm font-mono text-blue-600 dark:text-blue-400">
                <p>Email: teacher@school.com</p>
                <p>Password: teacher123</p>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-2">
            🔧 Login Issues?
          </h3>
          <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
            If you can't log in with the teacher account, try resetting the authentication data:
          </p>
          
          <div className="flex space-x-2">
            <button
              onClick={() => {
                const result = resetAuthData();
                if (result) {
                  alert('✅ Authentication data reset! You can now log in with teacher@school.com / teacher123');
                  window.location.reload();
                } else {
                  alert('❌ Failed to reset authentication data. Please try refreshing the page.');
                }
              }}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              🔄 Reset Auth Data
            </button>
            
            <button
              onClick={() => {
                const { users, teacher } = checkAuthData();
                const message = teacher 
                  ? `✅ Teacher account found!\nTotal users: ${users.length}\nTeacher: ${teacher.name} (${teacher.email})`
                  : `❌ Teacher account not found!\nTotal users: ${users.length}\nPlease click 'Reset Auth Data' to fix this.`;
                alert(message);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
            >
              🔍 Check Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;