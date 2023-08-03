import { css } from "@emotion/css";
import { DialogFooter } from "components/Chat/DialogFooter";
import { DialogHeader } from "components/Chat/DialogHeader/DialogHeader";
import { ModelCard } from "components/shared/ModelCard";
import { useState } from "react";
import { ReactComponent as OpenAI } from "resources/img/OpenAI.svg";
import { basis } from "components/constants/colors";

const ChooseModelDialog = () => {
  const [selectedModel, setSelectedModel] = useState(0);

  const cards = (length: number) =>
    Array(length).fill({
      title: "CHATGPT 3.5",
      description: "官方GPT3.5",
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
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  gap: 24px;
                  //   max-width: 1088px;
                `}
              >
                {cards(9).map(
                  ({ title, description, price, tags, icon }, index) => (
                    <div
                      className={css`
                        width: 300px;
                        height: 108px;
                      `}
                    >
                      <ModelCard
                        title={title}
                        description={description}
                        price={price}
                        tags={tags}
                        icon={icon}
                        selected={selectedModel === index}
                        onClick={() => {
                          setSelectedModel(index);
                        }}
                      />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
          <DialogFooter />
        </div>
      </div>
    </div>
  );
};
export { ChooseModelDialog };
