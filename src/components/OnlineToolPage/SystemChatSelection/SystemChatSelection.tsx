import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { useState } from "react";
import { ReactComponent as ChatMore } from "resources/img/ChatMore.svg";
import SystemAvatar from "resources/img/SystemAvatar.png";
import { ModelSelect } from "./ModelSelect";
import { SystemChatItem } from "./SystemChatItem";

const SystemChatSelection = () => {
  const [chats, setChats] = useState<{ text: string; name: string }[]>([]);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = (
    text: string,
    name: string,
    isSingleModel = false,
  ) => {
    setIsButtonActive(true);
    if (isSingleModel) {
      setIsButtonActive(false);
      setChats([{ text, name }]);
    } else if (!chats.find((chat) => chat.name === name)) {
      if (chats.length >= 3) {
        setChats((chats) => [...chats.slice(1), { text, name }]);
      } else {
        setChats((chats) => [...chats, { text, name }]);
      }
    }
  };

  const handleAllModelsClick = () => {
    const models = [
      {
        text: "As a pet behaviorist, I'm here to help you address the aggression issues with your German Shepherd. Aggression in dogs can have various underlying causes, and it's important to understand the root cause before implementing a behavior modification plan. Here are the steps we can take to help manage your dog's aggressioness.",
        name: "ChatGPT 4.0",
      },
      {
        text: "As a pet behaviorist, I'm here to help you address the aggression issues with your German Shepherd. Aggression in dogs can have various underlying causes, and it's important to understand the root cause before implementing a behavior modification plan. Here are the steps we can take to help manage your dog's aggressioness. and it's important to understand the root cause before implementing a behavior modification plan. Here are the steps we can take to help manage your dog's aggressioness.and it's important to understand the root cause before implementing a behavior modification plan. Here are the steps we can take to help manage your dog's aggressioness.",
        name: "ChatGPT 3.5",
      },
      {
        text: "As a pet behaviorist, I'm here to help you address the aggression issues with your German Shepherd. Aggression in dogs can have various underlying causes, and it's important to understand the root cause before implementing a behavior modification plan. Here are the steps we can take to help manage your dog's aggressioness.",
        name: "ChatGPT 3.0",
      },
    ];
    models.forEach((model) => {
      if (chats.length < 3) {
        handleButtonClick(model.text, model.name);
      }
    });
  };

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        width: 100%;
        max-width: 1136px;
        padding: 12px 0px;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1090px;
          height: 44px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 12px;
        `}
      >
        <div
          className={css`
            width: 104px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            background: ${basis.alt.bg};
            margin-right: 24px;
          `}
        >
          <button
            onClick={handleAllModelsClick}
            className={css`
              flex-direction: row;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 8px;
              padding: 6px 12px;
              width: auto;
              height: auto;
              border: none;
              background: none;
            `}
          >
            <ChatMore style={{ marginRight: "7px" }} />
            <div
              className={css`
                width: auto;
                height: 20px;
                white-space: nowrap;
                color: ${isButtonActive ? basis.text_loud : basis.icon};
                text-align: center;
                font-family: PingFang SC;
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
              `}
            >
              所有模型
            </div>
          </button>
        </div>
        <div
          className={css`
            width: 2px;
            height: 16px;
            background: ${basis.alt.border};
            margin-right: 16px;
            margin-left: 24px;
          `}
        />

        <ModelSelect
          onClick={() =>
            handleButtonClick(
              "As a pet behaviorist, I'm here to help you address the aggression issues with your German Shepherd. Aggression in dogs can have various underlying causes, and it's important to understand the root cause before implementing a behavior modification plan. Here are the steps we can take to help manage your dog's aggressioness.",
              "ChatGPT 4.0",
              true,
            )
          }
          buttonText="ChatGPT 4.0"
        />
        <div
          className={css`
            margin-right: 24px;
          `}
        />
        <ModelSelect
          onClick={() =>
            handleButtonClick(
              "As a pet behaviorist, I'm here to help you address the aggression issues with your German Shepherd. Aggression in dogs can have various underlying causes, and it's important to understand the root cause before implementing a behavior modification plan. Here are the steps we can take to help manage your dog's aggressioness. and it's important to understand the root cause before implementing a behavior modification plan. Here are the steps we can take to help manage your dog's aggressioness.and it's important to understand the root cause before implementing a behavior modification plan. Here are the steps we can take to help manage your dog's aggressioness.",
              "ChatGPT 3.5",
              true,
            )
          }
          buttonText="ChatGPT 3.5"
        />
        <div
          className={css`
            margin-right: 24px;
          `}
        />
        <ModelSelect
          onClick={() =>
            handleButtonClick(
              "As a pet behaviorist, I'm here to help you address the aggression issues with your German Shepherd. Aggression in dogs can have various underlying causes, and it's important to understand the root cause before implementing a behavior modification plan. Here are the steps we can take to help manage your dog's aggressioness.",
              "ChatGPT 3.0",
              true,
            )
          }
          buttonText="ChatGPT 3.0"
        />
      </div>
      <div
        className={css`
          display: grid;
          grid-template-columns: repeat(${chats.length}, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 1136px;
          margin-left: 12px;
          & > *:not(:last-child)::after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 1px;
            background: ${basis.alt.bg_subtle};
          }
        `}
      >
        {chats.map(({ text, name }) => (
          <SystemChatItem
            prepend={
              <img
                src={SystemAvatar}
                alt="System Avatar"
                style={{ width: "32px", height: "32px" }}
              />
            }
            chatName={name}
          >
            {text}
          </SystemChatItem>
        ))}
      </div>
    </div>
  );
};

export { SystemChatSelection };
