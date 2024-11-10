import { useState } from 'react';

export default function TableFilter() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setIsDropdownOpen(false);
  };

  const clearFilter = () => {
    setSelectedType(null);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="px-4 py-2 border rounded bg-white hover:bg-gray-100"
      >
        {selectedType ? selectedType : "Filter by Type"}
      </button>

      {isDropdownOpen && (
        <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={() => handleTypeSelect('Single email')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Single email
            </button>
            <button
              onClick={() => handleTypeSelect('Bulk email')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Bulk email
            </button>
          </div>
        </div>
      )}

      {selectedType && (
        <div className="inline-flex items-center px-2 py-1 ml-2 border rounded bg-gray-100">
          {selectedType}
          <button onClick={clearFilter} className="ml-2 text-gray-500 hover:text-red-500">
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
