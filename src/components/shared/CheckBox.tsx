import { css } from "@emotion/css";
import { fill, primary } from "components/constants/colors";
import { FC } from "react";
import { ReactComponent as DoneSvg } from "resources/img/Done.svg";

export const CheckBox: FC<{ enabled: boolean; onToggle?: () => void }> = ({
  enabled,
  onToggle,
}) => (
  <span
    className={css`
      display: flex;
      width: 16px;
      height: 16px;
      border-radius: 5px;
    `}
    style={
      enabled
        ? {
            boxShadow: `0px 4px 4px -4px rgba(79, 81, 89, 0.32), 
              0px 2px 5px -2px rgba(79, 81, 89, 0.03), 
              0px 0px 0px 1px #67CDBC, 
              0px 0px 0px 1px rgba(0, 0, 0, 0.10)`,
            backgroundColor: primary.bg_emphasis,
          }
        : {
            boxShadow: `0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 1px rgba(188, 189, 194, 0.25),
              0px 1px 1px 0px rgba(188, 189, 194, 0.2)`,
            backgroundColor: fill.base.layer_on,
          }
    }
    onClick={() => onToggle && onToggle()}
  >
    <DoneSvg style={{ opacity: enabled ? "1" : "0" }} />
  </span>
);
