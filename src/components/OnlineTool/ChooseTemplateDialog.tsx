import { css } from "@emotion/css";
import { DialogFooter } from "./DialogFooter";
import { DialogHeader } from "./DialogHeader";
import { TextPromptCard } from "components/Prompt/TextPromptCard";
import { basis } from "components/constants/colors";
import { Button } from "components/shared/Button";
import { useState } from "react";
import { ReactComponent as OpenAI } from "resources/img/OpenAI.svg";
const ChooseTemplateDialog = () => {
  const [selectedModel, setSelectedModel] = useState(0);

  const cards = (length: number) =>
    Array(length).fill({
      title: "角色扮演生成器",
      description:
        "对接GPT3，200万人在用的写作助手。\
      对接GPT3，200万人在用的写作助手。 \
      对接GPT3，200万人在用的写作助手。",
      price: [0.004],
      tags: ["大语言模型"],
      icon: <OpenAI />,
    });

  return (
    <div
      className={css`
        display: flex;
        padding: 24px;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          flex: 1;
          align-items: stretch;
          align-self: stretch;
        `}
      >
        <DialogHeader />
        <div
          className={css`
            display: flex;
            padding-top: 24px;
            flex-direction: column;
            align-items: flex-start;
            background: #fff;
            gap: 10px;
            flex: 1 0 0;
            align-self: stretch;
            border-radius: 0px 0px 6px 6px;
          `}
        >
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: flex-start;
              flex: 1 0 0;
              align-self: stretch;
            `}
          >
            <div
              className={css`
                display: flex;
                justify-content: center;
                align-items: flex-start;
                gap: 24px;
                flex: 1 0 0;
              `}
            >
              <div
                className={css`
                  display: flex;
                  padding: 0px 24px;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 24px;
                  align-self: stretch;
                `}
              >
                <div
                  className={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                  `}
                >
                  {cards(9).map(
                    (
                      { width, height, title, description, price, tags, icon },
                      index,
                    ) => (
                      <div
                        className={css`
                          width: 300px;
                          height: 180px;
                        `}
                        key={index}
                      >
                        <TextPromptCard
                          title={title}
                          intro={description}
                          tags={tags}
                          likeCount={255}
                          runCount={55}
                        />
                      </div>
                    ),
                  )}
                </div>
                pagination
              </div>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              padding: 12px 24px;
              justify-content: space-between;
              align-items: center;
              align-self: stretch;
              border-top: 1px solid ${basis.border_subtle};
            `}
          >
            <div
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
                color: ${basis.text_loud};
                font-family: PingFang SC;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
              `}
            ></div>
            <div
              className={css`
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 12px;
              `}
            >
              <Button variant="secondary">取消</Button>
              <Button variant="primary">选择</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ChooseTemplateDialog };
