import { css } from "@emotion/css";
import { Chat } from "components/Chat";
import { ChooseTemplateDialog } from "components/Compose/ChooseTemplateDialog";
import { ConfigSideBar } from "components/Compose/ConfigSideBar";
import { DefaultOutputBox } from "components/Compose/DefaultOutputBox";
import { KnowledgeBase } from "components/KnowledgeBase";
import { ImageResultCard } from "components/Paint/ImageResultCard";
import { basis } from "components/constants/colors";
import { Button } from "components/shared/Button";
import React, { Fragment } from "react";
import { ToolsMode, ToolsNormalModes } from "types/OnlineToolTypes";

const OnlineToolBody = ({
  mode,
  showNormalMode,
  setKnowledgeBaseMode,
}: {
  mode: ToolsMode;
  showNormalMode: (mode: ToolsNormalModes) => void;
  setKnowledgeBaseMode: () => void;
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
        <>
          paint
          <ImageResultCard />
        </>
      ) : mode === ToolsMode.Podcast ? (
        <>podcast</>
      ) : (
        <KnowledgeBase />
      )}
    </Fragment>
  );
};

export { OnlineToolBody };
