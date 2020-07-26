import React, { FC } from 'react';
import styled from 'styled-components';

type TextProps = {
  children: React.ReactNode;
  isAlternative?: boolean;
};

const Text: FC<TextProps> = styled.p`
  margin: 0.5rem 0 0 0;
  color: ${(props: TextProps) => (props.isAlternative ? '#9d9e9e' : '#2b2b2b')};
`;

export default Text;
