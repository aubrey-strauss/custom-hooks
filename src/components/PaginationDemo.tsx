import { usePagination } from "../hooks/usePagination";

function PaginationDemo() {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination({ totalItems: items.length, initialPage: 3 });
  return (
    <section className="card">
      <h2>Pagination Demo</h2>
      <p>
        Page {currentPage} of {totalPages}{" "}
      </p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <button>Previous</button>
      <button>Next</button>
      <button>Page 1</button>
      <button>Page 2</button>
      <button>Page 3</button>
      <div>
        startIndex: {startIndex}; endIndex: {endIndex}; itemsOnCurrentPage:{" "}
        {itemsOnCurrentPage}; canPrevPage: {String(canPrevPage)}; canNextPage:{" "}
        {String(canNextPage)};
      </div>
    </section>
  );
}

export default PaginationDemo;
