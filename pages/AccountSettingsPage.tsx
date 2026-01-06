import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { z } from 'zod';

// Validation schemas
const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address')
});

const passwordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(6, 'New password must be at least 6 characters long'),
  confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "New passwords don't match",
  path: ["confirmPassword"],
});

const AccountSettingsPage: React.FC = () => {
  const { user, updateProfile, updatePassword, updateEmail } = useAuth();
  const navigate = useNavigate();

  // Email change state
  const [emailData, setEmailData] = useState({
    email: user?.email || ''
  });
  const [emailErrors, setEmailErrors] = useState<Record<string, string>>({});
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  // Password change state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordErrors, setPasswordErrors] = useState<Record<string, string>>({});
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  // Handle email change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailData(prev => ({ ...prev, [name]: value }));

    // Clear validation error for this field
    if (emailErrors[name]) {
      setEmailErrors(prev => ({ ...prev, [name]: '' }));
    }
    setEmailSuccess(false);
  };

  // Handle password change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));

    // Clear validation error for this field
    if (passwordErrors[name]) {
      setPasswordErrors(prev => ({ ...prev, [name]: '' }));
    }
    setPasswordSuccess(false);
  };

  // Submit email change
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailErrors({});
    setIsUpdatingEmail(true);
    setEmailSuccess(false);

    // Validate email
    try {
      emailSchema.parse(emailData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.issues.forEach(issue => {
          if (issue.path[0]) {
            errors[issue.path[0] as string] = issue.message;
          }
        });
        setEmailErrors(errors);
        setIsUpdatingEmail(false);
        return;
      }
    }

    // Check if email is different
    if (emailData.email === user?.email) {
      setEmailErrors({ email: 'New email must be different from current email' });
      setIsUpdatingEmail(false);
      return;
    }

    // Update email using Supabase Auth
    const success = await updateEmail(emailData.email.trim());
    if (success) {
      setEmailSuccess(true);
    } else {
      setEmailErrors({ email: 'Failed to update email. Please try again.' });
    }

    setIsUpdatingEmail(false);
  };

  // Submit password change
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordErrors({});
    setIsUpdatingPassword(true);
    setPasswordSuccess(false);

    // Validate password data
    try {
      passwordSchema.parse(passwordData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.issues.forEach(issue => {
          if (issue.path[0]) {
            errors[issue.path[0] as string] = issue.message;
          }
        });
        setPasswordErrors(errors);
        setIsUpdatingPassword(false);
        return;
      }
    }

    // Update password using the dedicated updatePassword function
    const success = await updatePassword(passwordData.currentPassword, passwordData.newPassword);
    if (success) {
      setPasswordSuccess(true);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } else {
      setPasswordErrors({ newPassword: 'Failed to update password. Please try again.' });
    }

    setIsUpdatingPassword(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-400">Please log in to access account settings.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Account Settings
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Profile Information */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Profile Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-slate-600 dark:text-slate-400">Name:</span>
                <span className="ml-2 text-slate-900 dark:text-slate-100">{user.name}</span>
              </div>
              {user.nickname && (
                <div>
                  <span className="font-medium text-slate-600 dark:text-slate-400">Nickname:</span>
                  <span className="ml-2 text-slate-900 dark:text-slate-100">{user.nickname}</span>
                </div>
              )}
              <div>
                <span className="font-medium text-slate-600 dark:text-slate-400">Role:</span>
                <span className="ml-2 text-slate-900 dark:text-slate-100 capitalize">{user.role}</span>
              </div>
              <div>
                <span className="font-medium text-slate-600 dark:text-slate-400">Member Since:</span>
                <span className="ml-2 text-slate-900 dark:text-slate-100">
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Change Email */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Change Email Address
            </h2>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  New Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={emailData.email}
                  onChange={handleEmailChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${emailErrors.email
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                      : 'border-slate-300 focus:ring-sky-500 focus:border-sky-500 dark:border-slate-600 dark:focus:ring-sky-400'
                    } bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400`}
                  placeholder="Enter new email address"
                  disabled={isUpdatingEmail}
                />
                {emailErrors.email && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {emailErrors.email}
                  </p>
                )}
                {emailSuccess && (
                  <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                    ✓ Email address updated successfully!
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isUpdatingEmail || emailData.email === user.email}
                className="bg-sky-600 hover:bg-sky-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
              >
                {isUpdatingEmail ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Updating...
                  </div>
                ) : (
                  'Update Email'
                )}
              </button>
            </form>
          </div>

          {/* Change Password */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Change Password
            </h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${passwordErrors.currentPassword
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                      : 'border-slate-300 focus:ring-sky-500 focus:border-sky-500 dark:border-slate-600 dark:focus:ring-sky-400'
                    } bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400`}
                  placeholder="Enter current password"
                  disabled={isUpdatingPassword}
                />
                {passwordErrors.currentPassword && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {passwordErrors.currentPassword}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${passwordErrors.newPassword
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                      : 'border-slate-300 focus:ring-sky-500 focus:border-sky-500 dark:border-slate-600 dark:focus:ring-sky-400'
                    } bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400`}
                  placeholder="Enter new password (min. 6 characters)"
                  disabled={isUpdatingPassword}
                />
                {passwordErrors.newPassword && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {passwordErrors.newPassword}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${passwordErrors.confirmPassword
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                      : 'border-slate-300 focus:ring-sky-500 focus:border-sky-500 dark:border-slate-600 dark:focus:ring-sky-400'
                    } bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400`}
                  placeholder="Confirm new password"
                  disabled={isUpdatingPassword}
                />
                {passwordErrors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {passwordErrors.confirmPassword}
                  </p>
                )}
                {passwordSuccess && (
                  <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                    ✓ Password updated successfully!
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isUpdatingPassword}
                className="bg-sky-600 hover:bg-sky-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
              >
                {isUpdatingPassword ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Updating...
                  </div>
                ) : (
                  'Update Password'
                )}
              </button>
            </form>
          </div>

          {/* Security Notice */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
                  Security Tips
                </h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Use a strong password with at least 6 characters</li>
                  <li>• Don't share your login credentials with others</li>
                  <li>• Log out when using shared computers</li>
                  <li>• Contact your teacher if you suspect unauthorized access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;