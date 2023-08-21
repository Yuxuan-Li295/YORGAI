import { css } from "@emotion/css";
import { basis, zinc } from "components/constants/colors";
import { body } from "components/constants/fonts";
import { Button } from "components/shared/Button";
import { Collapse } from "components/shared/Collapse";
import { FileUploadBox } from "components/shared/FileUploadBox";
import React, { useState } from "react";
import { ReactComponent as ArrowDownFilled } from "resources/img/ArrowDownFilled.svg";
import { ReactComponent as Help } from "resources/img/Help.svg";
import { ReactComponent as ImageEdit } from "resources/img/ImageEdit.svg";
import { ReactComponent as KeyBoardBots } from "resources/img/KeyboardBots.svg";
import { ReactComponent as Message } from "resources/img/Message.svg";
import { ReactComponent as Offline } from "resources/img/Offline.svg";
import { ReactComponent as Play } from "resources/img/Play.svg";
import { ConfigSideBarHeader } from "../../Compose/ConfigSideBar/ConfigSideBarHeader";
import { ConfigSideBarImage } from "./ConfigSideBarImage";
import { ConfigSideBarPrompt } from "./ConfigSideBarPrompt";
import { ConfigSideBarSetting } from "./ConfigSideBarSetting";
import { GraphSetting } from "./GraphSetting";
import { PromptSetting } from "./PromptSetting";

const referenceImageStyle = body.sm.medium;

const PatingSideBar = ({
  isSidebarOpen = true,
}: {
  isSidebarOpen?: boolean;
}) => {
  const sidebarStyles = css`
    position: relative;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 64px - 1px);
    flex: ${isSidebarOpen ? "280px" : "0px"} 0 0;
    background: ${zinc[25]};
    border-right: 1px solid ${basis.border_subtle};
    overflow-y: auto;
    transition: flex-basis 0.3s ease-in-out;
    box-sizing: border-box;
    border-radius: 8px 0 0 8px;
  `;

  const [isShow, setisShow] = useState(false);

  const handleIsClicked = (value: boolean) => {
    console.log(value);
  };

  const collapseWrapperStyles = css`
    padding-left: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid ${basis.border};
    padding-bottom: 16px;
  `;

  const [expand, setExpand] = useState(false);

  const collapseHeader = (
    <div
      style={{
        display: "flex",
        width: "308px",
        height: "20px",
        boxSizing: "border-box",
        padding: "0",
        alignItems: "flex-start",
        gap: "20px",
        alignSelf: "stretch",
        marginBottom: "15px",
      }}
    >
      <div>
        <ImageEdit />
      </div>

      <div
        style={{
          display: "flex",
          width: "228px",
          height: "20px",
          boxSizing: "border-box",
          alignItems: "center",
          gap: "8px",
          flex: "1 0 0",
        }}
      >
        <div
          className={referenceImageStyle}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          参考图
        </div>
        <Help />
      </div>
      <div
        onClick={() => setisShow(!isShow)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <ArrowDownFilled />
      </div>
    </div>
  );

  const [promptSliderValue, setPromptSliderValue] = React.useState(0);
  const [imageSliderValue, setImageSliderValue] = React.useState(0);

  const handleFileInput = (file: File) => {
    console.log(file);
  };

  const collapseBody = (
    <div>
      <FileUploadBox handleFileInput={handleFileInput} />
    </div>
  );

  return (
    <div className={sidebarStyles}>
      <ConfigSideBarHeader handleIsClicked={handleIsClicked} />
      <ConfigSideBarPrompt Icon1={Message} Icon2="*" placeholder="Placeholder">
        提示词
      </ConfigSideBarPrompt>
      <ConfigSideBarPrompt
        Icon1={Offline}
        Icon2={Help}
        placeholder="Placeholder"
      >
        反向提示词
      </ConfigSideBarPrompt>
      <ConfigSideBarImage
        Icon={KeyBoardBots}
        min={0}
        max={100}
        value={imageSliderValue}
        onChange={setImageSliderValue}
      />
      <div className={collapseWrapperStyles}>
        <Collapse
          collapseHeader={collapseHeader}
          collapseBody={collapseBody}
          expand={expand}
          setExpand={setExpand}
        />
      </div>

      <div className={collapseWrapperStyles}>
        <ConfigSideBarSetting>
          <div>
            <GraphSetting />
          </div>
        </ConfigSideBarSetting>
      </div>
      <PromptSetting
        min={0}
        max={100}
        value={promptSliderValue}
        onChange={setPromptSliderValue}
      />
      <div
        className={css`
          display: flex;
          padding: 16px 20px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          align-self: stretch;
        `}
      >
        <Button
          style={{
            width: "316px",
            gap: "8px",
            padding: "12px 16px 12px 12px",
            borderRadius: "12px",
          }}
          variant="secondary"
          size="sm"
          prepend={
            <Play
              className={css`
                width: 18px;
                height: 18px;
                flex-shrink: 0;
              `}
            />
          }
        >
          立即运行
        </Button>
      </div>
    </div>
  );
};

export { PatingSideBar };
