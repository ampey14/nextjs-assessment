export default function SearchBar() {
    return (
      <div className="flex items-center gap-4 p-4 border-b bg-white">
        <input
          type="text"
          placeholder="Search EmberMail"
          className="flex-1 px-4 py-2 border rounded-md outline-none"
        />
        <button className="bg-gray-100 p-2 rounded-md text-gray-600 hover:bg-gray-200">Sample file</button>
        <button className="bg-gray-100 p-2 rounded-md text-gray-600 hover:bg-gray-200">+ Type</button>
      </div>
    );
  }