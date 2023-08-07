import React, { useState } from 'react';
import { css } from "@emotion/css";
import { ChatInput } from "components/Chat/ChatInput";
import { ChooseTemplateDialog } from "components/Writing/ChooseTemplateDialog";
import { DialogHeader } from "components/Chat/DialogHeader/DialogHeader";
import { SystemChatItem } from "components/Chat/SystemChatItem";
import { UserChatItem } from "components/Chat/UserChatItem";
import { KnowledgeBase } from "components/OnlineTool/KnowledgeBase";
import { basis } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { Fragment } from "react";
import SystemAvatar from "resources/img/SystemAvatar.png";
import { ToolsMode, ToolsNormalModes } from "types/OnlineToolTypes";
import { ConfigSideBar } from "components/Writing/ConfigSideBar";
import { DefaultOutputBox } from "components/Writing/DefaultOutputBox";

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
        <div
          className={css`
            display: flex;
            flex-direction: column;
            flex: 1;
            border-radius: 8px;
            border: 1px solid ${basis.border};
            margin: 12px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              flex: 1;
              & :first-child {
                border-top-right-radius: 8px;
                border-top-left-radius: 8px;
              }
            `}
          >
            <UserChatItem>
              I want you to act as a UX/UI developer. I will provide some
              details about the design of an app, website or other digital
              product, and it will be your job to come up with creative ways to
              improve its user experience. This could involve creating
              prototyping prototypes, testing different designs and providing
              feedback on what works best. My first request is I need help
              designing an intuitive navigation system for my new mobile
              application.
            </UserChatItem>
            <SystemChatItem
              prepend={
                <img
                  className={css`
                    width: 28px;
                    height: 28px;
                  `}
                  src={SystemAvatar}
                  alt="System avatar"
                />
              }
            >
              As a pet behaviorist, I'm here to help you address the aggression
              issues with your German Shepherd. Aggression in dogs can have
              various underlying causes, and it's important to understand the
              root cause before implementing a behavior modification plan. Here
              are the steps we can take to help manage your dog's aggressions.
            </SystemChatItem>
            <DialogHeader />
          </div>
          <ChatInput />
        </div>
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
          <div className={css`width: 356px`}>
            <ConfigSideBar handleIsClicked={handleIsClicked} />
          </div>
          {isClicked ? <ChooseTemplateDialog /> : <DefaultOutputBox />}
        </div>
      ) : mode === ToolsMode.Paint ? (
        <>paint</>
      ) : mode === ToolsMode.Podcast ? (
        <>podcast</>
      ) : (
        <KnowledgeBase />
      )}
    </Fragment>
  );
};

export { OnlineToolBody };
