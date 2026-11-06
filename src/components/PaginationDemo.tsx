function PaginationDemo() {
  return (
    <>
      <h2>Pagination Demo</h2>
      <p>Page 1 of 10</p>
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
        startIndex: 0; endIndex: 9; itemsOnCurrentPage: 10; canPrevPage: false;
        canNextPage: true;
      </div>
    </>
  );
}

export default PaginationDemo;
