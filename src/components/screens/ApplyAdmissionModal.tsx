import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, FileCheck, School, ArrowRight } from 'lucide-react';
import { Course, StudentUser } from '../../types';

interface ApplyAdmissionModalProps {
  course: Course;
  user: StudentUser | null;
  onClose: () => void;
}

export const ApplyAdmissionModal: React.FC<ApplyAdmissionModalProps> = ({
  course,
  user,
  onClose,
}) => {
  const [applicantName, setApplicantName] = useState(user?.name || 'Sarah Ahmed');
  const [applicantEmail, setApplicantEmail] = useState(user?.email || 'sarah.ahmed@student.edu');
  const [qualification, setQualification] = useState('Intermediate (Pre-Engineering / ICS)');
  const [percentage, setPercentage] = useState('78');
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  const numPercentage = parseFloat(percentage) || 0;
  const isEligible = numPercentage >= 50;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `APP-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppId(generatedId);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-sm w-full p-5 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <School className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Admissions Portal 2026
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Apply for {course.shortName}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Verify your eligibility and submit your academic admission inquiry.
            </p>

            {/* Criteria Box */}
            <div className="my-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-0.5">
                Required Criteria:
              </span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                {course.eligibility}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Applicant Name
                </label>
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Prior Education Qualification
                </label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Intermediate (Pre-Engineering / ICS)">
                    Intermediate (Pre-Engineering / ICS)
                  </option>
                  <option value="Intermediate (Pre-Medical)">Intermediate (Pre-Medical)</option>
                  <option value="Intermediate (General Science / Arts)">
                    Intermediate (General Science / Arts)
                  </option>
                  <option value="A-Levels (Cambridge / Edexcel)">
                    A-Levels (Cambridge / Edexcel)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Marks Obtained (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Live Eligibility Check Alert */}
              <div
                className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 ${
                  isEligible
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300'
                    : 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300'
                }`}
              >
                {isEligible ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                )}
                <span>
                  {isEligible
                    ? 'Score meets the minimum eligibility benchmark for this program.'
                    : 'Score is below recommended 50% cutoff; conditional review may apply.'}
                </span>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5"
              >
                <span>Submit Admission Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Application Inquiry Submitted!
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Your inquiry for <strong>{course.name}</strong> has been registered. The admission office will email details to <strong>{applicantEmail}</strong>.
            </p>

            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <span className="text-[11px] text-slate-400 block uppercase font-mono">
                Tracking Application ID
              </span>
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400 text-sm">
                {appId}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs transition mt-2"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
