import React, { useState } from 'react';
import { 
  FolderTree, 
  FileCode, 
  Copy, 
  Check, 
  BookOpen, 
  Terminal, 
  Layers, 
  Cpu, 
  FileText, 
  ExternalLink,
  Info,
  ChevronRight,
  Download
} from 'lucide-react';
import { KOTLIN_PROJECT_FILES, ANDROID_STUDIO_EXPLANATIONS, KotlinFile } from '../data/kotlinCode';

interface CodeExplorerProps {
  initialFile?: string;
}

export const CodeExplorer: React.FC<CodeExplorerProps> = ({ initialFile }) => {
  const [selectedFileName, setSelectedFileName] = useState<string>(
    initialFile || 'CourseScreen.kt'
  );
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'guide'>('code');

  const selectedFile: KotlinFile =
    KOTLIN_PROJECT_FILES.find((f) => f.name === selectedFileName) ||
    KOTLIN_PROJECT_FILES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyAll = () => {
    const allText = KOTLIN_PROJECT_FILES.map(
      (f) => `// ==========================================\n// FILE: ${f.path}\n// ==========================================\n\n${f.code}\n\n`
    ).join('\n');
    navigator.clipboard.writeText(allText);
    alert('All 10 project files copied to clipboard!');
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400">
            Android Studio Giraffe / Ladybug · Kotlin 2.0 · Jetpack Compose
          </span>
        </div>

        {/* Tab Toggle: Code vs Guide */}
        <div className="flex bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition ${
              activeTab === 'code'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Project Source Code
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition ${
              activeTab === 'guide'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Studio Setup & Guide
          </button>
        </div>
      </div>

      {activeTab === 'code' ? (
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0">
          {/* File Tree Sidebar */}
          <div className="w-full md:w-64 bg-slate-950/50 border-r border-slate-800 flex flex-col shrink-0 overflow-y-auto">
            <div className="p-3 border-b border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                <FolderTree className="w-4 h-4 text-blue-400" />
                <span>Project Files</span>
              </span>
              <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">
                {KOTLIN_PROJECT_FILES.length} files
              </span>
            </div>

            <div className="p-2 space-y-1">
              {/* Category: Screens */}
              <div className="text-[10px] font-mono text-slate-500 uppercase px-2 pt-2 pb-1">
                UI Screens (Compose)
              </div>
              {KOTLIN_PROJECT_FILES.filter((f) => f.category === 'screen').map((file) => {
                const isSelected = selectedFileName === file.name;
                return (
                  <button
                    key={file.name}
                    onClick={() => setSelectedFileName(file.name)}
                    className={`w-full text-left flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono transition ${
                      isSelected
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">{file.name}</span>
                  </button>
                );
              })}

              {/* Category: Navigation */}
              <div className="text-[10px] font-mono text-slate-500 uppercase px-2 pt-3 pb-1">
                Navigation
              </div>
              {KOTLIN_PROJECT_FILES.filter((f) => f.category === 'navigation').map((file) => {
                const isSelected = selectedFileName === file.name;
                return (
                  <button
                    key={file.name}
                    onClick={() => setSelectedFileName(file.name)}
                    className={`w-full text-left flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono transition ${
                      isSelected
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{file.name}</span>
                  </button>
                );
              })}

              {/* Category: Data & Model */}
              <div className="text-[10px] font-mono text-slate-500 uppercase px-2 pt-3 pb-1">
                Model & Data Source
              </div>
              {KOTLIN_PROJECT_FILES.filter(
                (f) => f.category === 'model' || f.category === 'data'
              ).map((file) => {
                const isSelected = selectedFileName === file.name;
                return (
                  <button
                    key={file.name}
                    onClick={() => setSelectedFileName(file.name)}
                    className={`w-full text-left flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono transition ${
                      isSelected
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{file.name}</span>
                  </button>
                );
              })}

              {/* Category: Activity & Build */}
              <div className="text-[10px] font-mono text-slate-500 uppercase px-2 pt-3 pb-1">
                Configuration & Entry
              </div>
              {KOTLIN_PROJECT_FILES.filter(
                (f) =>
                  f.category === 'activity' ||
                  f.category === 'gradle' ||
                  f.category === 'manifest' ||
                  f.category === 'theme'
              ).map((file) => {
                const isSelected = selectedFileName === file.name;
                return (
                  <button
                    key={file.name}
                    onClick={() => setSelectedFileName(file.name)}
                    className={`w-full text-left flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono transition ${
                      isSelected
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{file.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Action: Copy All */}
            <div className="p-3 border-t border-slate-800/60 mt-auto">
              <button
                onClick={handleCopyAll}
                className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-2 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Copy Entire Project Code</span>
              </button>
            </div>
          </div>

          {/* Main Code View Area */}
          <div className="flex-1 flex flex-col overflow-hidden min-h-0 bg-slate-950">
            {/* File Header Bar */}
            <div className="px-4 py-2.5 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-mono text-slate-200 flex items-center gap-2 truncate">
                  <span className="text-blue-400 font-semibold">{selectedFile.name}</span>
                  <span className="text-slate-500 text-[11px] truncate">({selectedFile.path})</span>
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                  {selectedFile.description}
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition shadow-xs shrink-0 ml-3"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Code Box */}
            <div className="flex-1 overflow-auto p-4 font-mono text-xs leading-relaxed text-slate-200 bg-slate-950">
              <pre className="selection:bg-blue-600/40">
                <code>{selectedFile.code}</code>
              </pre>
            </div>
          </div>
        </div>
      ) : (
        /* Explanations & Setup Guide View */
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-200">
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span>Complete Android Studio & Jetpack Compose Guide</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Detailed instructions for setting up the University Courses BS Degree application in Android Studio.
              </p>
            </div>

            {/* 1. File Structure */}
            <section className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                <FolderTree className="w-4 h-4" />
                <span>1. Where Each File Should Be Created</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                In Android Studio's <strong>Project</strong> explorer (Android view), organize your code under <code className="text-blue-300">app/src/main/java/com/example/universitycourses/</code>:
              </p>
              <div className="space-y-2 mt-2">
                {ANDROID_STUDIO_EXPLANATIONS.filePlacement.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                    <div className="flex items-center justify-between text-blue-300 font-mono font-semibold">
                      <span>{item.folder}</span>
                      <span className="text-[11px] text-slate-400 font-sans">{item.files.join(', ')}</span>
                    </div>
                    <p className="text-slate-400 text-[11px] mt-1">{item.purpose}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Dependencies */}
            <section className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>2. Required Dependencies (build.gradle.kts)</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Open <code className="text-emerald-300">app/build.gradle.kts</code> and add the following dependencies:
              </p>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300">
                <pre>{ANDROID_STUDIO_EXPLANATIONS.dependenciesExplanation}</pre>
              </div>
            </section>

            {/* 3 & 4. How Navigation Compose Works */}
            <section className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-bold text-purple-400 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>3 & 4. How Navigation Compose is Configured & Operates</span>
              </h3>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-purple-200">
                <pre className="whitespace-pre-wrap">{ANDROID_STUDIO_EXPLANATIONS.navigationExplanation}</pre>
              </div>
            </section>

            {/* 5. How to Run in Android Studio */}
            <section className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>5. Step-by-Step: How to Run the App in Android Studio</span>
              </h3>
              <div className="space-y-2">
                {ANDROID_STUDIO_EXPLANATIONS.howToRunInAndroidStudio.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[11px] shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-slate-300">{step}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
