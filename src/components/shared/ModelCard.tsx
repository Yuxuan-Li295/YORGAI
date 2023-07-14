import { css } from "@emotion/css";
import { CheckBoxOrRadio } from "./CheckBoxOrRadio";
import { basis, white, primary } from "components/constants/colors";
import { TagList } from "components/shared/TagList";
import { ReactElement, useState } from "react";
import { ReactComponent as PinFilled } from "resources/img/PinFilled.svg";
import { SizeKey } from "components/constants/sizes";
import { ContainerColorKey } from "components/constants/colorKeys";

const ModelCard = ({
  title,
  description,
  price,
  tags,
  icon,
}: {
  title: string;
  description: string;
  price: number;
  tags: string[];
  icon: ReactElement;
}) => {
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const handleCardClick = () => {
    setIsRadioSelected(!isRadioSelected);
  };
  const options: string[] = [];
  const [selectedOptions, setSelectedOptions] = useState(options); // Track the selected option
  const handleOptionChange = ({
    type,
    option,
  }: {
    type: "radio";
    option: string;
  }) => {
    setSelectedOptions([option]);
    setIsRadioSelected(true);
  };

  type RadioButton = {
    label: string;
    value: string;
    type: "radio" | "checkbox";
    size: SizeKey;
    colorPattern: Record<ContainerColorKey, string>;
    disabled: boolean;
    name: string;
    id: string;
    onChange: () => void;
  };

  const radioButtonsData: RadioButton[] = [
    {
      label: "",
      value: "option1",
      type: "radio",
      size: "xxs",
      colorPattern: primary,
      disabled: false,
      name: "buttons",
      id: "buttons",
      onChange: () => handleOptionChange({ type: "radio", option: "option1" }),
    },
  ];

  return (
    <div
      className={css`
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 16px;
        gap: 10px;
        border-radius: 8px;
        background-color: ${white};
        border: 1px solid ${isRadioSelected ? "#67cdbc" : basis.border_subtle};
        max-width: 100%;
      `}
      onClick={handleCardClick}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          align-self: stretch;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: flex-start;
            gap: 11px;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              width: 42px;
              height: 42px;
            `}
          >
            {icon}
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 6px;
              flex: 1 0 0;
            `}
          >
            <div
              className={css`
                display: flex;
                align-items: flex-start;
                gap: 6px;
                align-self: stretch;
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  flex: 1 0 0;

                  color: ${basis.text_loud};
                  font-size: 14px;
                  font-weight: 500;
                  line-height: 20px;
                `}
              >
                {title}
              </div>
              <PinFilled
                className={css`
                  width: 14px;
                  height: 14px;
                  fill: ${isRadioSelected ? "#67cdbc" : "#808080"};
                `}
              />
            </div>
            <div
              className={css`
                display: flex;
                height: 16px;
                flex-direction: column;
                align-self: stretch;
              `}
            >
              <span
                className={css`
                  overflow: hidden;
                  color: ${basis.text};
                  white-space: nowrap;
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 16px;
                  display: -webkit-box;
                  -webkit-line-clamp: 1;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                `}
              >
                {description}
              </span>
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            flex: 1 0 0;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              display: flex;
              height: 24px;
              padding: 0px 6px;
              justify-content: center;
              align-items: center;
              gap: 8px;
            `}
          >
            <TagList tags={tags} />
          </div>
          <div
            className={css`
              display: inline-flex;
              height: 24px;
              align-items: center;
              gap: 4px;
              flex: 1 0 0;
              align-self: stretch;
            `}
          >
            <div
              className={css`
                color: ${basis.text};
                font-size: 12px;
                font-weight: 500;
                line-height: 16px;
              `}
            >
              {price}元/1000字
            </div>
          </div>
          {radioButtonsData.map((radioButton, index) => (
            <label key={index}>
              &nbsp;{radioButton.label}&nbsp;
              <CheckBoxOrRadio
                type={radioButton.type}
                size={"xxs"}
                colorPattern={radioButton.colorPattern}
                value={radioButton.value}
                checked={selectedOptions.includes(radioButton.value)}
                disabled={radioButton.disabled}
                name={radioButton.name}
                id={radioButton.id}
                onChange={radioButton.onChange}
              />
            </label>
          ))}
          {/* <CheckBoxOrRadio type="radio" size="xs" colorPattern={primary} disabled= {true} name="buttons" id="buttons" onChange={() => handleOptionChange(radioButton.onChange)}/> */}
        </div>
      </div>
    </div>
  );
};

export { ModelCard };
