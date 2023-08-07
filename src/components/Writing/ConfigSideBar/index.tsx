import React, { useState } from 'react';
import { css } from '@emotion/css';
import { basis, fill } from "components/constants/colors";
import { ConfigSideBarHeader } from './ConfigSideBarHeader';
import { ConfigSideBarBadge } from './ConfigSideBarBadge';
import { ReactComponent as ArrowAngleRightMd } from "resources/img/ArrowAngleRightMd.svg";
import { ReactComponent as ArrowAngleDownMd } from "resources/img/ArrowAngleDownMd.svg";
import { MultiLineInputField } from 'components/shared/MultiLineInputField';
import { SingleLineInputField } from 'components/shared/SingleLineInputField';
import { Dropdown } from 'components/shared/Dropdown';
import { Button } from 'components/shared/Button';
import { ReactComponent as Play } from "resources/img/Play.svg";
import { RadioButton } from './RadioButton';

interface ConfigSideBarProps {
  handleIsClicked: (value: boolean) => void;
}

const ConfigSideBar: React.FC<ConfigSideBarProps> = ({ handleIsClicked }) => {

  const sectionStyles = css`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  `;

  const titleStyles = css`
  display: flex;
  width: 308px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: ${basis.text_loud};
  /* Pingfang SC/body/sm/500 - medium */
  font-family: PingFang SC;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  `;

  const optionBoxStyles = css`
  display: flex;
  width: 304px;
  height: 36px;
  padding-left: 4px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: 6px;
  background: ${fill.base.layer_chrome};
  /* dp/loop/basis/1dp */
  box-shadow: 0px 4px 4px -4px rgba(79, 81, 89, 0.32), 0px 2px 5px -2px rgba(79, 81, 89, 0.03), 0px 0px 0px 1px rgba(188, 189, 194, 0.25), 0px 1px 1px 0px rgba(188, 189, 194, 0.20);
  &:hover {
    border: 1px solid transparent;
    background: ${fill.base.layer_chrome};

    /* dp/loop/basis/1dp */
    box-shadow:
    0px 4px 4px -4px rgba(79, 81, 89, 0.32),
    0px 2px 5px -2px rgba(79, 81, 89, 0.03),
    0px 0px 0px 1px rgba(188, 189, 194, 0.25),
    0px 1px 1px 0px rgba(188, 189, 194, 0.20);
  }
  `;

  const arrowRightStyles = css`
  display: flex;
  padding: 0px 12px 0px 4px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  justify-content: flex-end;
  cursor: pointer;
  `;


  return (
    <div
      className={css`
      display: flex;
      width: 356px;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;
      border-right: 1px solid ${basis.border};
      border-radius: 8px 0 0 8px;
      overflow: hidden;
      background: ${basis.bg};
      `}
    >
      <ConfigSideBarHeader handleIsClicked={handleIsClicked}/>
      <div className={sectionStyles}>
        <div className={titleStyles}>
          模型
        </div>
        <div className={optionBoxStyles}>
          <ConfigSideBarBadge variant='model'>
            GPT 3.5
          </ConfigSideBarBadge>
          <ConfigSideBarBadge variant='model'>
            Claude
          </ConfigSideBarBadge>
          <div className={arrowRightStyles}>
            <ArrowAngleRightMd />
          </div>
        </div>
      </div>
      <div className={sectionStyles}>
        <div className={titleStyles}>
          内容
        </div>
        <MultiLineInputField width={308} height={60} value='' placeholder='请输入提示词' />
      </div>
      <div className={sectionStyles}>
        <div className={titleStyles}>
          风格
        </div>
        <Dropdown
          menuItems={['风格1', '风格2', '风格3']}
          setValue={(item: string) => {
            console.log(item);
          }}
        >
          <div
            className={css`
            position: relative;
            `}
          >
            <SingleLineInputField width={308} height={36} value='' placeholder='请选择风格' />
            <div
              className={css`
              position: absolute;
              right: 12px;
              top: 9px;
              display: flex;
              align-items: center;
              width: 18px;
              height: 18px;
              cursor: pointer;
            `}
            >
              <ArrowAngleDownMd />
            </div>
          </div>
        </Dropdown>
      </div>
      <div className={sectionStyles}>
        <div className={titleStyles}>
          知识库
        </div>
        <div className={optionBoxStyles}>
          <ConfigSideBarBadge variant=''>
            知识库1
          </ConfigSideBarBadge>
          <ConfigSideBarBadge variant=''>
            火星电台3.0
          </ConfigSideBarBadge>
          <ConfigSideBarBadge variant='additional'>
            +3
          </ConfigSideBarBadge>
          <div className={arrowRightStyles}>
            <ArrowAngleRightMd />
          </div>
        </div>
      </div>
      <div className={sectionStyles}>
        <div className={titleStyles}>
          语气
        </div>
        <RadioButton size={2} label={["普通", "轻松"]}/>
      </div>
      <div className={sectionStyles}>
        <div className={titleStyles}>
          长度
        </div>
        <RadioButton size={3} label={["短", "中", "长"]}/>
      </div>
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
          style={{ width: "316px", gap: '8px', padding: '12px 16px 12px 12px', borderRadius: '12px' }}
          variant='secondary'
          size='sm'
          prepend={
            <Play
              className={css`
            width: 18px;
            height: 18px;
            flex-shrink: 0;
            `}
            />}
        >
          立即运行
        </Button>
      </div>
    </div>
  );
};

export { ConfigSideBar };