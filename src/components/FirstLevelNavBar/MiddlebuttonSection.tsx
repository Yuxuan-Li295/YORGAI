import { css } from "@emotion/css";
import { BorderlessButton } from "./Button/BorderlessButton";

const MiddlebuttonSection = () => {
    const buttonClickHandler = (buttonName: string) => {
        console.log(`${buttonName} button clicked!`);
    };

    const buttonNames = ["需求大厅", "作品社区", "AI工具", "提示词库", "数字中控"];

    return (
        <div
            className={css`
          display: flex;
          justify-content: center;
          gap: 20px;
          padding: 4px 0;
        `}
        >
            {buttonNames.map(buttonName => (
                <BorderlessButton onClick={() => buttonClickHandler(buttonName)} key={buttonName}>
                    {buttonName}
                </BorderlessButton>
            ))}
        </div>
    );
};

export { MiddlebuttonSection };
