import React, { useState } from "react";
import { css } from "@emotion/css";
import { SideBarChatHistoryItem } from "../components/OnlineToolPage/SideBarChatHistoryItem";
import {
  ChatGPTLogo,
  TaskFlowModeLogo,
  MultiTaskModeLogo,
} from "../components/constants/SideBarChatHistoryItemLogos";

const OnlineTools = () => {
  const BasicExampleParams = {
    ...ChatGPTLogo,
    itemIsSelected: true,
    mode: "基础模式",
    title: "新的对话",
    models: ["ChatGPT4.0"],
  };

  const TaskFlowExampleParams = {
    ...TaskFlowModeLogo,
    itemIsSelected: false,
    mode: "任务流模式",
    title: "为什么高考在6月上旬",
    models: ["ChatGPT3.5", "ChatGPT4.0", "Claude"],
  };

  const MultiTaskExampleParams = {
    ...MultiTaskModeLogo,
    itemIsSelected: false,
    mode: "多任务模式",
    title: "为什么有人会不喜欢JellyCat",
    models: ["ChatGPT3.5", "ChatGPT4.0"],
  };

  const [listItems, setListItems] = useState([
    BasicExampleParams,
    TaskFlowExampleParams,
    MultiTaskExampleParams,
  ]);

  const handleItemClick = (index: number) => {
    const updatedListItems = listItems.map((item, i) => ({
      ...item,
      itemIsSelected: i === index,
    }));
    setListItems(updatedListItems);
  };

  return (
    <div
      className={css`
        display: flex;
        width: 280px;
        height: 960px;
        flex-direction: column;
        align-items: flex-start;
        flex-shrink: 0;
        background-color: background: #fbfbfc;
      `}
    >
      <div
        className={css`
          display: flex;
          padding: 16px 12px;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          flex: 1 0 0;
          align-self: stretch;
        `}
      >
        {listItems.map((params, index) => (
          <li
            className={css`
              list-style-type: none;
            `}
            key={index}
            onClick={() => handleItemClick(index)}
          >
            <SideBarChatHistoryItem {...params} />
          </li>
        ))}
      </div>
    </div>
  );
};

export { OnlineTools };
