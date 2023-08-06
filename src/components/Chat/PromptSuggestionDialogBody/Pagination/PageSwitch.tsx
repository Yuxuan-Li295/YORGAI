import { css } from "@emotion/css";
import { ReactElement, useState } from "react";
import { basis } from "components/constants/colors";

interface PageSwitchProps {
  pages: number;
}

const PageSwitch = ({ pages }: PageSwitchProps): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);

  const MAX_ITEMS = 6;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pages;

  let startPage = 1;
  let endPage = pages;
  let middleVisiblePages = 4;

  if (pages <= MAX_ITEMS) {
    startPage = 1;
    endPage = pages;
  } else if (currentPage <= middleVisiblePages - 1) {
    startPage = 1;
    endPage = middleVisiblePages;
  } else if (currentPage >= pages - middleVisiblePages + 1) {
    startPage = pages - middleVisiblePages;
    endPage = pages - 1;
  } else {
    startPage = currentPage - Math.floor((middleVisiblePages - 2) / 2);
    endPage = currentPage + Math.floor((middleVisiblePages - 2) / 2);
  }

  const range = (start: number, end: number): number[] =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const ellipsisStyle = css`
    margin-right: 8px;
  `;

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        gap: 8px;
        width: auto;
        height: 28px;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
      `}
    >
      <span
        className={css`
          color: ${basis.text}};
          cursor: ${isFirstPage ? "default" : "pointer"};
        `}
        onClick={() => !isFirstPage && setCurrentPage(currentPage - 1)}
      >
        上一页
      </span>

      {startPage > 1 && <span className={ellipsisStyle}>...</span>}

      {range(startPage, endPage).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={css`
            width: 28px;
            height: 28px;
            background: none;
            border: none;
            cursor: pointer;
            text-align: center;
            color: ${page === currentPage
              ? "var(--primary-text, rgba(204, 139, 4, 0.90))"
              : "black"};
          `}
        >
          {page}
        </button>
      ))}

      {endPage < pages - 1 && <span className={ellipsisStyle}>...</span>}
      {endPage !== pages && <span className={ellipsisStyle}>{pages}</span>}

      <span
        className={css`
          color: ${basis.text}};
          cursor: ${isLastPage ? "default" : "pointer"};
        `}
        onClick={() => !isLastPage && setCurrentPage(currentPage + 1)}
      >
        下一页
      </span>
    </div>
  );
};

export { PageSwitch };
