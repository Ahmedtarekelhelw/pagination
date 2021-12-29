import React, { useState } from "react";

export default function Pagination({
  postperpage,
  totalposts,
  setCurrentPage,
  currentpage,
}) {
  const [isselected, setIsSelected] = useState(1);
  let paginationNumber = totalposts / postperpage;
  let number = [];
  for (let i = 1; i <= Math.ceil(paginationNumber); i++) {
    number.push(i);
  }

  return (
    <ul className="pagination">
      <li className={currentpage <= 1 ? "page-item disabled" : "page-item"}>
        <a
          className="page-link"
          onClick={() => {
            setCurrentPage(currentpage - 1);
            setIsSelected(currentpage - 1);
          }}
          href="#"
        >
          Previous
        </a>
      </li>
      {number.map((num) => {
        return (
          <li
            key={num}
            className={isselected === num ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              onClick={() => {
                setCurrentPage(num);
                setIsSelected(num);
              }}
              href="#"
            >
              {num}
            </a>
          </li>
        );
      })}
      <li
        className={
          currentpage >= paginationNumber ? "page-item disabled" : "page-item"
        }
      >
        <a
          className="page-link"
          onClick={() => {
            setCurrentPage(currentpage + 1);
            setIsSelected(currentpage + 1);
          }}
          href="#"
        >
          Next
        </a>
      </li>
    </ul>
  );
}
