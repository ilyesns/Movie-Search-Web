import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getDisplayedPages = () => {
    const pages = [];

    if (totalPages <= 6) {
      // Display all pages if total pages are <= 6
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          {/* Previous Button */}
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100 hover:text-gray-700"
              } bg-white border border-gray-300 rounded-s-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              Previous
            </button>
          </li>

          {getDisplayedPages().map((page, index) =>
            typeof page === "number" ? (
              <li key={index}>
                <button
                  onClick={() => onPageChange(page)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    currentPage === page
                      ? "text-blue-600 bg-blue-50 border-blue-300"
                      : "text-gray-500 bg-gray-700 hover:bg-gray-100 hover:text-gray-700"
                  } border border-gray-700   `}
                >
                  {page}
                </button>
              </li>
            ) : (
              <li key={index}>
                <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                  ...
                </span>
              </li>
            )
          )}

          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100 hover:text-gray-700"
              } bg-white border border-gray-300 rounded-e-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
