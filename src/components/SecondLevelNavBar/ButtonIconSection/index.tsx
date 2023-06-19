import { css } from "@emotion/css";
import { ButtonIcon } from "./ButtonIcon";

import AIApplication from '../../../resources/img/AIApplication.svg';
import ApplicationIcon from '../../../resources/img/ApplicationIcon.svg';
import Bulb from '../../../resources/img/Bulb.svg';
import Star from '../../../resources/img/Star.svg';
import UserDouble from '../../../resources/img/UserDouble.svg';


const ButtonIconSection = () => {
  const buttonClickHandler = (buttonName: string) => {
    console.log(`${buttonName} button clicked!`);
  };

  const buttons = [
    { icon: UserDouble, label: "社区热门" },
    { icon: ApplicationIcon, label: "在线应用" },
    { icon: AIApplication, label: "AI应用大全", width: '98px' }, 
    { icon: Bulb, label: "为你选应用", width: '94px' },  
    { icon: Star, label: "我的收藏" },
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
        margin: 0 auto;  // 添加这一行可以让组件在水平方向上居中
      `}
    >
      {buttons.map(({ icon, label, width }) => (
        <ButtonIcon
          icon={icon}
          label={label}
          width = {width}
          onClick={() => buttonClickHandler(label)}
          key={label}
        />
      ))}
    </div>
  );
};


export { ButtonIconSection };
