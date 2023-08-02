import { css } from "@emotion/css";
import { ChatInputBar } from "./ChatInputBar";
import { fill, basis } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { Radio } from "components/shared/CheckBoxOrRadio";
import React, { useState } from "react";

const ComposeAutoEditSuggestBox = () => {
  const [selectedRadioValue, setSelectedRadioValue] = useState("");

  const handleRadioChange = (value: any) => {
    setSelectedRadioValue((prevValue) => (prevValue === value ? "" : value));
  };

  return (
    <div>
      <div
        className={css`
          width: 890px;
          height: 128px;
          box-sizing: border-box;
          display: flex;
          padding: 16px 20px;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
          border-radius: 12px;
          border: 1px solid ${basis.border};
          background: ${basis.bg};
        `}
      >
        <ChatInputBar />
        <div
          className={css`
            width: 850px;
            height: 32px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            align-self: stretch;
          `}
        >
          <div
            className={css`
              width: 380px;
              height: 28px;
              box-sizing: border-box;
              display: flex;
              align-items: center;
              gap: 32px;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              gap: 24px;
            `}
          >
            <div
              className={css`
                display: flex;
                align-items: flex-start;
                gap: 20px;
                color: ${basis.text_loud};
                font-family: PingFang SC;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
                width: 56px;
              `}
            >
              长度变化
            </div>
            <div
              className={css`
                width: 300px;
                height: 28px;
                box-sizing: border-box;
                display: flex;
                align-items: flex-start;
                gap: 8px;
              `}
            >
              <Button
                variant="tertiary"
                size="sm"
                style={{
                  backgroundColor: `${fill.base.layer_chrome}`,
                  padding: "6px 12px",
                  width: "94.66667px",
                  boxShadow:
                    "0px 4px 4px -4px rgba(79, 81, 89, 0.32), 0px 2px 5px -2px rgba(79, 81, 89, 0.03), 0px 0px 0px 1px rgba(188, 189, 194, 0.25), 0px 1px 1px 0px rgba(188, 189, 194, 0.20)",
                  paddingLeft: "0px",
                }}
                onClick={() => handleRadioChange("option1")}
                prepend={
                  <Radio
                    value="option1"
                    checked={selectedRadioValue === "option1"}
                  />
                }
              >
                不变
              </Button>
              <Button
                variant="tertiary"
                size="sm"
                style={{
                  backgroundColor: `${fill.base.layer_chrome}`,
                  padding: "6px 12px",
                  width: "94.66667px",
                  boxShadow:
                    "0px 4px 4px -4px rgba(79, 81, 89, 0.32), 0px 2px 5px -2px rgba(79, 81, 89, 0.03), 0px 0px 0px 1px rgba(188, 189, 194, 0.25), 0px 1px 1px 0px rgba(188, 189, 194, 0.20)",
                  paddingLeft: "0px",
                }}
                onClick={() => handleRadioChange("option2")}
                prepend={
                  <Radio
                    value="option2"
                    checked={selectedRadioValue === "option2"}
                  />
                }
              >
                更短
              </Button>
              <Button
                variant="tertiary"
                size="sm"
                style={{
                  backgroundColor: `${fill.base.layer_chrome}`,
                  padding: "6px 12px",
                  width: "94.66667px",
                  boxShadow:
                    "0px 4px 4px -4px rgba(79, 81, 89, 0.32), 0px 2px 5px -2px rgba(79, 81, 89, 0.03), 0px 0px 0px 1px rgba(188, 189, 194, 0.25), 0px 1px 1px 0px rgba(188, 189, 194, 0.20)",
                  paddingLeft: "0px",
                }}
                onClick={() => handleRadioChange("option3")}
                prepend={
                  <Radio
                    value="option3"
                    checked={selectedRadioValue === "option3"}
                  />
                }
              >
                更长
              </Button>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              justify-content: flex-end;
              align-items: flex-end;
              gap: 12px;
              width: 116px;
            `}
          >
            <Button variant="secondary" size="sm">
              取消
            </Button>
            <Button variant="primary" size="sm">
              修改
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ComposeAutoEditSuggestBox };
