import { css } from "@emotion/css";
import { Chat } from "components/Chat";
import { ChooseTemplateDialog } from "components/Compose/ChooseTemplateDialog";
import { ConfigSideBar } from "components/Compose/ConfigSideBar";
import { DefaultOutputBox } from "components/Compose/DefaultOutputBox";
import { KnowledgeBase } from "components/KnowledgeBase";
import { ImageResultCard } from "components/Paint/ImageResultCard";
import { PatingSideBar } from "components/Paint/PaintingSideBar";
import { basis } from "components/constants/colors";
import { Button } from "components/shared/Button";
import React, { Fragment } from "react";
import { ToolsMode, ToolsNormalModes } from "types/OnlineToolTypes";

const OnlineToolBody = ({
  mode,
  showNormalMode,
  setKnowledgeBaseMode,
  isPaintbarOpen,
}: {
  mode: ToolsMode;
  showNormalMode: (mode: ToolsNormalModes) => void;
  setKnowledgeBaseMode: () => void;
  isPaintbarOpen: boolean;
}) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleIsClicked = (value: boolean) => {
    setIsClicked(value);
  };

  return (
    <Fragment>
      {mode === ToolsMode.Home ? (
        <div
          className={css`
            flex: 1;
            border-radius: 8px;
            border: 1px solid ${basis.border};
            margin: 12px;
          `}
        >
          <div
            className={css`
              display: flex;
              & > * {
                margin: 20px;
              }
            `}
          >
            <Button onClick={() => showNormalMode(ToolsMode.Chat)}>对话</Button>
            <Button onClick={() => showNormalMode(ToolsMode.Compose)}>
              写作
            </Button>
            <Button onClick={() => showNormalMode(ToolsMode.Paint)}>
              绘画
            </Button>
            <Button onClick={() => setKnowledgeBaseMode()}>知识库</Button>
          </div>
        </div>
      ) : mode === ToolsMode.Chat ? (
        <Chat />
      ) : mode === ToolsMode.Compose ? (
        <div
          className={css`
            display: flex;
            flex-direction: row;
            flex: 1;
            border-radius: 8px;
            border: 1px solid ${basis.border};
            margin: 12px;
          `}
        >
          <ConfigSideBar handleIsClicked={handleIsClicked} />
          {isClicked ? <ChooseTemplateDialog /> : <DefaultOutputBox />}
        </div>
      ) : mode === ToolsMode.Paint ? (
        <div
          className={css`
            display: flex;
            flex: 1;
            border-radius: 8px;
            border: 1px solid ${basis.border};
            margin: 12px;
          `}
        >
          <div
            className={css`
              ${isPaintbarOpen
                ? `width: 356px;`
                : "width: 0px; overflow: hidden;"};
              transition: width 0.3s ease-in-out;
              flex-shrink: 0;
            `}
          >
            <PatingSideBar isPaintbarOpen={isPaintbarOpen} />
          </div>
          <div
            className={css`
              margin-left: ${isPaintbarOpen ? "85px" : "0px"};
              flex: 1;
              display: flex;
              flex-direction: column;
            `}
          >
            paint
            <ImageResultCard />
          </div>
        </div>
      ) : mode === ToolsMode.Podcast ? (
        <>podcast</>
      ) : (
        <KnowledgeBase />
      )}
    </Fragment>
  );
};

export { OnlineToolBody };
