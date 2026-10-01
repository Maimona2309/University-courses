import React, { useState } from 'react';
import { 
  School, 
  Search, 
  X, 
  Laptop, 
  Dna, 
  BookOpen, 
  Calculator, 
  TrendingUp, 
  ChevronRight, 
  LogOut, 
  Sparkles, 
  Bookmark, 
  Scale, 
  GraduationCap,
  Clock,
  Layers
} from 'lucide-react';
import { Course, StudentUser } from '../../types';

interface CourseListComposeScreenProps {
  courses: Course[];
  user: StudentUser | null;
  onSelectCourse: (courseId: string) => void;
  onLogout: () => void;
  onOpenCompare: () => void;
}

export const CourseListComposeScreen: React.FC<CourseListComposeScreenProps> = ({
  courses,
  user,
  onSelectCourse,
  onLogout,
  onOpenCompare,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [savedCourses, setSavedCourses] = useState<Set<string>>(new Set(['bs-cs']));

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSavedCourses((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const categories = ['All', 'Computing', 'Natural Sciences', 'Humanities', 'Pure Sciences', 'Social Sciences'];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesQuery =
      course.name.toLowerCase().includes(q) ||
      course.shortName.toLowerCase().includes(q) ||
      course.abbreviation.toLowerCase().includes(q) ||
      course.shortDescription.toLowerCase().includes(q) ||
      course.mainSubjects.some((s) => s.toLowerCase().includes(q)) ||
      course.careerOpportunities.some((c) => c.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  });

  const getDegreeIcon = (iconType: Course['iconType']) => {
    switch (iconType) {
      case 'computer':
        return <Laptop className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'biology':
        return <Dna className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'book':
        return <BookOpen className="w-6 h-6 text-violet-600 dark:text-violet-400" />;
      case 'math':
        return <Calculator className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'economics':
        return <TrendingUp className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      default:
        return <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-y-auto">
      {/* Material 3 TopAppBar */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
            <School className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
              University Courses
            </h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              BS Degree Catalog & Syllabus
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* Compare shortcut */}
          <button
            type="button"
            onClick={onOpenCompare}
            title="Compare BS Degrees"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <Scale className="w-4 h-4" />
          </button>

          {/* Logout */}
          <button
            type="button"
            onClick={onLogout}
            title="Log Out or Switch Student"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Greeting Banner */}
      <div className="px-4 pt-3 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Welcome,</span>
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200">
              {user ? user.name : 'Prospective Student'}
            </h2>
          </div>
          {user?.rollNumber && (
            <span className="text-[10px] font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-md border border-blue-200 dark:border-blue-900">
              {user.rollNumber}
            </span>
          )}
        </div>
      </div>

      {/* Search Bar - Jetpack Compose OutlinedTextField Style */}
      <div className="px-4 py-2">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search degrees, AI, Zoology, Math..."
            className="w-full pl-10 pr-9 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Interactive Category Segmented Bar */}
      <div className="px-4 py-1.5 overflow-x-auto scrollbar-none flex items-center gap-1.5 pb-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[11px] font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results Header */}
      <div className="px-4 py-1 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Programs Found: {filteredCourses.length}</span>
        <button
          onClick={onOpenCompare}
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1"
        >
          <Scale className="w-3.5 h-3.5" /> Compare Degrees
        </button>
      </div>

      {/* LazyColumn of Clickable Degree Cards */}
      <div className="px-4 py-2 space-y-3.5 flex-1 pb-6">
        {filteredCourses.length === 0 ? (
          <div className="py-12 text-center">
            <School className="w-10 h-10 text-slate-400 mx-auto mb-2 opacity-50" />
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              No degree matched "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-blue-600 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredCourses.map((course) => {
            const isBookmarked = savedCourses.has(course.id);
            return (
              <div
                key={course.id}
                onClick={() => onSelectCourse(course.id)}
                role="button"
                tabIndex={0}
                className="group relative text-left w-full bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 active:scale-[0.99] cursor-pointer"
              >
                {/* Top Row: Icon + Title + Bookmark */}
                <div className="flex items-start gap-3">
                  {/* Subject Icon Box */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-inner"
                    style={{ backgroundColor: course.themeColor.bgLight }}
                  >
                    {getDegreeIcon(course.iconType)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider"
                        style={{
                          backgroundColor: course.themeColor.badgeBg,
                          color: course.themeColor.badgeText,
                        }}
                      >
                        {course.abbreviation}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {course.shortName}
                    </h3>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    type="button"
                    onClick={(e) => toggleSave(e, course.id)}
                    className="p-1.5 -mr-1 -mt-1 text-slate-400 hover:text-blue-600 transition"
                    title={isBookmarked ? 'Saved' : 'Bookmark Program'}
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isBookmarked ? 'fill-blue-600 text-blue-600' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Short Description */}
                <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  {course.shortDescription}
                </p>

                {/* Subject Teasers */}
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <Layers className="w-3.5 h-3.5 text-blue-500" />
                    <span>{course.mainSubjects.length} Core Subjects</span>
                    <span>·</span>
                    <span>{course.creditHours} Credits</span>
                  </div>

                  <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
