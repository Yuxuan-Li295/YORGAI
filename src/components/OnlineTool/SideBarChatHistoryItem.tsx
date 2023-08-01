import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { ReactComponent as Pencil } from "resources/img/Pencil.svg";
import { ReactComponent as Trash } from "resources/img/GreyTrash.svg";
import { ReactComponent as DoCheck } from "resources/img/DoCheck.svg";
import { ReactComponent as XLarge } from "resources/img/XLarge.svg";
import WhiteChatBubble from "resources/img/WhiteChatBubble.svg";
import GreyChatBubble from "resources/img/GreyChatBubble.svg";
import RedTrash from "resources/img/RedTrash.svg";
import { ChatHistoryItemTrailContainer } from "./ChatHistoryItemTrailContainer";
import { ChatHistoryItemLogoContainer } from "./ChatHistoryItemLogoContainer";
import { ChatHistoryItemTextFrame } from "./ChatHistoryItemTextFrame";
import { ChatHistoryItemInputContainer } from "./ChatHistoryItemInputContainer";
import { fill } from "../constants/colors";

const BaseStyles = css`
  display: flex;
  width: 244px;
  padding: 8px 4px 8px 12px;
  align-items: center;
  gap: 8px;
  background: ${fill.base.layer_on};
  cursor: pointer;
`;

// when the item is clicked
const SelectedStyles = css`
  ${BaseStyles}
  border-radius: 12px;

  /* el/basis/sm */
  box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
    0px 2px 5px -2px rgba(79, 81, 89, 0.03),
    0px 2px 14px -2px rgba(79, 81, 89, 0.12),
    0px 0px 0px 1px rgba(253, 204, 13, 0.58),
    0px 1px 1px 0px rgba(188, 189, 194, 0.2);
`;

// when the item is not clicked
const RestStyles = css`
  ${BaseStyles}
  border-radius: 8px;

  /* el/basis/sm */
  box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
    0px 2px 5px -2px rgba(79, 81, 89, 0.03),
    0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
    0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
`;

export const SideBarChatHistoryItem = ({
  itemIsSelected,
  displayedLogo,
  logoBackground,
  title,
  leftSubtitle,
  rightSubtitle,
  onTitleChangeCallback,
  handleDeleteChangeCallback,
  handleItemClickCallback,
}: {
  itemIsSelected: boolean;
  displayedLogo: string;
  logoBackground: string;
  title: string;
  leftSubtitle: string;
  rightSubtitle: string;
  onTitleChangeCallback: (newTitle: string) => void;
  handleDeleteChangeCallback: () => void;
  handleItemClickCallback: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [toDelete, setToDelete] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const [originalTitle, setOriginalTitle] = useState(title);
  const [currentLogo, setCurrentLogo] = useState(displayedLogo);
  const [currentBackground, setCurrentBackground] = useState(logoBackground);

  const isOnlyHovered = isHovered && !toDelete && !isEditing; // when user hovers the item
  // and has not clicked the "edit" or "delete" button, this is to show the pencil and trash
  // buttons

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setCurrentTitle(newTitle);
  };

  const handleSubmit = () => {
    setOriginalTitle(currentTitle);
    onTitleChangeCallback(currentTitle);
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setCurrentTitle(originalTitle);
    setIsEditing(!isEditing);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (toDelete) {
      setCurrentBackground("transparent");
      setCurrentLogo(RedTrash);
    } else if (isHovered || isEditing) {
      setCurrentBackground(logoBackground);
      setCurrentLogo(
        logoBackground === "#FFFFFF" || logoBackground === "transparent"
          ? GreyChatBubble
          : WhiteChatBubble,
      );
    } else {
      setCurrentBackground(logoBackground);
      setCurrentLogo(displayedLogo);
    }
  }, [toDelete, isHovered, isEditing]);

  useEffect(() => {
    setOriginalTitle(title);
    setCurrentTitle(title);
  }, [title]);

  return (
    <div
      className={itemIsSelected ? SelectedStyles : RestStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={!toDelete ? handleItemClickCallback : undefined}
    >
      {/* Container */}
      <div
        className={css`
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1 0 0;
        `}
      >
        {/* Lead container */}
        <ChatHistoryItemLogoContainer
          logoBackground={currentBackground}
          logo={currentLogo}
        />

        {/* Middle container */}
        {isEditing ? (
          <ChatHistoryItemInputContainer
            title={currentTitle}
            handleInputChange={handleInputChange}
          />
        ) : (
          <ChatHistoryItemTextFrame
            title={toDelete ? "删除该对话？" : currentTitle}
            leftSubtitle={leftSubtitle}
            rightSubtitle={rightSubtitle}
          />
        )}

        {/* Right container */}
        {isOnlyHovered && (
          <ChatHistoryItemTrailContainer
            LeftIcon={Pencil}
            LeftIconOnClickHandler={() => {
              setIsEditing(!isEditing);
            }}
            RightIcon={Trash}
            RightIconOnClickHandler={() => setToDelete(!toDelete)}
          />
        )}

        {isEditing && (
          <ChatHistoryItemTrailContainer
            LeftIcon={DoCheck}
            LeftIconOnClickHandler={() => {
              handleSubmit();
            }}
            RightIcon={XLarge}
            RightIconOnClickHandler={() => {
              handleCancel();
            }}
          />
        )}

        {toDelete && (
          <ChatHistoryItemTrailContainer
            LeftIcon={DoCheck}
            LeftIconOnClickHandler={() => {
              handleDeleteChangeCallback();
              setToDelete(!toDelete);
            }}
            RightIcon={XLarge}
            RightIconOnClickHandler={() => setToDelete(!toDelete)}
          />
        )}
      </div>
    </div>
  );
};
