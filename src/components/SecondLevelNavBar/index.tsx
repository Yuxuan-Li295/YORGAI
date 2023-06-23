import { css } from '@emotion/css';
import { ButtonIconSection } from './ButtonIconSection';
import { SearchButton } from './SearchButton';
import { basisAlt, zincs } from 'components/constants/colors';

const SecondLevelNavBar = ({
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
        box-sizing: border-box;
        width: 1440px;
        height: 48px;
        left: 20px;
        top: 20px;
        background: ${zincs[25]};
        border-bottom: 1px solid ${basisAlt["border-subtle"]};
        display: flex;
        align-items: center;
        padding-left: 456px;
        gap: 195px;
      `}
    >
      <ButtonIconSection buttons={buttons} />
      <SearchButton />
    </div>
  );
};

export { SecondLevelNavBar };
