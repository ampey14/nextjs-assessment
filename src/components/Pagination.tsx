type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
  
  const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => (
    <div className="flex justify-center space-x-2 my-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-red-500 text-white rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-red-500 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
  
  export default Pagination;
  