import { css } from "@emotion/css";
import { basis, fill } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { UserAvatar } from "components/shared/UserAvatar";
import { Fragment, useEffect, useRef, useState } from "react";
import { ReactComponent as Pencil } from "resources/img/Pencil.svg";

const UserChatItem = ({ children }: { children?: string }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(children || "");

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.style.height = "0px";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, [ref, editedText, isEditing]);

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
        padding: 20px 200px;
        border-bottom: 1px solid ${basis.alt.border_subtle};
        background: ${fill.base.layer};
        overflow: hidden;
        box-sizing: border-box;
      `}
    >
      <UserAvatar size={28} />
      <div
        className={css`
          display: flex;
          width: 100%;
          color: ${basis.text_loud};
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          ${isEditing &&
          css`
            border: 1px solid #67cdbc;
            padding: 10px;
            border-radius: 8px;
          `}
        `}
      >
        {!isEditing ? (
          <Fragment>{editedText}</Fragment>
        ) : (
          <textarea
            ref={ref}
            value={editedText}
            onChange={(e) => {
              setEditedText(e.target.value);
            }}
            className={css`
              flex: 1;
              background-color: none;
              border: none;
              padding: 0;
              margin: 0;
              color: ${basis.text};
              font-family: inherit;
              font-size: 14px;
              font-weight: 500;
              line-height: 20px;
              resize: none;
              overflow: hidden;
              height: 20px;

              &::placeholder {
                color: ${basis.text_subtle};
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
              }

              &:active,
              &:focus {
                border: none;
                outline: none;
              }
            `}
          />
        )}
      </div>
      <div
        className={css`
          margin-top: -4px;
        `}
      >
        <Button
          variant="tertiary"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          <Pencil />
        </Button>
      </div>
    </div>
  );
};

export { UserChatItem };
