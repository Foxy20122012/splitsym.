import { useState } from 'react';
import SymbolTableItem from './SymbolTableItem';

const SymbolTable = ({ symbols }) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [showTable, setShowTable] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = symbols.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(symbols.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  let id = indexOfFirstItem;
  const symbolTableItems = currentItems.map((symbol) => {
    id++;
    return <SymbolTableItem key={id} id={id} symbol={symbol} />;
  });

  return (
    
    <div className="border border-gray-800 p-4 mt-4">
      <h2 className="text-xl font-bold mb-2">Symbol Table</h2>
      
      <div className="flex flex-col">
         <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-800 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Symbol
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-center">
                  {symbolTableItems}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <span className="mr-2">Show:</span>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="px-3 py-1 border border-gray-800 rounded-md text-sm font-medium bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="flex items-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
             
              className={`${
                currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-800'
              } text-white px-3 py-1 mr-2 rounded-md disabled:opacity-50`}
              aria-label="Previous"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`${
                  currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-800'
                } text-white px-3 py-1 rounded-md disabled:opacity-50`}
                aria-label="Next"
              >
                Next
              </button>
              <div className="ml-2">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SymbolTable;
  