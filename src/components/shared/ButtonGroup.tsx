import { css } from "@emotion/css";
import React, { useState } from "react";
import { basis, fill, primary } from "components/constants/colors";

interface ButtonGroupProps {
  children: React.ReactNode;
}
function ButtonGroup(props: ButtonGroupProps) {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [prevActiveButton, setPrevActiveButton] = useState<number | null>(null);
  const handleButtonClick = (index: number) => {
    setPrevActiveButton(activeButton);
    setActiveButton(index);
  };
  const childrenCount = React.Children.count(props.children);
  return (
    <div
      className={css`
        display: flex;
      `}
    >
      {React.Children.map(props.children, (child, index) => (
        <div
          className={css`
            width: 104px;
            height: 28px;
            border: 1px solid;
            overflow: hidden;
            border-color: ${basis.border};
            border-top-left-radius: ${index === 0 ? '6px' : '0px'};
            border-bottom-left-radius: ${index === 0 ? '6px' : '0px'};
            border-top-right-radius: ${index === childrenCount - 1 ? '6px' : '0'};
            border-bottom-right-radius: ${index === childrenCount - 1 ? '6px' : '0'};
            margin-right: ${index >= 0 && childrenCount > 2 ? '-1px' : '0'};
            background: ${index === activeButton
              ? basis.bg_subtle // Set the background color for the active button
              : index === prevActiveButton
                ? fill.base.layer_chrome // Set the background color for the previously active button
                : "transparent" // Set the default background color for other buttons
            };
            color: ${index === activeButton
              ? primary.text
              : index === prevActiveButton
                ? basis.text
                : "transparent"
            };
          `}
          onClick={() => handleButtonClick(index)}
        >
          {React.cloneElement(child as React.ReactElement, {
            variant: "selected",
          })}
        </div>
      ))}
    </div>
  );
}

export default ButtonGroup;
