import { css } from "@emotion/css";
import { BorderlessButton } from "./BorderlessButton";

const ButtonSection = () => {
  const buttonClickHandler = (buttonName: string) => {
    console.log(`${buttonName} button clicked!`);
  };

  const buttonNames = [
    "需求大厅",
    "作品社区",
    "AI 工具",
    "提示词库",
    "数字中控",
  ];

  return (
    <div
      className={css`
        display: flex;
        gap: 36px;
      `}
    >
      {buttonNames.map((buttonName) => (
        <BorderlessButton
          onClick={() => buttonClickHandler(buttonName)}
          key={buttonName}
        >
          {buttonName}
        </BorderlessButton>
      ))}
    </div>
  );
};

export { ButtonSection };
