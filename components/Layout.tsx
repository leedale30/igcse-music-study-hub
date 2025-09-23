import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import UserHeader from './UserHeader';
import { syllabusStructure } from '../services/syllabusData';
const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-gray-400 text-center p-4 mt-auto text-sm">
    © {new Date().getFullYear()} IGCSE Music Study Hub. All rights reserved.
  </footer>
);

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <UserHeader onMenuClick={() => setIsSidebarOpen(true)} />
      <div className="flex flex-1 container mx-auto my-4 max-w-screen-xl w-full px-2 sm:px-4">
        <Sidebar structure={syllabusStructure} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main className="flex-1 p-3 sm:p-6 bg-white dark:bg-slate-800 shadow-lg lg:rounded-r-lg overflow-y-auto w-full">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;