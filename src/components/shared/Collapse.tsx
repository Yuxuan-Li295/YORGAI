import { ReactElement } from "react";

const Collapse = ({
  collapseHeader,
  collapseBody,
  expand,
  setExpand,
}: {
  collapseHeader: ReactElement;
  collapseBody: ReactElement;
  expand: boolean;
  setExpand: (expand: boolean) => void;
}) => {
  return (
    <div>
      <div onClick={() => setExpand(!expand)}>{collapseHeader}</div>
      {expand && <div>{collapseBody}</div>}
    </div>
  );
};

export { Collapse };
