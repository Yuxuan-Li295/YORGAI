import { css } from '@emotion/css';
import React, { useState } from 'react';
import { primary } from "components/constants/colors";
import { Button } from 'components/shared/Button';
import { Radio } from 'components/shared/CheckBoxOrRadio';

const ConfigSideBarTone = () => {
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheck1 = () => {
    setIsChecked1(true);
    setIsChecked2(false);
  };

  const handleCheck2 = () => {
    setIsChecked1(false);
    setIsChecked2(true);
  };

  return (
    <div
      className={css`
      display: flex;
      align-items: flex-start;
      gap: 8px;
      align-self: stretch;
      `}
    >
      <Button
        style={{ width: "150px", justifyContent: 'flex-start', gap: '8px' }}
        variant='secondary'
        size='sm'
        prepend={
          <Radio
            colorPattern={primary}
            size='xs'
            checked={isChecked1}
            onChange={handleCheck1}
          />
        }>
        普通
      </Button>
      <Button
        style={{ width: "150px", justifyContent: 'flex-start', gap: '8px' }}
        variant='secondary'
        size='sm'
        prepend={
          <Radio
            colorPattern={primary}
            size='xs'
            checked={isChecked2}
            onChange={handleCheck2}
          />
        }>
        轻松
      </Button>
    </div>
  );
};

export { ConfigSideBarTone };