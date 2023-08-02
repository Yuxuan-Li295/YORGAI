import { css } from "@emotion/css";
import { basis } from "components/constants/colors";
import { ReactComponent as Lightbulb } from "resources/img/Lightbulb.svg";
import { ReactComponent as List } from "resources/img/List.svg";
import { ReactComponent as MagicWand } from "resources/img/MagicWand.svg";
import { ReactComponent as SquareS } from "resources/img/SquareS.svg";
import { ReactComponent as Star } from "resources/img/Star.svg";
import { ReactComponent as UserDouble } from "resources/img/UserDouble.svg";
import { ButtonSection } from "./ButtonSection";
import { SearchBar } from "components/shared/SearchBar";

const PromptNavBarButtons = [
  // TODO: use context
  // TODO: organize svg
  {
    icon: <UserDouble />,
    label: "社区热门",
    url: "/prompt/popular",
  },
  {
    icon: <List />,
    label: "提示词大全",
    url: "/prompt/text",
  },
  {
    icon: <MagicWand />,
    label: "提示词优化器",
    url: "/prompt/image",
  },
  {
    icon: (
      <Star
        className={css`
          width: 18px;
          height: 18px;
        `}
      />
    ),
    label: "我的收藏",
  },
];

const ToolNavBarButtons = [
  {
    icon: <UserDouble />,
    label: "社区热门",
    url: "/tool/popular",
  },
  {
    icon: <SquareS />,
    label: "在线应用",
    url: "/online-tool",
  },
  {
    icon: <List />,
    label: "AI 应用大全",
    url: "/tool",
  },
  {
    icon: (
      <Lightbulb
        className={css`
          width: 18px;
          height: 18px;
        `}
      />
    ),
    label: "为你选应用",
  },
  {
    icon: (
      <Star
        className={css`
          width: 18px;
          height: 18px;
        `}
      />
    ),
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
      <SearchBar width="251px" hasButton={true} buttonText="分享体验" />
    </div>
  );
};

export { PromptNavBarButtons, SecondaryNavBar, ToolNavBarButtons };
