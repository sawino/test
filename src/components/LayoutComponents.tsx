import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  ShieldAlert, 
  Activity, 
  Moon, 
  Sun,
  User, 
  Menu,
  Construction,
  ChevronRight,
  ChevronDown,
  Building2,
  Zap,
  PaintBucket,
  Headphones,
  AlertTriangle,
  ClipboardList,
  Box,
  History,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 h-16 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 flex items-center justify-between px-6 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
          <Construction size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Structura <span className="text-sky-500">Pro</span>
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
            Site Management Suite
          </p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {['Overview', 'Resources', 'Safety Log'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
          >
            {item}
          </a>
        ))}
        <a 
          href="#" 
          className="text-sm font-medium text-sky-600 dark:text-sky-400 border-b-2 border-sky-500 pb-1"
        >
          Progress Management
        </a>
      </nav>

      <div className="flex items-center gap-6">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-700">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 dark:text-white">Alex Thompson</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">Project Manager</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400">
            <User size={20} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export const LeftSidebar = () => {
  const [expanded, setExpanded] = useState<string | null>('Foundation Works');

  const toggleSection = (section: string) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <motion.aside 
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 30 }}
      className="absolute top-20 left-4 w-72 flex flex-col gap-3 z-40 max-h-[calc(100vh-140px)] overflow-y-auto pr-2 scrollbar-hide"
    >
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 dark:border-slate-800 overflow-hidden">
        <button 
          onClick={() => toggleSection('Foundation Works')}
          className={`w-full flex items-center justify-between p-4 border-l-4 transition-colors ${expanded === 'Foundation Works' ? 'bg-sky-50 dark:bg-sky-900/20 border-sky-500' : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
        >
          <div className="flex items-center gap-3">
            <Construction className={expanded === 'Foundation Works' ? "text-sky-600 dark:text-sky-400" : "text-slate-400"} size={20} />
            <span className="text-sm font-bold text-slate-900 dark:text-white">Foundation Works</span>
          </div>
          <motion.div
            animate={{ rotate: expanded === 'Foundation Works' ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} className="text-slate-500" />
          </motion.div>
        </button>
        
        <AnimatePresence>
          {expanded === 'Foundation Works' && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-4 py-2">
                <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-1">
                  <button className="w-full text-left py-1.5 px-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors rounded">
                    Site Clearance
                  </button>
                  
                  <div className="bg-sky-50 dark:bg-sky-900/20 rounded-md overflow-hidden">
                    <button className="w-full text-left py-1.5 px-2 text-xs font-bold text-sky-700 dark:text-sky-300">
                      Excavation Phase 1
                    </button>
                    <div className="pl-4 pb-2 space-y-1">
                      <div className="flex items-center gap-2 py-1 px-2">
                        <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">Deep Soil Analysis</span>
                      </div>
                      <div className="flex items-center gap-2 py-1 px-2">
                        <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                        <span className="text-[11px] font-semibold text-sky-600 dark:text-sky-400">Trench Support Installation</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full text-left py-1.5 px-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors rounded">
                    Rebar Placement
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {[
        { icon: Building2, label: 'Structural Frame' },
        { icon: Zap, label: 'MEP Services' },
        { icon: PaintBucket, label: 'Interior Finishes' }
      ].map((item, idx) => (
        <button 
          key={idx}
          className="w-full flex items-center justify-between p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl shadow-lg border-l-4 border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-all group"
        >
          <div className="flex items-center gap-3">
            <item.icon className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" size={20} />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{item.label}</span>
          </div>
          <ChevronRight size={16} className="text-slate-400" />
        </button>
      ))}
    </motion.aside>
  );
};

export const RightSidebar = () => {
  return (
    <motion.aside 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 30 }}
      className="absolute top-20 right-4 w-80 flex flex-col gap-3 z-40 max-h-[calc(100vh-140px)] overflow-y-auto pl-2 pb-4 scrollbar-hide"
    >
      
      {/* Procedure Specs */}
      <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/20 dark:border-slate-800">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
          <ClipboardList className="text-sky-500" size={18} />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Procedure Specs</h3>
        </div>
        <div className="space-y-3">
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            <span className="font-bold text-slate-900 dark:text-white">Methodology:</span> Standard trenching at 2.5m depth. Ensure safety barriers are compliant with ISO 45001.
          </p>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            Soil stabilization required for Zone B before rebar installation. Check moisture levels daily.
          </p>
          <img 
            alt="Construction detail" 
            className="rounded-md my-2 w-full h-24 object-cover border border-slate-200 dark:border-slate-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIpAFaLh8MVyEB_waeTy5afz4Sgx4Js8OdB09K0A3flfc-saizzwoKGDoJblIewJg3Pz5Qw8QUfKTyK3dASvCmvH5U3RWFXMXnhS_AvAlp1kV2huk-WNc63i-FpBnB4DJfVmkgpHoF-xJ-euff2aFpc8qCq0BjpUA5jZrenVh1N4CtjD-RoFbvzZP4lQmQppNjhsC_RpRBju3PGRLOcPeqO8OxGj5nqIoRA_iruRs5p0WWSb7ndTRZvMyI4t0w7aWCz4B9xuavyNPK"
          />
        </div>
      </div>

      {/* Safety & Risks */}
      <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/20 dark:border-slate-800">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
          <AlertTriangle className="text-orange-500" size={18} />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Safety & Risks</h3>
        </div>
        <ul className="space-y-2">
          <li className="flex gap-2 text-xs leading-relaxed text-red-600 dark:text-red-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
            High groundwater detected in Grid A4.
          </li>
          <li className="flex gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
            Weekly structural integrity check scheduled for Thursday.
          </li>
          <li className="flex gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
            Mandatory hard hats and high-vis vests in active excavation zone.
          </li>
        </ul>
      </div>

      {/* Resources & Logistics */}
      <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/20 dark:border-slate-800">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
          <Box className="text-emerald-500" size={18} />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Resources & Logistics</h3>
        </div>
        <div className="space-y-3">
          <div className="text-xs text-slate-600 dark:text-slate-300">
            Total Rebar needed: 45 Tons. <br/>
            Status: <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded text-[10px] font-bold uppercase">On-site</span>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300">
            Concrete Pump Delivery: <br/>
            <span className="font-mono text-slate-900 dark:text-white">08:00 AM Monday</span>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300">
            Labor Force: <span className="font-semibold text-slate-900 dark:text-white">12 specialized steel fixers</span> assigned.
          </div>
        </div>
      </div>

      {/* Historical Logs */}
      <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/20 dark:border-slate-800">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
          <History className="text-purple-500" size={18} />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Historical Logs</h3>
        </div>
        <div className="space-y-4">
          <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700">
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-900"></div>
            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-0.5">Oct 24 - 14:30</p>
            <p className="text-xs text-slate-700 dark:text-slate-200">Excavation reached target depth for Section A.</p>
          </div>
          <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700">
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-900"></div>
            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-0.5">Oct 23 - 09:15</p>
            <p className="text-xs text-slate-700 dark:text-slate-200">Initial site leveling completed. Inspection passed.</p>
          </div>
        </div>
      </div>

    </motion.aside>
  );
};

export const FooterDashboard = () => {
  return (
    <motion.footer 
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 p-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-50"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-100 dark:bg-sky-900/30 rounded-lg text-sky-600 dark:text-sky-400">
              <Activity size={20} />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Progress Dashboard</h2>
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
            <button className="px-4 py-1.5 rounded-full bg-sky-500 text-white text-[10px] font-bold uppercase shadow-lg shadow-sky-500/20 transition-all">
              Timeline View
            </button>
            <button className="px-4 py-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-[10px] font-bold uppercase transition-colors">
              Resource Graph
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-sky-500"></span>
            <span className="text-slate-600 dark:text-slate-400 font-medium">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600"></span>
            <span className="text-slate-600 dark:text-slate-400 font-medium">Planned</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-400 animate-pulse"></span>
            <span className="text-slate-600 dark:text-slate-400 font-medium">In Progress</span>
          </div>
        </div>
      </div>

      <div className="relative h-24 w-full bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden p-4">
        {/* Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="border-r border-slate-200 dark:border-slate-700/50 h-full"></div>
          ))}
        </div>
        
        {/* Date Labels */}
        <div className="absolute top-2 left-0 w-full flex justify-between px-4 text-[9px] font-mono font-medium text-slate-400 uppercase pointer-events-none z-10">
          <span>Oct 1</span>
          <span>Oct 8</span>
          <span>Oct 15</span>
          <span>Oct 22</span>
          <span>Oct 29</span>
          <span>Nov 5</span>
        </div>

        {/* Bars */}
        <div className="relative z-0 mt-4 flex flex-col gap-3">
          {/* Bar 1 */}
          <div className="relative h-5 w-full bg-slate-200 dark:bg-slate-700/30 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[65%] bg-sky-500 flex items-center px-3 shadow-sm">
              <span className="text-[9px] font-bold text-white uppercase tracking-wider truncate">Foundation: Trenching (65%)</span>
            </div>
            <div className="absolute top-0 left-[65%] h-full w-[15%] bg-orange-400"></div>
          </div>
          
          {/* Bar 2 */}
          <div className="relative h-5 w-full bg-slate-200 dark:bg-slate-700/30 rounded-full overflow-hidden">
            <div className="absolute top-0 left-[30%] h-full w-[40%] bg-sky-200 dark:bg-sky-900/40 flex items-center px-3 border border-sky-300 dark:border-sky-700/50">
              <span className="text-[9px] font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wider truncate opacity-80">Foundation: Rebar (Planned)</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export const FloatingAction = () => {
  return (
    <motion.button 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.6, type: "spring" }}
      className="fixed bottom-32 right-8 w-14 h-14 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 border border-slate-200 dark:border-slate-700 group"
    >
      <Headphones className="text-sky-500 group-hover:text-sky-600" size={24} />
      <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Support
      </span>
    </motion.button>
  );
};
