import type { Meta, StoryFn } from "@storybook/react";
import { Collapse } from "components/shared/Collapse";
import React, { useState } from 'react';
import { ReactComponent as ArrowDownFilled } from "resources/img/ArrowDownFilled.svg";
import { ReactComponent as Help } from "resources/img/Help.svg";
import { ReactComponent as ImageEdit } from "resources/img/ImageEdit.svg";

interface CollapseStoryProps {
  title: string;
  icon?: React.ReactElement;
  helpIcon?: React.ReactElement;
  children: React.ReactNode;
}

const meta: Meta = {
  title: "Components/Collapse",
  component: Collapse,
};

export default meta;

const Template: StoryFn<CollapseStoryProps> = ({ title, icon, helpIcon, children }) => {
  const [isShow, setisShow] = useState(true);

  const collapseHeader = (
    <div
      style={{
        display: 'flex',
        width: '308px',
        height: '20px',
        boxSizing: 'border-box',
        padding: '0',
        alignItems: 'flex-start',
        gap: '20px',
        alignSelf: 'stretch',
        marginBottom: '15px',
      }}
    >
      {icon}
      <div style={{ display: 'flex', width: '228px', height: '20px', boxSizing: 'border-box', alignItems: 'center', gap: '8px', flex: '1 0 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {title}
        </div>
        {helpIcon}
      </div>
      <div onClick={() => setisShow(!isShow)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
        <ArrowDownFilled />
      </div>
    </div>
  );

  const collapseBody = <div>{children}</div>;

  return <Collapse collapseHeader={collapseHeader} collapseBody={collapseBody} isShow={isShow} onToggle={() => setisShow(!isShow)} />;
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  title: "参考图",
  icon: <ImageEdit />,
  helpIcon: <Help />,
  children: "This is an example with both icons.",
};
