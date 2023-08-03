import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { body } from "components/constants/fonts";
import { Button } from "components/shared/Button";
import { SingleLineInputField } from "components/shared/SingleLineInputField";
import { useState } from "react";
import { ReactComponent as DoCheck } from "resources/img/DoCheck.svg";
import { ReactComponent as Pencil } from "resources/img/Pencil.svg";
import { ReactComponent as SidebarLeftDark } from "resources/img/SidebarLeftDark.svg";
import { ReactComponent as XLarge } from "resources/img/XLarge.svg";
import { ToolsMode } from "types/OnlineToolTypes";

const OnlineToolHeader = ({
  mode,
  isSidebarOpen,
  setIsSidebarOpen,
  handleSelectedItemChange,
  selectedItem,
}: {
  mode: ToolsMode;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  handleSelectedItemChange: (
    newSelectedItem: {
      dayIndex: number;
      itemIndex: number;
      title: string;
    } | null,
  ) => void;
  selectedItem: { dayIndex: number; itemIndex: number; title: string } | null;
}) => {
  const [currentTitle, setCurrentTitle] = useState(selectedItem?.title || "");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid ${basis.alt.border};
        background-color: ${basis.bg_subtle};
        padding: 14px 24px;
        align-items: center;
      `}
    >
      <Button
        variant="tertiary"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <SidebarLeftDark />
      </Button>
      {mode === ToolsMode.Home ? (
        <span
          className={css`
            flex: 100vw 0 1;
            text-align: center;
            line-height: 20px;
            font-family: inherit;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
            color: ${basis.text_loud};
          `}
        >
          在线工具主页
        </span>
      ) : mode === ToolsMode.Chat ? (
        <>
          {!isEditing && (
            <div
              className={css`
                display: flex;
                flex: 100vw 0 1;
                text-align: center;
                align-items: center;
                justify-content: center;
                gap: 16px;
              `}
            >
              <div
                className={css`
                  height: 20px;
                `}
              >
                <div
                  className={css`
                    display: inline-flex;
                    align-items: center;
                    gap: 16px;
                  `}
                >
                  <span
                    className={css`
                      color: ${basis.text_loud};
                      text-align: center;
                      ${body.sm.regular}
                    `}
                  >
                    {selectedItem?.title || "新的会话"}
                  </span>
                  <button
                    className={css`
                      height: 20px;
                      border: none;
                      background: none;
                      outline: none;
                      cursor: pointer;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    `}
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Pencil />
                  </button>
                </div>
              </div>
            </div>
          )}
          {isEditing && (
            <div
              className={css`
                display: flex;
                flex: 100vw 0 1;
                text-align: center;
                align-items: center;
                justify-content: center;
                gap: 16px;
              `}
            >
              <SingleLineInputField
                value={selectedItem?.title}
                disabled={false}
                error={false}
                fontStyles={body.sm.regular}
                width={200}
                height={32}
                onChange={(event) => setCurrentTitle(event.target.value)}
              />
              <div
                className={css`
                  display: flex;
                  height: 20px;
                  justify-content: center;
                  align-items: center;
                  gap: 2px;
                `}
              >
                <button
                  className={css`
                    border: none;
                    background: none;
                    outline: none;
                    cursor: pointer;
                    display: flex;
                    padding: 4px 6px;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    border-radius: 6px;
                  `}
                  onClick={() => {
                    if (selectedItem) {
                      handleSelectedItemChange({
                        ...selectedItem,
                        title: currentTitle,
                      });
                      setIsEditing(!isEditing);
                    }
                  }}
                >
                  <DoCheck />
                </button>
                <button
                  className={css`
                    border: none;
                    background: none;
                    outline: none;
                    cursor: pointer;
                    display: flex;
                    padding: 4px 6px;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    border-radius: 6px;
                  `}
                  onClick={() => {
                    setCurrentTitle(selectedItem?.title || "");
                    setIsEditing(!isEditing);
                  }}
                >
                  <XLarge />
                </button>
              </div>
            </div>
          )}
        </>
      ) : mode === ToolsMode.Compose ? (
        <></>
      ) : mode === ToolsMode.Paint ? (
        <></>
      ) : mode === ToolsMode.Podcast ? (
        "podcast mode"
      ) : (
        <span
          className={css`
            flex: 100vw 0 1;
            text-align: center;
            line-height: 20px;
            font-family: inherit;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
            color: ${basis.text_loud};
          `}
        >
          我的知识库
        </span>
      )}
      <div
        className={css`
          width: 32px;
          min-width: 32px;
        `}
      />
    </div>
  );
};

export { OnlineToolHeader };
