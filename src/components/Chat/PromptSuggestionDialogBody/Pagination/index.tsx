import { css } from "@emotion/css";
import { PageDisplay } from "./PageDisplay";
import { PageSwitch } from "./PageSwitch";

const Pagination = () => {
  const totalPages = 2077;
  const PageCount = 32;

  return (
    <div
      className={css`
        width: 100%;
        max-width: 1012px;
        height: auto;
        min-height: 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 36px;
      `}
    >
      <PageDisplay totalNumber={totalPages} />
      <PageSwitch pages={PageCount} />
    </div>
  );
};

export { Pagination };
