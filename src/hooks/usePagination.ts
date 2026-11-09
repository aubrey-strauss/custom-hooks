import { useState } from "react";

//The ? means “optional”: the caller is allowed to leave it out.
// That’s needed for itemsPerPage and initialPage, because they have defaults.
interface UsePaginationOptions {
  totalItems: number;
  itemsPerPage?: number;
  initialPage?: number;
}

export function usePagination({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
}: UsePaginationOptions) {
  // How many pages we need. Math.ceil rounds UP, so leftover items
  // still get their own page (95 items / 10 per page = 9.5 → 10 pages)
  const [currentPage, setCurrentPage] = useState(initialPage);
  return {
    currentPage,
    totalPages,
    //Counting starts at 0, so page 1’s ten items are numbered 0 through 9.
    startIndex: 0,
    endIndex: 9,
    itemsOnCurrentPage: 10,
    setPage: (pageNumber: number) => {},
    nextPage: () => {},
    prevPage: () => {},
    canNextPage: true,
    canPrevPage: false,
  };
}
