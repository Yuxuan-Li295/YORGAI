import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ReactComponent as AIApplication } from "resources/img/AIApplication.svg";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";
import { ReactComponent as Star } from "resources/img/Star.svg";
import { ReactComponent as UserDouble } from "resources/img/UserDouble.svg";
import { ButtonSection } from "./ButtonSection";
import { SearchBar } from "./SearchBar";

const PromptNavBarButtons = [
  // TODO: use context
  {
    icon: <UserDouble />,
    label: "社区热门",
    url: "/prompt/popular",
  },
  {
    icon: <AIApplication />,
    label: "提示词大全",
    url: "/prompt/text",
  },
  {
    icon: <MagicWand />,
    label: "提示词优化器",
    url: "/prompt/image",
  },
  {
    icon: <Star />,
    label: "我的收藏",
  },
];

const SecondaryNavBar = ({
  buttons,
}: {
  buttons: {
    icon: React.ReactElement;
    label: string;
    url?: string;
  }[];
}) => {
  return (
    <div
      className={css`
        box-sizing: border-box;
        background: ${basis.bg_subtle};
        border-bottom: 1px solid ${basis.border_subtle};
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 0 10px;
      `}
    >
      <div
        className={css`
          width: 251px;
          min-width: 251px;
        `}
      />
      <ButtonSection buttons={buttons} />
      <SearchBar />
    </div>
  );
};

export { PromptNavBarButtons, SecondaryNavBar };
