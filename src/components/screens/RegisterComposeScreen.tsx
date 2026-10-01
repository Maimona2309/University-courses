import React, { useState } from 'react';
import { ArrowLeft, User, Mail, BadgeCheck, Lock, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { StudentUser } from '../../types';

interface RegisterComposeScreenProps {
  onRegisterSuccess: (user: StudentUser) => void;
  onNavigateBackToLogin: () => void;
}

export const RegisterComposeScreen: React.FC<RegisterComposeScreenProps> = ({
  onRegisterSuccess,
  onNavigateBackToLogin,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [interestedDegree, setInterestedDegree] = useState('BS Computer Science');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in your name, email, and password.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!agreeTerms) {
      setError('Please agree to university academic guidelines.');
      return;
    }

    setError(null);
    onRegisterSuccess({
      name: name.trim(),
      email: email.trim(),
      rollNumber: rollNumber.trim() || 'REG-2026-NEW',
      interestedDegree,
    });
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-y-auto">
      {/* Top App Bar with Back Button */}
      <header className="sticky top-0 z-10 flex items-center gap-3 px-4 py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <button
          type="button"
          onClick={onNavigateBackToLogin}
          className="p-2 -ml-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition"
          aria-label="Back to login"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-semibold text-base text-slate-900 dark:text-white">
          Create Student Account
        </span>
      </header>

      {/* Main Content */}
      <div className="p-6 max-w-sm mx-auto w-full flex-1">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Student Registration
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Register to track applications and review all 5 degree curricula.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Full Legal Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Applicant Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@example.com"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Primary Program of Interest
            </label>
            <select
              value={interestedDegree}
              onChange={(e) => setInterestedDegree(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white transition"
            >
              <option value="BS Computer Science">BS Computer Science</option>
              <option value="BS Zoology">BS Zoology</option>
              <option value="BS English">BS English</option>
              <option value="BS Mathematics">BS Mathematics</option>
              <option value="BS Economics">BS Economics</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Roll / Registration No. (Optional)
            </label>
            <div className="relative">
              <BadgeCheck className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                placeholder="e.g. 2026-BSCS-042"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min 6 chars"
                  className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Confirm
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter"
                  className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white transition"
                />
              </div>
            </div>
          </div>

          <label className="flex items-start gap-2 pt-1 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 mt-0.5"
            />
            <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              I certify my qualifications comply with university entry eligibility requirements.
            </span>
          </label>

          {error && (
            <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-3 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold text-sm transition shadow-md shadow-blue-500/20"
          >
            Register & View Courses
          </button>
        </form>
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Already registered?{' '}
          <button
            type="button"
            onClick={onNavigateBackToLogin}
            className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Sign In Here
          </button>
        </p>
      </div>
    </div>
  );
};
