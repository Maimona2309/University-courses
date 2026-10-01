import React, { useState } from 'react';
import { School, Mail, Lock, Eye, EyeOff, ArrowRight, UserCheck, Sparkles } from 'lucide-react';
import { StudentUser } from '../../types';

interface LoginComposeScreenProps {
  onLoginSuccess: (user: StudentUser) => void;
  onNavigateToRegister: () => void;
  onSkipAsGuest: () => void;
}

export const LoginComposeScreen: React.FC<LoginComposeScreenProps> = ({
  onLoginSuccess,
  onNavigateToRegister,
  onSkipAsGuest,
}) => {
  const [email, setEmail] = useState('student@university.edu');
  const [password, setPassword] = useState('pass1234');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please provide your student email/ID and password');
      return;
    }
    setError(null);
    onLoginSuccess({
      name: 'Sarah Ahmed',
      email: email.trim(),
      rollNumber: 'FA24-BSCS-019',
      interestedDegree: 'BS Computer Science',
    });
  };

  const handleDemoSignIn = () => {
    setEmail('sarah.ahmed@student.edu');
    setPassword('secret2026');
    setError(null);
    onLoginSuccess({
      name: 'Sarah Ahmed',
      email: 'sarah.ahmed@student.edu',
      rollNumber: 'FA24-BSCS-019',
      interestedDegree: 'BS Computer Science',
    });
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-y-auto min-h-full">
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full py-4">
        {/* App Logo / Seal */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-inner mb-3">
            <School className="w-9 h-9" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            University Portal
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Access BS Programs, Syllabus & Admission Criteria
          </p>
        </div>

        {/* Demo Fast Login Ribbon */}
        <div className="mb-5 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span className="text-xs text-blue-800 dark:text-blue-300 font-medium">
              Demo Student: Sarah Ahmed
            </span>
          </div>
          <button
            type="button"
            onClick={handleDemoSignIn}
            className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-2.5 py-1 rounded-lg transition-colors shadow-sm"
          >
            Quick Sign In
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Student Email or Roll ID
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. rollno@university.edu"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Password
              </label>
              <button
                type="button"
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                onClick={() => alert('Demo password is: pass1234')}
              >
                Forgot?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
              />
              <span className="text-xs text-slate-600 dark:text-slate-400">Remember credentials</span>
            </label>
          </div>

          {error && (
            <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          {/* Primary Material 3 Sign In CTA */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold text-sm transition shadow-md shadow-blue-500/20"
          >
            <span>Sign In to Portal</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Guest Explore Button */}
          <button
            type="button"
            onClick={onSkipAsGuest}
            className="w-full py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs transition"
          >
            Continue as Guest (Skip Login)
          </button>
        </form>
      </div>

      {/* Footer Navigation */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          New student applicant?{' '}
          <button
            type="button"
            onClick={onNavigateToRegister}
            className="font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            Create an Account
          </button>
        </p>
      </div>
    </div>
  );
};
