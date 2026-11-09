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
  } = usePagination({ totalItems: items.length });
  const pageItems = items.slice(startIndex, endIndex + 1);
  return (
    <section className="card">
      <h2>Pagination Demo</h2>
      <p>
        Page {currentPage} of {totalPages}{" "}
      </p>
      <ul>
        {pageItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
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
