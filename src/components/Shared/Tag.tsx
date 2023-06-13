import React from "react";
import styled from "styled-components";

// We define our styled component here
const StyledTag = styled.div`
  display: inline-block;
  background: #007bff;
  color: #fff;
  font-size: 0.875rem;
  padding: 2px 8px;
  border-radius: 2px;
  margin: 2px;
`;

interface TagProps {
  text: string;
}

// Our Tag component receives 'text' as a prop and renders it inside the StyledTag
const Tag: React.FC<TagProps> = ({ text }) => <StyledTag>{text}</StyledTag>;

export default Tag;
