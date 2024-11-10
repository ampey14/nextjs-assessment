import { useState } from 'react';
import Link from 'next/link';
import { 
  FiHome, FiMail, FiUsers, FiInbox, FiSettings, 
  FiPhone, FiFilter, FiTool, FiHelpCircle 
} from 'react-icons/fi';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`bg-white border-r h-screen p-4 flex flex-col justify-between transition-width duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
      {/* Sidebar Header */}
      <div>
        <button onClick={toggleSidebar} className="text-gray-600 hover:text-red-500 mb-4">
          {isSidebarOpen ? 'Collapse' : 'Expand'}
        </button>
        <h2 className={`text-xl font-bold mb-6 ${!isSidebarOpen && 'hidden'}`}>Daniels Workspace</h2>
        
        {/* Sidebar Navigation */}
        <nav className="space-y-4">
          <SidebarItem href="/" label="Overview" icon={<FiHome />} isOpen={isSidebarOpen} />
          <SidebarItem href="/" label="Mailboxes" icon={<FiMail />} isOpen={isSidebarOpen} />
          <SidebarItem href="/" label="Contacts" icon={<FiUsers />} isOpen={isSidebarOpen} />
          <SidebarItem href="/" label="Unified Inbox" icon={<FiInbox />} isOpen={isSidebarOpen} />
          
          <div className={`text-sm text-gray-500 mt-4 uppercase ${!isSidebarOpen && 'hidden'}`}>Tools</div>
          <SidebarItem href="/" label="Email Warmer" icon={<FiTool />} isOpen={isSidebarOpen} />
          <SidebarItem href="/" label="Email Finder" icon={<FiFilter />} isOpen={isSidebarOpen} />
          <SidebarItem href="/" label="Email Validator" icon={<FiFilter />} isOpen={isSidebarOpen} />
          <SidebarItem href="/" label="Phone Finder" icon={<FiPhone />} isOpen={isSidebarOpen} />
          <SidebarItem href="/" label="Sequencer" icon={<FiTool />} isOpen={isSidebarOpen} />
          
          <div className={`text-sm text-gray-500 mt-4 uppercase ${!isSidebarOpen && 'hidden'}`}>Support</div>
          <SidebarItem href="/" label="Settings" icon={<FiSettings />} isOpen={isSidebarOpen} />
          <SidebarItem href="/" label="Help Center" icon={<FiHelpCircle />} isOpen={isSidebarOpen} />
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="border-t pt-4">
        <div className={`text-sm text-gray-700 font-semibold flex justify-between ${!isSidebarOpen && 'hidden'}`}>
          <span>Annual Starter Plan</span>
          <span className="text-red-500">197</span>
        </div>
        <button className={`mt-4 w-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 ${!isSidebarOpen && 'hidden'}`}>
          Get more credits
        </button>
      </div>
    </div>
  );
}

interface SidebarItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  isOpen: boolean;
}

function SidebarItem({ href, label, icon, isOpen }: SidebarItemProps) {
  return (
    <Link href={href}>
      <span className="flex items-center p-2 text-gray-600 hover:text-red-500">
        <div className="text-lg">{icon}</div>
        {isOpen && <span className="ml-3">{label}</span>}
      </span>
    </Link>
  );
}
