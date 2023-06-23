import { css } from "@emotion/css";
import { basis } from "components/constants/colors";

const SectionTitle = ({
  Icon,
  children,
  subTitle,
}: {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  children: string;
  subTitle?: string;
}) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
      `}
    >
      <Icon />
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          className={css`
            font-weight: 500;
            font-size: 20px;
            line-height: 30px;
            color: ${basis.text_loud};
          `}
        >
          {children}
        </div>
        <div
          className={css`
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: ${basis.text};
          `}
        >
          {subTitle}
        </div>
      </div>
    </div>
  );
};

export { SectionTitle };
