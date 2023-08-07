import chatGPT from "resources/img/ChatGPT2x.png";
import { Button } from "components/shared/Button";

const ModelSelect = ({
  onClick,
  buttonText,
  active,
}: {
  onClick: () => void;
  buttonText: string;
  active?: boolean;
}) => {
  return (
    <Button onClick={onClick} variant="tertiary" active={active} size="sm">
      <img
        style={{
          width: "18px",
          height: "18px",
          objectFit: "cover",
          marginRight: "8px",
        }}
        src={chatGPT}
        alt="ChatGPT Icon"
      />
      {buttonText}
    </Button>
  );
};

export { ModelSelect };
