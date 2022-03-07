import React from "react";

const Pagination = ({ gotoPrevPage, gotoNextPage }) => {
  return (
    <div>
      {gotoPrevPage && (
        <button className="button" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button className="button" onClick={gotoNextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
