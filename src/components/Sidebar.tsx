import {
  ClockIcon,
  CreditCardIcon,
  UserIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  selectedSection: string;
  setSection: (section: string) => void;
}

const Sidebar = ({ selectedSection, setSection }: SidebarProps) => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
      <nav className="flex flex-col space-y-2">
        <button
          onClick={() => setSection('dashboard')}
          className={`flex items-center space-x-2 text-left hover:text-gray-300 rounded px-2 py-1 ${selectedSection === 'dashboard' ? 'bg-gray-700' : ''
            }`}
        >
          <UserIcon className="h-5 w-5" />
          <span>Dashboard</span>
        </button>
        <button
          onClick={() => setSection('contact')}
          className={`flex items-center space-x-2 text-left hover:text-gray-300 rounded px-2 py-1 ${selectedSection === 'contact' ? 'bg-gray-700' : ''
            }`}
        >
          <UserCircleIcon className="h-5 w-5" />
          <span>Contact Verifier</span>
        </button>
        <button
          onClick={() => setSection('history')}
          className={`flex items-center space-x-2 text-left hover:text-gray-300 rounded px-2 py-1 ${selectedSection === 'history' ? 'bg-gray-700' : ''
            }`}
        >
          <ClockIcon className="h-5 w-5" />
          <span>History</span>
        </button>
        <button
          onClick={() => setSection('credits')}
          className={`flex items-center space-x-2 text-left hover:text-gray-300 rounded px-2 py-1 ${selectedSection === 'credits' ? 'bg-gray-700' : ''
            }`}
        >
          <CreditCardIcon className="h-5 w-5" />
          <span>Credits</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
