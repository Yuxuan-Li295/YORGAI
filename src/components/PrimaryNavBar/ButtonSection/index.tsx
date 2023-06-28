import { css } from "@emotion/css";
import { PrimaryNavBarButton } from "./PrimaryNavBarButton";
import { useNavigate } from "react-router-dom";

const ButtonSection = () => {
  const navigate = useNavigate();

  const buttonClickHandler = (url?: string) => url && navigate(url);

  // FIXME: fill this list up here or lift it as a context
  const buttonNames: [string, string?][] = [
    ["需求大厅"],
    ["作品社区"],
    ["AI 工具", "/tool"],
    ["提示词库", "/prompt/selected"],
    ["数字中控"],
  ];

  return (
    <div
      className={css`
        display: flex;
        gap: 36px;
      `}
    >
      {buttonNames.map(([buttonName, url]) => (
        <PrimaryNavBarButton
          onClick={() => buttonClickHandler(url)}
          key={buttonName}
        >
          {buttonName}
        </PrimaryNavBarButton>
      ))}
    </div>
  );
};

export { ButtonSection };
