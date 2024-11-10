// src/pages/table.tsx
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Pagination from '../components/Pagination';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchData } from '../services/api';
import { ApiDataType } from '../types/apiData';
import { format } from "date-fns";

type TablePageProps = {
    filterType: string | null;
  };
  

const TablePage = ({ filterType }: TablePageProps) => {
  const [data, setData] = useState<ApiDataType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

    const filteredData = filterType
    ? data.filter(item => item.body === filterType) // Adjust `item.type` based on your data structure
    : data;


  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const fetchedData = await fetchData(page);
        setData(fetchedData);
      } catch (err) {
        setError('Error loading data');
      } finally {
        setLoading(false);
      }
    };
    loadData();

    console.log("data", data)
  }, [page]);

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-4">
//         {loading ? <LoadingSpinner /> : error ? <p>{error}</p> : (
//           <table className="min-w-full table-auto border-collapse">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 border">ID</th>
//                 <th className="px-4 py-2 border">Title</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr key={item.id}>
//                   <td className="px-4 py-2 border">{item.id}</td>
//                   <td className="px-4 py-2 border">{item.title}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
//       </div>
//     </div>
//   );

// const data = [
//     { source: 'Embermail.ai', result: 'Charlie23@gmail.com', name: 'James Charlie', user: 'Joeburg', credits: '1 unit', type: 'Single email', date: 'Jun 24, 2024', status: 'Validate email' },
//     { source: 'Embermail.ai', result: 'embermail.csv', name: 'James Charlie', user: 'Joeburg', credits: '5 units', type: 'Bulk email', date: 'Jun 24, 2024', status: 'View results' },
//     // More rows here
//   ];

  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full bg-white border">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Source</th>
            <th className="p-4 text-left">Result</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">User</th>
            <th className="p-4 text-left">Credits</th>
            <th className="p-4 text-left">Type</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-4">{item.title}</td>
              <td className="p-4">{item.title}</td>
              <td className="p-4">{item.userId === 1 ? "Daniel Ampey" : "John Doe"}</td>
              <td className="p-4">{item.userId === 1 ? "Daniel Ampey" : "John Doe"}</td>
              <td className="p-4">{item.title?.split(" ").length} units</td>
              <td className="p-4">{item.body?.length > 15 ? "Single Email" : "Bulk Email"}</td>
              <td className="p-4">{format(new Date(), "MMM dd,yyyy")}</td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded ${item.body?.split(" ").length <= 20 ? 'bg-green-100 text-green-600' : item.body?.length > 16 ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
                  {item.body?.split(" ").length <= 20 ? 'VALID' : "INVALID"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />

    </div>
  );
};

export default TablePage;
