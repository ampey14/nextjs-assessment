import SearchBar from '@/components/SearchBar';
import Sidebar from '../components/Sidebar';
import TablePage from './table';
import TableFilter from '@/components/TableFilter';
import { useState } from 'react';


const Dashboard = () => {
    const [filterType, setFilterType] = useState<string | null>(null);

  return (
    
    <div className="flex min-h-screen bg-gray-50">
    <Sidebar />
    <main className="flex-1">
      <SearchBar />

      <TableFilter onSelectType={setFilterType} />
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Email Finder</h1>
        <div className="flex gap-4 text-gray-600 text-sm border-b pb-2">
          <button className="text-red-500 font-medium">Finder</button>
          <button className="hover:text-red-500">History</button>
        </div>
        <TablePage filterType={filterType} />
]      </div>
    </main>
  </div>
  );
};

export default Dashboard;