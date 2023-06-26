import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

type BreadcrumbItem = {
  name: string;
  link?: string;
};

export const Breadcrumb: React.FC<{ items: BreadcrumbItem[] }> = ({
  items,
}) => (
  <div
    className={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      font-family: inherit;
      font-weight: 500;
      line-height: 16px;
      white-space: nowrap;
    `}
  >
    {items.map(({ name, link }, index) => (
      <Fragment key={index}>
        <span>
          {link === undefined ? (
            name
          ) : (
            <Link
              to={link}
              className={css`
                text-decoration: none;

                &,
                &:hover,
                &:active,
                &:focus {
                  color: ${basis.text};
                }
              `}
            >
              {name}
            </Link>
          )}
        </span>
        {index < items.length - 1 && (
          <span
            className={css`
              color: ${basis.text_subtle};
            `}
          >
            /
          </span>
        )}
      </Fragment>
    ))}
  </div>
);
