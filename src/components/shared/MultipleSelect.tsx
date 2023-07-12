import React, { useState } from "react";
import { css } from "@emotion/css";
import { basis, fill } from "components/constants/colors";
import { ReactComponent as Xsm } from "resources/img/Xsm.svg";
import { ReactComponent as ArrowAngleRightMd } from "resources/img/ArrowAngleRightMd.svg";

interface Option {
  label: string;
  value: string;
}

interface MultipleSelectProps {
  options?: Option[];
}

const MultipleSelect: React.FC<MultipleSelectProps> = () => {
  const options = [
    {
      label: "知识库",
      value: "知识库",
      children: [
        { label: "Suboption 1-1", value: "suboption1-1" },
        { label: "Suboption 1-2", value: "suboption1-2" },
      ],
    },
    {
      label: "火星电台3.0",
      value: "火星电台3.0",
      children: [
        { label: "Suboption 2-1", value: "suboption2-1" },
        { label: "Suboption 2-2", value: "suboption2-2" },
      ],
    },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
    { label: "Option 5", value: "option5" },
  ];
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionToggle = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleRemoveOption = (value: string) => {
    setSelectedOptions(selectedOptions.filter((option) => option !== value));
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const isOptionSelected = (value: string) => {
    return selectedOptions.includes(value);
  };

  return (
    <div>
      <div>
        <div
          className={css`
            display: flex;
            position: relative;
            width: 308px;
            height: 36px;
            box-sizing: border-box;
            background-color: ${fill.base.layer_chrome};
            align-items: center;
            align-self: stretch;
            gap: 4px;
            flex: 1 0 0;
            padding: 0px 12px 0px 4px;
            border-radius: 6px;
            box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
              0px 2px 5px -2px rgba(79, 81, 89, 0.03),
              0px 0px 0px 1px rgba(188, 189, 194, 0.25),
              0px 1px 1px 0px rgba(188, 189, 194, 0.2);
            &:hover {
              background: ${fill.base.layer_chrome};
              box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
                0px 2px 5px -2px rgba(79, 81, 89, 0.03),
                0px 2px 14px -2px rgba(79, 81, 89, 0.12),
                0px 0px 0px 1px rgba(188, 189, 194, 0.22),
                0px 1px 1px 0px rgba(188, 189, 194, 0.2);
            }
            &:active {
              background: ${fill.base.layer_chrome};
              box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
                0px 2px 5px -2px rgba(79, 81, 89, 0.03),
                0px 0px 0px 3px rgba(253, 204, 13, 0.45),
                0px 0px 0px 1px rgba(253, 204, 13, 0.98),
                0px 1px 1px 0px rgba(188, 189, 194, 0.2);
            }
          `}
          onClick={handleDropdownToggle}
        >
          <div
            className={css`
              display: flex;
              flex: 1 0 0;
              height: 36px;
              padding: 4px 0px;
              align-items: center;
              gap: 2px;
            `}
          >
            {selectedOptions.length > 0 ? (
              <>
                {selectedOptions.slice(0, 2).map((option) => (
                  <div
                    key={option}
                    className={css`
                      display: flex;
                      height: 28px;
                      padding: 1px 6px 0px 6px;
                      justify-content: center;
                      align-items: center;
                      gap: 8px;
                      border-radius: 6px;
                      background: ${basis.alt.bg};
                    `}
                  >
                    {option}
                    <Xsm
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveOption(option);
                      }}
                    />
                  </div>
                ))}
                {selectedOptions.length > 2 && (
                  <div
                    className={css`
                      display: flex;
                      height: 28px;
                      padding: 1px 6px 0px 6px;
                      justify-content: center;
                      align-items: center;
                      gap: 8px;
                      border-radius: 6px;
                      background: ${basis.alt.bg};
                    `}
                  >
                    +{selectedOptions.length - 2}
                  </div>
                )}
              </>
            ) : (
              <div>Select options</div>
            )}
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
            `}
          >
            <ArrowAngleRightMd />
          </div>
        </div>
      </div>
      <div>
        {isOpen && (
          <div>
            {options.map((option) => (
              <div
                key={option.value}
                className={`option ${
                  isOptionSelected(option.value) ? "selected" : ""
                } ${css`
                  cursor: pointer;
                `}`}
                onClick={() => handleOptionToggle(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { MultipleSelect };
