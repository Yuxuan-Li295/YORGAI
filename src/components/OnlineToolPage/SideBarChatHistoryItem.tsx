import { css } from "@emotion/css";
import { basis } from "../constants/colors";
import { ReactComponent as Separator } from "resources/img/Separator.svg";
import React, { useEffect, useState } from "react";
import { ReactComponent as Pencil } from "resources/img/Pencil.svg";
import { ReactComponent as Trash } from "resources/img/GreyTrash.svg";
import { ReactComponent as DoCheck } from "resources/img/DoCheck.svg";
import { ReactComponent as XLarge } from "resources/img/XLarge.svg";
import { ChatBubbleLogo, TrashLogo } from "./SideBarChatHistoryItemLogos";

const BaseStyles = css`
  display: flex;
  width: 256px;
  padding: 8px 4px 8px 12px;
  align-items: center;
  gap: 8px;
  background: var(--fill-base-layer-on, #fff);
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

const LogoContainer = ({
  logoBackground,
  logo,
}: {
  logoBackground: string;
  logo: string;
}) => {
  return (
    <div
      className={css`
        display: flex;
        width: 28px;
        justify-content: center;
        align-items: center;
        align-self: stretch;
      `}
    >
      {/* App logo container */}
      <div
        className={css`
          width: 28px;
          height: 28px;
          flex-shrink: 0;
        `}
      >
        <div
          className={css`
            width: 28px;
            height: 28px;
            flex-shrink: 0;
            border-radius: 4px;
            border: 0.2px solid
              ${logoBackground === "transparent"
                ? "transparent"
                : basis.border_subtle};
            background: ${logoBackground};
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <img
            className={css`
              width: 20px;
              height: 20px;
              flex-shrink: 0;
            `}
            src={logo}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

const TrailContainer = ({
  LeftIcon,
  LeftIconOnClickHandler,
  RightIcon,
  RightIconOnClickHandler,
}: {
  LeftIcon: React.ComponentType;
  LeftIconOnClickHandler: () => void;
  RightIcon: React.ComponentType;
  RightIconOnClickHandler: () => void;
}) => {
  return (
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
        onClick={LeftIconOnClickHandler}
      >
        <LeftIcon />
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
        onClick={RightIconOnClickHandler}
      >
        <RightIcon />
      </button>
    </div>
  );
};

const InputContainer = ({
  title,
  handleInputChange,
}: {
  title: string;
  handleInputChange: (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => void;
}) => {
  return (
    <div
      className={css`
        width: 138px;
        height: 36px;
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1 0 0;
        border-radius: 6px;
        background: var(--fill-base-layer-chrome, #fff);

        /* dp/loop/primary/3dp */
        box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32),
          0px 2px 5px -2px rgba(79, 81, 89, 0.03),
          0px 0px 0px 3px rgba(253, 204, 13, 0.45),
          0px 0px 0px 1px rgba(253, 204, 13, 0.98),
          0px 1px 1px 0px rgba(188, 189, 194, 0.2);
      `}
    >
      <div
        className={css`
          display: flex;
          padding: 0px 12px;
          align-items: center;
          gap: 8px;
          flex: 1 0 0;
        `}
      >
        <div
          className={css`
            display: flex;
            height: 32px;
            align-items: center;
            gap: 8px;
            flex: 1 0 0;
          `}
        >
          <input
            className={css`
              width: 114px;
              height: 20px;
              border: none;
              outline: none;
              display: flex;
              align-items: center;
              height: 20px;
              flex-direction: column;
              justify-content: center;
              flex: 1 0 0;
              color: ${basis.text_loud};

              /* Pingfang SC/body/xs/400 - regular */
              font-size: 12px;
              font-family: PingFang SC;
              font-style: normal;
              font-weight: 400;
              line-height: 16px;

              &:focus {
                outline: none;
              }
            `}
            type="text"
            defaultValue={title}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

const MiddleTextFrame = ({
  title,
  mode,
  models,
}: {
  title: string;
  mode: string;
  models: string[];
}) => {
  return (
    <div
      className={css`
        width: 138px;
        height: 36px;
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1 0 0;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1 0 0;
        `}
      >
        {/* Top */}
        <div
          className={css`
            display: flex;
            align-items: center;
            align-self: stretch;
          `}
        >
          <span
            className={css`
              width: 138px;
              flex: 1 0 0;
              display: inline-block;
              height: 20px;
              flex-direction: column;
              overflow: hidden;
              color: ${basis.text_loud};
              text-overflow: ellipsis;
              white-space: nowrap;

              /* Pingfang SC/body/sm/500 - medium */
              font-size: 14px;
              font-family: PingFang SC;
              font-style: normal;
              font-weight: 500;
              line-height: 20px;
            `}
          >
            {title}
          </span>
        </div>

        {/* Bottom */}
        <div
          className={css`
            display: flex;
            align-items: center;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              display: flex;
              align-items: center;
              gap: 6px;
              flex: 1 0 0;
              align-self: stretch;
            `}
          >
            <span
              className={css`
                color: ${basis.text};
                text-align: center;

                /* Pingfang SC/body/xs/400 - regular */
                font-size: 12px;
                font-family: PingFang SC;
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
              `}
            >
              {mode === "基础模式" ? "对话" : mode}
            </span>
            <Separator />
            <span
              className={css`
                color: ${basis.text};
                text-align: center;

                /* Pingfang SC/body/xs/400 - regular */
                font-size: 12px;
                font-family: PingFang SC;
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
              `}
            >
              {models.length === 1 ? models[0] : models.length + "个应用"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Renders the chat history item in the sidebar
 * @param itemIsSelected represents whether this item is clicked or not, used to apply outer
 * yellow border
 * @param mode represents the mode this chat history, is "基础模式", "任务流模式", or "多任务模式"
 * @param displayedLogo represents the logo to display, could be an app logo if it is 基础模式, or
 * task flow icon, or multitask icon
 * @param logoBackground represents the background color of the displayed logo, should match the
 * base color of the logo, used to set the background color of the chat bubble so that color matches
 * @param title represents the chat title, is "新的会话" for a new 基础模式, or "新的任务" for a new 任务流模式
 * or 多任务模式
 * @param models represents the models/applications used in the chat
 * @constructor
 */
export const SideBarChatHistoryItem = ({
  itemIsSelected,
  mode,
  displayedLogo,
  logoBackground,
  title,
  models,
}: {
  itemIsSelected: boolean;
  mode: string;
  displayedLogo: string;
  logoBackground: string;
  title: string;
  models: string[];
}) => {
  const [displayItem, setDisplayItem] = useState(true);
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

  const handleInputChange = (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    event.preventDefault();
    setCurrentTitle(event.target.value);
  };

  const handleSubmit = () => {
    setOriginalTitle(currentTitle);
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

  const handleDelete = () => {
    setDisplayItem(!displayItem);
  };

  useEffect(() => {
    if (toDelete) {
      setCurrentBackground("transparent");
      setCurrentLogo(TrashLogo.displayedLogo);
    } else if (isHovered || isEditing) {
      setCurrentBackground(logoBackground);
      setCurrentLogo(ChatBubbleLogo.displayedLogo);
    } else {
      setCurrentBackground(logoBackground);
      setCurrentLogo(displayedLogo);
    }
  }, [toDelete, isHovered, isEditing]);

  if (displayItem) {
    return (
      <div
        className={itemIsSelected ? SelectedStyles : RestStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
          {LogoContainer({
            logoBackground: currentBackground,
            logo: currentLogo,
          })}

          {/* Middle container */}
          {isEditing
            ? InputContainer({
                title: currentTitle,
                handleInputChange: handleInputChange,
              })
            : MiddleTextFrame({
                title: toDelete ? TrashLogo.title : currentTitle,
                mode: mode,
                models: models,
              })}

          {/* Right container */}
          {isOnlyHovered &&
            TrailContainer({
              LeftIcon: Pencil,
              LeftIconOnClickHandler: () => {
                setIsEditing(!isEditing);
              },
              RightIcon: Trash,
              RightIconOnClickHandler: () => setToDelete(!toDelete),
            })}

          {isEditing &&
            TrailContainer({
              LeftIcon: DoCheck,
              LeftIconOnClickHandler: () => {
                handleSubmit();
              },
              RightIcon: XLarge,
              RightIconOnClickHandler: () => {
                handleCancel();
              },
            })}

          {toDelete &&
            TrailContainer({
              LeftIcon: DoCheck,
              LeftIconOnClickHandler: () => {
                handleDelete();
              },
              RightIcon: XLarge,
              RightIconOnClickHandler: () => setToDelete(!toDelete),
            })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
