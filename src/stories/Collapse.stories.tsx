import { css } from "@emotion/css";
import type { Meta, StoryFn } from "@storybook/react";
import { Collapse } from "components/shared/Collapse";
import { useState } from "react";

const meta: Meta = {
  title: "Components/Collapse",
  component: Collapse,
  tags: ["autodocs"],
} satisfies Meta<typeof Collapse>;

export default meta;

const Template: StoryFn<typeof Collapse> = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Collapse
        collapseHeader={
          <div
            className={css`
              border: 1px dashed black;
              padding: 8px;
            `}
          >
            触发区
          </div>
        }
        collapseBody={
          <div
            className={css`
              border: 1px dashed black;
              padding: 8px;
              white-space: nowrap;
            `}
          >
            菜单区
          </div>
        }
        expand={expand}
        setExpand={setExpand}
      />
    </div>
  );
};

export const Example = Template.bind({});
