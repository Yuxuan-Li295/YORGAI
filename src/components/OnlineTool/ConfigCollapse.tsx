import { css } from "@emotion/css";
import { Collapse } from "components/shared/Collapse";
import { ReactElement, ReactNode, useState } from "react";
import { ReactComponent as ArrowDownFilled } from "resources/img/ArrowDownFilled.svg";
import { ReactComponent as ArrowRightFilled } from "resources/img/ArrowRightFilled.svg";

const ConfigCollapse = ({
  title,
  icon,
  children,
}: {
  icon: ReactElement;
  title: ReactNode;
  children: ReactElement;
}) => {
  const [expand, setExpand] = useState(true);

  return (
    <Collapse
      collapseHeader={
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 20px;
            width: 308px;
          `}
        >
          {icon}
          <div
            className={css`
              display: flex;
              align-items: center;
              gap: 8px;
              flex: 1 0 0;
            `}
          >
            {title}
          </div>
          {expand ? <ArrowDownFilled /> : <ArrowRightFilled />}
        </div>
      }
      collapseBody={
        <div
          className={css`
            margin-top: 14px;
          `}
        >
          {children}
        </div>
      }
      expand={expand}
      setExpand={setExpand}
    />
  );
};

export { ConfigCollapse };
