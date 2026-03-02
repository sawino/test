import React from 'react';
import { Header, LeftSidebar, RightSidebar, FooterDashboard, FloatingAction } from './components/LayoutComponents';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 overflow-hidden relative">
      <Header />
      
      <main className="relative pt-16 h-screen w-full overflow-hidden">
        {/* Background Map/Canvas Placeholder */}
        <div className="absolute inset-0 z-0 bg-[#8B7E74] dark:bg-[#4a403a]">
           {/* Simulated Map Texture/Pattern */}
           <div className="absolute inset-0 opacity-100" 
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuDrIGFLydyvJs_c7EDjuXqkoLep-dnwsHgtmV_qcoWZvYOZ9gsI_FNosMixhltxRbGV2jyh4ScCWGkJJheD3H9p74iOrtJh2sgp4GSo9OUxjCLFugmB1N4LznKyGM0rhih1JyHmm2r5GnXP_s9Jt2jUhCEgb8xYlYX39OpPuw_-2spfWgsFwm91NC_555E90cj0h8OdKIN0O-xayks9BS4Y2Lzw91e7Kc0hldj2EKB0VGcR0gvaCG4MuXIPuA116kcAm60w-tynTK0g)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
           </div>
        </div>

        <LeftSidebar />
        <RightSidebar />
        <FooterDashboard />
        <FloatingAction />
      </main>
    </div>
  );
}
