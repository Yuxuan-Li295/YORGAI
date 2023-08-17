import React from 'react';

export interface CollapseProps {
  collapseHeader: React.ReactElement;
  collapseBody: React.ReactElement;
  isShow: boolean;
  onToggle: () => void;
}

const Collapse = ({ collapseHeader, collapseBody, isShow, onToggle }: CollapseProps) => {
  return (
    <div>
      <div onClick={onToggle}>
        {collapseHeader}
      </div>
      {isShow && <div>{collapseBody}</div>}
    </div>
  );
};

export { Collapse };
