import React, { useState } from 'react';
import { X, Scale, ArrowRight, Check } from 'lucide-react';
import { Course } from '../../types';

interface CompareDegreesModalProps {
  courses: Course[];
  initialFirstId?: string;
  onClose: () => void;
  onSelectCourse: (id: string) => void;
}

export const CompareDegreesModal: React.FC<CompareDegreesModalProps> = ({
  courses,
  initialFirstId = 'bs-cs',
  onClose,
  onSelectCourse,
}) => {
  const [firstId, setFirstId] = useState(initialFirstId);
  const [secondId, setSecondId] = useState(
    initialFirstId === 'bs-math' ? 'bs-cs' : 'bs-math'
  );

  const courseA = courses.find((c) => c.id === firstId) || courses[0];
  const courseB = courses.find((c) => c.id === secondId) || courses[3];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full p-5 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-blue-600 mb-1">
          <Scale className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Academic Degree Comparison
          </span>
        </div>
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Compare BS Programs Side-by-Side
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Evaluate eligibility, curriculum subjects, and job prospects between any two degrees.
        </p>

        {/* Dropdown Selectors */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Degree 1</label>
            <select
              value={firstId}
              onChange={(e) => setFirstId(e.target.value)}
              className="w-full text-xs font-semibold px-2.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              {courses.map((c) => (
                <option key={c.id} value={c.id} disabled={c.id === secondId}>
                  {c.shortName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-1">Degree 2</label>
            <select
              value={secondId}
              onChange={(e) => setSecondId(e.target.value)}
              className="w-full text-xs font-semibold px-2.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              {courses.map((c) => (
                <option key={c.id} value={c.id} disabled={c.id === firstId}>
                  {c.shortName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden text-xs">
          {/* Header Row */}
          <div className="grid grid-cols-2 bg-slate-100 dark:bg-slate-800 p-3 font-bold border-b border-slate-200 dark:border-slate-700">
            <div className="text-blue-600 dark:text-blue-400 font-bold">{courseA.shortName}</div>
            <div className="text-amber-600 dark:text-amber-400 font-bold">{courseB.shortName}</div>
          </div>

          {/* Metric 1: Duration & Credits */}
          <div className="grid grid-cols-2 p-3 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Duration</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{courseA.duration}</span>
              <span className="block text-[11px] text-slate-500">{courseA.creditHours} Credits</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Duration</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{courseB.duration}</span>
              <span className="block text-[11px] text-slate-500">{courseB.creditHours} Credits</span>
            </div>
          </div>

          {/* Metric 2: Eligibility */}
          <div className="grid grid-cols-2 p-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
            <div className="pr-2">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">Eligibility</span>
              <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">{courseA.eligibility}</p>
            </div>
            <div className="pl-2">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">Eligibility</span>
              <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">{courseB.eligibility}</p>
            </div>
          </div>

          {/* Metric 3: Top Subjects */}
          <div className="grid grid-cols-2 p-3 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="pr-2">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">Key Subjects</span>
              <ul className="space-y-1">
                {courseA.mainSubjects.slice(0, 4).map((sub, i) => (
                  <li key={i} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-start gap-1">
                    <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pl-2">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">Key Subjects</span>
              <ul className="space-y-1">
                {courseB.mainSubjects.slice(0, 4).map((sub, i) => (
                  <li key={i} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-start gap-1">
                    <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Metric 4: Career Scope */}
          <div className="grid grid-cols-2 p-3 bg-slate-50/50 dark:bg-slate-800/40">
            <div className="pr-2">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">Top Career Roles</span>
              <ul className="space-y-1">
                {courseA.careerOpportunities.slice(0, 3).map((job, i) => (
                  <li key={i} className="text-[11px] text-slate-700 dark:text-slate-300 flex items-start gap-1">
                    <Check className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{job}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pl-2">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">Top Career Roles</span>
              <ul className="space-y-1">
                {courseB.careerOpportunities.slice(0, 3).map((job, i) => (
                  <li key={i} className="text-[11px] text-slate-700 dark:text-slate-300 flex items-start gap-1">
                    <Check className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{job}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* View Details Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectCourse(courseA.id);
            }}
            className="py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold text-xs transition text-center"
          >
            Open {courseA.abbreviation} Screen
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectCourse(courseB.id);
            }}
            className="py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-semibold text-xs transition text-center"
          >
            Open {courseB.abbreviation} Screen
          </button>
        </div>
      </div>
    </div>
  );
};
