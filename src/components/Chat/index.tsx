import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import SystemAvatar from "resources/img/SystemAvatar.png";
import { ChatInput } from "./ChatInput";
import { SystemChatItem } from "./SystemChatItem";
import { SystemChatSelection } from "./SystemChatSelection";
import { UserChatItem } from "./UserChatItem";

const Chat = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        flex: 1;
        border-radius: 8px;
        border: 1px solid ${basis.border};
        margin: 12px;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          flex: 1;
          & :first-child {
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
          }
        `}
      >
        <UserChatItem>
          I want you to act as a UX/UI developer. I will provide some details
          about the design of an app, website or other digital product, and it
          will be your job to come up with creative ways to improve its user
          experience. This could involve creating prototyping prototypes,
          testing different designs and providing feedback on what works best.
          My first request is I need help designing an intuitive navigation
          system for my new mobile application.
        </UserChatItem>
        <SystemChatItem
          prepend={
            <img
              className={css`
                width: 28px;
                height: 28px;
              `}
              src={SystemAvatar}
              alt="System avatar"
            />
          }
        >
          As a pet behaviorist, I'm here to help you address the aggression
          issues with your German Shepherd. Aggression in dogs can have various
          underlying causes, and it's important to understand the root cause
          before implementing a behavior modification plan. Here are the steps
          we can take to help manage your dog's aggressions.
        </SystemChatItem>
        <SystemChatSelection />
      </div>
      <ChatInput />
    </div>
  );
};

export { Chat };
