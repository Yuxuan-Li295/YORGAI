import { css } from "@emotion/css";
import { ButtonIcon } from "./ButtonIcon";

const ButtonIconSection = ({
  buttons,
}: {
  buttons: {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    onClick: () => void;
  }[];
}) => {
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
      {buttons.map(({ Icon, label, onClick }) => (
        <ButtonIcon
          Icon={Icon}
          label={label}
          onClick={onClick}
          key={label}
        />
      ))}
    </div>
  );
};

export { ButtonIconSection };
