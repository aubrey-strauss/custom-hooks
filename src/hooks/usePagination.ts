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
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(initialPage);
  //Counting starts at 0, so page 1’s ten items are numbered 0 through 9
  const startIndex = (currentPage - 1) * itemsPerPage;
  // How many items are on this page (the last page may not be full)
  const itemsOnCurrentPage = Math.min(totalItems - startIndex, itemsPerPage);
  // Index of the last item on this page (-1 because counting starts at 0)
  const endIndex = startIndex + itemsOnCurrentPage - 1;
  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage: (pageNumber: number) => {},
    nextPage: () => {},
    prevPage: () => {},
    canNextPage: true,
    canPrevPage: false,
  };
}
