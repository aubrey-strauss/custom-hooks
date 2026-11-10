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
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
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
      {/* Disable Previous when canPrevPage is false, and Next when canNextPage is false*/}
      <button onClick={prevPage} disabled={!canPrevPage}>
        Previous
      </button>
      <button onClick={nextPage} disabled={!canNextPage}>
        Next
      </button>
      {/*Make the page number buttons real (one for every page) and connect them to setPage*/}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => setPage(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}
      <div>
        startIndex: {startIndex}; endIndex: {endIndex}; itemsOnCurrentPage:{" "}
        {itemsOnCurrentPage}; canPrevPage: {String(canPrevPage)}; canNextPage:{" "}
        {String(canNextPage)};
      </div>
    </section>
  );
}

export default PaginationDemo;
