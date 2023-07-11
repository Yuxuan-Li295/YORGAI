import React, { useState, useRef } from "react";
import { ReactElement } from "react";
import { css } from "@emotion/css";
import { fill, basis } from "components/constants/colors";

const UserChatItem = ({
  prepend,
  append,
  children,
}: {
  prepend?: ReactElement;
  append?: ReactElement;
  children?: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(children || "");
  const textContainerRef = useRef<HTMLDivElement>(null);

  const handleTextChange = () => {
    if (textContainerRef.current) {
      const updatedText = textContainerRef.current.innerText;
      setEditedText(updatedText);
    }
  };

  const handleSaveClick = () => {
    // Perform save operation with editedText
    console.log("Saving:", editedText);
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <div
        className={css`
          border-bottom: 1px solid ${basis.alt.border_subtle};
          background: ${fill.base.layer_chrome};
          backdrop-filter: blur(30px);
          padding: 20px 0px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          display: flex;
          gap: 8px;
          overflow: hidden;
          position: relative;
          width: 1136px;
          height: 140px;
          box-sizing: border-box;
        `}
      >
        <div
          className={css`
            display: flex;
            padding: 0px 205px;
            align-items: flex-start;
            gap: 20px;
            flex: 1;
          `}
        >
          <div>{prepend}</div>
          <div
            className={css`
              display: flex;
              width: 666px;
              align-items: flex-end;
              gap: 8px;
              display: flex;
              width: 666px;
              flex-direction: column;
              flex-shrink: 0;
              color: ${basis.text_loud};
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
            `}
          >
            {!isEditing ? (
              <div ref={textContainerRef}>{editedText}</div>
            ) : (
              <div
                className={css`
                  width: 666px;
                  height: 100%;
                  resize: none;
                  border: none;
                  background: transparent;
                  color: ${basis.text_loud};
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 20px;
                  outline: none; /* 移除默认的轮廓边框 */
                  /* 添加您希望的样式 */
                  border: 1px solid ${basis.alt.border_subtle};
                  box-shadow: 0 0 2px ${basis.alt.border_subtle};
                `}
                contentEditable={true}
                onBlur={handleTextChange}
              >
                {editedText}
              </div>
            )}
          </div>
          <div onClick={handleSaveClick}>{append}</div>
        </div>
      </div>
    </div>
  );
};

export { UserChatItem };
