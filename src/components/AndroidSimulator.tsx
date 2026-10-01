import React, { useState } from 'react';
import { 
  Wifi, 
  BatteryMedium, 
  Smartphone, 
  Maximize2, 
  Minimize2, 
  Code2, 
  RotateCcw,
  Sparkles,
  Layers
} from 'lucide-react';
import { Course, StudentUser } from '../types';
import { LoginComposeScreen } from './screens/LoginComposeScreen';
import { RegisterComposeScreen } from './screens/RegisterComposeScreen';
import { CourseListComposeScreen } from './screens/CourseListComposeScreen';
import { CourseDetailComposeScreen } from './screens/CourseDetailComposeScreen';
import { ApplyAdmissionModal } from './screens/ApplyAdmissionModal';
import { CompareDegreesModal } from './screens/CompareDegreesModal';

interface NavEntry {
  screen: 'login' | 'register' | 'courses' | 'course_detail';
  courseId?: string;
}

interface AndroidSimulatorProps {
  courses: Course[];
  onOpenCodeFile?: (filename: string) => void;
}

export const AndroidSimulator: React.FC<AndroidSimulatorProps> = ({
  courses,
  onOpenCodeFile,
}) => {
  // Navigation stack state imitating Jetpack Compose NavHost
  const [navStack, setNavStack] = useState<NavEntry[]>([
    { screen: 'courses' } // Default start at courses so user immediately sees the courses screen, with easy back/login access
  ]);

  const [currentUser, setCurrentUser] = useState<StudentUser | null>({
    name: 'Sarah Ahmed',
    email: 'sarah.ahmed@student.edu',
    rollNumber: 'FA24-BSCS-019',
    interestedDegree: 'BS Computer Science',
  });

  const [showApplyModal, setShowApplyModal] = useState<Course | null>(null);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [usePhoneFrame, setUsePhoneFrame] = useState(true);

  const currentDestination = navStack[navStack.length - 1];

  // Navigation actions matching Jetpack Compose NavController
  const navigate = (screen: NavEntry['screen'], courseId?: string, clearStack = false) => {
    if (clearStack) {
      setNavStack([{ screen, courseId }]);
    } else {
      setNavStack((prev) => [...prev, { screen, courseId }]);
    }
  };

  const popBackStack = () => {
    if (navStack.length > 1) {
      setNavStack((prev) => prev.slice(0, prev.length - 1));
    } else if (currentDestination.screen === 'courses') {
      // If at root of courses, can go to login
      setNavStack([{ screen: 'login' }]);
    }
  };

  const currentCourse = currentDestination.courseId
    ? courses.find((c) => c.id === currentDestination.courseId) || courses[0]
    : null;

  // Map active screen to Kotlin file for quick exploration
  const getCurrentKotlinFile = () => {
    switch (currentDestination.screen) {
      case 'login':
        return 'LoginScreen.kt';
      case 'register':
        return 'RegisterScreen.kt';
      case 'course_detail':
        return 'CourseDetailScreen.kt';
      case 'courses':
      default:
        return 'CourseScreen.kt';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[640px] p-2 md:p-6">
      {/* Top Device Bar Controls */}
      <div className="flex items-center justify-between w-full max-w-[420px] mb-3 px-1 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-slate-200 border border-slate-700 font-mono text-[11px]">
            <Smartphone className="w-3.5 h-3.5 text-blue-400" />
            <span>Pixel 8 · Android 14 API 34</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick jump to active screen code */}
          {onOpenCodeFile && (
            <button
              onClick={() => onOpenCodeFile(getCurrentKotlinFile())}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 transition text-[11px]"
              title={`View ${getCurrentKotlinFile()} source code`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{getCurrentKotlinFile()}</span>
            </button>
          )}

          {/* Toggle Bezel */}
          <button
            onClick={() => setUsePhoneFrame(!usePhoneFrame)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            title={usePhoneFrame ? 'Expand canvas' : 'Show phone frame'}
          >
            {usePhoneFrame ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
          </button>

          {/* Reset app state */}
          <button
            onClick={() => setNavStack([{ screen: 'courses' }])}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            title="Reset to Course List"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Android Device Body Container */}
      <div
        className={`w-full transition-all duration-300 ${
          usePhoneFrame
            ? 'max-w-[400px] h-[780px] rounded-[48px] border-[10px] border-slate-800 dark:border-slate-800 shadow-2xl ring-1 ring-slate-700/50 bg-slate-900 p-1 relative flex flex-col overflow-hidden'
            : 'max-w-[460px] h-[780px] rounded-2xl border border-slate-800 shadow-xl bg-slate-900 flex flex-col overflow-hidden'
        }`}
      >
        {/* Screen Bezel Notch / Camera Punch-hole */}
        {usePhoneFrame && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border border-slate-800/80 z-40 pointer-events-none flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-950/60" />
          </div>
        )}

        {/* Android Status Bar */}
        <div className="h-7 w-full bg-white dark:bg-slate-900 px-6 flex items-center justify-between text-[11px] font-semibold text-slate-800 dark:text-slate-200 select-none z-30 shrink-0">
          <span className="font-mono tracking-tight">4:20</span>
          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
            <span className="text-[10px] font-mono">5G</span>
            <Wifi className="w-3.5 h-3.5" />
            <BatteryMedium className="w-4 h-4" />
          </div>
        </div>

        {/* Active Composable Screen */}
        <div className="flex-1 flex flex-col relative overflow-hidden bg-white dark:bg-slate-900">
          {currentDestination.screen === 'login' && (
            <LoginComposeScreen
              onLoginSuccess={(user) => {
                setCurrentUser(user);
                navigate('courses', undefined, true);
              }}
              onNavigateToRegister={() => navigate('register')}
              onSkipAsGuest={() => {
                setCurrentUser(null);
                navigate('courses', undefined, true);
              }}
            />
          )}

          {currentDestination.screen === 'register' && (
            <RegisterComposeScreen
              onRegisterSuccess={(user) => {
                setCurrentUser(user);
                navigate('courses', undefined, true);
              }}
              onNavigateBackToLogin={popBackStack}
            />
          )}

          {currentDestination.screen === 'courses' && (
            <CourseListComposeScreen
              courses={courses}
              user={currentUser}
              onSelectCourse={(courseId) => navigate('course_detail', courseId)}
              onLogout={() => {
                setCurrentUser(null);
                navigate('login', undefined, true);
              }}
              onOpenCompare={() => setShowCompareModal(true)}
            />
          )}

          {currentDestination.screen === 'course_detail' && currentCourse && (
            <CourseDetailComposeScreen
              course={currentCourse}
              onBackClick={popBackStack}
              onApplyClick={() => setShowApplyModal(currentCourse)}
            />
          )}
        </div>

        {/* Android Home Gesture Pill Indicator */}
        <div className="h-5 w-full bg-white dark:bg-slate-900 flex items-center justify-center shrink-0 z-30">
          <div className="w-32 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>
      </div>

      {/* Interactive Modals */}
      {showApplyModal && (
        <ApplyAdmissionModal
          course={showApplyModal}
          user={currentUser}
          onClose={() => setShowApplyModal(null)}
        />
      )}

      {showCompareModal && (
        <CompareDegreesModal
          courses={courses}
          initialFirstId={currentDestination.courseId || 'bs-cs'}
          onClose={() => setShowCompareModal(false)}
          onSelectCourse={(courseId) => {
            setShowCompareModal(false);
            navigate('course_detail', courseId);
          }}
        />
      )}
    </div>
  );
};
