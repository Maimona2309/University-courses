import React, { useState } from 'react';
import { 
  Smartphone, 
  Code2, 
  Columns, 
  Download, 
  ExternalLink,
  BookOpen,
  Sparkles,
  School
} from 'lucide-react';
import { COURSES_DATA } from './data/courses';
import { AndroidSimulator } from './components/AndroidSimulator';
import { CodeExplorer } from './components/CodeExplorer';

type ViewMode = 'simulator' | 'code' | 'split';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [activeCodeFile, setActiveCodeFile] = useState<string>('CourseScreen.kt');

  const handleOpenCodeFile = (filename: string) => {
    setActiveCodeFile(filename);
    if (viewMode === 'simulator') {
      setViewMode('code');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600/40">
      {/* Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (Clean Nav) - Zone 3 (Primary Action) */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-6 py-3.5 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30">
            <School className="w-5 h-5" />
          </div>
          <span className="text-base font-bold tracking-tight text-white">
            University Courses
          </span>
        </div>

        {/* Zone 2: Navigation Links / Segmented View Selector */}
        <nav className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            type="button"
            onClick={() => setViewMode('simulator')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              viewMode === 'simulator'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Interactive Android App</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              viewMode === 'code'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Kotlin & Studio Code</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('split')}
            className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              viewMode === 'split'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            <span>Split View</span>
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setActiveCodeFile('CourseScreen.kt');
              setViewMode('code');
            }}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Android Studio Guide</span>
          </button>
        </div>
      </header>

      {/* Degree Sub-kicker Banner */}
      <div className="px-6 py-2 bg-slate-900/60 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400 overflow-x-auto">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-slate-300">Degree Programs Included:</span>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>1. BS Computer Science</span>
            <span aria-hidden="true">·</span>
            <span>2. BS Zoology</span>
            <span aria-hidden="true">·</span>
            <span>3. BS English</span>
            <span aria-hidden="true">·</span>
            <span>4. BS Mathematics</span>
            <span aria-hidden="true">·</span>
            <span>5. BS Economics</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] text-blue-400 font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Jetpack Compose · Material 3 · Navigation Compose</span>
        </div>
      </div>

      {/* Main View Area */}
      <main className="flex-1 flex flex-col p-3 md:p-6 overflow-hidden">
        {viewMode === 'simulator' && (
          <div className="flex-1 flex items-center justify-center">
            <AndroidSimulator
              courses={COURSES_DATA}
              onOpenCodeFile={handleOpenCodeFile}
            />
          </div>
        )}

        {viewMode === 'code' && (
          <div className="flex-1 flex flex-col max-w-6xl w-full mx-auto min-h-[680px]">
            <CodeExplorer initialFile={activeCodeFile} />
          </div>
        )}

        {viewMode === 'split' && (
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[720px] max-w-7xl mx-auto w-full items-start">
            {/* Left Column: Android Simulator */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center sticky top-20">
              <AndroidSimulator
                courses={COURSES_DATA}
                onOpenCodeFile={handleOpenCodeFile}
              />
            </div>

            {/* Right Column: Android Studio Code Explorer */}
            <div className="lg:col-span-7 xl:col-span-7 h-[800px] flex flex-col">
              <CodeExplorer initialFile={activeCodeFile} />
            </div>
          </div>
        )}
      </main>

      {/* Quiet Footer */}
      <footer className="py-3 px-6 border-t border-slate-800 text-center text-xs text-slate-500">
        <span>University Courses Android Jetpack Compose Application · Modern Material 3 & Navigation Compose</span>
      </footer>
    </div>
  );
}
