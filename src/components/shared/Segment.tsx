import { css } from "@emotion/css";
import React, { useState } from "react";
import { basis, fill } from "components/constants/colors";
import { ReactComponent as Separator } from "resources/img/Separator.svg";

export const Segment = <T extends string>({
  list,
  onChange = () => void 0,
}: {
  list: [T, ...T[]];
  onChange?: (idx: number, item: T) => void;
}) => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div
      className={css`
        display: flex;
        width: 300px;
        padding: 2px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background: ${fill.base.layer_muted};
        box-shadow: 0px 1px 1px 0px rgba(79, 81, 89, 0.06) inset,
          0px 0px 1px 0.5px rgba(79, 81, 89, 0.03) inset;
      `}
    >
      {list.map((item, idx) => (
        <React.Fragment key={item}>
          <div
            className={css`
              display: flex;
              height: 20px;
              padding: 4px 12px;
              justify-content: center;
              align-items: center;
              gap: 10px;
              flex: 1 0 0;
            `}
            style={
              selected === idx
                ? {
                    borderRadius: 6,
                    background: fill.base.layer_on,
                    boxShadow: `box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32), \
                      0px 2px 5px -2px rgba(79, 81, 89, 0.03), \
                      0px 2px 14px -2px rgba(79, 81, 89, 0.12), \
                      0px 0px 0px 1px rgba(188, 189, 194, 0.22), \
                      0px 1px 1px 0px rgba(188, 189, 194, 0.20)`,
                  }
                : {}
            }
            onClick={() => {
              setSelected(idx);
              onChange(idx, item);
            }}
          >
            <span>{item.toString()}</span>
          </div>
          {idx < list.length - 1 && (
            <Separator
              className={css`
                width: 1px;
                height: 16px;
                fill: ${basis.border};
              `}
              style={{
                opacity: selected !== idx && selected !== idx + 1 ? 1 : 0,
              }}
              preserveAspectRatio="none"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
