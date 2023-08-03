import { css } from '@emotion/css';
import React, { useState } from 'react';
import { primary } from "components/constants/colors";
import { Button } from 'components/shared/Button';
import { Radio } from 'components/shared/CheckBoxOrRadio';

interface RadioButtonProps {
  size: number;
  label: string[];
}

const RadioButton: React.FC<RadioButtonProps> = ({ size, label }) => {
  const [radioStates, setRadioStates] = useState(
    Array.from({ length: size }, (_, index) => index === 0)
  );
  const handleCheck = (index: number) => {
    const newRadioStates = radioStates.map((_, i) => i === index);
    setRadioStates(newRadioStates);
  };

  return (
    <div
    className={css`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    `}>
      {radioStates.map((isChecked, index) => (
        <Button
          key={index}
          style={{ flex: 1, justifyContent: 'flex-start', gap: '8px' }}
          variant='secondary'
          size='sm'
          prepend={
            <Radio
              colorPattern={primary}
              size='xs'
              checked={isChecked}
              onChange={() => handleCheck(index)}
            />
          }
        >
          {label[index]}
        </Button>
      ))}
    </div>
  );
};

export { RadioButton };