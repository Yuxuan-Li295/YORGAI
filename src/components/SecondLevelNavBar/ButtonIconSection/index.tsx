import { css } from "@emotion/css";
import { ButtonIcon } from "./ButtonIcon";

import { ReactComponent as AIApplication } from 'resources/img/AIApplication.svg';
import { ReactComponent as ApplicationIcon } from 'resources/img/ApplicationIcon.svg';
import { ReactComponent as Bulb } from 'resources/img/Bulb.svg';
import { ReactComponent as Star } from 'resources/img/Star.svg';
import { ReactComponent as UserDouble } from 'resources/img/UserDouble.svg';

const ButtonIconSection = () => {
  const buttonClickHandler = (buttonName: string) => {
    console.log(`${buttonName} button clicked!`);
  };

  const buttons = [
    { Icon: UserDouble, label: "社区热门" },
    { Icon: ApplicationIcon, label: "在线应用" },
    { Icon: AIApplication, label: "AI应用大全" },
    { Icon: Bulb, label: "为你选应用" },
    { Icon: Star, label: "我的收藏" },
  ];

  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        width: 528px;
        justify-content: center;
      `}
    >
      {buttons.map(({ Icon, label }) => (
        <ButtonIcon
          Icon={Icon}
          label={label}
          onClick={() => buttonClickHandler(label)}
          key={label}
        />
      ))}
    </div>
  );
};

export { ButtonIconSection };
