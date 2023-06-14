import React, { ReactNode } from "react";
import styled from "styled-components";
interface ButtonProps {
  icon: ReactNode;
  text: string;
}

const StyledButton = styled.button`
  background-color: #67cdbc;
  color: white;
  padding: 6px, 12px;
  border-radius: 6px;
  outline: 0;

  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px #67cdbc,
    0px 2px 5px -2px rgba(79, 81, 89, 0.03),
    0px 4px 4px -4px rgba(79, 81, 89, 0.32);

  &: hover {
    background-color: #57c4b1;
  }
`;
const ButtonText = styled.span`
  /* Pingfang SC/body/xs/500 - medium */
  font-family: "PingFang SC";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  /* identical to box height, or 133% */
  text-align: center;

  /* basis/text-foreground */
  color: #ffffff;
`;

const Button: React.FC<ButtonProps> = ({ icon, text }) => {
  return (
    <StyledButton className="button">
      <span className="button-icon">{icon}</span>
      <span className="button-text">{text}</span>
    </StyledButton>
  );
};

export default Button;

export {};
