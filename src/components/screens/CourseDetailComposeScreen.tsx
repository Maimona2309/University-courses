import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  BookOpen, 
  HelpCircle, 
  Building2, 
  FileText, 
  Share2, 
  Download,
  GraduationCap,
  Calendar,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Course } from '../../types';

interface CourseDetailComposeScreenProps {
  course: Course;
  onBackClick: () => void;
  onApplyClick: () => void;
}

export const CourseDetailComposeScreen: React.FC<CourseDetailComposeScreenProps> = ({
  course,
  onBackClick,
  onApplyClick,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'careers'>('overview');
  const [expandedSemester, setExpandedSemester] = useState<number | null>(1);

  return (
    <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-y-auto">
      {/* TopAppBar with Back Button */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-3 py-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBackClick}
            className="p-2 -ml-1 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition"
            aria-label="Back to courses"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
              {course.abbreviation}
            </h1>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">
              Degree Syllabus & Requirements
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            navigator.clipboard?.writeText(window.location.href);
            alert(`Link copied for ${course.shortName}!`);
          }}
          className="p-2 rounded-full text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          title="Share degree program"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </header>

      {/* Main Scrollable Content */}
      <div className="p-4 space-y-4 flex-1 pb-24">
        {/* Hero Card with Degree Details */}
        <div className="rounded-2xl p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{ backgroundColor: course.themeColor.primary }}
          />

          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-md"
              style={{
                backgroundColor: course.themeColor.badgeBg,
                color: course.themeColor.badgeText,
              }}
            >
              {course.abbreviation}
            </span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              {course.category}
            </span>
          </div>

          <h2 className="text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
            {course.name}
          </h2>

          <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="line-clamp-1">{course.department}</span>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-2 text-center">
            <div className="bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl">
              <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                Duration
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {course.duration}
              </span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl">
              <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                Credits
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {course.creditHours} Hours
              </span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-2 rounded-xl">
              <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                Annual Seats
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {course.totalSeats} Students
              </span>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex bg-slate-200/70 dark:bg-slate-800/80 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'overview'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Overview & Eligibility
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('curriculum')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'curriculum'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Main Subjects ({course.mainSubjects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('careers')}
            className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'careers'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Careers & Scope
          </button>
        </div>

        {/* Tab 1: Overview & Eligibility */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Eligibility Requirements */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Admission Eligibility Criteria</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-emerald-50/60 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-200 dark:border-emerald-900/60">
                {course.eligibility}
              </p>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-slate-900 dark:text-white font-bold text-sm">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Program Description</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Program Highlights */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 mb-2.5 text-slate-900 dark:text-white font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Academic Highlights</span>
              </div>
              <ul className="space-y-2">
                {course.keyHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accreditation */}
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>Accreditation Status</span>
              <span className="font-semibold text-slate-700 dark:text-slate-200">
                {course.accreditation}
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Main Subjects & Curriculum */}
        {activeTab === 'curriculum' && (
          <div className="space-y-4">
            {/* Core Subjects List */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Main Course Subjects</span>
              </h3>
              <div className="space-y-2">
                {course.mainSubjects.map((sub, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                  >
                    <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                      {sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Semester-by-Semester Syllabus Accordion */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-violet-600" />
                <span>8-Semester Roadmap</span>
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                Tap each semester to expand syllabus modules.
              </p>

              <div className="space-y-2">
                {course.semesterOutline.map((sem) => {
                  const isOpen = expandedSemester === sem.semester;
                  return (
                    <div
                      key={sem.semester}
                      className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedSemester(isOpen ? null : sem.semester)}
                        className="w-full flex items-center justify-between p-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                      >
                        <span>Semester {sem.semester}</span>
                        <div className="flex items-center gap-2 text-slate-400">
                          <span className="text-[10px] font-normal">{sem.subjects.length} courses</span>
                          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="p-3 bg-white dark:bg-slate-900 space-y-1.5 border-t border-slate-100 dark:border-slate-800">
                          {sem.subjects.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Career Opportunities */}
        {activeTab === 'careers' && (
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                <span>Career Opportunities for {course.abbreviation} Graduates</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Graduates from this program are equipped to pursue competitive professional positions across industry and academia:
              </p>

              <div className="grid grid-cols-1 gap-2.5">
                {course.careerOpportunities.map((career, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 flex items-center gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {career}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60">
              <h4 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-1">
                Career Advisory & Placement Support
              </h4>
              <p className="text-[11px] text-blue-800/80 dark:text-blue-300/80 leading-relaxed">
                The university hosts annual corporate job fairs, on-campus interview drives, and one-on-one resume consultations for all {course.shortName} final-year students.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="sticky bottom-0 z-20 px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-lg">
        <div className="flex-1">
          <span className="text-[10px] uppercase font-semibold text-slate-400">Estimated Tuition</span>
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            {course.tuitionFeePerSemester}
          </p>
        </div>

        <button
          type="button"
          onClick={onApplyClick}
          className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold text-xs transition shadow-md shadow-blue-500/20 flex items-center gap-1.5"
        >
          <GraduationCap className="w-4 h-4" />
          <span>Apply for Admission</span>
        </button>
      </div>
    </div>
  );
};
